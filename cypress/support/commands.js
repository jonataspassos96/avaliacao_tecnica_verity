/// <reference types='cypress' />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
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

Cypress.Commands.add('fillInNameField', (name = '') => {
    cy.visit('/contato')

    cy.get('button[data-testid="buttonElement"]')
        .as('submitButton')

    if(name !== '') {
        cy.get('input[name="nome"]')
            .type(name)
    } else {
        cy.get('@submitButton')
            .click()
    }
})

Cypress.Commands.add('fillInEmailField', (email = '') => {
    cy.visit('/contato')

    if(email !== '') {
        cy.get('input[type="email"]')
            .type(email)
     } else {
        cy.get('@submitButton')
            .click()
    }
})

Cypress.Commands.add('fillInFoneField', (fone = '') => {
    cy.visit('/contato')

    if(fone !== '') {
        cy.get('input[type="tel"]')
            .type(fone)
    } else {
        cy.get('@submitButton')
            .click()
    }
})

Cypress.Commands.add('fillInDescriptionField', (description = '') => {
    cy.visit('/contato')

    cy.get('textarea[placeholder="Nos conte o seu desafio"]')
        .type(description)
})

Cypress.Commands.add('isRequired', (element) => {
    cy.get(element)
        .invoke('prop', 'validationMessage')
        .should(text => expect('Preencha este campo.').to.eq(text))
})