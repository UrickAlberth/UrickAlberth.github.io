const board = new Array(81);
let currentPlayer = "X";
let gameOver = false;
let ptX = document.querySelector("#ptX");
let ptO = document.querySelector("#ptO");
const check_pc = document.querySelector("#pc");
let winCombinations = [
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
	[72, 76, 80],
	[74, 76, 78]
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

function checkDraw(index) {
	var elementoPai = document.getElementById(index).parentNode;
	let cont = 0;
	for (let i = 0; i < 9; i++) {
		if (elementoPai.getElementsByClassName("cell")[i].textContent !== "") {
			cont++;
		}
	}

	return cont == 9;
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
	box.style = "border: 2px solid cyan;";

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
		elementoPai.style = "display:block";
		for (let i = 0; i < 9; i++) {
			if (box.getElementsByClassName("cell")[i] != undefined) {
				box.getElementsByClassName("cell")[i].classList.remove("click");
			} else {
				box.style = "border: 1px solid #ccc;";
				box_disponivel();
			}
		}
		checarVencedor();
	} else if (checkDraw(index)) {
		var elementoPai = document.getElementById(index).parentNode;
		elementoPai.innerText = "X/O";
		elementoPai.style = "display:block";
		checarVencedor();
		//alert("Empate!");
		//gameOver = true;
	}
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	const player = document.querySelector("#currentPlayer");
	player.textContent = currentPlayer;
	if (currentPlayer === "O") {
		if (check_pc.checked) {
			// Chamada da função para o movimento do computador
			makeComputerMove(bx);
			checarVencedor();
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
	const linhasVitoria = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];

	for (const linha of linhasVitoria) {
		const [a, b, c] = linha;
		const boxA = document.querySelector("#c" + a);
		const boxB = document.querySelector("#c" + b);
		const boxC = document.querySelector("#c" + c);
		const conteudoA = boxA.getElementsByClassName("board2")[0]?.textContent;
		const conteudoB = boxB.getElementsByClassName("board2")[0]?.textContent;
		const conteudoC = boxC.getElementsByClassName("board2")[0]?.textContent;
		if (
			boxA.getElementsByClassName("cell").length < 1 &&
			boxB.getElementsByClassName("cell").length < 1 &&
			boxC.getElementsByClassName("cell").length < 1 &&
			conteudoA !== "" &&
			conteudoB !== "" &&
			conteudoC !== ""
		) {
			if (
				((conteudoA === conteudoB || conteudoB === "X/O") &&
					(conteudoB === conteudoC ||
						conteudoC === "X/O" ||
						conteudoC === conteudoA)) ||
				(conteudoA === "X/O" && conteudoB === conteudoC)
			) {
				boxA.style.background = "cyan";
				boxB.style.background = "cyan";
				boxC.style.background = "cyan";

				alert("Ganhador é o jogador: " + conteudoA);

				currentPlayer = "X";
				return;
			}
		}
	}

	board2 = [];
}

function makeComputerMove(bx) {
	let movimentos = {
		1: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9]
		],
		2: [
			[9, 1],
			[10, 2],
			[11, 3],
			[12, 4],
			[13, 5],
			[14, 6],
			[15, 7],
			[16, 8],
			[17, 9]
		],
		3: [
			[18, 1],
			[19, 2],
			[20, 3],
			[21, 4],
			[22, 5],
			[23, 6],
			[24, 7],
			[25, 8],
			[26, 9]
		],
		4: [
			[27, 1],
			[28, 2],
			[29, 3],
			[30, 4],
			[31, 5],
			[32, 6],
			[33, 7],
			[34, 8],
			[35, 9]
		],
		5: [
			[36, 1],
			[37, 2],
			[38, 3],
			[39, 4],
			[40, 5],
			[41, 6],
			[42, 7],
			[43, 8],
			[44, 9]
		],
		6: [
			[45, 1],
			[46, 2],
			[47, 3],
			[48, 4],
			[49, 5],
			[50, 6],
			[51, 7],
			[52, 8],
			[53, 9]
		],
		7: [
			[54, 1],
			[55, 2],
			[56, 3],
			[57, 4],
			[58, 5],
			[59, 6],
			[60, 7],
			[61, 8],
			[62, 9]
		],
		8: [
			[63, 1],
			[64, 2],
			[65, 3],
			[66, 4],
			[67, 5],
			[68, 6],
			[69, 7],
			[70, 8],
			[71, 9]
		],
		9: [
			[72, 1],
			[73, 2],
			[74, 3],
			[75, 4],
			[76, 5],
			[77, 6],
			[78, 7],
			[79, 8],
			[80, 9]
		]
	};
	let m;
	if (gameOver || currentPlayer == "X") return;

	for (let i = 1; i < 10; i++) {
		if (
			document.querySelector("#c" + bx).getElementsByClassName("cell")[0] !=
			undefined
		) {
			m = movimentos[bx];
			break;
		} else {
			bx = i;
			m = movimentos[bx];
		}
	}
	let casa = [];
	let pxcasa = [];
	for (let i = 0; i < 9; i++) {
		if (
			document.querySelector("#c" + bx).getElementsByClassName("cell")[0] !=
			undefined
		) {
			
				console.log(document.querySelector("#c" + bx).getElementsByClassName("cell")[i]
					.textContent)
			if (
				document.querySelector("#c" + bx).getElementsByClassName("cell")[i]
					.textContent == ""
			) {
				casa.push(m[i][0]);
				pxcasa.push(m[i][1]);		
				console.log(casa)
			}
			
		}
	}
	// Faça a jogada do computador

	do {
		let num = numeroAleatorio(1, casa.length)-1;
		let casacell = casa[num];
		console.log(casa[num],"num "+num+ " casa " + casa)
		let casapx = pxcasa[num];
		
		if (
			document.querySelector("#c" + bx).getElementsByClassName("cell")[0] !=
			undefined
		) {
			console.log(casacell,casapx)
			makeMove(casacell, casapx);

			break;
		} else {
			console.log("else")
			break;
			
		}
	} while (currentPlayer == "O");
}
function numeroAleatorio(min, max) {
	// Gere um número decimal aleatório entre 0 e 1
	var numeroDecimal = Math.random();

	// Ajuste o número para o intervalo desejado
	var numeroNoIntervalo = numeroDecimal * (max - min) + min;

	// Arredonde o número para o inteiro mais próximo, se necessário
	// Caso contrário, você terá um número decimal no intervalo
	return Math.round(numeroNoIntervalo);
}

function getWinCombination(player) {
	return winCombinations.find((combination) =>
		combination.every((index) => board[index] === player)
	);
}


// Reinicia o jogo
function resetGame() {
	board.fill("");
	document.querySelectorAll(".cell").forEach((cell) => (cell.innerText = ""));
	currentPlayer = "X";
	gameOver = false;
	winCombinations = generateWinCombinations();
	let DivBoard;
	let contador = -1;
	for (let i = 1; i < 10; i++) {
		box = document.querySelector("#c" + i);
		box.style = "border: 1px solid #ccc;";
		DivBoard = box.getElementsByClassName("board2")[0];
		DivBoard.innerHTML = "";
		DivBoard.style = "display:grid";
		for (let j = 1; j < 10; j++) {
			contador++;
			let div = document.createElement("div");
			div.id = contador;
			div.classList.add("cell");
			div.setAttribute("onclick", "makeMove(" + contador + "," + j + ")");
			DivBoard.appendChild(div);
		}
	}
}

function zerarPts() {
	ptO.textContent = 0;
	ptX.textContent = 0;
	resetGame();
}

function generateWinCombinations() {
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
		[72, 76, 80],
		[74, 76, 78]
	];

	return winCombinations;
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
