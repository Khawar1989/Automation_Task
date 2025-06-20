import search_Candidate from "./Search_Candidate";

class check_Pagination {
  constructor() {
    this.search = new search_Candidate();
  }

  view_Details() {
    this.search.searching('Joe Doe');

    cy.get('.oxd-pagination-page-item').then($pagination => {
      if ($pagination.find('button:contains(">")').length > 0) {
        cy.contains('button', '>').click();
        cy.get('.oxd-table-body').should('exist');
      } else {
        cy.log('Pagination not present only one page of results.');
      }

      cy.screenshot('candidate-pagination-next');
    });
  }
}

export default check_Pagination;