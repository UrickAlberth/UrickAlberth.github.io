const mazeContainer = document.querySelector(".maze");

let mazeLayout = [
  "#### #####",
  "#pf    fp#",
  "# #####  #",
  "#     #  #",
  "# #####  #",
  "#       ##",
  "# #####  #",
  "# #  #   #",
  "#   # #  #",
  "#   P   ##",
  "# #####  #",
  "#        #",
  "# #####  #",
  "# #   #  #",
  "#       ##",
  "# #####  #",
  "#   #    #",
  "#  # #   #",
  "#p      p#",
  "##f    f##",
  "#### #####",
];
let mazeLayout2 = [
  "#### ###############",
  "#p     f ## f     p#",
  "# #####  ## #####  #",
  "#     #         #  #",
  "# #####  ## #####  #",
  "#                 ##",
  "# #####  ## #####  #",
  "# #  #   ## #  #   #",
  "#   # #       # #  #",
  "#       ###   P   ##",
  "# #####     #####  #",
  "#        ##        #",
  "# #####     #####  #",
  "# #   #  ## #   #  #",
  "#       ###       ##",
  "# #####     #####  #",
  "#   #    ##   #    #",
  "#  # #   ##  # #   #",
  "#       p##p       #",
  "##f     ####     f##",
  "#### ###############",
];
let mazeLayout3 = [
  "#### #####",
  "#pf    fp#",
  "# #####  #",
  "#     #  #",
  "# #####  #",
  "#       ##",
  "# #####  #",
  "# #  #   #",
  "#   # #  #",
  "#   P   ##",
  "# #####  #",
  "#        #",
  "# #####  #",
  "# #   #  #",
  "#       ##",
  "# #####  #",
  "#   #    #",
  "#  # #   #",
  "#p      p#",
  "##f    f##",
  "#### #####",
];

let rotate = 0;
function imgPacMan() {
  let imgPacMan_girada =
    "<img id='imgPac' style='transform: rotate(" +
    rotate +
    "deg);'src='https://cdn.icon-icons.com/icons2/1897/PNG/512/pacman_120924.png'>";
  return imgPacMan_girada;
}
let imgFantom =
  "<img id='imgFan' src='https://img.icons8.com/?size=512&id=Q6Sp70b0VxE1&format=png' >";

let idF = 0;
let contPontos = 0;
renderizar();
function renderizar() {
  mazeLayout.forEach((row, rowIndex) => {
    const mazeRow = document.createElement("div");
    mazeRow.className = "maze-row";

    row.split("").forEach((cell, columnIndex) => {
      const mazeCell = document.createElement("div");
      mazeCell.className = `cell ${cell === "#" ? "wall" : ""}`;

      if (cell === "P") {
        mazeCell.classList.add("pacman");
        mazeCell.innerHTML = imgPacMan();
      } else if (cell === "f") {
        idF++;
        mazeCell.classList.add("ghost");
        mazeCell.setAttribute("id", "f" + idF);
        mazeCell.innerHTML = imgFantom;
      } else if (cell === "p") {
        mazeCell.classList.add("power-up");
        mazeCell.innerHTML = "&#8902;";
      } else if (cell === " ") {
        mazeCell.textContent = "*";
        contPontos++;
      }

      mazeRow.appendChild(mazeCell);
    });

    mazeContainer.appendChild(mazeRow);
  });
}
// Variáveis para rastrear a posição do Pac-Man
let pacmanRow = 9; // Linha inicial do Pac-Man
let pacmanCol = 4; // Coluna inicial do Pac-Man

let pontuacao = 0;
let vidas = 5;
let power = false;
let pw = 0;

// Função para atualizar a posição do Pac-Man e mover sua classe na interface
function movePacman(newRow, newCol) {
  // Remova a classe 'pacman' da célula atual
  const currentCell = document.querySelector(
    `.maze-row:nth-child(${pacmanRow + 1}) .cell:nth-child(${pacmanCol + 1})`
  );
  currentCell.classList.remove("pacman");
  currentCell.innerHTML = "";

  // Atualize a posição do Pac-Man
  pacmanRow = newRow;
  pacmanCol = newCol;

  // Adicione a classe 'pacman' na nova célula
  const newCell = document.querySelector(
    `.maze-row:nth-child(${pacmanRow + 1}) .cell:nth-child(${pacmanCol + 1})`
  );
  if (newCell.textContent == "*") {
    newCell.textContent = "";
    contPontos--;
    pontuacao = pontuacao + 2;
    pontoS.pause();
    pontoS.currentTime = 0;
    pontoS.play();
  }
  if (newCell.classList.contains("power-up")) {
    power = true;
    newCell.classList.remove("power-up");
    powerS.pause();
    powerS.currentTime = 0;
    powerS.play();
  }

  /*if (retonar_inicio(newCell, "pacman") == 0) {
    return;
  }*/

  newCell.classList.add("pacman");
  newCell.innerHTML = imgPacMan();

  moverfantasmas1(f1Row, f1Col, 1);
  moverfantasmas1(f2Row, f2Col, 2);
  moverfantasmas1(f3Row, f3Col, 3);
  moverfantasmas1(f4Row, f4Col, 4);
}

// Evento de teclado para detectar as setas pressionadas pelo jogador
document.addEventListener("keydown", (event) => {
  const key = event.key;
  movimentacao(key);
});

function movimentacao(key) {
  let newRow = pacmanRow;
  let newCol = pacmanCol;
  // Atualize newRow e newCol com base na tecla pressionada
  if (key === "ArrowUp") {
    newCol -= 1;
    rotate = -80;
  } else if (key === "ArrowDown") {
    newCol += 1;
    rotate = 80;
  } else if (key === "ArrowLeft") {
    newRow -= 1;
    rotate = 180;
    if (pacmanRow == 0) {
      newRow = 20;
    }
  } else if (key === "ArrowRight") {
    newRow += 1;
    rotate = 0;
    if (pacmanRow == 20) {
      newRow = 0;
    }
  }

  // Verifique se a nova posição é válida (não é uma parede)
  const targetCell = mazeLayout[newRow][newCol];
  if (targetCell !== "#") {
    movePacman(newRow, newCol);
  }
  atualizarDisplay();
}

let f1Row = 1; // Linha inicial do fantasma 1
let f1Col = 2; // Coluna inicial do fantasma 1
let f2Row = 1;
let f2Col = 7;
let f3Row = 19;
let f3Col = 2;
let f4Row = 19;
let f4Col = 7;

function moveF1(newRow, newCol) {
  // Remova a classe 'ghost' da célula atual
  const currentCell = document.querySelector(
    `.maze-row:nth-child(${f1Row + 1}) .cell:nth-child(${f1Col + 1})`
  );

  currentCell.classList.remove("ghost");
  currentCell.classList.remove("ghostSuper");
  currentCell.id = "";
  if (currentCell.textContent == "*") {
    currentCell.innerHTML = "";
    currentCell.textContent = "*";
  } else {
    currentCell.innerHTML = "";
  }

  // Atualize a posição do fantasma
  f1Row = newRow;
  f1Col = newCol;

  // Adicione a classe 'ghost' na nova célula
  const newCell = document.querySelector(
    `.maze-row:nth-child(${f1Row + 1}) .cell:nth-child(${f1Col + 1})`
  );

  if (retonar_inicio(newCell, "pacman") == 0) {
    return;
  }
  if (retonar_inicio(newCell, "pacman") == 2) {
    moveF1(1, 2);
    power = false;
    newCell.classList.add("pacman");
    newCell.innerHTML = imgPacMan();
    return;
  }

  if (newCell.classList.contains("ghost")) {
    newCell.classList.add("ghostSuper");
    newCell.id = "f1" + currentCell.id;
    fsuperS.pause();
    fsuperS.currentTime = 0;
    fsuperS.play();
  } else {
    newCell.classList.add("ghost");
    newCell.id = "f1";
  }
  if (newCell.textContent == "*") {
    newCell.innerHTML = imgFantom + "*";
  } else {
    newCell.innerHTML = imgFantom;
  }
}

// Para o Fantasma 2

function moveF2(newRow, newCol) {
  const currentCell = document.querySelector(
    `.maze-row:nth-child(${f2Row + 1}) .cell:nth-child(${f2Col + 1})`
  );

  currentCell.classList.remove("ghost");
  currentCell.classList.remove("ghostSuper");
  currentCell.id = "";
  if (currentCell.textContent == "*") {
    currentCell.innerHTML = "";
    currentCell.textContent = "*";
  } else {
    currentCell.innerHTML = "";
  }

  f2Row = newRow;
  f2Col = newCol;

  const newCell = document.querySelector(
    `.maze-row:nth-child(${f2Row + 1}) .cell:nth-child(${f2Col + 1})`
  );
  if (retonar_inicio(newCell, "pacman") == 0) {
    return;
  }
  if (retonar_inicio(newCell, "pacman") == 2) {
    moveF2(1, 7);
    power = false;
    newCell.classList.add("pacman");
    newCell.innerHTML = imgPacMan();
    return;
  }
  if (newCell.classList.contains("ghost")) {
    newCell.classList.add("ghostSuper");
    newCell.id = "f2" + currentCell.id;
    fsuperS.pause();
    fsuperS.currentTime = 0;
    fsuperS.play();
  } else {
    newCell.classList.add("ghost");
    newCell.id = "f2";
  }
  if (newCell.textContent == "*") {
    newCell.innerHTML = imgFantom + "*";
  } else {
    newCell.innerHTML = imgFantom;
  }
}

// Para o Fantasma 3

function moveF3(newRow, newCol) {
  const currentCell = document.querySelector(
    `.maze-row:nth-child(${f3Row + 1}) .cell:nth-child(${f3Col + 1})`
  );

  currentCell.classList.remove("ghost");
  currentCell.classList.remove("ghostSuper");
  currentCell.id = "";
  if (currentCell.textContent == "*") {
    currentCell.innerHTML = "";
    currentCell.textContent = "*";
  } else {
    currentCell.innerHTML = "";
  }

  f3Row = newRow;
  f3Col = newCol;

  const newCell = document.querySelector(
    `.maze-row:nth-child(${f3Row + 1}) .cell:nth-child(${f3Col + 1})`
  );
  if (retonar_inicio(newCell, "pacman") == 0) {
    return;
  }
  if (retonar_inicio(newCell, "pacman") == 2) {
    moveF3(19, 2);
    power = false;
    newCell.classList.add("pacman");
    newCell.innerHTML = imgPacMan();
    return;
  }
  if (newCell.classList.contains("ghost")) {
    newCell.classList.add("ghostSuper");
    newCell.id = "f3" + currentCell.id;
    fsuperS.pause();
    fsuperS.currentTime = 0;
    fsuperS.play();
  } else {
    newCell.classList.add("ghost");
    newCell.id = "f3";
  }
  if (newCell.textContent == "*") {
    newCell.innerHTML = imgFantom + "*";
  } else {
    newCell.innerHTML = imgFantom;
  }
}

function moveF4(newRow, newCol) {
  const currentCell = document.querySelector(
    `.maze-row:nth-child(${f4Row + 1}) .cell:nth-child(${f4Col + 1})`
  );

  currentCell.classList.remove("ghost");
  currentCell.classList.remove("ghostSuper");
  currentCell.id = "";
  if (currentCell.textContent == "*") {
    currentCell.innerHTML = "";
    currentCell.textContent = "*";
  } else {
    currentCell.innerHTML = "";
  }

  f4Row = newRow;
  f4Col = newCol;

  const newCell = document.querySelector(
    `.maze-row:nth-child(${f4Row + 1}) .cell:nth-child(${f4Col + 1})`
  );
  if (retonar_inicio(newCell, "pacman") == 0) {
    return;
  }
  if (retonar_inicio(newCell, "pacman") == 2) {
    moveF4(19, 7);
    power = false;
    newCell.classList.add("pacman");
    newCell.innerHTML = imgPacMan();
    return;
  }
  if (newCell.classList.contains("ghost")) {
    newCell.classList.add("ghostSuper");
    newCell.id = "f4" + currentCell.id;
    fsuperS.pause();
    fsuperS.currentTime = 0;
    fsuperS.play();
  } else {
    newCell.classList.add("ghost");
    newCell.id = "f4";
  }
  if (newCell.textContent == "*") {
    newCell.innerHTML = imgFantom + "*";
  } else {
    newCell.innerHTML = imgFantom;
  }
}

function moverfantasmas1(fRow, fCol, f) {
  const rowDistance = Math.abs(pacmanRow - fRow);
  const colDistance = Math.abs(pacmanCol - fCol);
  let newRow = fRow;
  let newCol = fCol;

  // Verifica qual direção (vertical ou horizontal) está mais próxima e move o fantasma nessa direção
  if (rowDistance > colDistance || rowDistance <= 0) {
    if (pacmanRow >= newRow) {
      newRow = pacmanRow == newRow ? pacmanRow : newRow + 1;
    } else {
      newRow = pacmanRow == newRow ? pacmanRow : newRow - 1;
    }
  } else {
    if (pacmanCol >= newCol) {
      newCol = pacmanCol == newCol ? pacmanCol : newCol + 1;
    } else {
      newCol = pacmanCol == newCol ? pacmanCol : newCol - 1;
    }
  }

  const targetCell = mazeLayout[newRow][newCol];
  if (targetCell !== "#") {
    f == 1
      ? moveF1(newRow, newCol)
      : f == 2
      ? moveF2(newRow, newCol)
      : f == 3
      ? moveF3(newRow, newCol)
      : moveF4(newRow, newCol);
  }
}

function atualizarDisplay() {
  document.querySelector("#pts").textContent = pontuacao;
  document.querySelector("#vidas").textContent = vidas;
  let style = document.querySelector("#adaptar");
  if (contPontos <= 0) {
    vitoriaS.pause();
    vitoriaS.currentTime = 0;
    vitoriaS.play();
    mazeLayout = mazeLayout2;
    pacmanRow = 9;
    pacmanCol = 14;
    f1Row = 1;
    f1Col = 7;
    f2Row = 1;
    f2Col = 12;
    f3Row = 19;
    f3Col = 2;
    f4Row = 19;
    f4Col = 17;
    alert("Você Ganhou!!");
    var largura = window.innerWidth;
    if (largura >= 660) {
      style.innerHTML =
      `
      img{
	      width:10px;
	      height:10px;
      }
      .cell {
        width: 20px;
        height: 20px;
	    }
	    .maze {
        display: grid;
        grid-template-columns: repeat(21, 20px); /* Ajuste conforme necessário */
        gap: 1px; /* Espaçamento entre as células do labirinto */
      }
      `;
    }

    reiniciar();
  }
  if (vidas <= 0) {
    gameoverS.pause();
    gameoverS.currentTime = 0;
    gameoverS.play();
    mazeLayout = mazeLayout3;
    pacmanRow = 9;
    pacmanCol = 4;
    f1Row = 1;
    f1Col = 2;
    f2Row = 1;
    f2Col = 7;
    f3Row = 19;
    f3Col = 2;
    f4Row = 19;
    f4Col = 7;
    alert("Você Perdeu!!");
    style.innerHTML = "";
    reiniciar();
  }
}

function retonar_inicio(newCell, p_f) {
  if (newCell.classList.contains(p_f)) {
    if (power) {
      pw = 1;
      pontuacao += 6;
      console.log("up");
      fdeadS.pause();
      fdeadS.currentTime = 0;
      fdeadS.play();
      return 2;
    } else {
      vidas = vidas - 1;
      console.log(vidas);
      pdeadS.pause();
      pdeadS.currentTime = 0;
      pdeadS.play();
      movePacman(9, 4);
      moveF1(1, 2);
      moveF2(1, 7);
      moveF3(19, 2);
      moveF4(19, 7);
    }

    return 0;
  }

  return 1;
}

function reiniciar() {
  vidas = 5;
  contPontos = 0;
  pontuacao = 0;
  idF = 0;
  power = false;
  mazeContainer.innerHTML = "";

  renderizar();
}

const sons = {
  1: {
    nome: "fundo",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/fundo.mp3?v=1692238592385",
  },
  2: {
    nome: "vitoria",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/vitoria.mp3?v=1692238655027",
  },
  3: {
    nome: "fsuper",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/Fsuper.mp3?v=1692238702027",
  },
  4: {
    nome: "pdead",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/Pdead.mp3?v=1692238707898",
  },
  5: {
    nome: "gameover",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/gameover.mp3?v=1692238714037",
  },
  6: {
    nome: "power",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/power.mp3?v=1692238719565",
  },
  7: {
    nome: "ponto",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/ponto.mp3?v=1692238731513",
  },
  8: {
    nome: "fdead",
    link: "https://cdn.glitch.global/a18c37f3-b52b-426c-873c-a2667d40c7f0/Fdead.mp3?v=1692238761711",
  },
};
function creatSons() {
  for (const key in sons) {
    const som = sons[key];

    // Criar os elementos HTML para o som
    const tagS = document.createElement("audio");
    tagS.id = som.nome;
    tagS.src = som.link;
    const divS = document.querySelector("#audio");
    divS.appendChild(tagS);
  }
}
creatSons();
const fundoS = document.getElementById("fundo");
const vitoriaS = document.getElementById("vitoria");
const fsuperS = document.getElementById("fsuper");
const pdeadS = document.getElementById("pdead");
const gameoverS = document.getElementById("gameover");
const powerS = document.getElementById("power");
const pontoS = document.getElementById("ponto");
const fdeadS = document.getElementById("fdead");
let play = false;
function fundo() {
  const btnPlay = document.getElementById("play");
  if (play) {
    fundoS.pause();
    play = false;
    btnPlay.style = "background:#151515;";
  } else {
    fundoS.currentTime = 0;
    fundoS.play();
    fundoS.loop = true;
    play = true;
    btnPlay.style = "background:#00a6ed;";
  }
}

function esconder() {
  const menu = document.querySelector(".menu");
  const game = document.querySelector(".container");
  menu.style = "height:0px;";
  game.style = "display: flex;";
  fundo();
}
