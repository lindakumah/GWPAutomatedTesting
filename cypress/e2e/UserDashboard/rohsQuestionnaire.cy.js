import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('RoHS Questionnaire', () => {
  beforeEach(() => {
    cy.login(user.email, user.password);
    cy.dataCy('remove-session').contains('List of materials').click();
    cy.dataCy('rohs-questionnaire').eq(1).click();
  });

  it('should fill and save a rohs questionnaire', () => {
    cy.dataCy('rohs-version').select('RoHS III - 2011/65/EU');
    cy.dataCy('rohs-declaration').select(
      'RoHS compliant with declarable substances through exemptions'
    );
    cy.dataCy('add-input-field').click();
    cy.dataCy('fabric').last().type('Dibutyl phthalate (DBP)');
    cy.dataCy('device-class').select('IT and telecommunications equipment');
    cy.dataCy('add-input').click();
    cy.dataCy('exception')
      .last()
      .type('Mercury in single-ended fluorescent lamps < 30 W: < 2.5 mg');
    cy.dataCy('save').click();
    cy.location('pathname').should('contain', '/materials');
    cy.get('.snack-container').should('have.text', 'Data Successfully Saved.');
  });

  it('should test the cancel button for a RoHS  questionnaire', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/materials');
  });
});
