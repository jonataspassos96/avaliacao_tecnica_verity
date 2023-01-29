/// <reference types='cypress' />

describe('Contato', () => {
    let person

    before(() => {
        cy.fixture('person').then(p => person = p)
    })

    beforeEach(() => {
        cy.visit('/contato')
    })

    const inputName = 'input[name="nome"]'
    const inputEmail = 'input[type="email"]'
    const inputTel = 'input[type="tel"]'

    context('Sucesso', () => {
        it('Deve preencher o formulário corretamente', () => {
            cy.fillField(person.name, inputName)
            cy.fillField(person.email, inputEmail)
            cy.fillField(person.fone, inputTel)
            cy.fillInDescriptionField(person.description)

            cy.get('input[data-testid="input"]')
                .click()

            cy.get('button[data-testid="buttonElement"]')
                .click()

            cy.contains('span', 'Obrigado!')
                .should('have.text', 'Obrigado!')
        })
    })

    context('Erro', () => {
        it('Não deve preencher os campos do formulário', () => {
            cy.unfilledField()
            cy.isRequired(inputName)
            cy.fillField(person.name, inputName)

            cy.unfilledField()
            cy.isRequired(inputEmail)
            cy.fillField(person.email, inputEmail)

            cy.unfilledField()
            cy.fillInDescriptionField(inputTel)
            cy.fillField(person.fone, inputTel)

            cy.get('button[data-testid="buttonElement"]')
                .click()

            cy.get('input[data-testid="input"]')
                .invoke('prop', 'validationMessage')
                .should(text => expect('Marque esta caixa se deseja continuar.').to.eq(text))
        })
    })
})