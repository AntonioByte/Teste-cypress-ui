const perfil = require('../fixtures/perfil.json')
import { Endereco } from "../support/page-objects/endereço.page";
describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)//Fazendo login com comandos customizados
    });
    it('Editar endereçao de faturameto', () => {
        editarEnderecoFaturamento()
    });
});