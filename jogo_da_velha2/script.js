const board = new Array(81);
let currentPlayer = "X";
let gameOver = false;
let ptX = document.querySelector("#ptX");
let ptO = document.querySelector("#ptO");
const check_pc = document.querySelector("#pc");
const winCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[9, 10, 11],
	[12, 13, 14],
	[15, 16, 17],
	[18, 19, 20],
	[21, 22, 23],
	[24, 25, 26],
	[27, 28, 29],
	[30, 31, 32],
	[33, 34, 35],
	[36, 37, 38],
	[39, 40, 41],
	[42, 43, 44],
	[45, 46, 47],
	[48, 49, 50],
	[51, 52, 53],
	[54, 55, 56],
	[57, 58, 59],
	[60, 61, 62],
	[63, 64, 65],
	[66, 67, 68],
	[69, 70, 71],
	[72, 73, 74],
	[75, 76, 77],
	[78, 79, 80],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[9, 12, 15],
	[10, 13, 16],
	[11, 14, 17],
	[18, 21, 24],
	[19, 22, 25],
	[20, 23, 26],
	[27, 30, 33],
	[28, 31, 34],
	[29, 32, 35],
	[36, 39, 42],
	[37, 40, 43],
	[38, 41, 44],
	[45, 48, 51],
	[46, 49, 52],
	[47, 50, 53],
	[54, 57, 60],
	[55, 58, 61],
	[56, 59, 62],
	[63, 66, 69],
	[64, 67, 70],
	[65, 68, 71],
	[72, 75, 78],
	[73, 76, 79],
	[74, 77, 80],
	[0, 4, 8],
	[2, 4, 6],
	[9, 13, 17],
	[11, 13, 15],
	[18, 22, 26],
	[20, 22, 24],
	[27, 31, 35],
	[29, 31, 33],
	[36, 40, 44],
	[38, 40, 42],
	[45, 49, 53],
	[47, 49, 51],
	[54, 58, 62],
	[56, 58, 60],
	[63, 67, 71],
	[65, 67, 69],
	[72, 76, 80]
];

function checkWin(player) {
	let winningCombination = null;

	winCombinations.forEach((combination, index) => {
		if (combination.every((index) => board[index] === player)) {
			winningCombination = index;
		}
	});

	if (winningCombination !== null) {
		winCombinations.splice(winningCombination, 1);
	}

	return winningCombination !== null;
}

function checkDraw() {
	return board.every((cell) => cell !== "");
}

let box = document.querySelector("#c1");
function makeMove(index, bx) {
	if (gameOver || board[index] !== "") return;

	board[index] = currentPlayer;

	document.getElementById(index).innerText = currentPlayer;
	for (let i = 1; i < 10; i++) {
		box = document.querySelector("#c" + i);
		box.style = "border: 1px solid #ccc;";
	}
	box = document.querySelector("#c" + bx);
	box.style = "border: 1px solid cyan;";

	for (let i = 0; i < 81; i++) {
		if (document.getElementById(i) != undefined) {
			document.getElementById(i).classList.add("click");
		}
	}

	for (let i = 0; i < 9; i++) {
		if (box.getElementsByClassName("cell")[i] != undefined) {
			box.getElementsByClassName("cell")[i].classList.remove("click");
		} else {
			box.style = "border: 1px solid #ccc;";
			box_disponivel();
		}
	}

	if (checkWin(currentPlayer)) {
		currentPlayer === "X"
			? (ptX.textContent = parseInt(ptX.textContent) + 1)
			: (ptO.textContent = parseInt(ptO.textContent) + 1);

		//gameOver = true;

		/* Adicionar a classe "win-cell" às células da combinação vencedora
    const cellCombination = getWinCombination(currentPlayer);
    for (const cellIndex of cellCombination) {
      document
        .getElementsByClassName("cell")
        [cellIndex].classList.add("win-cell");
    }*/

		var elementoPai = document.getElementById(index).parentNode;
		elementoPai.innerText = currentPlayer;
		for (let i = 0; i < 9; i++) {
		if (box.getElementsByClassName("cell")[i] != undefined) {
			box.getElementsByClassName("cell")[i].classList.remove("click");
		} else {
			box.style = "border: 1px solid #ccc;";
			box_disponivel();
		}
	}
		checarVencedor();
	} else if (checkDraw()) {
		var elementoPai = document.getElementById(index).parentNode;
		elementoPai.innerText = "X/O";
		//alert("Empate!");
		//gameOver = true;
	}
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

function box_disponivel() {
	for (let i = 0; i < 9; i++) {
		box = document.querySelector("#c" + (i + 1));

		if (box.getElementsByClassName("cell")[i] != undefined) {
			for (let j = 0; j < 9; j++) {
				box.getElementsByClassName("cell")[j].classList.remove("click");
			}
			box.style = "border: 1px solid cyan;";
		}
	}
}
let board2 = [];
function checarVencedor() {
	for (let i = 1; i < 10; i++) {
		box = document.querySelector("#c" + i);

		if (box.getElementsByClassName("board2")[0].textContent != undefined) {
			let a = box.getElementsByClassName("board2")[0].textContent;

			board2.push(a);
		}
	}

	if (
		(board2[0] == board2[1] || board2[1] == "X/O") &&
		(board2[0] == board2[2] || board2[2] == "X/O")
	) {
		if (board2[0] == "X" || board2[0] == "O") {
			alert("ganhou!" + board2[0]);
		}
	}
	if (
		(board2[3] == board2[4] || board2[4] == "X/O") &&
		(board2[3] == board2[5] || board2[5] == "X/O")
	) {
		if (board2[3] == "X" || board2[3] == "O") {
			alert("ganhou!" + board2[3]);
		}
	}
	if (
		(board2[6] == board2[7] || board2[7] == "X/O") &&
		(board2[6] == board2[8] || board2[8] == "X/O")
	) {
		if (board2[6] == "X" || board2[6] == "O") {
			alert("ganhou!" + board2[6]);
		}
	}
	if (
		(board2[0] == board2[3] || board2[3] == "X/O") &&
		(board2[0] == board2[6] || board2[6] == "X/O")
	) {
		if (board2[0] == "X" || board2[0] == "O") {
			alert("ganhou!" + board2[0]);
		}
	}
	if (
		(board2[1] == board2[4] || board2[4] == "X/O") &&
		(board2[1] == board2[7] || board2[7] == "X/O")
	) {
		if (board2[1] == "X" || board2[1] == "O") {
			alert("ganhou!" + board2[1]);
		}
	}
	if (
		(board2[2] == board2[5] || board2[5] == "X/O") &&
		(board2[2] == board2[8] || board2[8] == "X/O")
	) {
		if (board2[2] == "X" || board2[2] == "O") {
			alert("ganhou!" + board2[2]);
		}
	}
	board2 = [];
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
