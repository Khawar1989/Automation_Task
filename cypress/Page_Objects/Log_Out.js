import add_Candidate from "./Add_Candidate";
class Log_out{
    constructor(){
        this.log=new add_Candidate();
    }

    logout(){
        this.log.select_Recruitment();
          Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
      return false;
    }})
        cy.get('.oxd-userdropdown-name').click();
        cy.get('.oxd-dropdown-menu').contains('Logout').click();

        cy.contains('Login').should('be.visible');
    }

}
export default Log_out;