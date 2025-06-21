Cypress.on('uncaught:exception', (err, runnable) => {
  // Impede que Cypress falhe o teste por erro de JS da aplicação
  return false;
});

describe('Cadastro no Heroku', () => {
  it('Deve preencher o formulário de cadastro com sucesso', () => {
    // Acessa a página de cadastro do Heroku
    cy.visit('https://signup.heroku.com/');

    cy.get('button#onetrust-accept-btn-handler').click(); // Aceita os cookies


    // Preenche os campos do formulário
    cy.get('input[name="first_name"]').type('Monique');
    cy.get('input[name="last_name"]').type('Leite');
    cy.get('input[name="email"]').type('s.moniquesantos@gmail.com');
    cy.get('input[name="company"]').type('Empresa Teste');

   cy.wait(1000); // Espera 1 segundo

cy.get('#self_declared_country').select('Brazil');


    // Busca o checkbox dentro da div
cy.get('.newsletter').find('input[type="checkbox"]').check({ force: true });


    // Clica no botão de cadastro
    cy.get('input[type="checkbox"]').check({ force: true });

cy.contains(/^get started$/i)
  .should('be.visible')
  .click();


    // Valida que o cadastro foi submetido
    cy.contains('Thank you').should('be.visible');


    cy.contains('Yes, I would like to receive marketing communications')
  .prev('input[type="checkbox"]')
  .should('exist')
  .check({ force: true });

cy.get('button').contains('GET STARTED').click();

describe('Valida confirmação de e-mail após cadastro', () => {
  it('Deve exibir mensagem de confirmação para o e-mail enviado', () => {
    cy.contains('Almost there').should('be.visible');
    cy.contains('s.moniquesantos@gmail.com').should('exist');
    cy.contains('Please check your email').should('be.visible');
    cy.contains('go back').should('have.attr', 'href'); // link de retorno
  });
});








    

  });
});
