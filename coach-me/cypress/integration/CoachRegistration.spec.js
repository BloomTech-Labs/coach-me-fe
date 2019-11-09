// Tests if all inputs accepting text input from user
describe('Input Test', () => {
    it('Accepts input', () => {
        const text = 'Perfect';
        cy.visit('/register');
        cy.get('[data-cy=input1]')
            .type(text)
            .should('have.value', text);
        cy.get('[data-cy=input2]')
            .type(text)
            .should('have.value', text);
        cy.get('[data-cy=input3]')
            .type(text)
            .should('have.value', text);
    });
});

// Tests if page routes when link is clicked
describe('Route Test', () => {
    it('Tests if page routes correctly', () => {
        cy.visit('/register');

        cy.get('.login').click();

        cy.url().should('include', '/login');
    });
});
