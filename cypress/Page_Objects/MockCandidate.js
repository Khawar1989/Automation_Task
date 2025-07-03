class MockCandidate {
  injectMockData() {
    cy.fixture('mockCandidateList.json').then((mockData) => {
      cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC',
        { body: mockData }
      ).as('mockedCandidates');
    });
  }

  visitAndVerify() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
    cy.wait('@mockedCandidates');

    // Wait for candidates table to load
    cy.get('div.oxd-table-card', { timeout: 10000 }).should('have.length', 3);

    // Optional: validate each candidate
    cy.contains('Khawar Khan').should('exist');
    cy.contains('Muneeb Ahmed').should('exist');
    cy.contains('Hamza Shakil').should('exist');

    // Screenshot
    cy.screenshot('mocked-candidate-list');
  }
}

export default MockCandidate;
