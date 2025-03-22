/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });

    it('Não preencher campos obrigatórios', () => {
        cy.contains('editar sua senha e detalhes da conta').click()
    });


});