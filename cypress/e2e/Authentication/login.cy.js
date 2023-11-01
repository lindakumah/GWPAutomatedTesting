import { loginData } from '../../fixtures/logincredentials';

const { admin, invalidCredentials } = loginData;

describe("User login", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should log in with valid credentials", () => {
      cy.dataCy('usernameOrEmail').type(admin.email);
      cy.dataCy('password').type(admin.password);
      cy.dataCy('login').click();
      cy.url().should("include", "/dashboard");
    });
  
  
    it("should display an error message for invalid credentials", () => {
      cy.dataCy('usernameOrEmail').type(invalidCredentials.email);
      cy.dataCy('password').type(invalidCredentials.password);
      cy.dataCy('login').click(); 
      cy.get("#notistack-snackbar").should("be.visible").and("have.text", "Username/email or password is invalid");
    });

    it.skip("should login with unverified email")

    
  });