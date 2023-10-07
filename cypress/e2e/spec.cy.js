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
        cy.get('#companyWebsite')
          .type('Nepali Company{enter}')
        cy.get('#fName')
          .type('Pratik{enter}')
    })

    // it.only('testing hover items', () => {
    //     cy.visit('/')
    //     cy.get('[data-cy=board-item]')          //entering a particular div
    //     .first()                              //If there are multiple divs with same name we can select the first one in this way
    //     .click({force:true})       //Cypress doesn't really have a hover command so we have to use force:true to test elements that only appear in hover
    // })