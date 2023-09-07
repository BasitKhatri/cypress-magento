class LoginPage {
    // Elements
    get usernameInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#pass'); }
    get loginButton() { return cy.get('.form-login .actions-toolbar .primary#send2'); }

    // Actions
    open() {
        cy.visit('/customer/account/login');
    }

    login(username, password) {
        cy.visit('/customer/account/login')
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    logout(){
        cy.visit('/customer/account/logout')
    }
}

export default new LoginPage();
