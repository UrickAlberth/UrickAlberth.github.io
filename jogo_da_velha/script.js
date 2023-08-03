const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let ptX = document.querySelector("#ptX");
let ptO = document.querySelector("#ptO");
const check_pc = document.querySelector("#pc");
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Linhas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Colunas
  [0, 4, 8],
  [2, 4, 6] // Diagonais
];

function checkWin(player) {
  return winCombinations.some((combination) =>
    combination.every((index) => board[index] === player)
  );
}

function checkDraw() {
  return board.every((cell) => cell !== "");
}

function makeMove(index) {
  if (gameOver || board[index] !== "") return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cell")[i].classList.remove("win-cell");
  }

  if (checkWin(currentPlayer)) {
    alert(`Jogador ${currentPlayer} venceu!`);
    currentPlayer === "X"
      ? (ptX.textContent = parseInt(ptX.textContent) + 1)
      : (ptO.textContent = parseInt(ptO.textContent) + 1);
    gameOver = true;

    // Adicionar a classe "win-cell" às células da combinação vencedora
    const cellCombination = getWinCombination(currentPlayer);
    for (const cellIndex of cellCombination) {
      document
        .getElementsByClassName("cell")
        [cellIndex].classList.add("win-cell");
    }
  } else if (checkDraw()) {
    alert("Empate!");
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const player = document.querySelector("#currentPlayer");
    player.textContent = currentPlayer;
    if (currentPlayer === "O") {
      if (check_pc.checked) {
        // Chamada da função para o movimento do computador
        makeComputerMove();
      }
    }
  }
}

function makeComputerMove() {
  var dificuldade = document.querySelector('input[name="dificuldade"]:checked')
    .value;
  if (dificuldade === "dificil") {
    const bestMove = minimax(board, currentPlayer).index;
    setTimeout(() => makeMove(bestMove), 200);
    return;
  } else if (dificuldade == "medio") {
    // Verifica o primeiro movimento do adversário
    const opponentPlayer = currentPlayer === "X" ? "O" : "X";
    const firstMove =
      board.filter((cell) => cell === opponentPlayer).length === 1;

    if (firstMove) {
      // Se o adversário escolheu o espaço 4 (centro), o computador escolhe uma das quinas (0, 2, 6, 8)
      if (board[4] === opponentPlayer) {
        const corners = [0, 2, 6, 8];
        const randomIndex = Math.floor(Math.random() * corners.length);
        setTimeout(() => makeMove(corners[randomIndex]), 200);
        return;
      }

      // Se o adversário escolheu uma das quinas (0, 2, 6, 8), o computador escolhe o espaço 4 (centro)
      if ([0, 2, 6, 8].some((index) => board[index] === opponentPlayer)) {
        setTimeout(() => makeMove(4), 200);
        return;
      }
    }

    // Procura por uma posição que leve à vitória para o computador
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];

      // Prioriza a vitória do computador
      if (
        board[a] === currentPlayer &&
        board[b] === currentPlayer &&
        board[c] === ""
      ) {
        setTimeout(() => makeMove(c), 200);
        return;
      }
      if (
        board[a] === currentPlayer &&
        board[c] === currentPlayer &&
        board[b] === ""
      ) {
        setTimeout(() => makeMove(b), 200);
        return;
      }
      if (
        board[b] === currentPlayer &&
        board[c] === currentPlayer &&
        board[a] === ""
      ) {
        setTimeout(() => makeMove(a), 200);
        return;
      }
    }

    // Verifica se o adversário pode vencer na próxima jogada
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];

      // Bloqueia o adversário de vencer
      if (
        board[a] === opponentPlayer &&
        board[b] === opponentPlayer &&
        board[c] === ""
      ) {
        setTimeout(() => makeMove(c), 200);
        return;
      }
      if (
        board[a] === opponentPlayer &&
        board[c] === opponentPlayer &&
        board[b] === ""
      ) {
        setTimeout(() => makeMove(b), 200);
        return;
      }
      if (
        board[b] === opponentPlayer &&
        board[c] === opponentPlayer &&
        board[a] === ""
      ) {
        setTimeout(() => makeMove(a), 200);
        return;
      }
    }
  }
  // Caso não haja possibilidade de vitória nem bloqueio, faz um movimento aleatório
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * 9);
  } while (board[randomIndex] !== "");

  setTimeout(() => makeMove(randomIndex), 200); // Espera meio segundo para simular a resposta do computador
}

function getWinCombination(player) {
  return winCombinations.find((combination) =>
    combination.every((index) => board[index] === player)
  );
}

function minimax(board, player) {
  const emptyCells = getEmptyCells(board);

  if (checkWin("X", board)) {
    return { score: -1 };
  } else if (checkWin("O", board)) {
    return { score: 1 };
  } else if (emptyCells.length === 0) {
    return { score: 0 };
  }

  const moves = [];
  for (let i = 0; i < emptyCells.length; i++) {
    const move = {};
    move.index = emptyCells[i];
    board[emptyCells[i]] = player;

    if (player === "O") {
      const result = minimax(board, "X");
      move.score = result.score;
    } else {
      const result = minimax(board, "O");
      move.score = result.score;
    }

    board[emptyCells[i]] = "";
    moves.push(move);
  }

  let bestMove;
  if (player === "O") {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

function getEmptyCells(board) {
  const emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptyCells.push(i);
    }
  }
  return emptyCells;
}

// Reinicia o jogo
function resetGame() {
  board.fill("");
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
  currentPlayer = "X";
  gameOver = false;
}

function zerarPts() {
  ptO.textContent = 0;
  ptX.textContent = 0;
}

check_pc.addEventListener("click", function () {
  const p2 = document.querySelector("#p2");
  if (check_pc.checked) {
    p2.textContent = "Computador";
  } else {
    p2.textContent = "Humano";
  }
});

// Event listener para reiniciar o jogo ao clicar no tabuleiro após o fim da partida
document.querySelector(".board").addEventListener("click", function () {
  if (gameOver) {
    resetGame();
  }
});

// Inicia o jogo
resetGame();