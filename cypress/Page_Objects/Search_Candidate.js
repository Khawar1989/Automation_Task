class search_Candidate {

    searching(vacancyName) {
        cy.get('.oxd-main-menu-item-wrapper').contains('Recruitment').click();

        cy.get('.oxd-select-text').eq(1).click();

        cy.get('.oxd-select-dropdown').contains(vacancyName).click();

        cy.get('button').contains('Search').click({ force: true });

        cy.get('.oxd-table-body').should('contain.text', vacancyName);

        cy.screenshot('search-by-job');
    }
}

export default search_Candidate;
