describe('sauce Website Automation', () => {
    it('test data passes', () => {
      cy.visit(Cypress.env('test').url)
      cy.get('[name="user-name"]').type(Cypress.env('test').username)
      cy.get('[name="password"]').type(Cypress.env('test').password)
      cy.get('[class="btn_action"]').click()

     
    });
  });
  