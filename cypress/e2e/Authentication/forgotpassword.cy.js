describe('Forgot Password Page', () => {
  it('should send email for password reset', () => {
    cy.visit('/');
    cy.dataCy('to-forgot-password').click();
    cy.dataCy('email').type(`user${new Date().getTime()}@example.com`);
    cy.dataCy('forgot-password').click();
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('have.text', 'Email sent');
  });
});
