describe("Forgot Password Page", () => {
    beforeEach(() => {
      // Visit the reset password page or set the URL to your register page
      cy.visit("/begin-password-recovery");
    });
  
    it("should send email for password reset", () => {
      cy.get('[data-cy=email]').type(emailWithTimestamp);
      cy.get('[data-cy=forgot-password]').click();
      //cy.get("#error-message").should("be.visible"); 
      //cy.get("#error-message").should("contain", "Username/email or password is invalid");
    });

  });