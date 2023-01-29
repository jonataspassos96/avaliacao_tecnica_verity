/// <reference types='cypress' />

// **
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// **
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillField', (value, input) => {
    cy.get(input)
            .type(value)

    cy.get('button[data-testid="buttonElement"]')
        .click()
})

Cypress.Commands.add('unfilledField', () => {
    cy.get('button[data-testid="buttonElement"]')
        .click()
})

Cypress.Commands.add('fillInDescriptionField', (description = '') => {
    cy.get('textarea[placeholder="Nos conte o seu desafio"]')
        .type(description)
})

Cypress.Commands.add('isRequired', (element) => {
    cy.get(element)
        .invoke('prop', 'validationMessage')
        .should(text => expect('Preencha este campo.').to.eq(text))
})