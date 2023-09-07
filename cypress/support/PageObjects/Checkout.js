class CheckoutPage {

    initialize(){
        cy.visit("/checkout")
    }

    adressShouldSelected(){
        cy.get('.shipping-address-item.selected-item').should("exist")
    }

    selectFirstShippingMethod(){
        cy.get('.table-checkout-shipping-method input.radio').first().check()
    }

    proceedToPayment(){
        cy.wait(1500)
        cy.get('#shipping-method-buttons-container .button.button.action.continue.primary').click()
    }

    selectPaymentMethod(){
        cy.get('.payment-methods #checkmo').should('exist').then(($el)=>{
            if($el.length == 0 ){
                throw new Error("Check / Money order is required to place Order")
            }else{
                cy.get('.payment-methods #checkmo').check()
                cy.wait(2000)
                cy.get('.payment-method._active  .action.primary').should('be.visible').click({force: true})
                cy.wait(9000)
                cy.visit('/checkout/onepage/success/')

                
            }
        })
    }


}

// Export the Page Object instance
export default new CheckoutPage();
