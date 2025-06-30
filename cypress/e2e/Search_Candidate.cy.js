
import search_Candidate from "../Page_Objects/Search_Candidate";

describe('Search Candidate', () => {
  it('find all Sr. QA leads', () => {
    cy.login('Admin', 'admin123');
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const search = new search_Candidate();
    search.searching('Senior QA Lead');
    
    cy.screenshot('Candidate_Search');
  });
});
