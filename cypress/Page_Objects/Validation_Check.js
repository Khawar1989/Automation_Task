import add_Candidate from "./Add_Candidate";
class check_Validations {
    constructor() {
        this.add = new add_Candidate();
    }

    validations() {
    
        this.add.select_Recruitment();
        this.add.candidate_form();
        cy.get('button[type="submit"]').click();

         cy.get('.oxd-input-group .oxd-text').should('contain', 'Required').and('be.visible');

        cy.screenshot('validation-errors');
    }
}

export default check_Validations;