describe('web element', () => {
  it(' iframe passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //   iframe
    cy.frameLoaded('[id="courses-iframe"]')
    cy.iframe().find('[href="mentorship"]').eq(0).click()
    cy.go('back')
  })

  // mouseover
  it('mouse over passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[id="mousehover"]').invoke('show')
    cy.contains('Reload').click({ force: true })
    cy.contains('Top').click({ force: true })
    cy.url().should('include', '#top')
  })
  // hide,show
  it('Hide,show passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[id="displayed-text"]').should('be.visible')
    cy.get('[id="hide-textbox"]').click()
    cy.get('[id="displayed-text"]').should('not.be.visible')






  })
})