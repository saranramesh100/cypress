describe('flipkart search',()=>{

    it ('validate testcase 1',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('.Pke_EE').type('mobiles{enter}')
        cy.get('[class="SDsN9S"] [title="SAMSUNG"] input').check({force: true})
        cy.get('[class="tUxRFH"] [class="KzDlHZ"]').eq(0).invoke('text').should('include','SAMSUNG Galaxy')
       
       
})
})