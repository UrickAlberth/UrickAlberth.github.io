const wordList = {
  Animal: [
    "Elefante",
    "Tigre",
    "Leão",
    "Girafa",
    "Rinoceronte",
    "Gorila",
    "Hipopótamo",
    "Zebra",
    "Cachorro",
    "Gato",
    "Coelho",
    "Leopardo",
    "Pinguim",
    "Crocodilo",
    "Cobra",
    "Baleia",
    "Golfinho",
    "Macaco",
    "Urso",
    "Esquilo"
  ],
  Fruta: [
    "Maçã",
    "Laranja",
    "Morango",
    "Abacaxi",
    "Manga",
    "Pera",
    "Kiwi",
    "Cereja",
    "Limão",
    "Framboesa",
    "Pêssego",
    "Maracujá",
    "Melão",
    "Amora",
    "Melancia",
    "Banana",
    "Uva",
    "Mamão",
    "Pitaya",
    "Goiaba"
  ],
  Cores: [
    "Vermelho",
    "Azul",
    "Amarelo",
    "Verde",
    "Rosa",
    "Roxo",
    "Laranja",
    "Marrom",
    "Preto",
    "Branco",
    "Cinza",
    "Bege",
    "Turquesa",
    "Violeta",
    "Dourado",
    "Prateado",
    "Ciano",
    "Magenta",
    "Safira",
    "Coral"
  ],
  Países: [
    "Brasil",
    "Estados Unidos",
    "Canadá",
    "Austrália",
    "Alemanha",
    "França",
    "Japão",
    "China",
    "Índia",
    "Rússia",
    "México",
    "Reino Unido",
    "Itália",
    "Espanha",
    "Argentina",
    "Coreia do Sul",
    "África do Sul",
    "Egito",
    "Suíça",
    "Noruega"
  ],
  Profissões: [
    "Médico",
    "Professor",
    "Engenheiro",
    "Advogado",
    "Jornalista",
    "Arquiteto",
    "Astrônomo",
    "Cozinheiro",
    "Bombeiro",
    "Policial",
    "Fotógrafo",
    "Músico",
    "Escritor",
    "Ator",
    "Pintor",
    "Dançarino",
    "Cientista",
    "Veterinário",
    "Eletricista",
    "Jardineiro"
  ]
}; // Coloque aqui as palavras que o jogo vai utilizar

const maxAttempts = 6;
let chosenWord = "";
let dica = "";
let guessedLetters = [];
let wrongAttempts = 0;
let pontuacao = 0;
let record=0;
var usedWords = [];

  // Função para salvar as Record no LocalStorage
    function saveRecordToLocalStorage() {
      localStorage.setItem("record", JSON.stringify(record));
    }

    // Função para carregar as Record do LocalStorage
    function loadRecordFromLocalStorage() {
      const storedRecord = localStorage.getItem("record");
      if (storedRecord) {
        record = JSON.parse(storedRecord);
        carregarRecord();
      }
    }
loadRecordFromLocalStorage();
function carregarRecord(){
  const Erecord = document.getElementById("record");
  Erecord.textContent=record;
}

function normalizeWord(word) {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}
// Função para escolher uma palavra aleatória da lista
function chooseWord() {
  const categories = Object.keys(wordList);
  var wordsInCategory;
  let newWordIndex;
  do {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    dica = randomCategory;
    wordsInCategory = wordList[randomCategory];  
    newWordIndex = Math.floor(Math.random() * wordsInCategory.length);
  } while (usedWords.includes(normalizeWord(wordsInCategory[newWordIndex])));
  usedWords.push(normalizeWord(wordsInCategory[newWordIndex]));
  chosenWord = wordsInCategory[newWordIndex].toUpperCase();
}

// Função para atualizar a exibição da palavra na tela
function updateWordDisplay() {
  carregarRecord();
  saveRecordToLocalStorage();
  const pontos = document.getElementById("pontos");
  pontos.textContent = pontuacao;
  const palavra = chosenWord;
  const letras = document.getElementById("letras");
  const Ldica = document.getElementById("dica");
  const espacoDica = document.createElement("td");
  espacoDica.setAttribute("colspan", palavra.length);
  letras.innerHTML = ""; // Limpa o conteúdo anterior antes de atualizar
  Ldica.innerHTML = "";
  let allLettersGuessed = true; // Variável para verificar se todas as letras foram adivinhadas corretamente

  for (let i = 0; i < palavra.length; i++) {
    const espaco = document.createElement("td");
    if (
      guessedLetters.includes(normalizeWord(palavra[i])) ||
      palavra[i] === "  "
    ) {
      espaco.innerHTML = palavra[i];
    } else {
      espaco.innerHTML = "_";
      allLettersGuessed = false;
    }
    espacoDica.innerHTML = dica;
    Ldica.appendChild(espacoDica);
    letras.appendChild(espaco);
  }

  return allLettersGuessed; // Retornamos a variável que indica se todas as letras foram adivinhadas
}

// Função para verificar se a letra escolhida está na palavra
function checkLetter(letter) {
  letter = letter.toUpperCase();
  if (guessedLetters.includes(letter)) {
    //verifica se repetiu letra
    return;
  }

  guessedLetters.push(letter);
  if (!normalizeWord(chosenWord).includes(letter)) {
    wrongAttempts++;
    boneco(wrongAttempts);
  }

  const gameWon = updateWordDisplay(); // Verificamos se todas as letras foram adivinhadas
  if (gameWon) {
    pontuacao += getScore(wrongAttempts);
    if(pontuacao>=record){
      record=pontuacao;
    }
    alert("Parabéns! Você acertou a palavra que era: " + chosenWord);
    updateWordDisplay();
     setTimeout(function () {
 proximaPalavra();
         }, 2000);
    
  }

  if (wrongAttempts >= maxAttempts) {
    pontuacao += getScore(wrongAttempts);
    alert("Esgotou suas tentativas! A palavra era: " + chosenWord);
    proximaPalavra();
  }
}

function getScore(wrongAttempts) {
  const scores = [15, 10, 7, 6, 5, 3, 1];
  return scores[wrongAttempts];
}

// Função para criar as letras disponíveis para adivinhar
function createLetters() {
  // Implemente aqui a criação das letras disponíveis usando event listeners para chamar a função checkLetter
  // Adicionar o event listener para os cliques nas letras do teclado virtual
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter) => {
    letter.addEventListener("click", function () {
      this.style = "background:#ddd";
      checkLetter(this.textContent);
    });
  });

  // Adicionar o event listener para as teclas do teclado real
  document.addEventListener("keypress", function (event) {
    const letter = String.fromCharCode(event.keyCode).toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
      letters.forEach((letter2) => {
        if (letter2.textContent == letter) {
          letter2.style = "background:#ddd";
        }
      });
      checkLetter(letter);
    }
  });
}

function boneco(erros) {
  const cabeca = document.getElementById("cabeca");
  const tronco = document.getElementById("tronco");
  const pernas = document.getElementById("pernas");
  const partesEnforcamento = ["", "O", "|", "/|.", "/|\\", "/.", "/\\"];

  if (erros >= 0 && erros <= partesEnforcamento.length - 1) {
    cabeca.textContent = erros >= 1 ? partesEnforcamento[1] : "";
    tronco.textContent =
      erros === 2
        ? partesEnforcamento[2]
        : erros === 3
        ? partesEnforcamento[3]
        : erros >= 4
        ? partesEnforcamento[4]
        : "";
    pernas.textContent =
      erros === 5
        ? partesEnforcamento[5]
        : erros >= 6
        ? partesEnforcamento[6]
        : "";
  }
}

function proximaPalavra() {
  if (usedWords.length === Object.values(wordList).flat().length) {
    initGame();
    return;
  }
  const confirmarProxima = confirm("Próxima Palavra?");

  if (!confirmarProxima) {
    return;
  }
  guessedLetters = [];
  wrongAttempts = 0;
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter2) => {
    letter2.style = "background-color:#fff";
  });
  boneco(0);
  chooseWord();
  updateWordDisplay();
}

function reiniciar() {
  const confirmarReiniciar = confirm("Deseja Reiniciar?");

  if (!confirmarReiniciar) {
    return;
  }

  chosenWord = "";
  guessedLetters = [];
  wrongAttempts = 0;
  pontuacao = 0;
  usedWords = [];

  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter2) => {
    letter2.style = "background-color:#fff";
  });
  boneco(0);
  chooseWord();
  updateWordDisplay();
}

// Função para inicializar o jogo
function initGame() {
  if (usedWords.length === 0) {
    chooseWord();
  } else if (usedWords.length === Object.values(wordList).flat().length) {
    alert(
      "Parabéns! Você jogou todas as palavras. Pontuação final: " + pontuacao
    );
     setTimeout(function () {
 reiniciar()
         }, 3000);
    return ;
  } else {
    chooseWord();
  }

  createLetters();
  updateWordDisplay();
}

initGame();
