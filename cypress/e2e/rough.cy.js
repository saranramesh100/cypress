describe('sauce Website Automation', () => {
    it('test data passes', () => {
      cy.visit(Cypress.env('test').url)
     
    });
  });
  