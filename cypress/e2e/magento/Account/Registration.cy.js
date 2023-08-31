const basicTest = require('../../../fixtures/data.json')
import LoginPage from '../../../support/PageObjects/LoginPage';
import faker from 'faker'; // or your chosen library


describe('Registration', () => {

    beforeEach(function () {
        cy.fixture('data').then(function (testdata) {
            this.data = testdata
        })

    })


    it('Registration Page', function () {
        const name = faker.name.findName()
        const password = this.data.password;
        const email  = faker.lorem.word() + this.data.domain;
        cy.log(email);
        cy.visit('/customer/account/create');
        cy.get('.form-create-account #firstname').type(name);
        cy.get('.form-create-account #lastname').type(name);
        cy.get('.form-create-account #email_address').type(email);
        cy.get('.form-create-account #password').type(password);
        cy.get('.form-create-account #password-confirmation').type(password);
        cy.get('.form-create-account .actions-toolbar  .action.submit.primary').click();
        cy.get('.message-success.success.message').should('be.visible');

        // confirm the email from admin
        // @todo Lazy Load Icon




    })
})

