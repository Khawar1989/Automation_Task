class add_Candidate {

    select_Recruitment() {
        cy.get('.oxd-main-menu-item-wrapper').contains('Recruitment').click();
    }
    candidate_form() {
        cy.get('.oxd-button--secondary').contains('Add').click();
    }
    set_firstName(firstname) {
        cy.get('input[placeholder="First Name"]').type(firstname);
    }
    set_lastName(lastname) {
        cy.get('input[placeholder="Last Name"]').type(lastname);
    }
    set_email(email) {
        cy.contains('label', 'Email').parents('.oxd-input-group').find('input[placeholder="Type here"]').type(email);
    }
    upload_resume(fileName) {
        cy.get('input[type="file"]').eq(0).selectFile(`cypress/fixtures/${fileName}`, { force: true });
        cy.get('.oxd-file-input-div').should('contain.text', 'Khawar.pdf');
    }


    save_candidate() {
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-toast').should('be.visible').and('contain.text', 'Successfully Saved');
    }

}
export default add_Candidate;