class LoginPage {
    // Elements
    get usernameInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#pass'); }
    get loginButton() { return cy.get('.form-login .actions-toolbar .primary#send2'); }

    // Actions
    open(loginUrl) {
        cy.visit(loginUrl);
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export default new LoginPage();
