let targetNumber = generateNumber();
let attempts = 0;

// Gera um número de 4 dígitos únicos
function generateNumber() {
	let numbers = [];
	while (numbers.length < 4) {
		let num = Math.floor(Math.random() * 10);
		if (!numbers.includes(num)) {
			numbers.push(num);
		}
	}
	return numbers;
}

		document.getElementById("digit1").addEventListener("click", function() {
    this.select();
})
// Move o foco para o próximo input
function moveToNext(currentInput, nextInputId) {
	if (currentInput.value.length === 1 && nextInputId) {
		const input = document.getElementById(nextInputId);
		input.focus();
		input.addEventListener("focus", function () {
			this.select();
		});
		input.addEventListener("click", function() {
    this.select();
});

	}
}

// Verifica o palpite do jogador
function checkGuess() {
	const digits = [
		parseInt(document.getElementById("digit1").value),
		parseInt(document.getElementById("digit2").value),
		parseInt(document.getElementById("digit3").value),
		parseInt(document.getElementById("digit4").value)
	];

	// Verifica se todos os dígitos foram preenchidos
	if (digits.some((digit) => isNaN(digit))) {
		alert("Por favor, preencha todos os dígitos com números válidos.");
		return;
	}

	attempts++;
	document.getElementById("attempts").innerText = `Tentativas: ${attempts}`;

	let correctPosition = 0;
	let correctNumber = 0;

	// Limpa as classes de cores dos inputs anteriores
	for (let i = 1; i <= 4; i++) {
		const input = document.getElementById(`digit${i}`);
		input.classList.remove("correct-position", "correct-number", "incorrect");
	}

	// Verifica cada dígito
	for (let i = 0; i < 4; i++) {
		const input = document.getElementById(`digit${i + 1}`);
		const digit = digits[i];

		if (digit === targetNumber[i]) {
			// Dígito correto na posição correta (verde)
			input.classList.add("correct-position");
			correctPosition++;
		} else if (targetNumber.includes(digit)) {
			// Dígito correto na posição errada (amarelo)
			input.classList.add("correct-number");
			correctNumber++;
		} else {
			// Dígito incorreto (vermelho)
			input.classList.add("incorrect");
		}
	}

	// Verifica se o jogador acertou
	if (correctPosition === 4) {
		document.getElementById(
			"result"
		).innerText = `Parabéns! Você acertou o número ${targetNumber.join(
			""
		)} em ${attempts} tentativas.`;
		document.querySelector("button").disabled = true;
	} else {
		document.getElementById(
			"result"
		).innerText = `Números corretos na posição correta: ${correctPosition}\nNúmeros corretos na posição errada: ${correctNumber}`;
	}
}

// Reinicia o jogo
function restartGame() {
	targetNumber = generateNumber();
	attempts = 0;
	document.getElementById("attempts").innerText = `Tentativas: ${attempts}`;
	document.getElementById("result").innerText = "";
	document.querySelector("button").disabled = false;

	// Limpa os inputs e as classes de cores
	for (let i = 1; i <= 4; i++) {
		const input = document.getElementById(`digit${i}`);
		input.value = "";
		input.classList.remove("correct-position", "correct-number", "incorrect");
	}

	// Foca no primeiro input
	document.getElementById("digit1").focus();
}

// Permite usar o Enter para verificar
document.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkGuess();
	}
});

// Permite apenas números nos inputs
document.querySelectorAll(".digit-input").forEach((input) => {
	input.addEventListener("input", (event) => {
		event.target.value = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
	});
});
