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

// Tests if modal opens and receives text
describe('Modal Input Test', () => {
    it('Modal Accepts Input', () => {
        const text = 'Perfect';
        cy.visit('/login');
        cy.get('.forgot').click();
        cy.get('[data-cy=input4]')
            .type(text)
            .should('have.value', text);
    });
});

// Tests if page routes when link is clicked
describe('Route Test', () => {
    it('Tests if page routes correctly', () => {
        cy.visit('/login');

        cy.get('.register').click();

        cy.url().should('include', '/register');
    });
});

// Modal Testing //

// Checks of modal opens, closes, and inputs text
describe('Modal Cancel', () => {
    it('Modal cancels and inputs to login fields', () => {
        const text = 'Perfect';
        cy.visit('/login');
        cy.get('.forgot').click();
        cy.get('.cancel').click();
        cy.get('[data-cy=input1]')
            .type(text)
            .should('have.value', text);
    });
});
