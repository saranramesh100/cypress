describe('Alert', () => {
    it('passes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // alret
        // cy.get('#alertbtn').click()
        // cy.on('window : alert', (alttext) => {
        //     expect(alttext).to.be.eq('Hello , share this practice page and share your knowledge')
        //     return true;

            // confirm

            cy.get('#confirmbtn').click()
            cy.on('window : confirm', (alttexts) => {
                expect(alttexts).to.be.eq('Hello , Are you sure you want to confirm?')
                return false;
                

            }
            )


        }
        )


    })
// })