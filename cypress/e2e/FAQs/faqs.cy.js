import { loginData } from '../../fixtures/logincredentials';

const { user } = loginData;

describe('FAQs Page', () => {
  beforeEach(() => {
    cy.loginWithSession(user.email, user.password);
    cy.visit('/dashboard');
    cy.dataCy('remove-session').contains('FAQs').click();
    cy.location('pathname').should('eq', '/faqs');
  });

  it('should verify the link in question six', () => {
    cy.dataCy('question6').click();
    cy.get('a')
      .contains('European Chemicals Agency (ECHA).')
      .should(
        'have.attr',
        'href',
        'https://echa.europa.eu/de/support/getting-started/am-i-exempt'
      );
  });

  it('should verify the three links in question seven', () => {
    cy.dataCy('question7').click();
    cy.get('a')
      .contains('The Candidate List of Substances')
      .should(
        'have.attr',
        'href',
        'https://echa.europa.eu/en/candidate-list-table'
      );
    cy.get('a')
      .contains('The authorisation list')
      .should(
        'have.attr',
        'href',
        'https://echa.europa.eu/en/authorisation-list'
      );
    cy.get('a')
      .contains('The substances that are restricted under REACH')
      .should(
        'have.attr',
        'href',
        'https://echa.europa.eu/en/substances-restricted-under-reach'
      );
  });
  it('should verify the link in question ten', () => {
    cy.dataCy('question10').click();
    cy.get('a')
      .contains('Candidate')
      .should(
        'have.attr',
        'href',
        'https://echa.europa.eu/en/candidate-list-table'
      );
  });
  it('should verify the link in question eleven', () => {
    cy.dataCy('question11').click();
    cy.get('a')
      .contains('Restriction of Hazardous Substances')
      .should(
        'have.attr',
        'href',
        'https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065&qid=1661270286027&from=EN'
      );
  });
});
