import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('List of suppliers', () => {
  beforeEach(() => {
    cy.login(admin.email, admin.password, false);
    cy.dataCy('remove-session').contains('List of Suppliers').click();
    cy.dataCy('getSidebarActiveTab').first().click();
  });

  it('admin should fill and save a reach questionnaire', () => {
    cy.dataCy('to-reach-questionnaire').first().click();
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
    cy.location('pathname').should('contain', '/suppliers');
    cy.get('.snack-container').should('have.text', 'Data Successfully Saved.');
  });

  it('admin should fill and save a rohs questionnaire', () => {
    cy.dataCy('rohs-questionnaire').first().click();
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
    cy.location('pathname').should('contain', '/suppliers');
    cy.get('.snack-container').should('have.text', 'Data Successfully Saved.');
  });
});
