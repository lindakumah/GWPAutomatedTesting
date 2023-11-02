import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe("Login Page", () => {
    before(() => {
      cy.visit("/");
    });
  
    it("should save a reach questionnaire", () => {
      cy.login(admin.email, admin.password);
      cy.url().should("include", "/dashboard");
      cy.get('[data-cy=remove-session]').contains('List of materials').click();
      cy.get('[data-cy=to-reach-questionnaire]').first().click();
      cy.get('[data-cy=cancel]').click();
      cy.url().should("include", "/materials");
      cy.get('[data-cy=to-reach-questionnaire]').first().click();
      cy.get('[data-cy=save]').click();
      cy.url().should("include", "/materials");
      cy.get("#notistack-snackbar").should("be.visible").and("contain", "Data Successfully Saved");
    });
  

  });