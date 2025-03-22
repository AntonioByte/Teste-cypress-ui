/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });

    it('Não preencher campos obrigatórios', () => {
        cy.get('#reg_email').type('joaocastro@email.com')
        cy.get('#reg_password').type('H5YcXGhnhSYWU2w')
        cy.get('[name="register"]').click()
        cy.contains('editar sua senha e detalhes da conta').click()
        cy.get('.woocommerce-Button').click()
    });


});