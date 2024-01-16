// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy="${value}"]`);
});

Cypress.Commands.add('enterUsernameAndPassword', (email, password) => {
  cy.visit('/');
  cy.dataCy('usernameOrEmail').type(email);
  cy.dataCy('password').type(password);
  cy.dataCy('login').click();
});

const login = (email, password, user = true) => {
  cy.intercept('POST', '/api/auth/login').as('login');
  cy.intercept('GET', '/api/supplier/contact-profile').as('profile');
  cy.intercept('GET', '/api/admin/dashboard/total-data').as('totalData');
  cy.intercept('GET', '/api/admin/dashboard/partslist-precomputed').as(
    'partialList1'
  );
  cy.intercept('GET', '/api/admin/dashboard/partslist').as('partialList2');
  cy.intercept('GET', '/api/admin/dashboard/materials-overview').as(
    'materialsOverview'
  );
  cy.intercept('GET', '/api/supplier/materials/questionnaires/overview').as(
    'questionnaireOverview'
  );
  cy.enterUsernameAndPassword(email, password);
  cy.wait('@login');
  cy.waitForLoader();
  user
    ? cy.wait(['@profile', '@questionnaireOverview'])
    : cy.wait([
        '@profile',
        '@totalData',
        '@partialList1',
        '@partialList2',
        '@materialsOverview',
      ]);
};

Cypress.Commands.add('login', login);

Cypress.Commands.add('loginWithSession', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/');
    cy.dataCy('usernameOrEmail').type(email);
    cy.dataCy('password').type(password);
    cy.dataCy('login').click({ force: true });
  });
});

Cypress.Commands.add('waitForLoader', () => {
  cy.get('#loader-container ', { timeout: 100000 }).should('not.exist');
});

Cypress.Commands.add('waitForPartslistsLoader', () => {
  cy.get('h2[role="loading"]', { timeout: 100_000 }).should('not.exist');
});
