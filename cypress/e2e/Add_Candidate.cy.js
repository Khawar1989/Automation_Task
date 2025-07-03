import add_Candidate from '../Page_Objects/Add_Candidate';
import 'cypress-file-upload';


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
        cand.upload_resume("Khawar.pdf");

        cand.save_candidate();
    });
});
