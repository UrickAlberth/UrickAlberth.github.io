const puzzleContainer = document.getElementById('puzzle-container');
let imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk5lXjt8WO3iCoNXzDDYEOv4c_v1DnR0isw&s'; // Coloque o caminho da sua imagem aqui
const totalPieces = 16; // 4x4
let draggedPiece = null;
const piecesLocalizacao = {};
let piecesORDEM;
let pieces = [];
let jogadas=0;

function createPuzzle() {
    pieces = [];
		puzzleContainer.innerHTML="";
    for (let i = 0; i < totalPieces; i++) {
        let piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = `url(${imageSrc})`;
        piece.style.backgroundPosition = `0px 0px`;
        cortar(piece, i);
        piece.style.backgroundSize = "400px";
        piece.draggable = true; // Habilita o arrastar

        // Eventos de mouse
        piece.addEventListener('dragstart', handleDragStart);
        piece.addEventListener('dragover', handleDragOver);
        piece.addEventListener('drop', handleDrop);

        // Eventos de toque
        piece.addEventListener('touchstart', handleTouchStart);
        piece.addEventListener('touchmove', handleTouchMove);
        piece.addEventListener('touchend', handleTouchEnd);

        puzzleContainer.appendChild(piece);
        pieces.push(piece);
    }
    piecesORDEM = [...pieces];
}

function handleDragStart(event) {
    draggedPiece = event.target;
    event.dataTransfer.setData('text/plain', '');
}

function handleDragOver(event) {
    event.preventDefault(); // Necessário para permitir o drop
}

function handleDrop(event) {
    event.preventDefault();
    if (event.target.classList.contains('puzzle-piece')) {
        swapPieces(event.target, draggedPiece);
        checkWin(); // Verifica se o jogador ganhou após a troca das peças
				jogadas++;
    }
}

// Funções para eventos de toque
let touchStartX, touchStartY;
let position
function handleTouchStart(event) {
    draggedPiece = event.target;
	position=event.target.style.backgroundPosition
		
		draggedPiece.style.backgroundImage = `url(${imageSrc})`;
		draggedPiece.style.backgroundSize = "400px";
	draggedPiece.style.backgroundPosition=position;
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    event.preventDefault();
}

function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const piece = draggedPiece;
		;
    
		piece.style.backgroundImage = `url(${imageSrc})`;
		piece.style.backgroundSize = "400px";
		piece.style.backgroundPosition=position;
		
}

function handleTouchEnd(event) {
    const target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    if (target && target.classList.contains('puzzle-piece')) {
        swapPieces(target, draggedPiece);
        checkWin(); // Verifica se o jogador ganhou
				jogadas++;
    }
	
    draggedPiece.style.position = 'relative';
    draggedPiece.style.left = '0px';
    draggedPiece.style.top = '0px';
	draggedPiece.style.backgroundImage = `url(${imageSrc})`;
		draggedPiece.style.backgroundSize = "400px";
	draggedPiece.style.backgroundPosition=position;
		
}

function swapPieces(piece1, piece2) {
    const temp = document.createElement('div');
    puzzleContainer.insertBefore(temp, piece1);
    puzzleContainer.insertBefore(piece1, piece2);
    puzzleContainer.insertBefore(piece2, temp);
    puzzleContainer.removeChild(temp);
}

function cortar(piece, i) {
    const x = (i % 4) * -100;
    const y = Math.floor(i / 4) * -100;
    piece.style.backgroundPosition = `${x}px ${y}px`;
    piecesLocalizacao["pieces" + i] = piece.style.backgroundPosition;
}

function checkWin() {
    const puzzle = Array.from(document.getElementsByClassName("puzzle-piece"));
    let allCorrect = true;

    puzzle.forEach((piece, index) => {
        if (piece.style.backgroundPosition !== piecesLocalizacao["pieces" + index]) {
            allCorrect = false;
						piece.style.border=""
						
        }else{
					piece.style.border = "none";
				}
    });
const win = document.getElementById("win");
    if (allCorrect) {        
        win.textContent = `Parabéns! Você completou o quebra-cabeça! com ${jogadas} movimento(s)`;
				jogadas=0;
        return true;
    }
	win.textContent = '';
    return false;
}

createPuzzle();



function shufflePieces(pieces) {
    // Função para embaralhar as peças
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => puzzleContainer.appendChild(piece));
	checkWin()
	jogadas=0;
}

function newImg(){
	imageSrc = 'https://picsum.photos/400/400?' + new Date().getTime();
	createPuzzle();
	const win = document.getElementById("win");
	win.textContent = '';
	jogadas=0;
}