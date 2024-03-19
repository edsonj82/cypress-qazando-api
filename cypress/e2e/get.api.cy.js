/// <reference types="cypress"/>


// TODO: INCLUIR TODOS OS CENÁRIOS DE TESTES POSSÍVEIS 
describe('GET', () => {
    it('search a specific device', () => {

        const device_id = '7'
        cy.searchDevice(device_id).as('getDeviceResult')

        cy.get('@getDeviceResult')
            .then((response) => {
                // console.log('STATUS CODE', response.status)
                expect(response.body).not.empty
                expect(response.status).equal(200)
                expect(response.body.id).equal(String(device_id))
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body.data).not.empty
                expect(response.body.data.year).not.string
                expect(response.body.data.price).equal(1849.99)
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['CPU model']).equal('Intel Core i9')
                expect(response.body.data['Hard disk size']).not.empty
                expect(response.body.data['Hard disk size']).equal('1 TB')
            })
    });

    it('devices was not found', () => {

        const device_id = 'xpto'

        cy.searchDevice(device_id)
            .then((response) => {
                // console.log('STATUS CODE', response.status)
                expect(response.status).equal(404)
                expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)

            })
    });
})