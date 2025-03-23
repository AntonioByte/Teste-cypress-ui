class EndereçoPage {
    
    editarEnderecoFaturamento(nome, sobreNome, nomeEmpresa) {
        cy.contains('Endereços').click()
        cy.contains('Edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobreNome)
        cy.get('#billing_company').clear().type(nomeEmpresa)
        cy.get('#select2-billing_country-container').type('Brasil')


    }

    editarEnderecoEntrega(){

    }
}

export default new EnderecoPage()