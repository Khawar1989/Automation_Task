import edit_Candidate from '../Page_Objects/Edit_Candidate';

describe('Edit Candidate Test', () => {
    it('should edit existing candidate', () => {
        cy.login('Admin', 'admin123');
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        const edit = new edit_Candidate();
        edit.edit_Can();
    });
});
