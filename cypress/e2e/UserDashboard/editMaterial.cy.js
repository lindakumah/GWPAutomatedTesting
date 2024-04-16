import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('Edit material data', () => {
  beforeEach(() => {
    cy.login(user.email, user.password);
    cy.dataCy('remove-session').contains('List of materials').click();
    cy.get('h2[role="loading"]', { timeout: 50000 }).should('not.exist');
    cy.get('tbody > tr > td').first().realHover();
    cy.dataCy('edit').first().click();
  });

  it('should edit questionnaire material numbar and description', () => {
    cy.dataCy('ID').clear().type('123456');
    cy.dataCy('description').clear().type('A new material description');
    cy.get('button').contains('Save Changes').click();
    cy.get('.snack-container').should(
      'have.text',
      'Material data updated successfully'
    );
  });
});
