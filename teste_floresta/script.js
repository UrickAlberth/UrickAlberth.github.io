const questions = document.querySelectorAll(".question");
const btns = document.getElementById("btns");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const startButton = document.getElementById("start-btn");
const resultContainer = document.getElementById("result");
let currentQuestion = 0;

nextButton.addEventListener("click", showNextQuestion);
startButton.addEventListener("click", showNextQuestion);
prevButton.addEventListener("click", showPrevQuestion);

// Inicializa o quiz
function showNextQuestion() {
	if(!validateInputs()){
		alert("Por favor, preencha todos os campos.");
		return
	}
	if (currentQuestion < questions.length) {
		// Exibe a próxima pergunta
		questions[currentQuestion].classList.remove("active");
		currentQuestion++;
		if (currentQuestion < questions.length) {
			questions[currentQuestion].classList.add("active");
		} else {
			currentQuestion--;
			// Mostra o resultado quando o quiz terminar
			calculateResults();
		}
	}
}

function showPrevQuestion() {
	if (currentQuestion > -1) {
		// Exibe a pergunta anterior
		questions[currentQuestion].classList.remove("active");
		currentQuestion--;
		if (currentQuestion > -1) {
			questions[currentQuestion].classList.add("active");
			resultContainer.classList.add("hidden");
		} else {
			currentQuestion++;
			return
		}
	}
}

function calculateResults() {
	const pessoa = document.getElementById("pessoa").value;
	const animal = document.getElementById("animal").value;
	const animalTamanho = document.getElementById("animal_tamanho").value;
	const reacaoAnimal = document.getElementById("reacao").value;
	const casaDescricao = document.getElementById("casa_descricao").value;
	const casa_tamanho = document.getElementById("casa_tamanho").value;
	const cercas = document.querySelector('input[name="cercas"]:checked').value;
	const mesaObjeto = document.getElementById("mesa_objeto").value;
	const copoMaterial = document.querySelector('input[name="copo"]:checked').value;
	const copoAcao = document.getElementById("copo").value;
	const aguaReflexo = document.getElementById("agua_reflexo").value;
	const agua_tamanho = document.getElementById("agua_tamanho").value;
	const molhado = document.getElementById("molhado").value;

	let result = `
    <h2>Resultado do Teste</h2>
    <p>1 – A pessoa que você está caminhando no bosque é a pessoa mais importante da sua vida: <strong>${pessoa}</strong>.</p>
    <p>2 – O animal que você encontrou: ${animal} é ${
		animalTamanho === "1" ? "pequeno" : animalTamanho === "2" ? "médio" : "grande"
	}, indicando a proporção dos seus problemas.</p>
    <p>3 – O animal reagiu de forma ${
					reacaoAnimal === "1"
						? "dócil"
						: reacaoAnimal === "2"
						? "natural"
						: "agressiva"
				}, o que reflete sua atitude na vida.</p>
    <p>4 – A casa que você encontrou é ${casaDescricao} e sendo uma casa ${
		casa_tamanho === "1" ? "pequena" : casa_tamanho === "2" ? "média" : "grande"
	} demonstra o tamanho da sua ambição e é ${
		cercas === "sim" ? "cercada" : "sem cercas"
	}, o que indica que você é ${
		cercas === "sim" ? "mais reservado" : "uma pessoa aberta"
	}.</p>
    <p>5 – Sobre a mesa você encontrou: <strong>${mesaObjeto}</strong>. Isso reflete seu estado emocional. Comida, flores ou uma pessoa? Se a sua resposta não foi nenhuma dessas alternativas então isso indica que você anda um pouco triste.</p>
    <p>6 – O seu copo era de <strong>${copoMaterial}</strong>, Ele era resistente ou frágil? Isso indica como é a sua relação com a pessoa que estava caminhando com você. Além disso, você fez: "${copoAcao}", isso mostra a atitude que você tem com aquela pessoa.</p>
    <p>7 – O ${aguaReflexo} que você imaginou era ${
		agua_tamanho === "1" ? "pequena" : agua_tamanho === "2" ? "média" : "grande"
	} o que representa a proporção do seu apetite sexual</p>
    <p>8 – Você saiu da água ${
					molhado === "1" ? "pouco" : "muito"
				} molhado, o que indica a importância do sexo na sua vida.</p>
  `;

	resultContainer.innerHTML = result;
	resultContainer.classList.remove("hidden");
	btns.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
	questions[0].classList.add("active");
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const mesaObjeto = document.getElementById("mesa_objeto");

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", () => {
		const checkedValues = Array.from(checkboxes)
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.value)
			.join(", ");

		mesaObjeto.value = checkedValues;
	});
});

// Função para validar os inputs
function validateInputs() {
	const currentInputs = questions[currentQuestion].querySelectorAll("input");
	let valid = true;

	currentInputs.forEach((input) => {
		if (input.type === "radio" || input.type === "checkbox") {
			const isChecked = questions[currentQuestion].querySelector('input[type="radio"]:checked') || questions[currentQuestion].querySelector('input[type="checkbox"]:checked');
			if (!isChecked) {
				valid = false;
				return valid
			}
		} else if (input.value.trim() === "") {
			valid = false;
			
			return valid
		}
	});

	return valid
}
