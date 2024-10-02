const questions = {
q1:[
'Você está caminhando pelo corredor de Hogwarts e vê um colega intimidando outro aluno. O que você faz?',
['Confronto o agressor imediatamente.','Grifinória'],
['Ignoro, pois isso não me afeta.','Sonserina'],
['Anoto os detalhes e vou reportar a um professor.','Corvinal'],
['Tento mediar a situação e ajudar ambos os lados a resolverem o problema.','LufaLufa']],
q2:[
'Qual dessas qualidades você mais valoriza em si mesmo?',
['Coragem.','Grifinória'],
['Ambição.','Sonserina'],
['Inteligência.','Corvinal'],
['Lealdade.','LufaLufa']],
q3:[
'Você está prestes a fazer um exame difícil, como você se prepara?',
['Pratico o que aprendi com confiança.','Grifinória'],
['Uso qualquer meio necessário para garantir que vou passar.','Sonserina'],
['Estudo e me preparo com antecedência.','Corvinal'],
['Faço um grupo de estudo com amigos para nos ajudarmos.','LufaLufa']],
q4:[
'Se você pudesse escolher um animal mágico como companheiro, qual seria?',
['Um grifo, símbolo de bravura.','Grifinória'],
['Uma cobra, símbolo de astúcia.','Sonserina'],
['Uma coruja, símbolo de sabedoria.','Corvinal'],
['Um texugo, símbolo de perseverança.','LufaLufa']],
q5:[
'Qual dos seguintes cenários de desafio você gostaria de enfrentar?',
['Um dragão cuspidor de fogo.','Grifinória'],
['Uma negociação tensa com um inimigo perigoso.','Sonserina'],
['Um enigma complicado de decifrar.','Corvinal'],
['Uma situação de sobrevivência em um ambiente hostil.','LufaLufa']],
q6:[
'Como você lida com suas responsabilidades?',
['Assumo todas com coragem, mesmo que sejam difíceis.','Grifinória'],
['Priorizo aquelas que vão me trazer mais benefícios.','Sonserina'],
['Organizo-me com eficiência para completar tudo com perfeição.','Corvinal'],
['Cumpro todas as minhas tarefas de forma dedicada e com cooperação.','LufaLufa']],
q7:[
'O que você mais valoriza em seus amigos?',
['A lealdade deles em todas as situações.','LufaLufa'],
['A coragem que eles têm para enfrentar qualquer coisa.','Grifinória'],
['A astúcia e a capacidade de me ajudar a alcançar meus objetivos.','Sonserina'],
['A sabedoria e o intelecto que eles compartilham.','Corvinal']],
q8:[
'Se você encontrasse um item raro e valioso, o que faria?',
['Compartilharia com alguém em quem confio.','LufaLufa'],
['Guardaria para estudar e entender sua função.','Corvinal'],
['Usaria para alcançar meus objetivos pessoais.','Sonserina'],
['Usaria para ajudar alguém necessitado.','Grifinória']],
q9:[
'Você é colocado em um time de Quadribol. Qual seria sua posição?',
['Apanhador, buscando a vitória com foco.','Grifinória'],
['Capitão, liderando e montando a melhor estratégia.','Sonserina'],
['Batedor, sempre observando e defendendo o time com inteligência.','Corvinal'],
['Artilheiro, trabalhando em equipe para garantir o gol.','LufaLufa']],
q10:[
'Qual seria sua aula favorita em Hogwarts?',
['Defesa Contra as Artes das Trevas, para proteger os outros.','Grifinória'],
['Poções, para criar o que for necessário.','Sonserina'],
['Aritmância, para entender os mistérios do mundo com lógica.','Corvinal'],
['Herbologia, para cuidar e proteger a natureza.','LufaLufa']]

}
const imgBackground = {
	Grifinória: "https://i.pinimg.com/474x/48/0a/64/480a64aa3e9f4eacf9cb863ea9402603.jpg",
  Sonserina: "https://i.pinimg.com/736x/5b/fd/66/5bfd6694ba106e0af8d33fd06cbf5fcd.jpg",
  Corvinal: "https://i.pinimg.com/736x/29/3d/3c/293d3cb2a642afc6d1641463f8a0bdb7.jpg",
  LufaLufa: "https://i.pinimg.com/originals/31/cb/e1/31cbe139260ce53e89b7dd3debf23c2d.jpg"
}
let correntQuestion = -1;
let answers = {}; // Armazenar as respostas temporariamente

function nextQuestion() {
    if (correntQuestion >= 9) {
        var botaoN = document.getElementById("next");
        botaoN.disabled = true;
				var botaoS = document.getElementById("submit");
        botaoS.disabled = false;
			return
    } else {
        var botaoP = document.getElementById("prev");
        botaoP.disabled = false;
    }
	    correntQuestion++;
    startquestios(correntQuestion);
}

function prevQuestion() {
    if (correntQuestion <= 0) {
        var botaoP = document.getElementById("prev");
        botaoP.disabled = true;
				return
    } else {
        var botaoN = document.getElementById("next");
        botaoN.disabled = false;
    }
	    correntQuestion--;
    startquestios(correntQuestion);
}

function startquestios(i) {
    const questionKeys = Object.keys(questions);
    let qt = `<div class="question">
        <h3>${i + 1}. ${questions[questionKeys[i]][0]}</h3>`;

    // Criar inputs com checagem das respostas armazenadas
    for (let j = 1; j <= 4; j++) {
        const isChecked = answers[`q${i + 1}`] === questions[questionKeys[i]][j][1] ? 'checked' : '';
        qt += `<label><input type="radio" name="q${i + 1}" value="${questions[questionKeys[i]][j][1]}" ${isChecked}> ${questions[questionKeys[i]][j][0]}</label>`;
    }

    qt += `</div>`;

    const quizForm = document.getElementById('quizForm');
    qt += `<button id="submit" disabled ="true" type="submit">Descobrir minha casa</button>`;
    quizForm.innerHTML = qt;

    // Restaurar resposta ao mudar de pergunta
    const radios = document.querySelectorAll(`input[name="q${i + 1}"]`);
    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            answers[`q${i + 1}`] = this.value; // Armazenar a resposta
        });
    });
}
let houseScores = {
        Grifinória: 0,
        Sonserina: 0,
        Corvinal: 0,
        LufaLufa: 0
    };
document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();
		const totalQuestions = Object.keys(questions).length;

    // Verificar se todas as perguntas foram respondidas
    if (Object.keys(answers).length < totalQuestions) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return; // Impede o envio do formulário
    }

    houseScores = {
        Grifinória: 0,
        Sonserina: 0,
        Corvinal: 0,
        LufaLufa: 0
    };

    // Processar as respostas armazenadas
    Object.keys(answers).forEach(question => {
        houseScores[answers[question]]++;
    });

  // Determinar a casa com maior pontuação
  let userHouse = Object.keys(houseScores).reduce((a, b) => houseScores[a] > houseScores[b] ? a : b);

  // Mostrar o resultado da casa
  const houseResult = document.getElementById('houseResult');
  houseResult.innerHTML = `<h2>Você pertence à casa ${userHouse}!</h2>`;
	
	const characters = document.getElementById('characters');
characters.style.backgroundImage = "url("+imgBackground[userHouse]+")";

  // Buscar personagens da casa
  fetchCharacters(userHouse);
	TextHouses(userHouse)


});

function fetchCharacters(house) {
  const charactersDiv = document.getElementById('characters');
  charactersDiv.innerHTML = `<h3>Personagens da casa ${house}:</h3><ul id="characterList"></ul>`;
	let casa;
	console.log(house)
	if(house=="Grifinória"){		
		casa="Gryffindor";
	}else if(house=="Sonserina"){
		casa="Slytherin";
	}else if(house=="Corvinal"){
		casa="Ravenclaw";
	}else{
		casa="Hufflepuff";
	}
	
  fetch(`https://hp-api.onrender.com/api/characters/house/${casa}`)
    .then(response => response.json())
    .then(data => {
      const characterList = document.getElementById('characterList');
      data.forEach(character => {
        const listItem = document.createElement('li');
				const wiki = document.createElement('a');
				wiki.href="https://harrypotter.fandom.com/pt-br/wiki/"+replaceSpaces(character.name)
				wiki.textContent=character.name;
				wiki.target="_blank";
        listItem.appendChild(wiki)
        characterList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erro ao buscar personagens:', error));
}
function replaceSpaces(str) {
  return str.replace(/\s+/g, '_');
}

function TextHouses(house){
	const housesTexts={
	Grifinória:"A Grifinória valoriza coragem, bravura e determinação. Seus membros são conhecidos por sua audácia e disposição para enfrentar desafios, mesmo quando as chances parecem impossíveis. É a casa dos heróis e daqueles que se destacam por seus atos de bravura.",
	Sonserina:"A Sonserina valoriza ambição, astúcia e liderança. Os sonserinos são estrategistas naturais, sempre buscando maneiras de alcançar seus objetivos. Eles são determinados, perseverantes e muitas vezes dispostos a tomar decisões difíceis para alcançar o sucesso.",
	Corvinal:"A Corvinal preza a inteligência, sabedoria e criatividade. Seus membros são conhecidos por sua curiosidade insaciável e habilidade de pensar de forma crítica. Corvinos tendem a ser estudiosos, sempre em busca de novos conhecimentos e soluções inovadoras.",
	LufaLufa:"A Lufa-Lufa valoriza trabalho duro, lealdade e justiça. Seus membros são humildes, dedicados e acreditam no poder da colaboração. Lufanos são os que trabalham incansavelmente e tratam todos com gentileza e respeito, sendo os mais inclusivos de todas as casas."
	}
	const Element=`
	<div class="house ${house}">
  <h2><a href="https://harrypotter.fandom.com/pt-br/wiki/${house}" target="_blank">${house}</a></h2>
  <p>
   ${housesTexts[house]}
  </p>
</div>
<div class="progress-bar" id="progressBar">
        <div class="progress-segment Grifinória" id="orange">25%</div>
        <div class="progress-segment Sonserina" id="green">25%</div>
        <div class="progress-segment Corvinal" id="blue">25%</div>
        <div class="progress-segment LufaLufa" id="yellow">25%</div>
    </div>
	`
	var divHouse = document.getElementById("aboutHouse");
	aboutHouse.innerHTML=Element;
	
	updateProgressBar(houseScores.Grifinória*10, houseScores.Sonserina*10, houseScores.Corvinal*10, houseScores.LufaLufa*10)
}
//startquestios()
function updateProgressBar(o, g, b, y) {
            // Calcula a soma total para garantir que seja 100%
            const total = o + g + b + y;
            if (total !== 100) {
                alert('A soma das porcentagens deve ser igual a 100%');
                return;
            }

            // Atualiza a largura de cada segmento
            document.getElementById('orange').style.width = o + '%';
            document.getElementById('green').style.width = g + '%';
            document.getElementById('blue').style.width = b + '%';
            document.getElementById('yellow').style.width = y + '%';

            // Atualiza o texto interno de cada segmento
            document.getElementById('orange').textContent = o + '%';
            document.getElementById('green').textContent = g + '%';
            document.getElementById('blue').textContent = b + '%';
            document.getElementById('yellow').textContent = y + '%';
        }
