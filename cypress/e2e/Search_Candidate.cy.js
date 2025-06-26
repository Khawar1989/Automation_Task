
import search_Candidate from "../Page_Objects/Search_Candidate";

describe('Search Candidate', () => {
  it('should find Joe Khan in the list', () => {
    cy.login('Admin', 'admin123');
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const search = new search_Candidate();
    search.searching('Joe Khan');
    
    cy.screenshot('Candidate_Search');
  });
});
