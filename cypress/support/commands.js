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

const login = (email, password) => {
  cy.visit('/');
  cy.dataCy('usernameOrEmail').type(email);
  cy.dataCy('password').type(password);
  cy.dataCy('login').click();
};

Cypress.Commands.add('login', login);

Cypress.Commands.add('loginWithSession', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/');
    cy.dataCy('usernameOrEmail').type(email);
    cy.dataCy('password').type(password);
    cy.dataCy('login').click({ force: true });
    cy.url().should('include', '/dashboard');
  });
});

Cypress.Commands.add('waitForLoader', () => {
  cy.get('#loader-container', { timeout: 100000 }).should('not.exist');
});
