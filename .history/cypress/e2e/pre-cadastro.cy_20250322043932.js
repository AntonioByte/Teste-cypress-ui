/// <reference types="cypress" />
const { Faker, fakerPT_BR } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it.skip('Não preencher campos obrigatórios', () => {

        preencherPreFormulario()
        cy.get('[data-id="account_first_name"]').should('contain', 'Nome é um campo obrigatório.')
        cy.get('[data-id="account_last_name"]').should('contain', 'Sobrenome é um campo obrigatório.')
    });

    it('Realizar Pré Cadastro', () => {
        let nome = fakerPT_BR.person.firstName()
        let sobrenome = fakerPT_BR.person.lastName()
        preencherPreFormulario(nome, sobrenome)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });


});

function preencherPreFormulario(nome , sobrenome ) {
    cy.get('#reg_email').type(fakerPT_BR.internet.email(nome))
    cy.get('#reg_password').type('H5YcXGhnhSYWU2w')
    cy.get('[name="register"]').click()
    cy.contains('editar sua senha e detalhes da conta').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    
}