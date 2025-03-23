const perfil = require('../fixtures/perfil.json')
import { fakerPT_BR } from "@faker-js/faker";
import  endereco  from "../support/page-objects/endereco.page";
const enderecoDados = require('../fixtures/enderecos.json')
describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)//Fazendo login com comandos customizados
    });
    it('Editar endereçao de faturameto', () => {
       
        endereco.editarEnderecoFaturamento(
            enderecoDados[1].nome, 
            enderecoDados[1].sobrenome,
            enderecoDados[1].empresa,
            enderecoDados[1].pais,
            enderecoDados[1].endereco,
            enderecoDados[1].numero,
            enderecoDados[1].cidade,
            enderecoDados[1].estado,
            enderecoDados[1].cep,
            enderecoDados[1].telefone,
            enderecoDados[1].email
        
        )//Verificar como pegar o valores sem passar todos os campos
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});