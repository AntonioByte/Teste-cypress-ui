/// <reference types="cypress" />
const { Faker, fakerPT_BR } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Não preencher campos obrigatórios', () => {

        preencherPreFormulario()
        cy.get('[data-id="account_first_name"]').should('contain', 'Nome é um campo obrigatório.')
        cy.get('[data-id="account_last_name"]').should('contain', 'Sobrenome é um campo obrigatório.')
    });


});

function preencherPreFormulario({nome} , {sobrenome} ) {
    cy.get('#reg_email').type(fakerPT_BR.internet.email())
    cy.get('#reg_password').type('H5YcXGhnhSYWU2w')
    cy.get('[name="register"]').click()
    cy.contains('editar sua senha e detalhes da conta').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_first_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
}