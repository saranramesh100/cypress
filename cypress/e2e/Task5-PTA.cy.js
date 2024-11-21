describe('PTA Task', () => {
  let tdata;
  before(()=>{
    cy.fixture('ptatestdata').then((testdata)=>{
      tdata=testdata;
    })
  })

    it('Positive testcase-1 passes', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.get('input#username').type(tdata.username)
        cy.get('input#password').type(tdata.password)
        cy.get('button#submit').click()
        // cy.url().should('include',tdata.urlcontain)
        // cy.get('.post-title').should('have.text',tdata.pagecontain)
      
     
      
    })
  })