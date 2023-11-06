import { loginData } from '../../fixtures/logincredentials';

const { lksgCredentials } = loginData;

describe('LKSG Questionnaire D', () => {
  beforeEach(() => {
    cy.loginWithSession(lksgCredentials.username, lksgCredentials.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-4').click();
  });

  it('should save LKSG questionnaire D', () => {
    cy.dataCy('select').eq(10).select('No');
    cy.dataCy('select').eq(11).select('No');
    cy.dataCy('select').eq(12).select('No');
    cy.dataCy('save').first().click({ force: true });
    cy.get('#notistack-snackbar').should('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire D', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
