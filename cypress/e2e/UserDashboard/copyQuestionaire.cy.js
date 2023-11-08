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
    cy.get('tbody > tr').first().find('td').last().realHover();
    cy.dataCy('copy').first().click();
    cy.get('h2[role="loading"]', { timeout: 50000 }).should('not.exist');
    cy.get('input[type=checkbox]').eq(2).click({ force: true });
    //cy.get('input[type=checkbox]').eq(2).click();
    cy.get('span')
      .contains('Copy REACH data')
      .siblings()
      .first()
      .click({ force: true }); //Copy attached files
    cy.get('span')
      .contains('Copy attached files')
      .siblings()
      .first()
      .click({ force: true });
    cy.dataCy('save').click();
    cy.dataCy('save').eq(1).click();
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data copied successfully'
    );
  });

  it.skip('should test the cancel button for a reach questionnaire', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/materials');
  });
});
