

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
        cy.get('.single_add_to_cart_button').click()
    });
});