import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('Parts lists evaluations', () => {
  beforeEach(() => {
    cy.enterUsernameAndPassword(admin.email, admin.password);
    cy.dataCy('remove-session').contains('List of Suppliers').click();
    cy.dataCy('getSidebarActiveTab')
      .contains('Siemens AG Industry Sector')
      .click();
  });

  it('saves changes on Supplier Administration', () => {
    cy.dataCy('supplierAdminSendMailInviteBtn').click();
    cy.dataCy('supplierAdminRegId').should('have.value', 'DF741BF763');
    cy.dataCy('supplierAdminName').should(
      'have.value',
      'Siemens AG Industry Sector'
    );
    cy.dataCy('supplierAdminEmail').should(
      'have.value',
      'mall.industry@siemens.com'
    );
    cy.dataCy('supplierAdminEmail').should(
      'have.value',
      'mall.industry@siemens.com'
    );
  });

  it.skip('send invitation to registered logins', () => {
    cy.dataCy('supplierAdminSendMailInviteBtn').click();
    cy.dataCy('supplierAdminRegisLogins').click();
  });
});
