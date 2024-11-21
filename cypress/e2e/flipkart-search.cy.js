describe('flipkart search', () => {
    it('passes', () => {
      cy.visit('www.flipkart.com')
      cy.get('.Pke_EE').click().type('toys{enter}')
      cy.get('body.fs-site-flipkart:nth-child(2) div.nt6sNV.JxFEK3._48O0EI div.DOjaWF.YJG4Cf:nth-child(1) div.DOjaWF.gdgoEp:nth-child(2) div.cPHDOP.col-12-12:nth-child(2) div._75nlfW div:nth-child(2) div.slAVV4 a.DMMoT0 div.hl05eU > div.Nx9bqj').click();
    })
})