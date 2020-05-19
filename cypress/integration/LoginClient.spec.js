// Creates command coachlogin that sets keys to localStorage and visits /dashboard
Cypress.Commands.add('clientlogin', uid => {
    window.localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6InJlYzNOUUkyTXFYQ1FOUVgxIiwiY2xpZW50TmFtZSI6IkpveWNlZSIsImNsaWVudFBob25lIjoiKDkyNSkgNjM5LTE2MzkiLCJjb2FjaElkIjoicmVjWXdEOWVuTUc0bjJ4cUQiLCJpYXQiOjE1NzMzMTg4MTQsImV4cCI6MTU3MzQwNTIxNH0.rglsLGFXxyLGsTDifNG4Y1L6nwi52fNoypMVEqmX1fA'
    );
    window.localStorage.setItem('loginAttempts', 1);
    cy.visit('/welcome');
});

// Visits /welcome and checks if continue button sends to /metrics route
describe('Route/Button Test', () => {
    before(() => {
        cy.clientlogin();
    });

    it('Sends to /metrics', () => {
        const text = 'Perfect';
        cy.get('.nextBtn').click();
        cy.url().should('include', '/metrics');
    });
});
