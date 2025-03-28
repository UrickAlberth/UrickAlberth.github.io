let casos = [
	{
		titulo: "O MISTÉRIO DO VIGÁRIO",
		enredo:
			"O dedutivo Logicus deslocou-se até a exótica cidadezinha da dama Obsidian e imediatamente aprendeu uma nova palavra: 'vigário'. Ele não sabia o que significava, mas sabia como usá-la numa frase como esta: 'O vigário foi assassinado e vou descobrir quem fez isso.'",
		suspeitos: [
			{
				nome: "DAMA OBSIDIAN",
				icone: "👒",
				atributos: "1,63 metro – Canhota – Olhos verdes – Cabelo preto",
				bio:
					"Um dos livros mais famosos dela é sobre um escritor de mistérios que arma para uma ilusionista inocente. Suspeito!"
			},
			{
				nome: "Diácona Verdigris",
				icone: "👓",
				atributos: "1,60 metro – Canhota – Olhos azuis – Cabelo grisalho",
				bio:
					"Diácona da igreja. Ela toma conta das doações dos paroquianos e, às vezes, da vida deles."
			},
			{
				nome: "Earl Grey",
				icone: "☕",
				atributos: "1,75 metro – Destro – Olhos castanho-claros – Cabelo branco",
				bio:
					"Vem de uma longa linhagem de Earl Greys. Sim, a do chá. Não, ele não dá autógrafos, mas lhe dará um saquinho de graça se você pedir."
			}
		],
		locais: [
			{
				nome: "A MANSÃO",
				icone: "🏠",
				ambiente: "INTERNO",
				descricao:
					"A casa da dama Osidian, cheia de enormes retratos de várias gerações de homens brancos ricos já mortos."
			},
			{
				nome: "A CAPELA",
				icone: "⛪",
				ambiente: "INTERNO",
				descricao: "Uma igreja minúscula repleta de vitrais e segredos."
			},
			{
				nome: "AS RUÍNAS ANTIGAS",
				icone: "🏛",
				ambiente: "EXTERNO",
				descricao:
					"De novo as mesmas pedras! Casa uma dela em um estranho labirinto esculpido na lateral."
			}
		],
		armas: [
			{
				nome: "UM FRASCO DE CIANURETO",
				icone: "🧪",
				peso: "LEVE",
				descricao:
					"É veneno com odor de amêndoa, mas também pode dar cabo de dores de cabeça (como o seu marido)."
			},
			{
				nome: "UMA TESOURA DE JARDINAGEM",
				icone: "✂",
				peso: "MÉDIO",
				descricao:
					"Jardinagem é um ótimo hobby, mas, sinceramente, é mais fácil matar alguém para conseguir bons tomates."
			},
			{
				nome: "UM NOVELO DE LÃ",
				icone: "🧶",
				peso: "LEVE",
				descricao:
					"Ás vezes, quando percebemos que pulamos um ponto dá vontade de estrangular alguém."
			}
		],
		pistas: [
			"Logicus sentiu cheiro de amêndoa debaixo de um vitral.",
			"A dama Obsidian não estava na mansão dela. Nem em qualquer outra, aliás.",
			"Sim, Earl Grey era dono de um império de chá, mas jamais jardinava, e preferia morrer a segurar uma tesoura de jardineiro.",
			"A diácona Verdigris andara visitando as ruínas antigas a fim de pesquisar para um artigo sobre as práticas pagãs locais anteriores à chegada da Igreja.",
			"O vigário foi estrangulado - constrangedoramente - com um novelo de lã."
		],
		solucao: ["s3", "a3", "l1"]
	},
	{
		titulo: "ASSASSINATO EM HOLLYWOOD",
		enredo:
			"Quando Deductive Logico foi convidado para um jantar chique em uma mansão em Hollywood Hills, ele pensou que finalmente tinha conseguido. Infelizmente, ele não era o convidado de honra: ele estava lá para resolver o assassinato do convidado de honra.",
		suspeitos: [
			{
				nome: "O INCRÍVEL AUREOLIN",
				icone: "🎩",
				atributos: "1,63 metro - CANHOTO - OLHOS VERDES - CABELOS LOIROS",
				bio:
					"Uma mágica que aperfeiçoou a rotina de serrar seu marido em dois. Então, ela fez seu corpo desaparecer."
			},
			{
				nome: "MIDNIGHT III",
				icone: "👓",
				atributos:
					"1,60 metro – CANHOTO - OLHOS CASTANHOS ESCUROS - CABELOS CASTANHOS ESCUROS",
				bio:
					"O neto do fundador da Midnight Movies e um autodescrito self-made man."
			},
			{
				nome: "DAMA OBSIDIAN",
				icone: "👒",
				atributos: "1,63 metro – Canhota – Olhos verdes – Cabelo preto",
				bio:
					"Uma escritora de mistério cujos livros venderam mais cópias do que a Bíblia e Shakespeare juntos"
			}
		],
		locais: [
			{
				nome: "O ENORME BANHEIRO",
				icone: "🛁",
				ambiente: "INTERNO",
				descricao: "Um banheiro maior que a casa da Deductive Logico."
			},
			{
				nome: "O QUARTO",
				icone: "🛏",
				ambiente: "INTERNO",
				descricao:
					"Uma cama king size da Califórnia, desfeita, fica em um quarto branco imaculado."
			},
			{
				nome: "A SALA DE EXIBIÇÃO",
				icone: "🎉",
				ambiente: "EXTERNO",
				descricao:
					"Assentos de veludo vermelho e uma máquina de pipoca fazem desta a melhor experiência de exibição."
			}
		],
		armas: [
			{
				nome: "UM GARFO",
				icone: "🍴",
				peso: "LEVE",
				descricao:
					"Na verdade, muito mais horrível do que uma faca, se você pensar bem."
			},
			{
				nome: "UM CACHIMBO DE ALUMÍNIO",
				icone: "🔩",
				peso: "MÉDIO",
				descricao: "Mais seguro do que chumbo, a menos que atinja sua cabeça."
			},
			{
				nome: "UMA VELA PESADA",
				icone: "🕯",
				peso: "MÉDIO",
				descricao:
					"Pesada o suficiente para matar, mas ainda assim ilumina o quarto."
			}
		],
		pistas: [
			"O Incrível Aureolin confiou no suspeito que trouxe um garfo.",
			"Midnight III ainda estava brandindo um cachimbo de alumínio quando Logico chegou.",
			"Uma vela pesada não era encontrada no quarto.",
			"Dama Obsidian foi encontrada escondida sob assentos de veludo vermelho.",
			"O corpo foi encontrado dentro de uma banheira de mármore."
		],
		solucao: ["s1", "a3", "l1"]
	}
];
const storyCaso1 = [
	`
Após horas de investigação meticulosa, Logicus finalmente reúne todas as pistas. O cheiro de amêndoa debaixo do vitral da capela, a ausência da Dama Obsidian, a paixão de Earl Grey por chá (e sua aversão a jardinagem), e a pesquisa da Diácona Verdigris nas ruínas antigas começam a se encaixar como peças de um quebra-cabeça. Ele percebe que a resposta está nas pequenas incongruências e nos detalhes que passariam despercebidos para um observador menos atento.

Logicus convoca todos os suspeitos na mansão da Dama Obsidian, onde o vigário foi encontrado morto. A atmosfera é tensa, e os suspeitos trocam olhares desconfiados. Ele começa a expor sua dedução:

<button id="next" onclick="Proxima1()">Próximo</button>`,
	`"O vigário foi estrangulado com um novelo de lã, um método que exige força e precisão. No entanto, o verdadeiro mistério não é como ele foi morto, mas por quê. E a resposta está no passado obscuro desta cidade e nas relações entre vocês."
<button id="next" onclick="Proxima1()">Próximo</button>`,
	`Ele se volta para a Dama Obsidian, cuja ausência durante o crime chamou sua atenção.
"Você, Dama Obsidian, estava longe da mansão, mas não por acaso. Você temia que o vigário revelasse um segredo seu: a verdade sobre o desaparecimento de seu marido anos atrás. Ele descobriu que você o envenenou com cianureto, e você não podia permitir que ele contasse a verdade."

A Dama Obsidian nega veementemente, mas Logicus continua:
"No entanto, você não é a assassina. O cheiro de amêndoa na capela foi uma pista falsa, plantada para incriminá-la. Alguém queria que você levasse a culpa."
<button id="next" onclick="Proxima1()">Próximo</button>`,
	`Ele então olha para a Diácona Verdigris, que parece nervosa.
"Você, Diácona, passou muito tempo nas ruínas antigas, pesquisando práticas pagãs. Mas seu interesse não era acadêmico. Você descobriu que o vigário planejava fechar a capela e vender as terras da igreja, incluindo as ruínas. Para você, aquelas pedras eram sagradas, e você faria qualquer coisa para protegê-las. No entanto, você não teria força suficiente para estrangular o vigário com um novelo de lã."
<button id="next" onclick="Proxima1()">Próximo</button>`,
	`Finalmente, Logicus se volta para Earl Grey, que até então parecia calmo e distante.
"E você, Earl Grey. Um homem de chá, não de jardinagem. Mas há algo que você esconde. O novelo de lã não era apenas uma arma; era um símbolo. O vigário estava te chantageando, ameaçando revelar que você falsificava a procedência de seus chás para aumentar seus lucros. Ele sabia que isso arruinaria sua reputação e seu império. Você o estrangulou com o novelo de lã em um momento de desespero, usando suas próprias mãos para silenciá-lo."
<button id="next" onclick="Proxima1()">Próximo</button>`,
	`Earl Grey, pressionado, finalmente admite:
"Sim, foi eu. Ele estava prestes a destruir tudo o que construí. Eu não tive escolha."
<button id="next" onclick="Proxima1()">Próximo</button>`,
	`Logicus entrega Earl Grey às autoridades, e a cidade finalmente descobre a verdade por trás do assassinato do vigário. A Dama Obsidian é absolvida, mas sua reputação fica manchada pelos segredos revelados. A Diácona Verdigris, embora inocente do crime, decide deixar a cidade para refletir sobre suas ações. E Earl Grey, o homem que herdou um legado de chá e tradição, vê seu império desmoronar junto com sua liberdade.

Logicus, satisfeito por ter resolvido mais um mistério, parte da cidade com uma nova lição: até os crimes mais banais podem esconder histórias profundas e dolorosas. E, claro, ele leva consigo um saquinho de chá Earl Grey, um presente irônico do próprio assassino.

<a href="#titulo"><button onclick="proximoCaso()" >Próximo CASO</button></a>`
];
const storyCaso2 = [
	`Logicus, após analisar cuidadosamente as pistas e interrogar os suspeitos, reúne todos na sala de exibição. Ele começa a expor sua dedução, revelando os segredos ocultos por trás do assassinato.

Logicus:
"O convidado de honra foi encontrado morto no enorme banheiro, um local que deveria ser de relaxamento, mas se tornou uma cena de crime. A arma do crime foi um objeto aparentemente comum, mas mortal nas mãos certas: um garfo. E o assassino está entre nós."
<button id="next" onclick="Proxima2()">Próximo</button>`,
	`Ele se volta para O Incrível Aureolin, a ilusionista famosa por seus truques de desaparecimento.
"Você, Aureolin, trouxe um garfo para o jantar. Um objeto que parece inofensivo, mas que pode ser letal. O garfo foi a arma perfeita para você, que domina a arte da ilusão e do engano. Você usou o garfo para atacar a vítima no banheiro, onde a água mascararia qualquer ruído e dificultaria a descoberta do crime. Mas por quê? Porque o convidado de honra estava prestes a revelar seu maior segredo: seus truques de mágica eram baseados em tecnologia roubada de um inventor rival. Se ele expusesse isso, sua carreira estaria arruinada."
<button id="next" onclick="Proxima2()">Próximo</button>`,
	`Aureolin tenta protestar, mas Logicus continua:
"Você planejou tudo meticulosamente. Usou suas habilidades de ilusionista para distrair os outros convidados e garantir que ninguém suspeitasse de você. No entanto, você esqueceu um detalhe crucial: o garfo que trouxe para o jantar foi encontrado perto do corpo, e suas digitais estavam nele."
<button id="next" onclick="Proxima2()">Próximo</button>`,
	`Aureolin, pressionada, finalmente admite:
"Sim, foi eu. Ele ia destruir tudo o que construí. Eu não tinha escolha."
<button id="next" onclick="Proxima2()">Próximo</button>`,
	`Logicus entrega O Incrível Aureolin às autoridades, e o glamour de Hollywood é manchado por mais um escândalo. Midnight III, embora envolvido em esquemas financeiros, escapa da acusação de assassinato, mas sua reputação fica abalada. Dama Obsidian, que estava escondida sob os assentos de veludo vermelho, revela-se inocente, mas decide usar o caso como inspiração para seu próximo livro.

Logicus, enquanto deixa a mansão, reflete sobre o preço da fama e do sucesso. Ele pega uma pipoca da máquina da sala de exibição, um último toque irônico de Hollywood, e parte para seu próximo caso.
`
];

let casoAtual = 0;
function carregarCaso() {
	const caso = casos[casoAtual];
	document.getElementById("titulo").textContent = caso.titulo;
	document.getElementById("enredo").textContent = caso.enredo;

	for (let i = 0; i < 3; i++) {
		//suspeitos
		document.getElementById("S" + parseInt(i + 1) + "_icone").textContent =
			caso.suspeitos[i].icone;
		document.getElementById("suspeito" + parseInt(i + 1)).textContent =
			caso.suspeitos[i].nome;
		document.getElementById("S" + parseInt(i + 1) + "_bio").textContent =
			caso.suspeitos[i].bio;
		document.getElementById("S" + parseInt(i + 1) + "_atributos").textContent =
			caso.suspeitos[i].atributos;
		//locais
		document.getElementById("L" + parseInt(i + 1) + "_icone").textContent =
			caso.locais[i].icone;
		document.getElementById("local" + parseInt(i + 1)).textContent =
			caso.locais[i].nome;
		document.getElementById("L" + parseInt(i + 1) + "_ambiente").textContent =
			caso.locais[i].ambiente;
		document.getElementById("L" + parseInt(i + 1) + "_descricao").textContent =
			caso.locais[i].descricao;
		//armas
		document.getElementById("A" + parseInt(i + 1) + "_icone").textContent =
			caso.armas[i].icone;
		document.getElementById("arma" + parseInt(i + 1)).textContent =
			caso.armas[i].nome;
		document.getElementById("A" + parseInt(i + 1) + "_peso").textContent =
			caso.armas[i].peso;
		document.getElementById("A" + parseInt(i + 1) + "_descricao").textContent =
			caso.armas[i].descricao;

		//tabela
		document.getElementById("S" + parseInt(i + 1) + "_icone_tb").textContent =
			caso.suspeitos[i].icone;
		document.getElementById("S" + parseInt(i + 1) + "_icone_tb2").textContent =
			caso.suspeitos[i].icone;
		document.getElementById("A" + parseInt(i + 1) + "_icone_tb").textContent =
			caso.armas[i].icone;
		document.getElementById("A" + parseInt(i + 1) + "_icone_tb2").textContent =
			caso.armas[i].icone;
		document.getElementById("L" + parseInt(i + 1) + "_icone_tb").textContent =
			caso.locais[i].icone;
		document.getElementById("L" + parseInt(i + 1) + "_icone_tb2").textContent =
			caso.locais[i].icone;

		//opções
		document.getElementById("suspeito" + parseInt(i + 1) + "_op").textContent =
			caso.suspeitos[i].nome;
		document.getElementById("arma" + parseInt(i + 1) + "_op").textContent =
			caso.armas[i].nome;
		document.getElementById("local" + parseInt(i + 1) + "_op").textContent =
			caso.locais[i].nome;
	}

	let pistas = document.getElementById("pistas");
	pistas.innerHTML = "";
	const ul = document.createElement("ul");
	for (let i = 0; i < caso.pistas.length; i++) {
		const li = document.createElement("li");
		li.textContent = caso.pistas[i];
		ul.appendChild(li);
	}
	pistas.appendChild(ul);

	solucao = {
		suspeito: caso.solucao[0],
		arma: caso.solucao[1],
		local: caso.solucao[2]
	};
}
let solucao = {
	suspeito: "",
	arma: "",
	local: ""
};

// Inicialização do jogo
function initGame() {
	carregarCaso();
}

let tentativas = 3;
// Verificar palpite
document.getElementById("submit-guess").addEventListener("click", () => {
	const suspeito = document.getElementById("suspect").value;
	const arma = document.getElementById("weapon").value;
	const local = document.getElementById("location").value;

	if ( suspeito=="" || arma=="" || local=="") {
		showResult("Erro", "Por favor, selecione todas as opções!");
		return;
	}

	const isCorrect =
		suspeito === solucao.suspeito &&
		arma === solucao.arma &&
		local === solucao.local;

	if (isCorrect) {
		document.getElementById("btnPular").style = "display:inline-block;";
		if (casoAtual == 0) {
			showResult("Parabéns!", storyCaso1[0]);
		} else {
			showResult("Parabéns!", storyCaso2[0]);
		}
		//showResult("Parabéns!", "Você resolveu o caso corretamente!");
	} else {
		document.getElementById("btnPular").style = "display:none;";
		showResult("Incorreto", msgTentativas());
		tentativas--;
	}
});

function showResult(title, message) {
	typeWriter(message);
	document.getElementById("result-title").textContent = title;
	document.getElementById("result-message").textContent = message;
	document.getElementById("result-modal").style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", () => {
	document.getElementById("result-modal").style.display = "none";
});

// Iniciar o jogo
initGame();

// Função para carregar estado salvo do localStorage
function loadState(tableId) {
	const savedData = JSON.parse(localStorage.getItem(tableId) || "{}");
	const table = document.getElementById(tableId);
	if (!table) return;

	const cells = table.querySelectorAll("tbody td");
	cells.forEach((cell) => {
		const row = cell.getAttribute("data-row");
		const col = cell.getAttribute("data-col");
		const key = row + "|" + col;

		if (savedData[key]) {
			// Aplica a classe correspondente
			cell.classList.add(savedData[key]);
			cell.textContent =
				savedData[key] === "cell-check"
					? "✓"
					: savedData[key] === "cell-x"
					? "✗"
					: "";
		}
	});
}

// Função para salvar estado no localStorage
function saveState(tableId) {
	const table = document.getElementById(tableId);
	if (!table) return;

	const cells = table.querySelectorAll("tbody td");
	const dataToSave = {};

	cells.forEach((cell) => {
		const row = cell.getAttribute("data-row");
		const col = cell.getAttribute("data-col");
		const key = row + "|" + col;

		if (cell.classList.contains("cell-check")) {
			dataToSave[key] = "cell-check";
		} else if (cell.classList.contains("cell-x")) {
			dataToSave[key] = "cell-x";
		} else if (cell.classList.contains("")) {
			dataToSave[key] = "";
		}
	});

	localStorage.setItem(tableId, JSON.stringify(dataToSave));
}

// Função para RESETAR estado no localStorage
function ResetSaveState(tableId) {
	const table = document.getElementById(tableId);
	if (!table) return;

	const cells = table.querySelectorAll("tbody td");
	const dataToSave = {};

	cells.forEach((cell) => {
		cell.textContent = "";
		cell.classList.remove("cell-check");
		cell.classList.remove("cell-x");
	});
	saveState(tableId);
}

// Função para alternar estado da célula
function toggleCell(cell) {
	if (cell.classList.contains("cell-check")) {
		// Se já é check, passa para X
		cell.classList.remove("cell-check");
		cell.classList.add("cell-x");
		cell.textContent = "✗";
	} else if (cell.classList.contains("cell-x")) {
		// Se já é X, limpa
		cell.classList.remove("cell-x");
		cell.textContent = "";
	} else {
		// Se está vazio, vira check
		cell.classList.add("cell-check");
		cell.textContent = "✓";
	}
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
	const tables = [
		"grid-suspeitos-armas",
		"grid-suspeitos-locais",
		"grid-armas-locais"
	];

	// Carrega estado salvo para cada tabela
	tables.forEach((tableId) => {
		loadState(tableId);

		// Adiciona listener de clique
		const table = document.getElementById(tableId);
		if (table) {
			table.querySelectorAll("tbody td").forEach((cell) => {
				cell.addEventListener("click", () => {
					toggleCell(cell);
					saveState(tableId);
				});
			});
		}
	});

	// Botão de reiniciar
	const resetBtn = document.getElementById("reset-btn");
	resetBtn.addEventListener("click", () => {
		if (confirm("Tem certeza de que deseja reiniciar o jogo?")) {
			// Limpa localStorage
			tables.forEach((tableId) => {
				ResetSaveState(tableId);
			});

			tables.forEach((tableId) => {
				localStorage.removeItem(tableId);
			});
		}
	});
});

let index = 0;
let timeoutIds = [];

function typeWriter(storyText) {
	const storyElement = document.getElementById("result-message");

	// Limpa todos os timeouts anteriores (caso a função seja chamada novamente)
	clearAllTimeouts();

	if (index < storyText.length) {
		storyElement.innerHTML =
			storyText.substring(0, index) + '<span class="cursor"></span>';
		index++;
		const timeoutId = setTimeout(() => typeWriter(storyText), 50);
		timeoutIds.push(timeoutId); // Armazena o ID do timeout
	} else {
		storyElement.innerHTML = storyText;
		index = 0;
		timeoutIds = []; // Limpa os IDs quando a animação termina
	}
}

// Função para pular a animação

document.getElementById("btnPular").addEventListener("click", () => {
	pular();
});
function pular() {
	const storyElement = document.getElementById("result-message");
	const currentText = storyElement.textContent; // Pega o texto sem as tags HTML

	// Limpa todos os timeouts pendentes
	clearAllTimeouts();

	// Exibe o texto completo (remove o cursor)
	storyElement.innerHTML = currentText;
	index = 0;
	timeoutIds = [];
	if (casoAtual == 0) {
		storyElement.innerHTML = storyCaso1[storyCaso1.length - 1];
	} else {
		storyElement.innerHTML = storyCaso2[storyCaso2.length - 1];
	}
}

// Função para limpar todos os timeouts
function clearAllTimeouts() {
	timeoutIds.forEach((id) => clearTimeout(id));
	timeoutIds = [];
}

function Proxima1() {
	proximaPagina(storyCaso1);
}
function Proxima2() {
	proximaPagina(storyCaso2);
}

let paginaST1 = 0;
function proximaPagina(story) {
	if (story.length <= paginaST1 + 1) {
		paginaST1 = 0;
		return;
	} else {
		paginaST1++;
		typeWriter(story[paginaST1]);
	}
}
function proximoCaso() {
	casoAtual++;
	if (casoAtual >= casos.length) {
		return;
	} else {
		carregarCaso();
		document.getElementById("result-modal").style.display = "none";
		resetar();
	}
}
function limparSelects() {
	document.getElementById("suspect").selectedIndex = 0;
	document.getElementById("weapon").selectedIndex = 0;
	document.getElementById("location").selectedIndex = 0;
}

// Exemplo: Adicionando ao botão de submissão para resetar os selects após enviar o palpite
document.getElementById("submit-guess").addEventListener("click", function () {
	limparSelects();
});

function resetar() {
	const tables = [
		"grid-suspeitos-armas",
		"grid-suspeitos-locais",
		"grid-armas-locais"
	];
	// Limpa localStorage
	tables.forEach((tableId) => {
		ResetSaveState(tableId);
	});

	tables.forEach((tableId) => {
		localStorage.removeItem(tableId);
	});
}

function getSelectedIndex(elementId) {	
	return parseInt(document.getElementById(elementId).value.slice(1)) - 1;
}
function msgTentativas() {
	const suspeitoIndex = getSelectedIndex("suspect");
	const armaIndex = getSelectedIndex("weapon");
	const localIndex = getSelectedIndex("location");

	const caso = casos[casoAtual];

	const suspeito = caso.suspeitos[suspeitoIndex].nome;
	const arma = caso.armas[armaIndex].nome;
	const local = caso.locais[localIndex].nome;

	let msg;
	if (tentativas == 3) {
		msg = `O detetive ajusta sua lupa e revisa suas anotações... Mas opa! Nada conecta o(a) suspeito(a) ${suspeito} com a arma ${arma} e o local ${local}. Uma dedução desastrosa! Ele recebe uma advertência e é aconselhado a voltar à tabela de deduções para evitar mais gafes dignas de um estagiário de investigação.`;
	}

	if (tentativas == 2) {
		msg = `Dramático e confiante, o detetive aponta para ${suspeito} e declara: "Foi você!" Mas... o local ${local} não faz sentido, a arma ${arma} também não encaixa, e no fim das contas, nada se conecta! O júri não perdoa, e o detetive é preso por difamação. Se quiser recuperar sua credibilidade, volte à tabela de deduções e resolva esse caso com lógica!`;
	}

	if (tentativas == 1) {
		msg = `Após uma sequência de erros vergonhosos, o detetive faz sua última aposta... e falha miseravelmente! Sua reputação despenca mais rápido que um vilão de filme de ação em um prédio sem paraquedas. O tribunal não perdoa: pena de morte! Agora, suas deduções são feitas no além, volte a tabela de deduções e complete. Quem sabe lá no céu ele finalmente resolva um caso direito?`;
	}
	if (tentativas < 1) {
		msg = `O detetive errou de novo, mas ele está no céu, agora suas deduções são infinitas, infinitos erros?`;
	}

	return msg;
}