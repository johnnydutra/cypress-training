/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("http://www.automationteststore.com/");
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.fixed_wrapper > div > a");
    });

    it("Click on the first item using item text", () => {
        cy.visit("http://www.automationteststore.com/");
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
    });

    it("Click on the first item using item index", () => {
        cy.visit("http://www.automationteststore.com/");
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
    });
});