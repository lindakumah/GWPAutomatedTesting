import { loginData } from '../../fixtures/logincredentials';

const { superAdmin } = loginData;
const timestamp = Date.now();
const companyIDWithTimestamp = `101${timestamp}`;
const companyNameWithTimestamp = `Company${timestamp} SE`;
const emailWithTimestamp = `user${timestamp}@example.com`;

describe('Create a new customer', () => {
  beforeEach(() => {
    cy.enterUsernameAndPassword(superAdmin.username, superAdmin.password);
  });

  it('should create a new customer and save', () => {
    cy.intercept('POST', '/customer/create').as('createCustomer');
    cy.dataCy('createCustomer').click();
    cy.dataCy('company-id').type(companyIDWithTimestamp);
    cy.dataCy('company-name').type(companyNameWithTimestamp);
    cy.dataCy('central-email').type(emailWithTimestamp);
    cy.contains('Add new administrator').click();
    cy.dataCy('admin-name').type('Hello Admin');
    cy.dataCy('admin-email').type(emailWithTimestamp);
    cy.dataCy('save').click();
    cy.wait('@createCustomer');
    cy.get('.snack-container').should(
      'contain',
      'Customer successfully created'
    );
  });
});
