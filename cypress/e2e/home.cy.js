/// <reference types='cypress' />

describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve ser exbido o título Nossas soluções_', () => {
        cy.contains('span', 'Somos Verity')
            .should('have.text', 'Somos Verity')

        cy.get('#comp-kwv1stru > p > span > span > span:nth-child(2) > span > span > span')
            .should('have.text', '_')
    })

    it('Deve ser exbido o título Nossos clientes_', () => {
        cy.contains('span', 'Nossos clientes')
            .should('have.text', 'Nossos clientes')

        cy.get('#comp-kwv3f13i > h1 > span > span:nth-child(2)')
            .should('have.text', '_')
    })
})