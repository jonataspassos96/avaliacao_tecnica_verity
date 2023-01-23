/// <reference types='cypress' />

describe('Contato', () => {
    let person

    before(() => {
        cy.fixture('person').then(p => person = p)
    })

    beforeEach(() => {
        cy.visit('/contato')
    })

    context('Sucesso', () => {
        it('Deve preencher o formulário corretamente', () => {
            cy.fillInNameField(person.name)
            cy.fillInEmailField(person.email)
            cy.fillInFoneField(person.fone)
            cy.fillInDescriptionField(person.description)

            cy.get('input[data-testid="input"]')
                .click()

            //cy.get('button[data-testid="buttonElement"]')
            //    .click()
        })
    })

    context('Erro', () => {
        it('Não deve preencher os campos do formulário', () => {
            cy.fillInNameField()
            cy.isRequired('input[name="nome"]')
            cy.fillInNameField(person.name)

            cy.fillInEmailField()
            cy.isRequired('input[type="email"]')
            cy.fillInEmailField(person.email)

            cy.fillInFoneField()
            cy.fillInDescriptionField('input[type="tel"]')
            cy.fillInFoneField(person.fone)

            cy.get('button[data-testid="buttonElement"]')
                .click()

            cy.get('input[data-testid="input"]')
                .invoke('prop', 'validationMessage')
                .should(text => expect('Marque esta caixa se deseja continuar.').to.eq(text))
        })
    })
})