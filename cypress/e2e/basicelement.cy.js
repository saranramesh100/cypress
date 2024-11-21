describe('basic elements', () => {

  // radio button
  it('radio button passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[value="radio2"]').check().should('be.checked')
  })

  // check box --- use common data for check box -like type
  it('check box passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('label [type="checkbox"]').check(['option2', 'option3']).should('be.checked')
  })

  // static drop-down
  it('static drop down passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('option3').should('have.value', "option3")
  })

  // Dyanmic drop down
  it('dyanic drop down passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[class="inputs ui-autocomplete-input"]').type('sou')
    cy.get('.ui-menu-item').each(($country) => {

      // if($country.text().includes('Africa')){
      //   cy.wrap($country).click()

      if ($country.text() === 'South Africa') {
        cy.wrap($country).click()
      }
    })

    // multiple tab handling
    it('multiple tab handling passes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('fieldset a#opentab').invoke('removeAttr', 'target').click()
      cy.origin('https://www.qaclickacademy.com/', () => {
        cy.get('a[href="https://www.qaclickacademy.com/blog"]').click()

        // Navigation
  
          cy.go('back')
          cy.go('forward')
          cy.reload()
          cy.go('back')


        })
      })
    })
  })
