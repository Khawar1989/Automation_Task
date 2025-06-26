import search_Candidate from "./Search_Candidate";

class MockCandidate {
  constructor() {
    this.search = new search_Candidate();
  }

  injectMockData() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC',
      {
        body: {
          data: {
            total: 1,
            records: [
              {
                firstName: 'Joe',
                lastName: 'Khan',
                email: 'kk@example.com',
                dateOfApplication: '2025-06-25',
                id: 1
              }
            ]
          },
          meta: {
            total: 1,
            limit: 50,
            offset: 0
          }
        }
      }
    ).as('mockedCandidates');
  }

  searchAndCapture(fullName) {
    // Visit the page that triggers the network request
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');

    // Wait for intercept to be hit
    cy.wait('@mockedCandidates');

    // Use existing search functionality
    this.search.searching(fullName);

    // Capture screenshot
    cy.screenshot('mock-candidate-search');
  }
}

export default MockCandidate;
