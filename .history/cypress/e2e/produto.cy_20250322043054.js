

describe('Página de Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it.skip('Selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()//Pega o primeiro item da lista
            //.last()//Pega o ultimo item da lista
            .eq(3)//Pega o produto pelo indice, o quarto produto
            .click()
    });

    it('Adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
        cy.get(':nth-child(1) > .value > .variable-items-wrapper li').first().click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper li').last().click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('[class="woocommerce-message"]').contains('” foram adicionados no seu carrinho.')

        //cy.get('.product_title').invoke('text') +
    });
});