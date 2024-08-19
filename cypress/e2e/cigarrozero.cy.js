
import {faker} from '@faker-js/faker'
describe("Teste Calculadora", () => {
  it("Calcular", () => {
    cy.visit("https://cigarrozero.netlify.app/");
    cy.contains("SAÚDAVEL E SEM CIGARRO").should("exist");

    cy.get('[href="/calculadora"] > .nav-list-item').click();
    
    cy.get('[min="0"]').click().type("1");
    
    cy.get(".inputs > :nth-child(3)").click().type("2");

    cy.get(".inputs > :nth-child(5)").click().type("20");
    
    cy.get('.rightItens > .inputs > .inputCalc').click().type("4");

    cy.get('.coluna > .inputCalc').click().type("1000");
    
    cy.get('button').click()

    cy.get('.cardContent > h2').should ('contain','Resultado')

  });

});
