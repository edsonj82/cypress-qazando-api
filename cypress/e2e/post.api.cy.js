/// <reference types="cypress"/>


// TODO: INCLUIR TODOS OS CENÁRIOS DE TESTES POSSÍVEIS
describe('POST', () => {
    it('Register a device', () => {

        const currentDate = new Date().toISOString().slice(0, 10)
        const currentHour = new Date().toISOString().slice(12, 16)

        const body = {
            "name": "QAzando Mobile Phone",
            "data": {
                "year": 2024,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.name).equal('QAzando Mobile Phone')
            expect(response.body.createdAt).not.empty
            // console.log('TEST: ', response.body.data.year)
            expect(response.body.createdAt.slice(0,16)).to.equal(new Date().toISOString().slice(0,16))
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
})

