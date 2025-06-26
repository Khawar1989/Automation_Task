import add_Candidate from '../Page_Objects/Add_Candidate';

describe('Add Candidate Test', () => {
    it('should add a new candidate', () => {
        cy.login('Admin', 'admin123');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');


        const cand = new add_Candidate();
        cand.select_Recruitment();
        cand.candidate_form();
        cand.set_firstName("Joe");
        cand.set_lastName("Khan");
        cand.set_email("khan@gmail.com");
        cand.save_candidate();
    });
});
