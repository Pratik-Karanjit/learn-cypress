it('my first test', () => {
    cy.visit('https://pratikkaranjit.com.np')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#fName').clear('P');
    cy.get('#fName').type('Pratik');
    cy.get('.container > .justify-content-center').click();
    cy.get('#description').click();
    cy.get('.container > .justify-content-center').click();
    /* ==== End Cypress Studio ==== */
})