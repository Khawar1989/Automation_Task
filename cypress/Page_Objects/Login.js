class Log_in
{

    setUser(username)
    {
    cy.get('input[placeholder="Username"]').type(username);
    }

    setPassword(password)
    {
    cy.get('input[placeholder="Password"]').type(password);
    }

    submit()
    {
    cy.get('button[type="submit"]').click();
    
    }

    verify()
    {
        cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
    }
}
export default Log_in;