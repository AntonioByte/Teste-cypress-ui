// <reference types="cypress" />

context('Funcionalidade de login', () =>{

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve exibir um erro', () => {
        
    });
});