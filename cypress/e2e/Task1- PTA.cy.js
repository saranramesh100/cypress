describe('login page', ()=>{
    
    it('test case 1',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
        cy.get('.post-title').should('have.text','Logged In Successfully')
        cy.get('[class*="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').should('be.visible')


    })
    it.skip('test case 2',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('incorrectusername')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.wait(5000)
        cy.get('div#error').should('be.visible')
        cy.get('div#error').should('have.text','Your username is invalid!')

    })
    it('test case 3', ()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password')
        cy.get('button#submit').click()
        cy.wait(5000)
        cy.get('div#error').should('be.visible')
        cy.get('div#error').should('have.text','Your password is invalid!')
        
        
 })
})