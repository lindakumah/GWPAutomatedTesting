import { loginData } from '../../fixtures/logincredentials';

const { admin } = loginData;

describe('Supplier Administration', () => {
  beforeEach(() => {
    cy.enterUsernameAndPassword(admin.email, admin.password);
    cy.dataCy('remove-session').contains('List of Suppliers').click();
    cy.dataCy('getSidebarActiveTab')
      .contains('Siemens AG Industry Sector')
      .click();
  });

  it('saves changes on Supplier Administration', () => {
    cy.intercept('GET', '/admin/supplier/68/supplier-data').as(
      'getSupplierAdministration'
    );
    cy.dataCy('supplierAdminSendMailInviteBtn').click();
    cy.wait('@getSupplierAdministration');
    //cy.dataCy('supplierAdminRegId').should('have.text', 'DF741BF763');
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
