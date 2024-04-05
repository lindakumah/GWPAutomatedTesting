import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('List of partslists', () => {
  beforeEach(() => {
    cy.login(admin.email, admin.password, false);
    cy.dataCy('remove-session').contains('List of Parts Lists').click();
    cy.waitForPartslistsLoader();
    cy.dataCy('set-partlists-details-tab').eq(1).click();
    cy.waitForPartslistsLoader();
  });

  it('should fill and save a reach questionnaire', () => {
    cy.dataCy('to-reach-questionnaire').first().click();
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
    cy.location('pathname').should('contain', '/partsLists');
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data Successfully Saved.'
    );
  });

  it.skip('should fill and save a rohs questionnaire', () => {
    cy.dataCy('rohs-questionnaire').first().click();
    cy.dataCy('rohs-version').select('RoHS II - 07/2019');
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
    cy.location('pathname').should('contain', '/partsLists');
    cy.get('#notistack-snackbar').should(
      'have.text',
      'Data Successfully Saved.'
    );
  });
});
