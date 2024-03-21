/// <reference types="cypress"/>

// TODO: INCLUIR TODOS OS CENÁRIOS DE TESTES POSSÍVEIS
describe('DELETE', () => {

    it.only('Delete a device', () => {

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

        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
             console.log(response_post.body.id)

            // cy.request({
            //     method: 'DELETE',
            //     url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
            //     failOnStatusCode: false
            // }).as('deleteDeviceResult')

            // cy.get('@deleteDeviceResult').then((response) => {
            cy.deleteDevice(response_post.body.id).then((response) => {
                console.log('response= ' + response)
                console.log('erro_status= ' + response.status)
                expect(response.status).equal(200)
                expect(response.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
            })
        })
    });
})