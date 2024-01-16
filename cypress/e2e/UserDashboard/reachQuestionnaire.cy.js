import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('REACH Questionnaire', () => {
  beforeEach(() => {
    cy.login(user.email, user.password);
    cy.dataCy('remove-session').contains('List of materials').click();
    cy.dataCy('to-reach-questionnaire').first().click();
  });

  it.only('should fill and save a reach questionnaire', () => {
    cy.dataCy('reach-version').select('07/2019');
    cy.dataCy('material-type').select('Manufactured item');
    cy.dataCy('annexRegulation').click();
    cy.contains('Material is NOT subject').click();
    cy.dataCy('handle-add-row').click();
    cy.dataCy('material')
      .last()
      .type('Zirconium aluminosilicate ceramic fibres, refractory');
    cy.dataCy('CAS-number').last().type('-');
    cy.dataCy('EG-number').last().type('-');
    cy.dataCy('declareSVHC-input').click({ force: true });
    cy.dataCy('processingStatus').select('Completed');
    cy.dataCy('save').click();
    cy.location('pathname').should('eq', '/materials');
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data Successfully Saved.'
    );
  });

  it('should test the cancel button for a reach questionnaire', () => {
    cy.dataCy('cancel').click();
    cy.url().should('include', '/materials');
  });
});
