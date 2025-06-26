import MockCandidate from "../Page_Objects/MockCandidate";

describe('Mock Candidate Search and Screenshot', () => {
  it('should search and capture mocked candidate', () => {
    cy.login('Admin', 'admin123'); // your custom login command

    const mock = new MockCandidate();

    // Inject mock data before navigation to ensure intercept is ready
    mock.injectMockData();

    // Search and capture screenshot
    mock.searchAndCapture('Joe Khan');
  });
});
