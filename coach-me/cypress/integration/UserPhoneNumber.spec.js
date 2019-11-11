// Tests if all inputs accepting integer input from user
describe('Input Test', () => {
    it('Accepts input', () => {
        const int = '925';
        cy.visit('/');
        cy.get('[data-cy=input1]')
            .type(int)
            .should('have.value', int);
        cy.get('[data-cy=input2]')
            .type(int)
            .should('have.value', int);
        cy.get('[data-cy=input3]')
            .type(int)
            .should('have.value', int);
    });
});

// Notes
// Using [data-cy] as a selector is optimal for making sure tests run properly regardless if the application changes
