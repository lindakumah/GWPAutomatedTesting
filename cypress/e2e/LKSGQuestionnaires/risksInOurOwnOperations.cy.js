import { loginData } from '../../fixtures/logincredentials';

const { lksgLogin } = loginData;

describe('LKSG Questionnaire C', () => {
  beforeEach(() => {
    cy.login(lksgLogin.email, lksgLogin.password);
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-3').click();
  });

  it('should save LKSG questionnaire C', () => {
    cy.dataCy('ChakraSelectComponent').eq(3).select('Yes');
    cy.dataCy('ChakraSelectComponent').eq(4).select('Yes');
    cy.dataCy('ChakraSelectComponent').eq(5).select('No');
    cy.dataCy('ChakraSelectComponent').eq(6).select('No');
    cy.dataCy('ChakraSelectComponent').eq(7).select('No');
    cy.dataCy('save').first().click({ force: true });
    cy.get('.snack-container').should('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire C', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
