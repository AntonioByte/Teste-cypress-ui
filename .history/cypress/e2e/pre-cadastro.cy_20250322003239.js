/// <reference types="cypress" />
var faker = require('faker');
describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });

    it('Não preencher campos obrigatórios', () => {
        cy.get('#reg_email').type(faker.)
        cy.get('#reg_password').type('H5YcXGhnhSYWU2w')
        cy.get('[name="register"]').click()
        cy.contains('editar sua senha e detalhes da conta').click()
        cy.get('.woocommerce-Button').click()
        cy.get('[data-id="account_first_name"]').should('contain', 'Nome é um campo obrigatório.')
        cy.get('[data-id="account_last_name"]').should('contain', 'Sobrenome é um campo obrigatório.')
    });


});