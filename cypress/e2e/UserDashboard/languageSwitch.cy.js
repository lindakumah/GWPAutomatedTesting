import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('Language switch', () => {
  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it('tests language switch', () => {
    cy.dataCy('de').click();
    cy.dataCy('remove-session')
      .contains('Liste der Materialien')
      .should('exist');
    cy.dataCy('en').click();
    cy.dataCy('remove-session').contains('List of materials').should('exist');
  });
});
