describe("Register Page", () => {
    beforeEach(() => {
      // Visit the register page or set the URL to your register page
      cy.visit("/register");
    });
  
    it("should log in with valid credentials", () => {

      const timestamp = Date.now(); 
      const usernameWithTimestamp = `username${timestamp}`;
      const emailWithTimestamp = `user${timestamp}@example.com`;
      // Fill in all fields
      cy.get('[data-cy=companyId]').type('41101');
      cy.get('[data-cy=name]').type('Linda CypressAutomation');
      cy.get('[data-cy=username]').type(usernameWithTimestamp);
      cy.get('[data-cy=email]').type(emailWithTimestamp);
      cy.get('[data-cy=password]').type('autopass@123');
      cy.get('[data-cy=confirmPassword]').type('autopass@123');
      cy.get('[data-cy=register]').click();
      //cy.get("#error-message").should("be.visible"); 
      //cy.get("#error-message").should("contain", "Username/email or password is invalid");
    });

  });