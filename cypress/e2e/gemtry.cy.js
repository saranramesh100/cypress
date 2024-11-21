describe('Amazon India Search', () => {
    it('Searches for iPhone and clicks the second result', () => {
      cy.visit('https://www.amazon.in/');
  
      // Find the search box and enter "iPhone"
      cy.get('#twotabsearchtextbox').type('iPhone{enter}');
  
      // Wait for the search results to load
      cy.wait(2000); // Adjust the wait time as needed
  
      // Click the second search result link
      cy.get('.s-result-item:nth-child(2) .a-link-normal').click();
  
      // Optional: Assert that the correct page is loaded
      cy.url().should('include', 'iphone')
    });
  });