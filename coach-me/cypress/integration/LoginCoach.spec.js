// Tests if all inputs accepting text input from user
describe('Input Test', () => {
    it('Accepts input', () => {
        const text = 'Perfect';
        cy.visit('/login');
        cy.get('[data-cy=input1]')
            .type(text)
            .should('have.value', text);
        cy.get('[data-cy=input2]')
            .type(text)
            .should('have.value', text);
    });
});
