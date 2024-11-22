describe('PTA Task', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  let cred;
  before(()=>{
    cy.fixture('swagdata').then((testdata)=>{
      cred=testdata;
    })
  })
   beforeEach(()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')

   })

    it('Positive testcase-1 passes', () => {
      cy.get('input#username').type(cred.positive.username)
        cy.get('input#password').type(cred.positive.password)
        cy.get('button#submit').click()
        cy.get('[class*="wp-block-button_"]').should('be.visible').click()
        
        
      
    })
    it('Positive testcase-1 passes', () => {
      cy.get('input#username').type(cred.negative1.username)
        cy.get('input#password').type(cred.negative1.password)
        cy.get('button#submit').click()
        cy.get('section #error').should('have.text','Your username is invalid!')
          
    })
    it('Positive testcase-1 passes', () => {
      cy.get('input#username').type(cred.negative2.username)
        cy.get('input#password').type(cred.negative2.password)
        cy.get('button#submit').click()
        cy.get('section #error').should('have.text','Your password is invalid!')
         
    })
  })