/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Realizar login com sucesso', () => {

        realizarCadastro(perfil.usuario, perfil.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });

    it('Exibir um erro de login', () => {

        realizarCadastro(perfil.usuario, 'teste@teste')
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    });

    it('Realizar login com sucesso usando fixture', () => {
       
        cy.fixture("perfil").then(dados => {
            realizarCadastro(dados.usuario, dados.senha)
        })
    });
}); 

function realizarCadastro(usuario, senha) {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
}