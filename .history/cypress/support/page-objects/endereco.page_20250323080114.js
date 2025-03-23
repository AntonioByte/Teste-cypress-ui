class EnderecoPage {
    
    editarEnderecoFaturamento() {//nome, sobreNome, nomeEmpresa
        cy.contains('Endereços').click()
        cy.contains('Edit').click()
        cy.get('#billing_first_name').clear().type('nome')
        cy.get('#billing_last_name').clear().type('sobreNome')
        cy.get('#billing_company').clear().type('nomeEmpresa')
        cy.get('#select2-billing_country-container').type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('endereco')
        cy.get('#billing_address_2').clear().type('numero')
        cy.get('#billing_city').clear().type('Salvador')
        cy.get('#select2-billing_state-container').clear().type('Bahia{enter}')
        cy.get('#billing_postcode').clear().type('41338180')
        cy.get('#billing_email').clear().type('email@email.com')


    }

    editarEnderecoEntrega(){

    }
}

export default new EnderecoPage()