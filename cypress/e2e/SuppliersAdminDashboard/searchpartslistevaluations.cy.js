import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('Parts lists evaluations', () => {
  beforeEach(() => {
    cy.enterUsernameAndPassword(admin.email, admin.password);
    cy.dataCy('remove-session').contains('Evaluations').click();
  });

  it('show evaluations for REACH', () => {
    cy.dataCy('search').type('62124511F');
    cy.dataCy('select-partlists')
      .contains('62124511F Tenplease, we have some partlists to be uploaded!')
      .click();
    cy.contains('No. of REACH Questionnaires').should('be.visible');
  });

  it('show evaluations for RoHS', () => {
    cy.dataCy('search').type('62124511F');
    cy.dataCy('select-partlists')
      .contains('62124511F Tenplease, we have some partlists to be uploaded!')
      .click();
    cy.dataCy('rohs').click();
    cy.contains('No. of RoHS Questionnaires').should('be.visible');
  });
});
