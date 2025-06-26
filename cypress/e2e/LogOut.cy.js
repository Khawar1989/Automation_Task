// cypress/e2e/logout.cy.js
import Log_out from "../Page_Objects/Log_Out";

describe('Logout Test', () => {
  it('should log out successfully', () => {
    cy.login('Admin', 'admin123');
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const logoutcan = new Log_out();
    logoutcan.logout();
    // Remove this: cy.timeout(5000); – not valid
  });
});
