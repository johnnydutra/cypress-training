/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get("#contact-us").click({force: true});
        cy.get("[name='first_name']").type("Testy");
        cy.get("[name='last_name']").type("McTester");
        cy.get("[name='email']").type("testy.mctester@mailsac.com");
        cy.get('textarea.feedback-input').type("Cypress Training");
        cy.get('[type="submit"]').click();
    });

    it("Should not be able to submit a successful submission via Contact Us form as fields are required", () => {
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("[name='first_name']").type("Testy");
        cy.get("[name='last_name']").type("McTester");
        cy.get('textarea.feedback-input').type("Cypress Training");
        cy.get('[type="submit"]').click();
    });
});