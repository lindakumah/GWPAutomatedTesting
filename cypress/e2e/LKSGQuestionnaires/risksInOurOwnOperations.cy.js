import { loginData } from '../../fixtures/logincredentials';

const { lksgCredentials } = loginData;

describe('LKSG Questionnaire C', () => {
  beforeEach(() => {
    cy.loginWithSession(lksgCredentials.username, lksgCredentials.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-3').click();
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('select').eq(5).select('No');
    cy.dataCy('select').eq(6).select('No');
    cy.dataCy('select').eq(7).select('No');
    cy.dataCy('select').eq(8).select('No');
    cy.dataCy('select').eq(9).select('No');
    cy.dataCy('save').first().click({ force: true });
    cy.get('#notistack-snackbar').should('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire C', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
