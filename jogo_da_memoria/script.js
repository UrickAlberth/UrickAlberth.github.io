let figuras = [
	"😀",
	"😁",
	"😂",
	"🤣",
	"💀",
	"😄",
	"😅",
	"😆",
	"😉",
	"😊",
	"😋",
	"😎",
	"😍",
	"😘",
	"🥰",
	"😗",
	"😙",
	"🥲",
	"😚",
	"☺️",
	"🙂",
	"🤗",
	"🤩",
	"🤔",
	"🫡",
	"🤨",
	"😐",
	"😑",
	"😶",
	"🫥",
	"😶‍🌫️",
	"🙄",
	"😏",
	"😣",
	"😥",
	"😮",
	"🤐",
	"😯",
	"😪",
	"😫",
	"🥱",
	"😴",
	"😌",
	"😛",
	"😜",
	"😝",
	"🤤",
	"😒",
	"😓",
	"😔",
	"😕",
	"🫤",
	"🙃",
	"🫠",
	"🤑",
	"😲",
	"☹️",
	"🙁",
	"😖",
	"😞",
	"😟",
	"😤",
	"😢",
	"😭",
	"😦",
	"😧",
	"😨",
	"😩",
	"🤯",
	"😬",
	"😮‍💨",
	"😰",
	"😱",
	"🥵",
	"🥶",
	"😳",
	"🤪",
	"😵",
	"😵‍💫",
	"🥴",
	"😠",
	"😡",
	"🤬",
	"😷",
	"🤒",
	"🤕",
	"🤢",
	"🤮",
	"🤧",
	"😇",
	"🥳",
	"🥸",
	"🥺",
	"🥹",
	"🤠",
	"🤡",
	"🤥",
	"🤫",
	"🤭",
	"🫢",
	"🫣",
	"🧐",
	"🤓",
	"😈",
	"👿"
];
let pares = 6;
let jogadores = []; // Array para armazenar os pontos de cada jogador
let jogadorAtual = 0; // Índice do jogador atual no array de jogadores

function iniciar() {
	playStartSound();
	pares = parseInt(document.getElementById('porcem').innerText);
	const qtdJogadores = parseInt(document.getElementById('qtj').innerText);;

	jogadores = []; // Limpa os pontos dos jogadores
	for (let i = 0; i < qtdJogadores; i++) {
		jogadores.push(0); // Inicializa a pontuação de cada jogador como 0
	}
	const game_container = document.querySelector(".game-container");
	game_container.innerHTML = "";
	for (const key in figuras) {
		if (key < pares) {
			const div = document.createElement("div");
			div.classList.add("card");
			div.setAttribute("data-value", key);
			div.textContent = figuras[key];
			const div2 = document.createElement("div");
			div2.classList.add("card");
			div2.setAttribute("data-value", key);
			div2.textContent = figuras[key];
			game_container.appendChild(div);
			game_container.appendChild(div2);
		}
	}
	const cartas = document.querySelectorAll(".card");
	embaralharCartas(cartas);

	cartas.forEach((cartas) => cartas.addEventListener("click", virarCarta));
	iniciarCronometro();
	document.getElementById("btnComecar").disabled = true;
	document.getElementById("btnPausar").disabled = false;
	document.getElementById("btnReiniciar").disabled = false;
}

let cartasViradas = [];
let paresEncontrados = 0;

function embaralharCartas(cartas) {
	cartas.forEach((cartas) => {
		let posicaoAleatoria = Math.floor(Math.random() * 12);
		cartas.style.order = posicaoAleatoria;
	});
}

function virarCarta() {
	if (cartasViradas.length < 2 && !this.classList.contains("virada")) {
		this.classList.add("virada");
		playMoveSound();
		cartasViradas.push(this);
		if (cartasViradas.length === 2) {
			setTimeout(verificarPar, 1000);
		}
	}
}

function verificarPar() {
	if (cartasViradas[0].dataset.value === cartasViradas[1].dataset.value) {
		cartasViradas.forEach((cartas) => cartas.classList.add("par"));
		paresEncontrados++;
		playParSound();
		pontuar();
		if (paresEncontrados === pares) {
			pararCronometro();

			document.getElementById("btnPausar").disabled = true;
			let ganhadores = "";
			for (key in jogadores) {
				ganhadores =
					ganhadores +
					"Jogador " +
					(parseInt(key) + 1) +
					" - " +
					jogadores[key].toFixed(2) +
					"\n";
			}			
				winner.innerText="Parabéns! Você completou o jogo da memória!\n" + ganhadores;
			
			if (pares < 105) {				
				muda_valor(1);
			}
		}
	} else {
		playImparSound();
		cartasViradas.forEach((cartas) => cartas.classList.remove("virada"));
		alternarJogador();
	}
	cartasViradas = [];
}

function muda_valor(x) {
	if(x==1){
	if (pares < 105) {
        pares++;
        document.getElementById('porcem').innerText = pares;
    }
	}
	if(x==0){
	if (pares > 6) {
        pares--;
        document.getElementById('porcem').innerText = pares;
    }
	}
	
}
function muda_valorJ(x) {
	let jg = parseInt(document.getElementById('qtj').innerText)
	if(x==1){
	if (jg < 5) {
        jg++;
        document.getElementById('qtj').innerText = jg;
    }
	}
	if(x==0){
	if (jg > 1) {
        jg--;
        document.getElementById('qtj').innerText = jg;
    }
	}
}

function Reiniciar() {
	reiniciarCronometro();
	atualizarCronometro();
	document.getElementById("btnPausar").disabled = true;
	document.getElementById("btnReiniciar").disabled = true;
	document.getElementById("btnComecar").disabled = false;
	const btnPausar = document.querySelector("#btnPausar");
	btnPausar.textContent = "Pausar";
	p = 0;
	const game_container = document.querySelector(".game-container");
	game_container.innerHTML = "";
	cartasViradas = [];
	paresEncontrados = 0;
	pontos = 0;
	pts.textContent = 0;
	jogadores = [];
	jogadorAtual = 0;
	jogador.textContent = "Jogador 1";
}

var p = 0;
function Pausar() {
	const cartas = document.querySelectorAll(".card");
	const btnPausar = document.querySelector("#btnPausar");
	if (p % 2 === 0) {
		playPauseSound();
		pararCronometro();
		cartas.forEach((cartas) => (cartas.style = "pointer-events:none"));
		btnPausar.textContent = "Play";
		document.getElementById("btnComecar").disabled = true;

		p++;
	} else {
		playPlaySound();
		iniciarCronometro();
		cartas.forEach((cartas) => (cartas.style = "pointer-events:auto"));
		btnPausar.textContent = "Pausar";
		document.getElementById("btnComecar").disabled = true;
		embaralharCartas(cartas);
		p++;
	}
}

const cronometroElement = document.getElementById("cronometro");
let cronometroInterval;
let segundos = 0;
let minutos = 0;

function atualizarCronometro() {
	segundos++;
	if (segundos === 60) {
		segundos = 0;
		minutos++;
	}
	const minutosFormatados = minutos.toString().padStart(2, "0");
	const segundosFormatados = segundos.toString().padStart(2, "0");
	cronometroElement.textContent = `Tempo: ${minutosFormatados}:${segundosFormatados}`;
}

function iniciarCronometro() {
	cronometroInterval = setInterval(atualizarCronometro, 1000);
}

function pararCronometro() {
	clearInterval(cronometroInterval);
}

function reiniciarCronometro() {
	segundos = -1;
	minutos = 0;
	pararCronometro();
}

let pontos = 0;
let record = 0;
let timeRecord = "";
function pontuar() {
	let soma = pares / 10 - (minutos / 10 + segundos / 100) + 1;
	jogadores[jogadorAtual] += soma;
	pts.textContent = jogadores[jogadorAtual].toFixed(2);
	if (jogadores[jogadorAtual] >= record) {
		record = jogadores[jogadorAtual];
		timeRecord = " | Tempo: " + minutos + ":" + segundos + " | Pares: " + pares;
		RecordPts.textContent = "Pontos: " + record.toFixed(2) + timeRecord;
		SalvarRecord();
	}
}
function SalvarRecord() {
	localStorage.setItem("record_JdM", JSON.stringify(record));
	localStorage.setItem("timeRecord", JSON.stringify(timeRecord));
}
function CarregarRecord() {
	const storedTimeRecord = localStorage.getItem("timeRecord");
	if (storedTimeRecord) {
		timeRecord = JSON.parse(storedTimeRecord);
	}
	const storedRecord = localStorage.getItem("record_JdM");
	if (storedRecord) {
		record = JSON.parse(storedRecord);
		RecordPts.textContent = "Pontos: " + record.toFixed(2) + timeRecord;
	}
}
CarregarRecord();

function ajuda() {
	let Nviradas = [];
	const cartas = document.querySelectorAll(".card");
	cartas.forEach((cartas) => {
		if (!cartas.classList.contains("virada")) {
			cartas.classList.add("virada");
			Nviradas.push(cartas);
		}
	});
	playClockSound();
	setTimeout(() => {
		clockSound.pause();
		Nviradas.forEach((cartasV) => {
			if (cartasV.classList.contains("virada")) {
				cartasV.classList.remove("virada");
			}
		});
	}, 5000);
}

function alternarJogador() {
	jogadorAtual = (jogadorAtual + 1) % jogadores.length;
	pts.textContent = jogadores[jogadorAtual].toFixed(2);
	jogador.textContent = "Jogador " + (jogadorAtual + 1);
}

function playMoveSound() {
	const moveSound = document.getElementById("moveSound");
	moveSound.pause();
	moveSound.currentTime = 0;
	moveSound.play();
}
function playParSound() {
	const parSound = document.getElementById("parSound");
	parSound.pause();
	parSound.currentTime = 0;
	parSound.play();
}
function playImparSound() {
	const imparSound = document.getElementById("imparSound");
	imparSound.pause();
	imparSound.currentTime = 0;
	imparSound.play();
}
function playClockSound() {
	const clockSound = document.getElementById("clockSound");
	clockSound.pause();
	clockSound.currentTime = 0;
	clockSound.play();
}
function playStartSound() {
	const game_startSound = document.getElementById("game_startSound");
	game_startSound.pause();
	game_startSound.currentTime = 0;
	game_startSound.play();
}
function playPauseSound() {
	const pauseSound = document.getElementById("pauseSound");
	pauseSound.pause();
	pauseSound.currentTime = 0;
	pauseSound.play();
}
function playPlaySound() {
	const pause_pianoSound = document.getElementById("pause_pianoSound");
	pause_pianoSound.pause();
	pause_pianoSound.currentTime = 0;
	pause_pianoSound.play();
}
