// it('my first test', () => {
//     cy.visit('https://pratikkaranjit.com.np')
//     // cy.get('#intro > .container-lg > .row')
//     // cy.contains('Connect')
//     // cy.get('.resume-left-section')  //this selects the left section div
//     // cy.get('#id_name')   //this selects the div id if theres one
//     // cy.get('[data-cy=board-item]')  //this selects html attributes

// })


    it('interactions', () => { 
        cy.visit('https://pratikkaranjit.com.np')
        cy.get('#companyWebsite')                        //gets the company website field 
          .type('Nepali Company{enter}')                  //types in it
        cy.get('#fName')
          .type('Pratik{enter}')
    })

    // it.only('testing hover items', () => {       //it only is used for testing this very test and ignores any other tests mentioned above or below
    //     cy.visit('/')
    //     cy.get('[data-cy=board-item]')          //entering a particular div
    //     .first()                              //If there are multiple div with same name we can select the first one in this way
    //     .click({force:true})       //Cypress doesn't really have a hover command so we have to use force:true to test elements that only appear in hover
    // })