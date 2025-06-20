import add_Candidate from "../Page_Objects/Add_Candidate";
import Log_in from "../Page_Objects/Login";
import check_Pagination from "../Page_Objects/Check_Pagination";
import search_Candidate from "../Page_Objects/Search_Candidate";
import edit_Candidate from "../Page_Objects/Edit_Candidate";
import check_Validations from "../Page_Objects/Validation_Check";
import Log_out from "../Page_Objects/Log_Out";

const loginSession = () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const login = new Log_in();
  login.setUser("Admin");
  login.setPassword("admin123");
  login.submit();
  login.verify();
};

describe('Log_In', () => {

  beforeEach(() => {
    cy.session('Khawar', loginSession);
  });



  it('Add_Candidate', () => {

    const cand = new add_Candidate();

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cand.select_Recruitment();

    cand.candidate_form();

    cand.set_firstName("Joe");

    cand.set_lastName("Khan");

    cand.set_email("khan@gmail.com");

    cand.save_candidate();


  })
  it('search_Candidate', () => {

    const search = new search_Candidate();

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    search.searching("Joe Khan");
    cy.contains('Joe Khan').should('exist');

  })

  it('Pagination', () => {

    const pagination = new check_Pagination();

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    pagination.view_Details();

  })
  it('Edit Candidate', () => {

    const edit = new edit_Candidate();

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    edit.edit_Can();

  })

  it('Validations', () => {

    const valid = new check_Validations();

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    valid.validations();

  })

  it('Log_out', () => {

    const logoutcan = new Log_out();

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    logoutcan.logout();
    cy.timeout(5000);

  })
 

})