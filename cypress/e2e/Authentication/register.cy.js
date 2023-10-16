const timestamp = Date.now(); 
const usernameWithTimestamp = `username${timestamp}`;
const emailWithTimestamp = `user${timestamp}@example.com`;

describe("Register Page", () => {
    beforeEach(() => {
      // Visit the register page or set the URL to your register page
      cy.visit("/register");
    });
  
    it("should register successfully", () => {
      cy.dataCy('companyId').type('41101');
      cy.dataCy('name').type('Linda CypressAutomation');
      cy.dataCy('username').type(usernameWithTimestamp);
      cy.dataCy('email').type(emailWithTimestamp);
      cy.dataCy('password').type('autopass@123');
      cy.dataCy('confirmPassword').type('autopass@123');
      cy.dataCy('register').click();
      cy.get("#notistack-snackbar").should("be.visible"); 
      cy.get("#notistack-snackbar").should("contain", "Thank you for registering. Please check your email for a link to verify your account");
    });

    it("checks for Company ID", () => {
      cy.dataCy('companyId').type('11111');
      cy.dataCy('name').type('Linda CypressAutomation');
      cy.dataCy('username').type(usernameWithTimestamp);
      cy.dataCy('email').type(emailWithTimestamp);
      cy.dataCy('password').type('autopass@123');
      cy.dataCy('confirmPassword').type('autopass@123');
      cy.dataCy('register').click();
      cy.get("#notistack-snackbar").should("be.visible"); 
      cy.get("#notistack-snackbar").should("contain", "The Company ID is invalid");
    });

  });