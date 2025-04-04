function gerarNumerosMegaSena() {
    let numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
      }
    }
	numerosSorteados.sort((a, b) => a - b);
    return numerosSorteados;
  }
  
  function simularJogoMegaSena( tentativas) {
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpar resultados anteriores
  
    for (let i = 0; i < tentativas; i++) {
      let numerosSorteados = gerarNumerosMegaSena();
  
      let tabelaResultado = document.createElement('table');
      tabelaResultado.classList.add('resultado');
  
      let cabecalho = document.createElement('tr');
      let cabecalhoTentativa = document.createElement('th');
      cabecalhoTentativa.textContent = `Tentativa ${i + 1} Número Sorteado: ${numerosSorteados.join(' | ')}`;
      cabecalho.appendChild(cabecalhoTentativa);
      tabelaResultado.appendChild(cabecalho);
  
      for (const chaveBilhete in bilhetes) {
        const numerosBilhete = bilhetes[chaveBilhete];
        const numerosCorrespondentes = numerosSorteados.filter(numero => numerosBilhete.includes(numero)).length;
  
        let linha = document.createElement('tr');
        let colunaBilhete = document.createElement('td');
        colunaBilhete.textContent = `${chaveBilhete}: ${numerosCorrespondentes} acertos`;
        linha.appendChild(colunaBilhete);
        tabelaResultado.appendChild(linha);
      }
  
      resultadosDiv.appendChild(tabelaResultado);
    }
  }

  let numerosSelecionados = [];
  function adicionarNumero(numero,bolaNumero) {
    //const numerosSelecionadosDiv = document.getElementById('numerosSelecionados');
    
  console.log(numerosSelecionados)
        
    if (numerosSelecionados.length < 6 && !numerosSelecionados.some(num => num === numero)) {
      //const bolaNumero = document.createElement('div');
      bolaNumero.textContent = numero;
      bolaNumero.classList.add('bola-selecionada'); // Adicionando a classe para mudar a cor de fundo
      bolaNumero.classList.add('bola');
      bolaNumero.addEventListener('click', function() {
        removerNumero(numero);			
      });
      //numerosSelecionadosDiv.appendChild(bolaNumero);
      numerosSelecionados.push(numero)
      const bolasDiv = document.querySelector('.bolas');
      const numeroSelecionadoTeclado = Array.from(bolasDiv.children).find(bola => bola.textContent === numero);
      if (numeroSelecionadoTeclado) {
        numeroSelecionadoTeclado.classList.add('bola-selecionada-teclado');
        numeroSelecionadoTeclado.removeEventListener('click', adicionarNumero);
      }
    }
  }
  
  function removerNumero(numero) {
    const numRemove = numero; // O elemento que deseja remover

    numerosSelecionados = numerosSelecionados.filter(num => num !== numRemove);
    
    const numerosSelecionadosDiv = document.getElementsByClassName('bola-selecionada');
    const numerosArray = Array.from(numerosSelecionadosDiv); // ou [...numerosSelecionados]
    
    const numeroRemover = numerosArray.find(num => num.textContent == numero);
    
      
    console.log(numeroRemover)
    if (numeroRemover) { 
        numeroRemover.classList.remove('bola-selecionada');
        numeroRemover.addEventListener('click', function() {
          adicionarNumero(numero,numeroRemover);
        });      
    }
  }
  let bilhetes={
 
  }
  let chaveBilhete=1
  function addBilhete() {
    // Aqui, você possui os números do bilhete atual em 'numerosSelecionados'
  
    numerosSelecionados.sort((a, b) => a - b);
    bilhetes['b' + chaveBilhete] = numerosSelecionados.slice(); // Armazena uma cópia dos números selecionados
  
    const divBilhete = document.createElement('div');
    divBilhete.classList.add('bilhete');
    divBilhete.id = 'b' + chaveBilhete;
  
    const spanTitulo = document.createElement('span');
    spanTitulo.textContent = chaveBilhete + ' - Bilhete:';
  
    const divNumerosB = document.createElement('div');
    divNumerosB.classList.add('numerosB');
  
    numerosSelecionados.forEach(num => {
      const spanNumeroB = document.createElement('span');
      spanNumeroB.classList.add('numeroB');
      spanNumeroB.textContent = num;
      divNumerosB.appendChild(spanNumeroB);
      removerNumero(num)
    });
  
    divBilhete.appendChild(spanTitulo);
    divBilhete.appendChild(divNumerosB);
  
    const divBilhetesContainer = document.querySelector('.bilhetes');
    divBilhetesContainer.appendChild(divBilhete);
  
    // Incrementa a chave do bilhete
    chaveBilhete++;
  
    // Limpa os números selecionados após adicionar o bilhete
    numerosSelecionados = [];
  }

  function iniciarSimulacao() {
    const numerosSelecionadosDiv = document.getElementById('numerosSelecionados');
    const numerosSelecionados = Array.from(numerosSelecionadosDiv.children);
    
    if (numerosSelecionados.length === 6) {
      let numerosDaSorte = numerosSelecionados.map(bola => parseInt(bola.textContent));
      let resultados = simularJogoMegaSena(numerosDaSorte, 50000000); // Altere o número de tentativas aqui se desejar
  // Supondo que 'resultados' é um objeto
  for (let chave in resultados) {
    if (resultados.hasOwnProperty(chave)) {
      // Verifica se o valor é undefined e substitui por 0
      if (typeof resultados[chave] === 'undefined') {
        resultados[chave] = 0;
      }
    }
  }
  
  // Monta a string com os valores atualizados
  let contagemFinal = 'Contagem final:';
  for (let chave in resultados) {
    if (resultados.hasOwnProperty(chave)) {
      contagemFinal += ` ${chave}: ${resultados[chave]} |`;
    }
  }
  
  // Atualiza o conteúdo do elemento #contagem
  document.getElementById('contagem').innerHTML = contagemFinal.slice(0, -1); // Remove o último traço "-"
  
    } else {
      alert('Selecione exatamente 6 números para iniciar a simulação.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const bolasDiv = document.querySelector('.bolas');
  
    for (let i = 1; i <= 60; i++) {
      const bolaNumero = document.createElement('div');
      bolaNumero.textContent = i;
      bolaNumero.classList.add('bola');
      bolaNumero.addEventListener('click', function() {
        adicionarNumero(i,bolaNumero);
      });
      bolasDiv.appendChild(bolaNumero);
    }
  });
  
  
  