// <reference types="cypress" />

context('Funcionalidade de login', () =>{

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste@teste.com')
    });

    it('Deve exibir um erro', () => {
         
    });
});