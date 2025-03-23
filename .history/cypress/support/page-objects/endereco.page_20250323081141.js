class EnderecoPage {
    
    editarEnderecoFaturamento(nome, sobreNome, nomeEmpresa, pais, endereco, numero, cidade, estado, telefone, email) {
        cy.contains('Endereços').click()
        cy.contains('Edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobreNome)
        cy.get('#billing_company').clear().type(nomeEmpresa)
        cy.get('#select2-billing_country-container').type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado{enter})
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()


    }

    editarEnderecoEntrega(){

    }
}

export default new EnderecoPage()