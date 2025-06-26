// cypress/e2e/validations.cy.js
import check_Validations from "../Page_Objects/Validation_Check";

describe('Candidate Form Validations', () => {
  it('should show validation messages for empty fields', () => {
    cy.login('Admin', 'admin123');
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    const valid = new check_Validations();
    valid.validations();
  });
});
