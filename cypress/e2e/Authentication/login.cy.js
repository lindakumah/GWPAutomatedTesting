import { loginData } from '../../fixtures/logincredentials';

const { admin, invalidCredentials } = loginData;

describe("Login Page", () => {
    beforeEach(() => {
      // Visit the login page or set the URL to your login page
      cy.visit("/");
    });
  
    it("should log in with valid credentials", () => {
      // Fill in the username and password fields
      cy.dataCy('usernameOrEmail').type(admin.email);
      cy.dataCy('password').type(admin.password);
      cy.dataCy('login').click();
      cy.url().should("include", "/dashboard");
    });
  
  
    it("should display an error message for invalid credentials", () => {
      // Fill in invalid credentials
      cy.dataCy('usernameOrEmail').type(invalidCredentials.email);
      cy.dataCy('password').type(invalidCredentials.password);
      cy.dataCy('login').click();
      cy.get("#notistack-snackbar").should("be.visible"); 
      cy.get("#notistack-snackbar").should("contain", "Username/email or password is invalid");
    });
  });