import { loginData } from '../../fixtures/logincredentials';

const { admin, invalidCredentials, unverifiedCredentials } = loginData;

describe('User login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should log in with valid credentials', () => {
    cy.login(admin.email, admin.password);
    cy.url().should('include', '/dashboard');
  });

  it('should display an error message for invalid credentials', () => {
    cy.login(invalidCredentials.email, invalidCredentials.password);
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('have.text', 'Username/email or password is invalid');
  });

  it('should login with unverified email', () => {
    cy.login(unverifiedCredentials.email, unverifiedCredentials.password);
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and(
        'have.text',
        'Your registration is not yet verified. Please confirm it by clicking on the link in the email. Please also check your spam folder.'
      );
  });
});
