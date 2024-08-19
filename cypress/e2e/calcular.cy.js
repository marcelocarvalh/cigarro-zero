describe('Teste da Calculadora de Parar de Fumar', () => {
    // Função para gerar números aleatórios dentro de um intervalo
    function gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Função para gerar dados de teste aleatórios
    function gerarDadosAleatorios() {
      return {
        anos: gerarNumeroAleatorio(0, 2), // Anos entre 0 e 50
        meses: gerarNumeroAleatorio(0, 11), // Meses entre 0 e 11
        dias: gerarNumeroAleatorio(0, 30), // Dias entre 0 e 30
        cigarrosPorDia: gerarNumeroAleatorio(1, 10), // Cigarros por dia entre 1 e 40
        valorPorCigarro: gerarNumeroAleatorio(10.0, 50.0).toFixed(2), // Valor do cigarro entre 0.1 e 2.0 (em moeda)
      };
    }

   // Número de vezes que o teste será repetido
  const numeroDeTestes = 10;

  // Cria vários testes, um para cada conjunto de dados aleatórios
  for (let i = 0; i < numeroDeTestes; i++) {
    it(`Teste ${i + 1}: Deve calcular corretamente os benefícios de parar de fumar (usuário ${i + 1})`, () => {
      // Gera dados aleatórios
      const dados = gerarDadosAleatorios();
    })
  }
  
    it('Deve calcular corretamente os benefícios de parar de fumar', () => {
      // Gera dados aleatórios
      const dados = gerarDadosAleatorios();
  
      // Visita a página da calculadora
      cy.visit('https://cigarrozero.netlify.app/'); // Substitua 'URL_DA_CALCULADORA' pela URL real da sua calculadora
      cy.contains("SAÚDAVEL E SEM CIGARRO").should("exist");
      cy.get('[href="/calculadora"] > .nav-list-item').click();

  
      // Preencher os campos da calculadora com os dados gerados
      cy.get('[min="0"]').type(dados.anos);
      cy.get('.inputs > :nth-child(3)').type(dados.meses);
      cy.get('.inputs > :nth-child(5)').type(dados.dias);
      cy.get('.rightItens > .inputs > .inputCalc').type(dados.cigarrosPorDia);
      cy.get('.coluna > .inputCalc').type(dados.valorPorCigarro);
  
      // Submeter o formulário no botão de calcular
      cy.get('.btnResultado > button').click();
  
      
      // Assert
      cy.get('.cardContent > h2').should('contain', 'Resultado');
    });
  });
  