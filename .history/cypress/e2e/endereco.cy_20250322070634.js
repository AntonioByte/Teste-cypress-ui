const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)//Fazendo login com comandos customizados
    });
    it('', () => {
        cy.contains('Endereços').click()
    });
});