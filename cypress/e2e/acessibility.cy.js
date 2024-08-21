/// <reference types="cypress" />
import 'cypress-axe';

describe('Teste de Acessibilidade na Página Cigarro Zero', () => {

  beforeEach(() => {
    cy.visit('https://cigarrozero.netlify.app/'); 
  });
    it('Deve verificar acessibilidade na página inicial', () => {
      // Visita a página      
      // Injeta o axe-core para realizar o teste de acessibilidade
      cy.pageAccessibility();       
        
    });
    
  });
  