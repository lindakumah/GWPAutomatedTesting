import { loginData } from '../../fixtures/logincredentials';
// import {login}

// const { admin, invalidCredentials } = loginData;
const { admin } = loginData;

describe("Login Page", () => {
    beforeEach(() => {
      // Visit the login page or set the URL to your login page
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
      cy.get("#notistack-snackbar").should("be.visible"); 
      cy.get("#notistack-snackbar").should("contain", "Data Successfully Saved");
    });
  

  });