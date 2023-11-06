import { loginData } from '../../fixtures/logincredentials';

const { lksgCredentials } = loginData;

describe('Login Page', () => {
  beforeEach(() => {
    cy.loginWithSession(lksgCredentials.username, lksgCredentials.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.url().should('include', '/supply-chain');
    cy.dataCy('tab-2').click();
    cy.get('.loading').should('not.exist');
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('save').first().click({ force: true });
    cy.get('#notistack-snackbar').should('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire A', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.url().should('include', '/supply-chain');
  });
});
