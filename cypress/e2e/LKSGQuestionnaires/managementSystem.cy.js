import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('LKSG Questionnaire B', () => {
  beforeEach(() => {
    cy.loginWithSession(user.username, user.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-2').click();
    cy.get('.loading').should('not.exist');
  });

  it('should save LKSG questionnaire B', () => {
    cy.dataCy('select').eq(2).select('No');
    cy.dataCy('select').eq(3).select('No');
    cy.dataCy('select').eq(4).select('No');
    cy.dataCy('save').first().click({ force: true });
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data Successfully Saved.'
    );
  });

  it('should cancel LKSG questionnaire B', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
