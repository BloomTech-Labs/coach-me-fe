Cypress.Commands.add('coachlogin', uid => {
    window.localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2FjaElkIjoicmVjWXdEOWVuTUc0bjJ4cUQiLCJjb2FjaE5hbWUiOiJLYXJpbiBVbmRlcndvb2QiLCJpYXQiOjE1NzMzMTY5MTMsImV4cCI6MTU3MzQwMzMxM30.ajc3EF7tbiAgQ5bh1e-CD8czt-NOs94TXF7pv71HQaA'
    );
    window.localStorage.setItem('coachName', 'Karin Underwood');
    cy.visit('/dashboard');
});

describe('Input Test', () => {
    before(() => {
        cy.coachlogin();
    });

    it('Accepts input', () => {
        const text = 'Perfect';
        cy.get('[data-cy=search]')
            .type(text)
            .should('have.value', text);
    });
});
