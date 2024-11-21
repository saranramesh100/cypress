describe('firsttest', () => {
    it('passes', () => {
      cy.visit('https://ticketnew.com/movies')
      cy.get('[href*="/movies/chennai"]').eq(0).click()
      // cy.get('[value="Tamil"]').check().should('be.checked')

      cy.get('a[href*="/movies/kanguva-movie-detail-161682"]').eq(1).click()
      cy.get('[value="Tamil-index"]').check({force: true}).should('be.checked')
      cy.get('button[class="Button_btn___t8GZ Button_is-primary__Z7vVN Button_is-large__GjSIq LanguageSelectionDialog_applyBtn__2frJM"]').click()
      cy.get('[href*="/movies/kanguva-movie-detail-161682?frmtid=xb_xni_n5&fromdate=2024-11-20"]').click()
      cy.get('[class="MovieSessionsListingDesktop_details__Aq3st"] a:nth-child(1)').eq(0).click()
      
      
      
    })
  })