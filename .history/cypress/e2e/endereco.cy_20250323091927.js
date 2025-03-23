const perfil = require('../fixtures/perfil.json')
import  endereco  from "../support/page-objects/endereco.page";
const enderecoDados = require('../fixtures/enderecos.json')
describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)//Fazendo login com comandos customizados
    });
    it('Editar endereçao de faturameto', () => {
        endereco.editarEnderecoFaturamento(enderecoDados.forEach(callbackfn: (value: {
            nome: string;
            sobrenome: string;
            empresa: string;
            endereco: string;
            numero: string;
            pais: string;
            cidade: string;
            estado: string;
            cep: string;
            telefone: string;
            email: string;
        })))//'João', 'Algusto', 'Itau unibanco'
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});