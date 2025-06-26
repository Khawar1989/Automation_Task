// cypress/e2e/pagination.cy.js
import check_Pagination from "../Page_Objects/Check_Pagination";

describe('Candidate Pagination', () => {
  it('should paginate candidate list', () => {
    cy.login('Admin', 'admin123');
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const pagination = new check_Pagination();
    pagination.view_Details();
  });
});
