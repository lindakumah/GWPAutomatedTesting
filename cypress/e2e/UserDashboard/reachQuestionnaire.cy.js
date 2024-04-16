import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('REACH Questionnaire', () => {
  beforeEach(() => {
    cy.login(user.email, user.password);
    cy.dataCy('remove-session').contains('List of materials').click();
    cy.dataCy('to-reach-questionnaire').first().click();
  });

  it('should fill and save a reach questionnaire', () => {
    cy.dataCy('checkbox').click();
    cy.dataCy('reach-version').select('No. 1907/2006  upd. 05/2023');
    cy.dataCy('material-type').select('Manufactured item');
    cy.dataCy('annexRegulation').click();
    cy.contains('Material is NOT subject').click();
    cy.dataCy('material').last().clear().type('Barium');
    cy.dataCy('handle-select').contains('Barium').click();
    cy.dataCy('scip-number').type('123456789');
    cy.dataCy('test-area').type('123456789');
    cy.dataCy('processingStatus').select('Completed');
    cy.dataCy('save').click({ force: true });
    cy.location('pathname').should('contain', '/materials');
    cy.get('.snack-container').should('have.text', 'Data Successfully Saved.');
  });

  it('should test the cancel button for a reach questionnaire', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/materials');
  });
});
