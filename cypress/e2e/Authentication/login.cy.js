import { loginData } from '../../fixtures/logincredentials';

const { user, invalidCredentials, unverifiedCredentials } = loginData;

describe('User login', () => {
  it('should log in with valid credentials', () => {
    cy.login(user.email, user.password);
    cy.dataCy('title').should('have.text', 'Dashboard');
  });

  it('should display an error message for invalid credentials', () => {
    cy.enterUsernameAndPassword(
      invalidCredentials.email,
      invalidCredentials.password
    );
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('have.text', 'Username/email or password is invalid');
  });

  it('should login with unverified email', () => {
    cy.enterUsernameAndPassword(
      unverifiedCredentials.email,
      unverifiedCredentials.password
    );
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and(
        'have.text',
        'Your registration is not yet verified. Please confirm it by clicking on the link in the email. Please also check your spam folder.'
      );
  });
});
