// Checks if true is equal to true
describe('First Test', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

// Visits App Page
describe('Visiting App Test', () => {
    it('Visit the app', () => {
        cy.visit('/');
    });
});
