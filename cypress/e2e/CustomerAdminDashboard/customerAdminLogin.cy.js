import { loginData } from '../../fixtures/logincredentials';

const { superAdmin, invalidSuperAdmin } = loginData;

describe('Super Admin login', () => {
  it('should log in as a super admin', () => {
    cy.enterUsernameAndPassword(superAdmin.username, superAdmin.password);
    cy.get('h1').should('contain.text', 'Customers');
  });

  it('should display an error message for invalid credentials', () => {
    cy.enterUsernameAndPassword(
      invalidSuperAdmin.username,
      invalidSuperAdmin.password
    );
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('have.text', 'Username/email or password is invalid');
  });
});
