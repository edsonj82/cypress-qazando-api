/// <reference types="cypress"/>

describe('Search devices', () => {
    it('search aspecific device', () => {

        const device_id = '7'
        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${device_id}`,
            failOnStatusCode: false
        }).as('getDeviceResult')
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
})