var WIN_PLAYER_1 = "Player1 win!";
var WIN_PLAYER_2 = "Player2 wins!";
var GAME_IN_PROGRESS =
	"Game is in progress. Do you really want to start new game now?";
var COLS = 19;
var ROWS = 19;
var player1Score = 0;
var player2Score = 0;
var currentPlayer = 1; // Define o jogador atual (1 para o jogador 1, 2 para o jogador 2)
var isGameInProgress = true;
var board;
startNewGame();

function startNewGame() {
	var cols = COLS;
	var rows = ROWS;

	// Limpa o tabuleiro
	for (var b = 0; b < rows; b++) {
		for (var a = 0; a < cols; a++) {
			var cell = document.getElementById(a + "-" + b);
			cell.innerHTML = "";
		}
	}

	// Inicializa o tabuleiro e o jogo
	resetBoard();
	isGameInProgress = true;
	currentPlayer = 1; // Define o jogador 1 como o primeiro a jogar
}

function play(a, c) {
	if (isGameInProgress) {
		var cell = document.getElementById(a + "-" + c);
		if (cell.innerHTML == "") {
			if (currentPlayer === 1) {
				cell.innerHTML = "<span class='move user-move'></span>";
				board[a][c] = 1; // Define a posição no tabuleiro como do jogador 1
				currentPlayer = 2; // Muda para o jogador 2
			} else if (currentPlayer === 2) {
				cell.innerHTML = "<span class='move comp-move'></span>";
				board[a][c] = 2; // Define a posição no tabuleiro como do jogador 2
				currentPlayer = 1; // Muda para o jogador 1
			}
			checkWinner();
		}
	}
	return false;
}

function resetBoard() {
	var cols = COLS;
	var rows = ROWS;
	board = new Array(cols);
	for (var b = 0; b < cols; b++) {
		board[b] = new Array(rows);
	}
	for (var b = 0; b < cols; b++) {
		for (var a = 0; a < rows; a++) {
			board[b][a] = 0;
		}
	}
}

function checkWinner() {
	for (var a = 0; a < COLS; a++) {
		for (var c = 0; c < ROWS; c++) {
			var currentPlayerPiece = board[a][c];
			if (currentPlayerPiece === 0) continue;

			// Verifique na horizontal
			if (
				a + 4 < COLS &&
				currentPlayerPiece === board[a + 1][c] &&
				currentPlayerPiece === board[a + 2][c] &&
				currentPlayerPiece === board[a + 3][c] &&
				currentPlayerPiece === board[a + 4][c]
			) {
				announceWinner(currentPlayerPiece);
				return;
			}

			// Verifique na vertical
			if (
				c + 4 < ROWS &&
				currentPlayerPiece === board[a][c + 1] &&
				currentPlayerPiece === board[a][c + 2] &&
				currentPlayerPiece === board[a][c + 3] &&
				currentPlayerPiece === board[a][c + 4]
			) {
				announceWinner(currentPlayerPiece);
				return;
			}

			// Verifique na diagonal ascendente (/)
			if (
				a + 4 < COLS &&
				c + 4 < ROWS &&
				currentPlayerPiece === board[a + 1][c + 1] &&
				currentPlayerPiece === board[a + 2][c + 2] &&
				currentPlayerPiece === board[a + 3][c + 3] &&
				currentPlayerPiece === board[a + 4][c + 4]
			) {
				announceWinner(currentPlayerPiece);
				return;
			}

			// Verifique na diagonal descendente (\)
			if (
				a - 4 >= 0 &&
				c + 4 < ROWS &&
				currentPlayerPiece === board[a - 1][c + 1] &&
				currentPlayerPiece === board[a - 2][c + 2] &&
				currentPlayerPiece === board[a - 3][c + 3] &&
				currentPlayerPiece === board[a - 4][c + 4]
			) {
				announceWinner(currentPlayerPiece);
				return;
			}
		}
	}
}

function announceWinner(player) {
	if (player === 1) {
		alert(WIN_PLAYER_1);
		player1Score++;
	} else if (player === 2) {
		alert(WIN_PLAYER_2);
		player2Score++;
	}
	document.querySelector("#scorePlayer1").textContent = player1Score;
	document.querySelector("#scorePlayer2").textContent = player2Score;
	isGameInProgress = false;

	// Adicione este código para marcar apenas as 5 peças vencedoras
	var winningPieces = findWinningPieces(player);
	winningPieces.forEach(function (coordinate) {
		let td = document.getElementById(coordinate[0] + "-" + coordinate[1]);
		var spanElement = td.getElementsByTagName("span")[0];
		spanElement.classList.add("user-win");
	});

	// Pode atualizar a exibição da pontuação ou realizar outras ações necessárias.
}

function findWinningPieces(player) {
	for (var a = 0; a < COLS; a++) {
		for (var c = 0; c < ROWS; c++) {
			var currentPlayerPiece = board[a][c];
			if (currentPlayerPiece === player) {
				// Verifique na horizontal
				if (
					a + 4 < COLS &&
					currentPlayerPiece === board[a + 1][c] &&
					currentPlayerPiece === board[a + 2][c] &&
					currentPlayerPiece === board[a + 3][c] &&
					currentPlayerPiece === board[a + 4][c]
				) {
					return [
						[a, c],
						[a + 1, c],
						[a + 2, c],
						[a + 3, c],
						[a + 4, c]
					];
				}

				// Verifique na vertical
				if (
					c + 4 < ROWS &&
					currentPlayerPiece === board[a][c + 1] &&
					currentPlayerPiece === board[a][c + 2] &&
					currentPlayerPiece === board[a][c + 3] &&
					currentPlayerPiece === board[a][c + 4]
				) {
					return [
						[a, c],
						[a, c + 1],
						[a, c + 2],
						[a, c + 3],
						[a, c + 4]
					];
				}

				// Verifique na diagonal ascendente (/)
				if (
					a + 4 < COLS &&
					c + 4 < ROWS &&
					currentPlayerPiece === board[a + 1][c + 1] &&
					currentPlayerPiece === board[a + 2][c + 2] &&
					currentPlayerPiece === board[a + 3][c + 3] &&
					currentPlayerPiece === board[a + 4][c + 4]
				) {
					return [
						[a, c],
						[a + 1, c + 1],
						[a + 2, c + 2],
						[a + 3, c + 3],
						[a + 4, c + 4]
					];
				}

				// Verifique na diagonal descendente (\)
				if (
					a - 4 >= 0 &&
					c + 4 < ROWS &&
					currentPlayerPiece === board[a - 1][c + 1] &&
					currentPlayerPiece === board[a - 2][c + 2] &&
					currentPlayerPiece === board[a - 3][c + 3] &&
					currentPlayerPiece === board[a - 4][c + 4]
				) {
					return [
						[a, c],
						[a - 1, c + 1],
						[a - 2, c + 2],
						[a - 3, c + 3],
						[a - 4, c + 4]
					];
				}
			}
		}
	}

	return [];
}