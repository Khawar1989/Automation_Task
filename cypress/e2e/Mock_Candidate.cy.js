import search_Candidate from "../Page_Objects/Search_Candidate";

describe('Stub and Search Candidates by Job', () => {
  it('should stub candidates and search by job', () => {

    cy.login('Admin', 'admin123');

    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC',
      { fixture: 'mockCandidateList.json' }
    ).as('mockedCandidates');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');

    cy.wait('@mockedCandidates').its('response.statusCode').should('eq', 200);


    const search = new search_Candidate();
    search.searching('Senior QA Lead');
  });
});
