class search_Candidate{

        searching(name) {
        cy.get('.oxd-main-menu-item-wrapper').contains('Recruitment').click();
        cy.get('input[placeholder="Type for hints..."]').type(name);
        cy.get('button').contains('Search').click({ force: true });
        cy.contains(name).should('exist');
    }
}
export default search_Candidate;