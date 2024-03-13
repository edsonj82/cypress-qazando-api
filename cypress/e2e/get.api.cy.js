/// <reference types="cypress"/>

describe('Search devices', () => {
    it('search aspecific device', () => {
        cy.request({
            method: 'GET',
            url:'https://api.restful-api.dev/objects/7',
            failOnStatusCode: false
        })
    });
})