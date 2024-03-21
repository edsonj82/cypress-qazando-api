/// <reference types="cypress"/>


// TODO: INCLUIR TODOS OS CENÁRIOS DE TESTES POSSÍVEIS
describe('POST', () => {
    const paylod_register_device = require('../fixtures/register_device_success.json')

    it('Register a device', () => {

        const currentDate = new Date().toISOString().slice(0, 10)
        const currentHour = new Date().toISOString().slice(12, 16)

        // const body = {
        //     "name": "QAzando Mobile Phone",
        //     "data": {
        //         "year": 2024,
        //         "price": 1849.99,
        //         "CPU model": "Intel Core i9",
        //         "Hard disk size": "1 TB"
        //     }
        // }

        // cy.registerDevice(body)
        cy.registerDevice(paylod_register_device)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.name).equal('QAzando Mobile Phone')
                expect(response.body.createdAt).not.empty
                // console.log('TEST: ', response.body.data.year)
                expect(response.body.createdAt.slice(0, 16)).to.equal(new Date().toISOString().slice(0, 16))
                expect(response.body.data.year).not.string
                expect(response.body.data.year).to.equal(2024)
                expect(response.body.data.price).not.string
                expect(response.body.data.price).to.equal(1849.99)
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['CPU model']).to.equal('Intel Core i9')
                expect(response.body.data['Hard disk size']).not.empty
                expect(response.body.data['Hard disk size']).to.equal('1 TB')
                //DATE
                expect(response.body.createdAt.slice(0, 10)).equal(currentDate)
                //HOUR
                expect(response.body.createdAt.slice(12, 16)).equal(currentHour)
            })
    })

    it('Register a device without data', () => {

        cy.registerDevice('').then((response) => {
            expect(response.status).equal(400)
            expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
        })
    })
})

