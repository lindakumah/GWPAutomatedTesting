import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(user.email, user.password);
    cy.url().should('include', '/dashboard');
    cy.dataCy('remove-session').contains('List of materials').click();
  });

  it('should copy questionnaire data to other materials', () => {
    cy.get('h2[role="loading"]', { timeout: 50000 }).should('not.exist');
    cy.get('tbody > tr > td').first().realHover();
    cy.dataCy('edit').first().click();
    cy.dataCy('ID').clear().type('123456');
    cy.dataCy('description').clear().type('A new material description');
    cy.get('button').contains('Save Changes').click();
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Material data updated successfully'
    );
  });

  it.skip('should test the cancel button for a reach questionnaire', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/materials');
  });
});
