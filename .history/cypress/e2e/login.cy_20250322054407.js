/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
//const baseurl
context('Funcionalidade de login', () =>{

    beforeEach(() => {
        cy.visit('/minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    
    it.skip('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.usuario)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });

    it('Deve exibir um erro', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    });
});