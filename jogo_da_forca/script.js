let wordList = {
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
let pontuacao = {
  nome: "_",
  pontos: 0
}
let record = {
  nome: "_",
  pontos: 0
}
var usedWords = [];
let total_de_palavras = 2;
// Função para salvar as Record no LocalStorage
function saveRecordToLocalStorage() {
  localStorage.setItem("record", JSON.stringify(record));

}

// Função para carregar as Record do LocalStorage
function loadRecordFromLocalStorage() {
  const storedRecord = localStorage.getItem("record");
  if (storedRecord && JSON.parse(storedRecord).pontos && JSON.parse(storedRecord).nome) {
    record.pontos = JSON.parse(storedRecord).pontos;
    record.nome = JSON.parse(storedRecord).nome;
    carregarRecord();
  }
}
loadRecordFromLocalStorage();
function carregarRecord() {
  const Erecord = document.getElementById("record");
  Erecord.textContent = record.nome + " = " + record.pontos;
  document.querySelector("#ConfgRecord").textContent = record.nome + " = " + record.pontos;
}
function carregarPontuacao() {
  const pontos = document.getElementById("pontuacao");
  pontos.textContent = pontuacao.nome + " = " + pontuacao.pontos;
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
  contPalavras()
  carregarRecord();
  saveRecordToLocalStorage();
  carregarPontuacao();
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
      palavra[i] === " "
    ) {
      espaco.innerHTML = palavra[i] === " " ? "&nbsp;&nbsp;" : palavra[i];
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
    pontuacao.pontos += getScore(wrongAttempts);
    if (pontuacao.pontos >= record.pontos) {
      record.pontos = pontuacao.pontos;
      record.nome = pontuacao.nome;
    }
    alert("Parabéns! Você acertou a palavra que era: " + chosenWord);
    updateWordDisplay();


  }

  if (wrongAttempts >= maxAttempts) {
    pontuacao.nome += getScore(wrongAttempts);
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
  document.addEventListener("keypress", keyPressHandler);
}

function keyPressHandler(event) {
  const letters = document.querySelectorAll(".letter");
  const letter = String.fromCharCode(event.keyCode).toUpperCase();
  if (/^[A-Z]$/.test(letter)) {
    letters.forEach((letter2) => {
      if (letter2.textContent == letter) {
        letter2.style = "background:#ddd";
      }
    });
    checkLetter(letter);
  }
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
  if (usedWords.length == total_de_palavras) {
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
  document.querySelector(".keyboard").style = "display:block";
  chosenWord = "";
  guessedLetters = [];
  wrongAttempts = 0;
  pontuacao.pontos = 0;
  pontuacao.nome = "_";
  usedWords = [];

  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter2) => {
    letter2.style = "background-color:#fff";
  });
  boneco(0);
  document.removeEventListener("keypress", keyPressHandler);
  updateWordDisplay();
  document.querySelector(".configuracao").style = "height:100%;";
  carregarCategorias();
  carregarPalavrasRemove();
  document.querySelector("#ConfgRecord").textContent = record.nome + " = " + record.pontos;
}

function contPalavras() {
  document.querySelector("#restantes").textContent = usedWords.length;
  document.querySelector("#total").textContent = total_de_palavras;
}

// Função para inicializar o jogo
function initGame() {
  if (usedWords.length === 0) {
    chooseWord();
  } else if (usedWords.length == total_de_palavras) {
    alert(
      "Parabéns! Você jogou todas as palavras. Pontuação final: " + pontuacao.pontos
    );
    setTimeout(function () {
      document.querySelector(".keyboard").style = "display:none";
      reiniciar()

    }, 3000);
    return;
  } else {
    chooseWord();
  }

  createLetters();
  updateWordDisplay();
  totalPalavras();
  contPalavras();
  pontuacao.nome = document.querySelector("#nome_jogador").value;
  carregarPontuacao();
  document.querySelector(".configuracao").style = "height:0px;";
}

function muda_valor() {
  document.querySelector("#qtn").textContent = document.querySelector("#qtnWord").value;
}

function totalPalavras() {
  total_de_palavras = document.querySelector("#qtnWord").value;
}

const qtnWordInput = document.querySelector("#qtnWord");
function valorqtnWordInput() {
  qtnWordInput.setAttribute("min", "1");
  qtnWordInput.setAttribute("max", Object.values(wordList).flat().length.toString());
}
valorqtnWordInput();

document.addEventListener("DOMContentLoaded", function () {
  const novaPalavraInput = document.querySelector("#nova_palavra");
  const categoriaInput = document.querySelector("#categoria");
  const adicionarPalavraButton = document.querySelector("#adicionar_palavra");
  const removerPalavraSelect = document.querySelector("#remover_palavra");
  const removerPalavraButton = document.querySelector("#remover_palavra_button");
  carregarCategorias();
  carregarPalavrasRemove();
  // Função para adicionar nova palavra
  adicionarPalavraButton.addEventListener("click", function () {
    const novaPalavra = novaPalavraInput.value.trim();
    const categoriaSelecionada = categoriaInput.value;

    if (novaPalavra && categoriaSelecionada) {
      // Aqui você pode adicionar a lógica para adicionar a palavra à categoria selecionada
      // Certifique-se de atualizar o objeto wordList
      if (categoriaSelecionada == "NovaCategoria") {
        let NovaCategoria = prompt("Digite o nome da categoria:")
        wordList[NovaCategoria] = [];
        wordList[NovaCategoria].push(novaPalavra);
      } else {
        wordList[categoriaSelecionada].push(novaPalavra);
      }

      // Depois de adicionar a palavra, atualize as opções no select removerPalavraSelect
      carregarCategorias();
      carregarPalavrasRemove();
      valorqtnWordInput()
      muda_valor()
      novaPalavraInput.value = "";
      alert("Palavra adicionada com sucesso!");
    }
  });

  // Função para remover palavra
  removerPalavraButton.addEventListener("click", function () {
    const palavraSelecionada = removerPalavraSelect.value;

    if (palavraSelecionada) {
      // Aqui você pode adicionar a lógica para remover a palavra da lista
      // Certifique-se de atualizar o objeto wordList
      let categoriaRemove = findCategory(palavraSelecionada);
      const removeIndex = wordList[categoriaRemove].indexOf(palavraSelecionada);
      if (removeIndex !== -1) {
        wordList[categoriaRemove].splice(removeIndex, 1);
      }

      // Depois de remover a palavra, atualize as opções no select removerPalavraSelect
      carregarCategorias();
      carregarPalavrasRemove();
      valorqtnWordInput()
      muda_valor()
      alert("Palavra removida com sucesso!");
    }
  });
});

const findCategory = (word) => {
  for (const category in wordList) {
    if (wordList[category].includes(word)) {
      return category;
    }
  }
  return null; // Retorna null se a palavra não for encontrada em nenhuma categoria
};

function carregarCategorias() {
  const categoriaInput = document.querySelector("#categoria");
  categoriaInput.innerHTML = "";
  categoriaInput.innerHTML = '<option value="NovaCategoria">Criar Nova Categoria</option>';
  const categorias = Object.keys(wordList);
  for (let i = 0; i < categorias.length; i++) {
    const OpCategoria = document.createElement("option");
    OpCategoria.value = categorias[i];
    OpCategoria.textContent = categorias[i];
    categoriaInput.appendChild(OpCategoria);
  }
}

function carregarPalavrasRemove() {
  const removerPalavraSelect = document.querySelector("#remover_palavra");
  removerPalavraSelect.innerHTML = "";
  const palavras = Object.values(wordList).flat();
  for (let i = 0; i < palavras.length; i++) {
    const OpPalavra = document.createElement("option");
    OpPalavra.value = palavras[i];
    OpPalavra.textContent = palavras[i];
    removerPalavraSelect.appendChild(OpPalavra);
  }
}