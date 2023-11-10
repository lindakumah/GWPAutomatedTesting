import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(user.email, user.password);
    cy.url().should('include', '/dashboard');
    cy.dataCy('remove-session').contains('List of materials').click();
    cy.dataCy('to-reach-questionnaire').first().click();
  });

  it('should fill and save a reach questionnaire', () => {
    // cy.dataCy('checkbox').then((checkbox) => {
    //   checkbox[0].defaultChecked === false
    //     ? cy.dataCy('checkbox').dblclick()
    //     : null;
    // });
    cy.dataCy('reach-version').select('07/2019');
    cy.dataCy('material-type').select('Manufactured item');
    cy.dataCy('annexRegulation').select(
      'Material is subject to a restriction under Annex XVII of the REACH Regulation'
    );
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