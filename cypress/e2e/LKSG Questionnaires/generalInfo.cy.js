import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe("Login Page", () => {
    before(() => {
      cy.visit("/");
    });
  
    it("should access LKSG questionnaire", () => {
      cy.login(admin.email, admin.password);
      cy.url().should("include", "/dashboard");
      cy.get('[data-cy=remove-session]').contains('Supply Chain').click();
      cy.url().should("include", "/supply-chain");
     });
    it("should access LKSG questionnaire A", () => {  
      cy.get('[data-cy=tab-1]').click();
    });
    it("should cancel LKSG questionnaire A", () => { 
      cy.get('[data-cy=cancel]').click();
      cy.url().should("include", "/supply-chain");
    });
    it("should save LKSG questionnaire A", () => { 
      cy.get('[data-cy=tab-1]').first().click();
      cy.get('[data-cy=save]').click();
      cy.get("#notistack-snackbar").should("be.visible").and("contain", "Data Successfully Saved");
    });
  

  });