import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('LKSG Questionnaire A', () => {
  beforeEach(() => {
    cy.login(user.username, user.password);
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-1').click();
  });

  it('should save LKSG questionnaire A', () => {
    cy.dataCy('name').should('have.value', 'Mydevtest1 Company SE');
    cy.dataCy('supplierId').should('have.value', '100001');
    cy.dataCy('establishedCodeOfConduct').select('No');
    cy.dataCy('scopeOfSupplierChain').select("I don't know");
    cy.dataCy('name-input').clear().type('Agnes Arhin');
    cy.dataCy('email-input').clear().type('emailexample@gmail.com');
    cy.dataCy('phone-input').clear().type('0908763425');
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
