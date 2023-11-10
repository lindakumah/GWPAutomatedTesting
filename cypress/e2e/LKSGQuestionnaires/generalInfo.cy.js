import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('LKSG Questionnaire A', () => {
  beforeEach(() => {
    cy.loginWithSession(user.username, user.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-1').click();
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('name').should('have.value', 'Newtest Company SE');
    cy.dataCy('supplierId').should('have.value', '2226669');
    cy.dataCy('select').first().select('No');
    cy.dataCy('select').eq(1).select("I don't know");
    cy.dataCy('input').first().clear().type('Agnes Arhin');
    cy.dataCy('input').eq(1).clear().type('emailexample@gmail.com');
    cy.dataCy('input').eq(2).clear().type('0908763425');
    cy.dataCy('save').first().click();
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data Successfully Saved.'
    );
  });

  it('should cancel LKSG questionnaire A', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
