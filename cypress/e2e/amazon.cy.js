describe('amazon search', () => {
  it('passes', () => {
    cy.visit('www.amazon.in')
    cy.get('#twotabsearchtextbox').type('white shirt for men')
    cy.get('#nav-search-submit-button').click();
    cy.get('div[data-asin="B07DMZQTNQ"]').click()
  })
})