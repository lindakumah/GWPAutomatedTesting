import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('Login Page', () => {
  beforeEach(() => {
    cy.loginWithSession(admin.email, admin.password);
    cy.visit('/dashboard');
  });

  it('should access LKSG questionnaire', () => {
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.url().should('include', '/supply-chain');
  });

  it('should access LKSG questionnaire A', () => {
    cy.visit('/dashboard');
    cy.dataCy('tab-1').click();
  });

  it('should cancel LKSG questionnaire A', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/supply-chain');
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('tab-1').first().click();
    cy.dataCy('save').click();
    cy.get('#notistack-snackbar')
      .should('be.visible')
      .and('contain', 'Data Successfully Saved');
  });
});
