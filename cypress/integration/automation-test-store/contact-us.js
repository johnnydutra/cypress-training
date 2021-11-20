/// <reference types="Cypress" />

describe("Test Contact Us Form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit("http://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(clickedLink) {
            cy.log(`Clicked on the ${clickedLink.text()} link`);
        });
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get("#ContactUsFrm_first_name").type("Testy");
        cy.get("#ContactUsFrm_email").type("testy.mctester@mailsac.com");
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
        cy.get("#ContactUsFrm_enquiry").type("Test automation with Cypress");
        cy.get("button[title='Submit']").click();
        cy.get(".mb40 > p:nth-child(3)").should("have.text", "Your enquiry has been successfully sent to the store owner!");
    });
});