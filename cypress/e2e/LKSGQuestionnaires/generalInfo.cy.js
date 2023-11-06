import { loginData } from '../../fixtures/logincredentials';

const { lksgCredentials } = loginData;

describe('Login Page', () => {
  beforeEach(() => {
    cy.loginWithSession(lksgCredentials.username, lksgCredentials.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.url().should('include', '/supply-chain');
    cy.dataCy('tab-1').click();
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('name').should('have.value', 'Newtest3 Company SE');
    cy.dataCy('supplierId').should('have.value', '2226671');
    cy.dataCy('save').first().click();
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire A', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.url().should('include', '/supply-chain');
  });
});
