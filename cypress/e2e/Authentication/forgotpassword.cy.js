describe("Forgot Password Page", () => {
    beforeEach(() => {
      // Visit the reset password page or set the URL to your register page
      cy.visit("/begin-password-recovery");
    });
  
    it("should send email for password reset", () => {
      const emailWithTimestamp = `user${timestamp}@example.com`;
      cy.dataCy('email').type(emailWithTimestamp);
      cy.dataCy('forgot-password').click();
      cy.get("#notistack-snackbar").should("be.visible"); 
      cy.get("#notistack-snackbar").should("contain", "Email sent");
    })
  });