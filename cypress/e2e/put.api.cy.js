/// <reference types="cypress"/>

// TODO: INCLUIR TODOS OS CENÁRIOS DE TESTES POSSÍVEIS
describe('UPDATE', () => {

    it('Update a device', () => {

        const body = {
            "name": "QAzando Mobile Phone",
            "data": {
                "year": 2024,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        const body_update = {
            "name": "QAzando Mobile Phone UPDATE",
            "data": {
                "year": 2020,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Xpto Ltda"
            }
        }

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body.name)

            cy.request({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            cy.get('@putDeviceResult').then((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal(body_update.name)

                // expect(response.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)

            })

        })

    });
})