describe('Testes de Login', () => {
  const baseUrl = 'https://practicetestautomation.com/practice-test-login/'; 

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login com sucesso', () => {
    cy.get('#username').type('student');
    debugger;
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.url().should('include', '/logged-in-successfully');
    cy.contains('Logged In Successfully').should('be.visible');
  });

  it('Login com usuario inválido', () => {
    cy.get('#username').type('studante');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Login com senha inválida', () => {
    cy.get('#username').type('studant');
    cy.get('#password').type('123');
    cy.get('#submit').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });
});
