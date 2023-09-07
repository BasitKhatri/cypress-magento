import checkout from "../../../support/PageObjects/Checkout";

const basicTest = require('../../../fixtures/data.json')
import LoginPage from '../../../support/PageObjects/LoginPage';
import Product from "../../../support/PageObjects/Product";
import CheckoutPage from "../../../support/PageObjects/Checkout";

describe('Place Order for Login User - Simple Product', () => {

    beforeEach(function () {
        cy.fixture('data').then(function (testdata) {
            this.data = testdata
        })

    })


    it('Order Place for Login User', function () {

        LoginPage.logout()
        LoginPage.login(this.data.email, this.data.password);
        cy.visit(this.data.simpleProductUrl);
        Product.addToCart();
        Product.isItemAdded()
        CheckoutPage.initialize()
        CheckoutPage.adressShouldSelected()
        CheckoutPage.selectFirstShippingMethod()
        CheckoutPage.proceedToPayment()
        cy.wait(2000)
        CheckoutPage.selectPaymentMethod()


    })
})

