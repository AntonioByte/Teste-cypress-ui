

describe('Página de Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
           // .first()//Pega o primeiro item da lista
           //.last()//Pega o ultimo item da lista
           .eq(3)//Pega o produto pelo indice, o quarto produto
           .click()
    });
});