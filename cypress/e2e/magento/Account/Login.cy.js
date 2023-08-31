const basicTest = require('../../../fixtures/data.json')
import LoginPage from '../../../support/PageObjects/LoginPage';


describe('Login Cases', () => {

    beforeEach(function () {
        cy.fixture('data').then(function (testdata) {
            this.data = testdata
        })

    })


    it('Login Success Case normal', function () {


        console.log("visiting  Login page")
        cy.visit('/customer/account/login');
        cy.wait(200)
        cy.get('#email').type(this.data.email)
        cy.get('#pass').type(this.data.password)
        cy.get('.form-login .actions-toolbar .primary#send2').click()
        cy.visit('/customer/account')
        cy.wait(1500).contains("Contact Information")
        // expect(true).to.equal(true)

    })

    it('Login Success Case with using model', function ()  {

        LoginPage.open();
        LoginPage.login(this.data.email, this.data.password);
        cy.visit('/customer/account')
        cy.wait(1000).contains("Contact Information")
        // Add assertions or further actions as needed

    });

    it('Login fail case invalid credentials', function () {
        LoginPage.open();
        LoginPage.login("test@mail.com", 'invalidcredentails');
        cy.wait(2500)
        cy.get('.message-error.error.message').should('be.visible');
        // cy.get('.message-error.error.message').should("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")

    })
})

