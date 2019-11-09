Cypress.Commands.add('login', uid => {
    window.localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2FjaElkIjoicmVjWXdEOWVuTUc0bjJ4cUQiLCJjb2FjaE5hbWUiOiJLYXJpbiBVbmRlcndvb2QiLCJpYXQiOjE1NzMzMTY5MTMsImV4cCI6MTU3MzQwMzMxM30.ajc3EF7tbiAgQ5bh1e-CD8czt-NOs94TXF7pv71HQaA'
    );
    window.localStorage.setItem('coachName', 'Karin Underwood');
    cy.visit('/dashboard');
});

describe('User can navigate homepage', () => {
    before(() => {
        cy.coachlogin();
    });

    it('Modal Clicks', () => {
        cy.get('.goals-wrapper-button').click();
        cy.get('.modal-button').click();
    });
});
