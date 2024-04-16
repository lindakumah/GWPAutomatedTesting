import { loginData } from '../../fixtures/logincredentials';

const { lksgLogin } = loginData;

describe('LKSG Questionnaire B', () => {
  beforeEach(() => {
    cy.login(lksgLogin.email, lksgLogin.password);
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-2').click();
    cy.get('.loading').should('not.exist');
  });

  it('should save LKSG questionnaire B', () => {
    cy.dataCy('ChakraSelectComponent').first().select('No');
    cy.dataCy('input').first().type('95');
    cy.dataCy('ChakraSelectComponent').eq(1).select('No');
    cy.dataCy('ChakraSelectComponent').eq(2).select('Yes', { force: true });
    cy.dataCy('save').first().click({ force: true });
    cy.get('.snack-container').should('have.text', 'Data Successfully Saved.');
  });

  it('should cancel LKSG questionnaire B', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
