// Dados dos projetos
const projetos = {
  0: {
    nome: "Jogo da Memória - Desafie sua Memória!:",
    descricao:
      "Este projeto é um jogo clássico da memória implementado com HTML, CSS e JavaScript. O objetivo do jogo é encontrar todos os pares de cartas iguais em um tabuleiro virando-as uma de cada vez. Cada vez que duas cartas são viradas, elas são comparadas. Se forem iguais, elas permanecem viradas e o jogador ganha pontos. Caso contrário, as cartas são desviradas e o jogador perde pontos. O jogo termina quando todos os pares são encontrados.",
    projetoUrl: "https://urickalberth.github.io/jogo_da_memoria/",
    imgUrl: "https://urickalberth.github.io/jogo_da_memoria/jogo_da_memoria.png",
    categoria: "jogos"
  },
    1: {
    nome: "Gomoku:",
    descricao:
      "Este projeto é um jogo coreano chamado Gomoku, cujo objetivo é colocar cinco peças em sequência primeiro. Ele envolve uma grade em que os jogadores alternam entre colocar suas peças em posições vazias. O jogo verifica constantemente se alguém conseguiu alinhar cinco peças e declara o vencedor quando isso acontece.",
    projetoUrl: "https://urickalberth.github.io/gomoku/",
    imgUrl: "https://urickalberth.github.io/gomoku/gomoku.png",
    categoria: "jogos"
  },
  2: {
    nome: "Tabela Periódica Interativa:",
    descricao:
      "Desenvolvido um projeto de tabela periódica interativa com elementos representados como objetos em um array. A tabela é responsiva, colorida e exibe os elementos em ordem. Os usuários podem explorar e interagir com os elementos de forma intuitiva.",
    projetoUrl: "https://urickalberth.github.io/tabela_periodica/",
    imgUrl:
      "https://urickalberth.github.io/tabela_periodica/tabela_periodica.png",
    categoria: "ferramentas"
  },
  3: {
    nome: "Jogo da Velha Inteligente:",
    descricao:
      "Criei um jogo da velha com opções para jogar contra um adversário humano ou computador. A inteligência artificial possui diferentes níveis de dificuldade: fácil, médio e difícil. Além disso, o jogo calcula e exibe a pontuação de cada jogador a cada vitória.",
    projetoUrl: "https://urickalberth.github.io/jogo_da_velha/",
    imgUrl: "https://urickalberth.github.io/jogo_da_velha/jogo_da_velha.png",
    categoria: "jogos"
  },
  4: {
    nome: "Jogo da Velha 2:",
    descricao:
      "Neste projeto, eu criei uma variação interessante do clássico jogo da velha. Nele, a grade tradicional de 3x3 é dividida em nove divisões menores, cada uma contendo seu próprio jogo da velha. Os jogadores competem nos pequenos jogos da velha, e quem vencer em um desses pequenos jogos pode marcar sua posição nas divisões maiores. A estratégia se torna mais complexa, já que a jogada nos pequenos jogos afeta o jogo nas divisões grandes.",
    projetoUrl: "https://urickalberth.github.io/jogo_da_velha2/",
    imgUrl: "https://urickalberth.github.io/jogo_da_velha2/jogo_da_velha2.png",
    categoria: "jogos"
  },
  5: {
    nome: "Jogo da Forca Interativo:",
    descricao:
      "Desenvolvido um jogo da forca com um teclado virtual que permite ao jogador escolher as letras das tentativas. O jogo exibe quais letras já foram usadas e renderiza partes do corpo do boneco a cada erro. A pontuação varia de acordo com o número de erros, e o recorde é armazenado no local storage.",
    projetoUrl: "https://urickalberth.github.io/jogo_da_forca/",
    imgUrl: "https://urickalberth.github.io/jogo_da_forca/jogo_da_forca.png",
    categoria: "jogos"
  },
  6: {
    nome: "Documentação do JavaScript (não oficial):",
    descricao:
      "Criei um site contendo a documentação do JavaScript, não oficial, com uma barra de menu vertical responsiva para fácil navegação. A documentação abrange diversos tópicos do JavaScript, auxiliando desenvolvedores a encontrar informações relevantes.",
    projetoUrl: "https://urickalberth.github.io/doc_js/",
    imgUrl: "https://urickalberth.github.io/doc_js/doc_js.png",
    categoria: "ferramentas"
  },
  7: {
    nome: "Bloco de Notas Avançado:",
    descricao:
      "Criei um bloco de anotações com recursos avançados, permitindo a inserção, edição e exclusão de notas. As notas são armazenadas no indexDB, e o usuário pode criar notas com códigos HTML renderizados ou não, facilitando o registro de informações formatadas.",
    projetoUrl: "https://urickalberth.github.io/anotacoes/",
    imgUrl: "https://urickalberth.github.io/anotacoes/anotacoes.png",
    categoria: "ferramentas"
  },
  8: {
    nome: "Lista de Tarefas Eficiente:",
    descricao:
      "Desenvolvi uma lista de tarefas eficiente, que permite ao usuário inserir, editar, excluir e marcar como concluídas as tarefas. As tarefas são salvas no local storage, garantindo que não sejam perdidas mesmo após o fechamento do navegador.",
    projetoUrl: "https://urickalberth.github.io/lista_de_tarefas/",
    imgUrl:
      "https://urickalberth.github.io/lista_de_tarefas/lista_de_tarefas.png",
    categoria: "ferramentas"
  },
  9: {
    nome: "Réplica do Perfil no Codepen:",
    descricao:
      "Criei uma réplica da página do meu perfil no Codepen, exibindo meus projetos, snippets e informações relevantes sobre meu trabalho como desenvolvedor.",
    projetoUrl: "https://urickalberth.github.io/perfil_codepen/",
    imgUrl: "https://urickalberth.github.io/perfil_codepen/perfil_codepen.png",
    categoria: "prototipos"
  },
  10: {
    nome: "Teste de Preferências de Carreira:",
    descricao:
      "Desenvolvi um site de teste que ajuda os usuários a descobrir suas preferências de carreira. O questionário avalia as respostas e calcula os resultados, exibindo a pontuação para cada resultado.",
    projetoUrl: "https://urickalberth.github.io/teste_ancoras/",
    imgUrl: "https://urickalberth.github.io/teste_ancoras/teste_ancoras.png",
    categoria: "testes"
  },
  11: {
    nome: "Calculadora Multifuncional:",
    descricao:
      "Criei uma calculadora multifuncional que permite ao usuário realizar cálculos utilizando tanto o teclado virtual quanto o teclado do PC. A calculadora possui várias funções matemáticas e opções adicionais para atender às necessidades dos usuários.",
    projetoUrl: "https://urickalberth.github.io/calculadora/",
    imgUrl: "https://urickalberth.github.io/calculadora/calculadora.png",
    categoria: "ferramentas"
  },
  12: {
    nome: "Protótipo Web MindEles (Saúde Mental):",
    descricao:
      "Desenvolvi um aplicativo para cadastro de pacientes, agendamento de avaliações psicológicas e monitoramento do período de validade dessas avaliações. O aplicativo envia alertas automáticos quando uma avaliação está próxima do vencimento e oferece testes online para avaliação da saúde mental dos pacientes.",
    projetoUrl: "https://urickalberth.github.io/mindeles1/",
    imgUrl: "https://urickalberth.github.io/mindeles1/mindeles.png",
    categoria: "prototipos"
  },
  13: {
    nome: "Sorteador Online:",
    descricao:
      "Criei um site para sorteios aleatórios, permitindo que os usuários escolham a quantidade de sorteios e o número de pessoas sorteadas. O sistema realiza o sorteio de forma justa e transparente.",
    projetoUrl: "https://urickalberth.github.io/sorteador/",
    imgUrl: "https://urickalberth.github.io/sorteador/sorteador.png",
    categoria: "ferramentas"
  },
  14: {
    nome: "Protótipo Web Tocaki (Encontro de Músicos e Eventos):",
    descricao:
      "Desenvolvi um aplicativo que permite o cadastro de empresas, músicos e eventos, facilitando o encontro entre músicos e organizadores de eventos. Os usuários podem encontrar oportunidades musicais e eventos relevantes para suas carreiras.",
    projetoUrl: "https://urickalberth.github.io/tocaki/",
    imgUrl: "https://urickalberth.github.io/tocaki/tocaki.png",
    categoria: "prototipos"
  },
  15: {
    nome: "Xadrez Interativo:",
    descricao:
      "Criei um jogo de xadrez contra um adversário humano com uma interface amigável e intuitiva. O tabuleiro destaca os movimentos possíveis quando clicado em cada peça, e os usuários têm a opção de escolher a cor do tabuleiro e das peças para personalização.",
    projetoUrl: "https://urickalberth.github.io/xadrez/",
    imgUrl: "https://urickalberth.github.io/xadrez/xadrez.png",
    categoria: "jogos"
  },
  16: {
    nome: "Gerador de QR-CODE:",
    descricao:
      "Desenvolvi um gerador de QR-CODE que utiliza uma API para gerar códigos QR a partir de textos ou links inseridos. Os usuários podem personalizar a cor e o tamanho do QR-CODE de acordo com suas preferências.",
    projetoUrl: "https://urickalberth.github.io/gerador_qr_code/",
    imgUrl: "https://urickalberth.github.io/gerador_qr_code/gerador_qr_code.png",
    categoria: "ferramentas"
  },
  17: {
    nome: "Relógio Analógico:",
    descricao:
      "Criei um projeto com relógios analógico e digital, exibindo a hora atual de forma clara e precisa. Os relógios são sincronizados com o horário do sistema e oferecem uma experiência visual agradável.",
    projetoUrl: "https://urickalberth.github.io/relogio_analogico/",
    imgUrl:
      "https://urickalberth.github.io/relogio_analogico/relogio_analogico.png",
    categoria: "ferramentas"
  },
  18: {
    nome: "Relógio Digital:",
    descricao:
      "Criei um projeto com relógios analógico e digital, exibindo a hora atual de forma clara e precisa. Os relógios são sincronizados com o horário do sistema e oferecem uma experiência visual agradável.",
    projetoUrl: "https://urickalberth.github.io/relogio_digital/",
    imgUrl: "https://urickalberth.github.io/relogio_digital/relogio_digital.png",
    categoria: "ferramentas"
  },
    19: {
    nome: "Ping Pong Retrô:",
    descricao:
      "Este é um jogo clássico de pingue-pongue em que os jogadores controlam as raquetes usando o mouse. O objetivo é rebater a bola de um lado para o outro e evitar que ela ultrapasse a raquete do jogador. A velocidade da bola pode aumentar à medida que o jogo avança, tornando-o desafiador e divertido.",
    projetoUrl: "https://urickalberth.github.io/pingpong/",
    imgUrl: "https://urickalberth.github.io/pingpong/pingpong.png",
    categoria: "jogos"
  },
    20: {
    nome: "Snake (Cobrinha):",
    descricao:
      "No projeto Snake, eu implementei o famoso jogo da cobrinha. Os jogadores controlam uma cobra que cresce à medida que consome itens no cenário. O objetivo é evitar colidir com as bordas do jogo ou com o próprio corpo da cobra. À medida que a cobra cresce, o desafio aumenta, tornando-o um jogo clássico e viciante.",
    projetoUrl: "https://urickalberth.github.io/snake/",
    imgUrl: "https://urickalberth.github.io/snake/snake.png",
    categoria: "jogos"
  },
  21: {
    nome: "PacMan 1px",
    descricao:
      "Este projeto consiste em uma recriação do clássico jogo de arcade Pac-Man, onde o jogador controla o personagem Pac-Man e tenta comer todos os pontos no labirinto enquanto evita os fantasmas. O jogo foi implementado utilizando HTML, CSS e JavaScript.",
    projetoUrl: "https://urickalberth.github.io/pac_man_1px/",
    imgUrl: "https://urickalberth.github.io/pac_man_1px/pac_man_1px.png",
    categoria: "jogos"
  },
  22: {
    nome: "Calendário Win10",
    descricao:
      "Um sistema de calendário interativo inspirado no Windows 10, com visual moderno e funcionalidades avançadas. Permite visualizar sua semana/mês de forma intuitiva. Com design responsivo e integração com temas personalizáveis.",
    projetoUrl: "https://urickalberth.github.io/calendario",
    imgUrl: "https://urickalberth.github.io/calendario/calendario.png",
    categoria: "ferramentas"
  },
  23: {
    nome: "Teste das Casas de Hogwarts",
    descricao:
      "Quiz interativo que revela a qual casa de Hogwarts você pertence (Grifinória, Sonserina, Corvinal ou Lufa-Lufa) com base em suas respostas. Com perguntas elaboradas e sistema de pontuação preciso, oferece uma experiência mágica para os fãs de Harry Potter. Design temático e resultado compartilhável.",
    projetoUrl: "https://urickalberth.github.io/hogwarts",
    imgUrl: "https://urickalberth.github.io/hogwarts/hogwarts.png",
    categoria: "testes"
  },
  24: {
    nome: "Libras Connect - Comunicação por Sinais com IA",
    descricao:
      "Sistema inovador que utiliza inteligência artificial para facilitar a comunicação em Libras através de vídeo. Traduz gestos em texto/fala e vice-versa, quebrando barreiras na comunicação. Interface acessível com recursos de aprendizado e dicionário de sinais integrado. (em desenvolvimento)",
    projetoUrl: "https://urickalberth.github.io/libras_connect",
    imgUrl: "https://urickalberth.github.io/libras_connect/libras_connect.png",
    categoria: "prototipos"
  },
  25: {
    nome: "Murdle Web - O Detetive Virtual de Mistérios",
    descricao:
      "Versão web interativa do famoso livro Murdle, transformando puzzles de investigação em uma experiência digital envolvente. Resolva crimes desvendando pistas, e usando lógica dedutiva. Novos casos exclusivos para desafiar seu raciocínio.",
    projetoUrl: "https://urickalberth.github.io/murdle_web",
    imgUrl: "https://urickalberth.github.io/murdle_web/murdle_web.png",
    categoria: "jogos"
  },
  26: {
    nome: "Arctic Monkeys Player - Experiência Musical Imersiva",
    descricao:
      "Player dedicado às músicas do Arctic Monkeys com visualização de áudio em tempo real. Mostra efeitos visuais sincronizados com a batida de cada música. Design inspirado nos álbuns.",
    projetoUrl: "https://urickalberth.github.io/play_arcticmonkeys",
    imgUrl: "https://urickalberth.github.io/play_arcticmonkeys/play_arcticmonkeys.png",
    categoria: "ferramentas"
  },
  27: {
    nome: "Quebra-Cabeça",
    descricao:
      "Jogo de quebra-cabeça digital com diversas imagens temáticas. Interface intuitiva que permite arrastar e soltar peças, com efeitos visuais ao completar.",
    projetoUrl: "https://urickalberth.github.io/quebra_cabeca",
    imgUrl: "https://urickalberth.github.io/quebra_cabeca/quebra_cabeca.png",
    categoria: "jogos"
  },
  28: {
    nome: "Teste da Floresta",
    descricao:
      "Teste psicológico em formato de história interativa que revela aspectos da sua personalidade através de escolhas narrativas. Com cenários de floresta, oferece insights pessoais com base em psicologia comportamental. Resultados detalhados.",
    projetoUrl: "https://urickalberth.github.io/teste_floresta",
    imgUrl: "https://urickalberth.github.io/teste_floresta/teste_floresta.png",
    categoria: "testes"
  },
  29: {
    nome: "Tradutor de Libras- Alfabeto de Sinais Digital",
    descricao:
      "Ferramenta inovadora que converte texto em representações visuais do alfabeto em Libras. Cada letra é exibida como o gesto correspondente. Ideal para aprendizado e comunicação básica.",
    projetoUrl: "https://urickalberth.github.io/tradutor_libras",
    imgUrl: "https://urickalberth.github.io/tradutor_libras/tradutor_libras.png",
    categoria: "ferramentas"
  },
	30: {
    nome: "Simulador de Megasena",
    descricao:
      "Ferramenta que testa na prática as possibilidades de você acertar os 6 números escolhidos em 100 sorteios",
    projetoUrl: "https://urickalberth.github.io/simulador_megasena",
    imgUrl: "https://urickalberth.github.io/simulador_megasena/simulador_megasena.png",
    categoria: "ferramentas"
  },
31: {
    nome: "UNO o Jogo",
    descricao:
      "Releitura do jogo UNO, jogado contra 3 maquinas, o jogo possui todas as regras do jogo original, com muita lógica de programação.",
    projetoUrl: "https://urickalberth.github.io/uno",
    imgUrl: "https://urickalberth.github.io/uno/uno.png",
    categoria: "jogos"
  },
32: {
    nome: "Controle de Combustível",
    descricao:
      "Sistema de que controla o nível de combustivel no tanque, a sua quilometragem, autonomina, valor para viagens, e frequência de abastecimentos.",
    projetoUrl: "https://urickalberth.github.io/controle_combustivel",
    imgUrl: "https://urickalberth.github.io/controle_combustivel/controle_combustivel.png",
    categoria: "ferramentas"
  },
33: {
    nome: "Senha o jogo",
    descricao:
      "Jogo de advinhação de senha , com dicas se os dígitos  contem e se estão na posição correta.",
    projetoUrl: "https://urickalberth.github.io/senha",
    imgUrl: "https://urickalberth.github.io/senha/senha.png",
    categoria: "jogos"
  },
34: {
    nome: "JurisExtract PRO - Extração de Números de Processo",
    descricao:
      "Cole qualquer texto contendo números de processo no formato padrão (NNNNNNN-NN.NNNN.N.NN.NNNN) e sistema irá identificar, organizar e disponibilizar para cópia de forma prática.",
    projetoUrl: "https://urickalberth.github.io/JurisExtract_PRO",
    imgUrl: "https://urickalberth.github.io/JurisExtract_PRO/JurisExtract_PRO.png",
    categoria: "ferramentas"
  }
};


// Menu hamburguer
const burgerIcon = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burgerIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu li a").forEach(item => {
  item.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});

// Projeto de Destaque
document.getElementById("verMais").addEventListener("click", () => {
  const fullProject = document.querySelector(".full-project");
  fullProject.style.display = fullProject.style.display === "none" || fullProject.style.display === "" ? "block" : "none";
  document.getElementById("verMais").textContent = fullProject.style.display === "none" ? "Mais Detalhes" : "Ocultar Detalhes";
});


// Carregar e filtrar projetos
function carregarProjetos(filtro = "all") {
	let contagem=0;
  const projetosList = document.getElementById("projetos-list");
  projetosList.innerHTML = "";
  for (const key in projetos) {
    const projeto = projetos[key];
    if (filtro === "all" || projeto.categoria === filtro) {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.projetoUrl}" target="_blank" class="project-link">
          Ver Projeto
          <img src="${projeto.imgUrl}" alt="Captura de tela do projeto ${projeto.nome}" loading="lazy">
        </a>
      `;
      projetosList.appendChild(li);
			contagem++;
    }
  }
	document.getElementById("quantidades_projetos").textContent=contagem;
}

function filterProjects(categoria) {
  carregarProjetos(categoria);
  document.querySelectorAll(".filter-buttons button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Carregar projetos ao iniciar
document.addEventListener("DOMContentLoaded", () => carregarProjetos());