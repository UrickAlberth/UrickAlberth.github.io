const playerCards = document.getElementById("playerCards");
const machine1Cards = document.getElementById("machine1Cards");
const machine2Cards = document.getElementById("machine2Cards");
const machine3Cards = document.getElementById("machine3Cards");
const drawCard = document.getElementById("drawCard");
const discardPile = document.getElementById("discardPile");
const jogadasBtn = document.getElementById("jogadas");
const jogadasContainer = document.getElementById("jogadas-container");

const COLORS = ["red", "blue", "yellow", "green"];
const VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "🚫", "🔄", "+4"];
let deck = createCardDeck();
let jogadas = [];
let discardColor = "blue";
let discardValue = "1";
let currentPlayer = 0; // 0 = Player, 1 = Máquina 1, 2 = Máquina 2, 3 = Máquina 3
let direction = 1; // 1 = horário, -1 = anti-horário
let accumulatedDraw = 0;

// Função para criar o deck de cartas
function createCardDeck() {	
    return COLORS.flatMap((color) => VALUES.map((value) => ({ color, value })));
}

// Função para embaralhar o deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Função para verificar se uma carta pode ser jogada
function canPlayCard(cardColor, cardValue) {
    return cardColor === "black" || cardColor === discardColor || cardValue === discardValue;
}

// Função para criar uma carta aleatória
function createRandomCard() {
    if (!deck.length) deck = createCardDeck();
    const randomIndex = Math.floor(Math.random() * deck.length);
    return createCardElement(deck.splice(randomIndex, 1)[0]);
}

// Função para criar o elemento visual da carta
function createCardElement({ color, value }) {
    const card = document.createElement("div");
		if(value=="+4"){
			color = "black";
		}
    card.className = `card ${color}`;
    card.textContent = value;
    return card;
}

// Função para processar o movimento de uma carta
async function playCard(card, jogador) {
    const cardValue = card.textContent.trim();
    const cardColor = getCardColor(card);
		showAnimation("")

    animateCard(card, discardPile);
    animationHandtoDeck(jogador, card);

    let newDiscardColor = cardColor;
    let newDiscardValue = cardValue;

    if (cardValue === "+4") {
        newDiscardColor = await selectionColor();
        accumulatedDraw += 4;
        showAnimation("plus");
    } else {
        handleSpecialCard(cardValue, card);
    }

    discardColor = newDiscardColor;
    discardValue = newDiscardValue;

    setTimeout(() => {
        updateDiscardPile(discardColor, newDiscardValue);
        card.remove();
        if (checkWin()) return;
        nextTurn();
    }, 1000);

    addJogada(jogador, discardColor, cardValue);
}

// Função para animar a movimentação da carta
function animateCard(card, target) {
   /* const rect = card.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const clone = card.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.left = `${rect.left}px`;
    clone.style.top = `${rect.top}px`;
    document.body.appendChild(clone);
    setTimeout(() => {
        clone.style.left = `${targetRect.left}px`;
        clone.style.top = `${targetRect.top}px`;
        setTimeout(() => clone.remove(), 1000);
    }, 10);*/
}

function animationHandtoDeck(jogador,card){
	jogador = jogador === "Máquina 1" ? "PC1" : 
          jogador === "Máquina 2" ? "PC2" : 
          jogador === "Máquina 3" ? "PC3" : jogador;
	card.classList.add("MoveTo"+jogador);	
}

function animationDecktoHant(jogador){
	jogador = jogador === 1 ? "PC3" : 
          jogador === 2 ? "Player" :
          jogador === 3 ? "PC1" : "PC2";
	const card = document.createElement("div")
	card.classList.add("MoveTo"+jogador);
	card.classList.add("card");

	drawCard.appendChild(card);
	setTimeout(() => {
    card.remove(); // Remove o card do DOM
  }, 1000);
}

// Função para atualizar o monte de descarte
function updateDiscardPile(color, value) {
    discardPile.className = `card ${color}`;
    discardPile.textContent = value;
}

// Função para avançar para o próximo jogador
function nextTurn() {
    const cardElements = [playerCards, machine1Cards, machine2Cards, machine3Cards];
    currentPlayer = (currentPlayer + direction + 4) % 4;

    // Remove o destaque de todos os jogadores
    cardElements.forEach(card => (card.style = ""));

    // Adiciona o destaque ao jogador atual
    cardElements[currentPlayer].style = "box-shadow: 0 0 20px cyan;";

    // Se o jogador atual não for o player, chama o turno da máquina
    if (currentPlayer !== 0) setTimeout(machineTurn, 1000);
}


// Função para o turno das máquinas
function machineTurn() {
    if (currentPlayer == 0) return;
    const machineHand = getCurrentMachineHand(currentPlayer);

    // Verifica se há cartas acumuladas para comprar
    if (accumulatedDraw > 0) {
        const plus2Cards = Array.from(machineHand.children).filter(card => 
            canPlayCard(getCardColor(card), card.textContent.trim()) && 
            card.textContent.trim() === "+2"
        );
        
        if (plus2Cards.length > 0) {
            const card = plus2Cards[Math.floor(Math.random() * plus2Cards.length)];
            playCard(card, `Máquina ${currentPlayer}`);
        } else {
            handleDrawCards(accumulatedDraw, machineHand, currentPlayer);
            accumulatedDraw = 0;
            nextTurn();
        }
        return;
    }

    // Turno normal da máquina
    const playableCards = Array.from(machineHand.children).filter((card) =>
        canPlayCard(getCardColor(card), card.textContent.trim())
    );
    
    if (playableCards.length > 0) {
        const card = playableCards[Math.floor(Math.random() * playableCards.length)];
        playCard(card, `Máquina ${currentPlayer}`);
    } else {
        const newCard = createRandomCard();
        animationDecktoHant(currentPlayer)
        setTimeout(() => machineHand.appendChild(newCard), 1000);
        addJogada(`Máquina ${currentPlayer}`, "Comprou carta");
        if (canPlayCard(getCardColor(newCard), newCard.textContent.trim())) {
            setTimeout(() => playCard(newCard, `Máquina ${currentPlayer}`), 1000);
        } else {
            nextTurn();
        }
    }
}

// Função para obter a mão da máquina atual
function getCurrentMachineHand(currentPlayer) {
		if (currentPlayer === 0) return playerCards;
    if (currentPlayer === 1) return machine1Cards;
    if (currentPlayer === 2) return machine2Cards;
    if (currentPlayer === 3) return machine3Cards;
}


// Função para lidar com cartas especiais
function handleSpecialCard(cardValue, card) {
    if (cardValue === "🚫") {
        currentPlayer = nextCurrentPlayer();
        showAnimation("block");
    } else if (cardValue === "🔄") {
        direction *= -1;
        showAnimation(direction == 1 ? "rotate-right" : "rotate-left"); 
    } else if (cardValue === "+2") {
        accumulatedDraw += 2;
        showAnimation("plus");
    }
}

function nextCurrentPlayer(){
	return (currentPlayer + direction + 4) % 4;
}

// Função para gerenciar a compra de cartas
function handleDrawCards(count, targetHand,Player) {
    for (let i = 0; i < count; i++) {
        const newCard = createRandomCard();        
        setTimeout(() => targetHand.appendChild(newCard), 1000);
    }
	animationDecktoHant(Player)
    addJogada(targetHand === playerCards ? "Player" : `Máquina ${Player}`, `Comprou ${count} cartas`);
}

// Evento: Jogador joga uma carta
playerCards.addEventListener("click", (e) => {
    if (currentPlayer !== 0) return;
    const card = e.target;
    if (!card.classList.contains("card")) return;
    const cardColor = getCardColor(card);
    const cardValue = card.textContent.trim();

    // Verifica se há cartas acumuladas para comprar
    if (accumulatedDraw > 0) {
        if (cardValue === "+2" ||cardValue === "+4"  && canPlayCard(cardColor, cardValue)) {
            playCard(card, "Player");
        } else {
            alert(`Você deve comprar ${accumulatedDraw} cartas!`);
            handleDrawCards(accumulatedDraw, playerCards, 0);
            accumulatedDraw = 0;
            nextTurn();
        }
        return;
    }

    // Jogada normal
    if (canPlayCard(cardColor, cardValue)) {
        playCard(card, "Player");
    } else {
        alert("Você não pode jogar esta carta!");
    }
});

// Evento: Jogador compra uma carta
drawCard.addEventListener("click", () => {
    if (currentPlayer !== 0) return;
		if (accumulatedDraw > 0){
			handleDrawCards(accumulatedDraw, playerCards, 0);
            accumulatedDraw = 0;
            nextTurn();
			return
		}
    const newCard = createRandomCard();
    animationDecktoHant(currentPlayer)
    setTimeout(() => playerCards.appendChild(newCard), 1000);
    addJogada("Player", "Comprou carta");
    if (!canPlayCard(getCardColor(newCard), newCard.textContent.trim())) {
        nextTurn();
    }
});

// Função para checar se houve vencedor
function checkWin() {
    const hands = [playerCards, machine1Cards, machine2Cards, machine3Cards];
    const winners = hands.filter((hand) => hand.children.length === 0);
    if (winners.length > 0) {
        const winner = winners[0] === playerCards ? "Player" : "Máquina";
        alert(`${winner} VENCEU!`);
        addJogada(winner, "GANHOU");
        return true;
    }
    return false;
}

// Função para adicionar jogadas ao registro
function addJogada(jogador, cor, valor) {
    const jogada = valor ? { jogador, cor, valor } : { jogador, acao: cor };
    jogadas.push(jogada);
    renderJogadas();
}

// Função para exibir as jogadas
function renderJogadas() {
    jogadasContainer.innerHTML = jogadas
        .map((j) =>
            j.valor
                ? `${j.jogador} jogou <span style="background:${j.cor};">${j.valor}</span>`
                : `${j.jogador}: ${j.acao}`
        )
        .join("<br>");
    jogadasContainer.scrollTop = jogadasContainer.scrollHeight;
}

// Evento: Alternar exibição do histórico de jogadas
jogadasBtn.addEventListener("click", () => {
    jogadasContainer.style.display =
        jogadasContainer.style.display === "block" ? "none" : "block";
});

// Função para obter a cor da carta
function getCardColor(card) {
	let cor
	cor = COLORS.find((color) => card.classList.contains(color));
cor=!cor?"black":cor;
    return cor
}

function showAnimation(type) {
            const actionDiv = document.getElementById("actionId");
            actionDiv.innerHTML = "";
            
            if (type === 'rotate-right' || type === 'rotate-left') {
                for (let i = 0; i < 2; i++) {
                    const arrow = document.createElement("div");
                    arrow.classList.add(type);
                    arrow.textContent = "↻";
                    actionDiv.appendChild(arrow);
                }
            } else if (type === 'block') {
                const lock = document.createElement("div");
                lock.classList.add("pulse");
                lock.textContent = "🚫";
                actionDiv.appendChild(lock);
            } else if (type === 'plus') {
                const number = document.createElement("div");
                number.classList.add("pulse");
                number.textContent = "+"+accumulatedDraw;
                actionDiv.appendChild(number);
            }else{
							actionDiv.innerHTML = "";
						}
        }

function selectionColor() {
    return new Promise((resolve) => {
			if (currentPlayer > 0) {
            const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            resolve(randomColor);
            return;
        }
        Swal.fire({
            title: "Escolha uma cor",
            showCancelButton: false,
            showConfirmButton: false,
            html: `
                <button class="color-btn" style="background-color: blue;" data-color="blue"></button>
                <button class="color-btn" style="background-color: red;" data-color="red"></button>
                <button class="color-btn" style="background-color: green;" data-color="green"></button>
                <button class="color-btn" style="background-color: yellow;" data-color="yellow"></button>
            `,
            didOpen: () => {
                document.querySelectorAll('.color-btn').forEach(btn => {
                    btn.style.padding = '30px';
                    btn.style.margin = '5px';
                    btn.style.border = 'none';
                    btn.style.borderRadius = '5px';
                    btn.style.cursor = 'pointer';
                    btn.addEventListener('click', () => {
                        const color = btn.getAttribute('data-color');
                        Swal.close();
                        resolve(color);
                    });
                });
            }
        });
    });
}
let corPlus4="blue"
function selectColor(color) {
    corPlus4=color;
	alert("teste!");
}

// Inicialização do jogo
function start() {
		accumulatedDraw = 0;
    jogadas = [];
    jogadasContainer.innerHTML = "";
    playerCards.innerHTML = "Player";
    machine1Cards.innerHTML = "PC1";
    machine2Cards.innerHTML = "PC2";
    machine3Cards.innerHTML = "PC3";
    currentPlayer = 0;
    direction = 1;
    deck = createCardDeck();
    shuffleDeck();
		showAnimation("")
	playerCards.style = "box-shadow: 0 0 20px cyan;";

    for (let i = 0; i < 7; i++) {
			  playerCards.appendChild(createRandomCard());
        machine1Cards.appendChild(createRandomCard());
        machine2Cards.appendChild(createRandomCard());
        machine3Cards.appendChild(createRandomCard());
    }

    const firstCard = createRandomCard();
    discardColor = getCardColor(firstCard);
    discardValue = firstCard.textContent.trim();
    updateDiscardPile(discardColor, discardValue);
}