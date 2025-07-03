import search_Candidate from "./Search_Candidate";

class check_Pagination {
  constructor() {
    this.search = new search_Candidate();
  }

  view_Details() {
    this.search.searching('Senior QA Lead');

    cy.get('body').then($body => {
      if ($body.find('div.oxd-pagination').length > 0) {
        cy.get('div.oxd-pagination').within(() => {
          cy.get('button').then($btns => {
            const nextBtn = $btns.filter((i, btn) => btn.innerText.trim() === '>');

            if (nextBtn.length > 0) {
              cy.wrap(nextBtn).click({ force: true });
              cy.get('.oxd-table-body').should('exist');
              cy.screenshot('pagination-next-clicked');
            } else {
              cy.log('Pagination present but no next button.');
              cy.screenshot('pagination-no-next');
            }
          });
        });
      } else {
        cy.log('No pagination found.');
        cy.screenshot('pagination-not-found');
      }
    });
  }
}

export default check_Pagination;
