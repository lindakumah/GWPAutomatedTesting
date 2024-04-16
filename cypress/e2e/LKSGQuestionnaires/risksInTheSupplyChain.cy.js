import { loginData } from '../../fixtures/logincredentials';

const { lksgLogin } = loginData;

describe('LKSG Questionnaire D', () => {
  beforeEach(() => {
    cy.login(lksgLogin.email, lksgLogin.password);
    cy.dataCy('remove-session').contains('Supply Chain').click();
    cy.location('pathname').should('eq', '/supply-chain');
    cy.dataCy('tab-4').click();
  });

  it('should save LKSG questionnaire D', () => {
    cy.dataCy('questionOneDropDown').select('No');
    cy.dataCy('questionTwoDropDown').select('No');
    cy.dataCy('questionThreeDropDown').select('No');
    cy.dataCy('save').first().click({ force: true });
    cy.get('.snack-container').should('contain', 'Data Successfully Saved');
  });

  it('should cancel LKSG questionnaire D', () => {
    cy.dataCy('cancel').first().click({ force: true });
    cy.location('pathname').should('eq', '/supply-chain');
  });
});
