describe('webtable', () => {
    //   webtable
    it('web table value passes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($cells) => {

            // string  paritial compare using contain
            if ($cells.text().includes('JMETER')) {
                cy.wrap($cells).then((expectedcourse) => {
                    const name = expectedcourse.text()
                    expect(name).to.contain('JMETER')
                })
            }

            // next cell number compare with data type change
            if ($cells.text().includes('JMETER')) {
                cy.wrap($cells).next().then((ecp) => {
                    const name = ecp.text()
                    expect(Number(name)).to.eq(25)
                })
            }
            
            // previous cell string full value compare
            if ($cells.text().includes('JMETER')) {
                cy.wrap($cells).prev().then((expectedcourse) => {
                    const name = expectedcourse.text()
                    expect(name).to.eq('Rahul Shetty')
                })
            }
        })



    })
})