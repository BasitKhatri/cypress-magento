class ProductPage {
    constructor() {
        // Initialize your Page Object data here
        this.data = {
            itemsInCart: 0,
            processedItems: 0,
        };
    }

    // Methods to interact with the page go here
    visitProductPage(url) {
        cy.visit(url);
    }

    addToCart() {
        cy.get('.product-info-main  .product-add-form .box-tocart .actions #product-addtocart-button').click()
    }

    isItemAdded(){
        cy.wait(1500)
        cy.get('.page.messages').should("be.visible")


    }

    // Other methods and actions specific to the page
}

// Export the Page Object instance
export default new ProductPage();
