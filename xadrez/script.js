const chessBoard = document.getElementById("chess-board");
const initialBoard = [
	["r", "n", "b", "q", "k", "b", "n", "r"],
	["p", "p", "p", "p", "p", "p", "p", "p"],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["P", "P", "P", "P", "P", "P", "P", "P"],
	["R", "N", "B", "Q", "K", "B", "N", "R"]
];

const pieces = {
	r: "♜",
	n: "♞",
	b: "♝",
	q: "♛",
	k: "♚",
	p: "♟",
	R: "♖",
	N: "♘",
	B: "♗",
	Q: "♕",
	K: "♔",
	P: "♙"
};

let selectedPiece = null;
let selectedSquare = null;
let boardState = JSON.parse(JSON.stringify(initialBoard));
let currentPlayer = "white";
let enPassantTarget = null;
let castlingRights = {
	white: { kingside: true, queenside: true },
	black: { kingside: true, queenside: true }
};

function createBoard() {
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const square = document.createElement("div");
			square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");
			square.dataset.row = row;
			square.dataset.col = col;
			square.addEventListener("click", onSquareClick);
			chessBoard.appendChild(square);
		}
	}
	renderBoard();
}

function renderBoard() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		const row = square.dataset.row;
		const col = square.dataset.col;
		square.innerHTML = pieces[boardState[row][col]] || "";
		square.classList.remove("highlight");
		square.style="color:black;";
	});
}
let squareSelect;
function onSquareClick(event) {
	const square = event.target;
	const row = square.dataset.row;
	const col = square.dataset.col;

	if (selectedPiece) {
		movePiece(row, col);
		squareSelect.style = "color:black;";
		clearHighlights();
		colorCheque();

		if (isCheckmate(currentPlayer === "black" ? "black" : "white")) {
			currentPlayer = currentPlayer === "white" ? "black" : "white";
			activeModal(currentPlayer);
		}
	} else {
		clearHighlights();
		selectPiece(row, col);
		const piece = boardState[row][col];
	if (piece && isCurrentPlayerPiece(piece)) {
		highlightValidMoves(row, col);
	}
		squareSelect = event.target;
	}
}

function colorCheque() {
	const player = currentPlayer;
	const player2 = player === "black" ? "white" : "black";
	const king1 = document.querySelector(
		`.square[data-row='${findKing(player).row}'][data-col='${
			findKing(player).col
		}']`
	);
	const king2 = document.querySelector(
		`.square[data-row='${findKing(player2).row}'][data-col='${
			findKing(player2).col
		}']`
	);
	if (isInCheck(player)) {
		king1.style.color = "red";
	} else {
		if (isInCheck(player2)) {
			king2.style.color = "red";
		} else {
			king1.style.color = "black";
			king2.style.color = "black";
		}
	}
}

function clearHighlights() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.classList.remove("highlight");
	});
}

function highlightValidMoves(row, col) {
	for (let newRow = 0; newRow < 8; newRow++) {
		for (let newCol = 0; newCol < 8; newCol++) {
			if (isValidMove(parseInt(row), parseInt(col), newRow, newCol)) {
				const square = document.querySelector(
					`.square[data-row='${newRow}'][data-col='${newCol}']`
				);
				square.classList.add("highlight");
			}
		}
	}
}

function isValidMove(fromRow, fromCol, toRow, toCol) {
	if (simulateMove(fromRow, fromCol, toRow, toCol)) return false;

	const piece = boardState[fromRow][fromCol];
	const target = boardState[toRow][toCol];

	if (toRow < 0 || toRow > 7 || toCol < 0 || toCol > 7) return false;
	if (fromRow === toRow && fromCol === toCol) return false;
	if (target && isSameColor(piece, target)) return false;

	switch (piece.toLowerCase()) {
		case "p":
			return isValidPawnMove(piece, fromRow, fromCol, toRow, toCol);
		case "r":
			return isValidRookMove(fromRow, fromCol, toRow, toCol);
		case "n":
			return isValidKnightMove(fromRow, fromCol, toRow, toCol);
		case "b":
			return isValidBishopMove(fromRow, fromCol, toRow, toCol);
		case "q":
			return isValidQueenMove(fromRow, fromCol, toRow, toCol);
		case "k":
			return (
				isValidKingMove(fromRow, fromCol, toRow, toCol) ||
				isValidCastlingMove(piece, fromRow, fromCol, toRow, toCol)
			);
		default:
			return false;
	}
}

function isSameColor(piece1, piece2) {
	return (
		(piece1 === piece1.toUpperCase() && piece2 === piece2.toUpperCase()) ||
		(piece1 === piece1.toLowerCase() && piece2 === piece2.toLowerCase())
	);
}

function isValidPawnMove(piece, fromRow, fromCol, toRow, toCol) {
	const direction = piece === piece.toUpperCase() ? -1 : 1;
	const startRow = piece === piece.toUpperCase() ? 6 : 1;

	if (toCol === fromCol && !boardState[toRow][toCol]) {
		if (toRow === fromRow + direction) return true;
		if (
			fromRow === startRow &&
			toRow === fromRow + 2 * direction &&
			!boardState[fromRow + direction][fromCol]
		)
			return true;
	}

	if (
		Math.abs(toCol - fromCol) === 1 &&
		toRow === fromRow + direction &&
		(boardState[toRow][toCol] ||
			(enPassantTarget &&
				toCol === enPassantTarget.col &&
				toRow === enPassantTarget.row))
	) {
		return true;
	}

	return false;
}

function isValidRookMove(fromRow, fromCol, toRow, toCol) {
	if (fromRow !== toRow && fromCol !== toCol) return false;

	const stepRow = fromRow === toRow ? 0 : toRow > fromRow ? 1 : -1;
	const stepCol = fromCol === toCol ? 0 : toCol > fromCol ? 1 : -1;

	for (let i = 1; i < Math.abs(toRow - fromRow + toCol - fromCol); i++) {
		if (boardState[fromRow + i * stepRow][fromCol + i * stepCol]) return false;
	}

	return true;
}

function isValidKnightMove(fromRow, fromCol, toRow, toCol) {
	const rowDiff = Math.abs(fromRow - toRow);
	const colDiff = Math.abs(fromCol - toCol);

	return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

function isValidBishopMove(fromRow, fromCol, toRow, toCol) {
	if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) return false;

	const stepRow = toRow > fromRow ? 1 : -1;
	const stepCol = toCol > fromCol ? 1 : -1;

	for (let i = 1; i < Math.abs(toRow - fromRow); i++) {
		if (boardState[fromRow + i * stepRow][fromCol + i * stepCol]) return false;
	}

	return true;
}

function isValidQueenMove(fromRow, fromCol, toRow, toCol) {
	return (
		isValidRookMove(fromRow, fromCol, toRow, toCol) ||
		isValidBishopMove(fromRow, fromCol, toRow, toCol)
	);
}

function isValidKingMove(fromRow, fromCol, toRow, toCol) {
	const rowDiff = Math.abs(fromRow - toRow);
	const colDiff = Math.abs(fromCol - toCol);

	return rowDiff <= 1 && colDiff <= 1;
}

function isValidCastlingMove(piece, fromRow, fromCol, toRow, toCol) {
	const player = piece === "K" ? "white" : "black";
	const row = player === "white" ? 7 : 0;

	if (fromRow !== row || toRow !== row) return false;
	if (fromCol !== 4 || (toCol !== 6 && toCol !== 2)) return false;

	if (
		toCol === 6 &&
		castlingRights[player].kingside &&
		!boardState[row][5] &&
		!boardState[row][6] &&
		!isInCheck(player) &&
		!simulateMove(fromRow, fromCol, row, 5)
	) {
		return true;
	}
	if (
		toCol === 2 &&
		castlingRights[player].queenside &&
		!boardState[row][1] &&
		!boardState[row][2] &&
		!boardState[row][3] &&
		!isInCheck(player) &&
		!simulateMove(fromRow, fromCol, row, 3)
	) {
		return true;
	}

	return false;
}

function movePiece(row, col) {
	const fromRow = parseInt(selectedSquare.row);
	const fromCol = parseInt(selectedSquare.col);
	const toRow = parseInt(row);
	const toCol = parseInt(col);

	if (isValidMove(fromRow, fromCol, toRow, toCol)) {
		// Roque
		if (
			boardState[fromRow][fromCol].toLowerCase() === "k" &&
			Math.abs(fromCol - toCol) === 2
		) {
			if (toCol === 6) {
				boardState[toRow][5] = boardState[toRow][7];
				boardState[toRow][7] = "";
			} else {
				boardState[toRow][3] = boardState[toRow][0];
				boardState[toRow][0] = "";
			}
		}

		// En Passant
		if (
			boardState[fromRow][fromCol].toLowerCase() === "p" &&
			enPassantTarget &&
			toCol === enPassantTarget.col &&
			toRow === enPassantTarget.row
		) {
			boardState[fromRow][toCol] = "";
		}

		boardState[toRow][toCol] = selectedPiece;
		boardState[fromRow][fromCol] = "";

		// Atualizar os direitos de roque
		if (selectedPiece === "K")
			castlingRights.white = { kingside: false, queenside: false };
		if (selectedPiece === "k")
			castlingRights.black = { kingside: false, queenside: false };
		if (selectedPiece === "R" && fromRow === 7) {
			if (fromCol === 0) castlingRights.white.queenside = false;
			if (fromCol === 7) castlingRights.white.kingside = false;
		}
		if (selectedPiece === "r" && fromRow === 0) {
			if (fromCol === 0) castlingRights.black.queenside = false;
			if (fromCol === 7) castlingRights.black.kingside = false;
		}

		// En Passant Target Update
		if (selectedPiece.toLowerCase() === "p" && Math.abs(fromRow - toRow) === 2) {
			enPassantTarget = { row: (fromRow + toRow) / 2, col: fromCol };
		} else {
			enPassantTarget = null;
		}

		// Promoção de peão
		if (
			(selectedPiece === "P" && toRow === 0) ||
			(selectedPiece === "p" && toRow === 7)
		) {
			promotionSquare = { row: toRow, col: toCol };
			showPromotionOptions();
			return; // Esperar pela promoção antes de continuar
		}

		renderBoard();

		currentPlayer = currentPlayer === "white" ? "black" : "white";
	}

	selectedPiece = null;
	selectedSquare = null;
}

function selectPiece(row, col) {
	const piece = boardState[row][col];
	if (piece && isCurrentPlayerPiece(piece)) {
		selectedPiece = piece;
		selectedSquare = { row, col };
		document.querySelector(
			`.square[data-row='${row}'][data-col='${col}']`
		).style.color = "cyan";
	}
}

function isCurrentPlayerPiece(piece, player = currentPlayer) {
	return (
		(player === "white" && piece === piece.toUpperCase()) ||
		(player === "black" && piece === piece.toLowerCase())
	);
}

function findKing(player) {
	const king = player === "white" ? "K" : "k";
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			if (boardState[row][col] === king) {
				return { row, col };
			}
		}
	}
	return null;
}

function isInCheck(player) {
	const kingPosition = findKing(player);
	if (!kingPosition) return false;

	const enemy = player === "white" ? "black" : "white";

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			if (isCurrentPlayerPiece(boardState[row][col], enemy)) {
				if (isValidMove(row, col, kingPosition.row, kingPosition.col)) {
					return true;
				}
			}
		}
	}

	return false;
}

function simulateMove(fromRow, fromCol, toRow, toCol) {
	const backup = boardState[toRow][toCol];
	boardState[toRow][toCol] = boardState[fromRow][fromCol];
	boardState[fromRow][fromCol] = "";

	const isCheck = isInCheck(currentPlayer);

	boardState[fromRow][fromCol] = boardState[toRow][toCol];
	boardState[toRow][toCol] = backup;

	return isCheck;
}

function isCheckmate(player) {
	if (!isInCheck(player)) return false;

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			if (isCurrentPlayerPiece(boardState[row][col], player)) {
				for (let newRow = 0; newRow < 8; newRow++) {
					for (let newCol = 0; newCol < 8; newCol++) {
						if (isValidMove(row, col, newRow, newCol)) {
							return false;
						}
					}
				}
			}
		}
	}

	return true;
}

function activeModal(win) {
	const modal = document.getElementById("modal");
	modal.style = "width:640px;height:640px;";
	const Win = document.getElementById("win");
	Win.textContent = win;
	
}

function NoActiveModal() {
	const modal = document.getElementById("modal");
	modal.style = "width:0;height:0;";
	boardState = JSON.parse(JSON.stringify(initialBoard));
	currentPlayer = "white";
	renderBoard();
	colorCheque()
}

function showPromotionOptions() {
	const modal = document.getElementById("promotion-modal");
	modal.style.display = "block";
}

function hidePromotionOptions() {
	const modal = document.getElementById("promotion-modal");
	modal.style.display = "none";
}

function promotePawn(newPiece) {
	if (promotionSquare) {
		const { row, col } = promotionSquare;
		boardState[row][col] = newPiece;
		promotionSquare = null;
		renderBoard();
		currentPlayer = currentPlayer === "white" ? "black" : "white";
	}
	hidePromotionOptions();
}

createBoard();