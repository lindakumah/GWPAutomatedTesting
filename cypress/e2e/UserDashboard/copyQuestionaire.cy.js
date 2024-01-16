import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('Copy questionnaire data', () => {
  beforeEach(() => {
    cy.login(user.email, user.password);
    //cy.url().should('include', '/dashboard');
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
    // cy.dataCy('checkbox-reach').siblings().first().click({ force: true }); //Copy attached files
    // cy.dataCy('checkbox-rohs').siblings().first().click({ force: true });
    // cy.dataCy('checkbox-fils').siblings().first().click({ force: true });
    cy.dataCy('save-btn').click();
    cy.dataCy('save').click();
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data copied successfully'
    );
  });
});
