import search_Candidate from "./Search_Candidate";

class edit_Candidate {
  constructor() {
    this.search = new search_Candidate();
  }

  edit_Can() {
    this.search.searching('Joe Khan');

    // Open candidate detail page
    cy.get('.oxd-table-card').first().within(() => {
    cy.get('.oxd-icon.bi-eye-fill').click({ force: true });
    });

    cy.get('label').contains('Edit').parent().find('span.oxd-switch-input').click({ force: true });
    cy.get('input[placeholder="First Name"]').clear().type("Khawar");
    cy.get('input[placeholder="Last Name"]').clear().type("Khan");
    cy.get('button').contains('Save').click({ force: true });
    cy.get('.oxd-toast-container').should('be.visible').and('contain.text', 'Successfully Updated');

    cy.screenshot('updated_candidate');

  }


}
export default edit_Candidate;
