describe("Login Page", () => {
    beforeEach(() => {
      // Visit the login page or set the URL to your login page
      cy.visit("/");
    });
  
    it("should log in with valid credentials", () => {
      // Fill in the username and password fields
      cy.get('[data-cy=usernameOrEmail]').type('linda.kumah@amalitech.com');
      cy.get('[data-cy=password]').type('heypassword$');
      cy.get('[data-cy=login]').click();
      cy.url().should("include", "/dashboard");
    });
  
  
    it("should display an error message for invalid credentials", () => {
      // Fill in invalid credentials
      cy.get('[data-cy=usernameOrEmail]').type('linda.kumah@amalitech.com');
      cy.get('[data-cy=password]').type('wrongpassword');
      cy.get('[data-cy=login]').click();
    //   cy.get("#error-message").should("be.visible"); 
    //   cy.get("#error-message").should("contain", "Username/email or password is invalid");
    });
  });