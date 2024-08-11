function reiniciar(){
  for(var i=1;i<65;i++){
    $("#" + i).text("")
  }
  for(var i = 0 in pecasP){
    var j=parseInt(i)+1
    $("#"+j).text(pecasP[i])
  }
  var p=0
  for(var i = 64;i>48;i--){  
    $("#"+i).text(pecasB[p])    
    p=p+1    
  }
  vez=0
  tp1 = 0;
tp2 = 0;
tb1 = 0;
tb2 = 0;
rp1 = 0;
rb1 = 0;
  var telaFim = document.getElementById("FimDeJogo");
  telaFim.style.display = "none";
  corPretas()
}

var id2 = 0;
$("#container div.row div").click(function () {
  // Captura o ID da posição da peça
  var id = $(this).attr("id");

  // Captura o conteudo da seleção (Imagem peça)
  var peca = $(this).text();
  if (vezJogador(peca) == false) {
    return 0;
  }

  // inclui a peça seleciona no WebStoraged utilizando a   função setPosicaoPeca. Caso a peça já esteja selecionada anteriormente, a mesma e posicionada no local desejada e é limpada do webStoraged
  if (peca != "") {
    console.log(id);
    id2 = id;
    if (getPeca()) {
      comerPecas(id, peca);
      if (PouB(peca) == "P") {
        cheque("♚");
      }
      if (PouB(peca) == "B") {
        cheque("♔");
      }
      limparDados();
    } else {
      setPosicaoPeca(id, peca);
      $(this).text("");
    }
  } else {
    if (id2 == id) {
      id2 = 0;
      if (vez == 0) {
        vez = 1;
      } else {
        vez = 0;
      }
    }
    console.log(id);
    if (getPeca()) {
      rock(getPeca(), id);
      $("#" + id).text(getPeca());

      if (PouB(getPeca()) == "B") {
        cheque("♚");
      }
      if (PouB(getPeca()) == "P") {
        cheque("♔");
      }
      limparDados();
      vrock();
    }
  }
  corPretas();
});

function setPosicaoPeca(id, peca) {
  localStorage.setItem("id", id);
  localStorage.setItem("peca", peca);
  validarJogada(getPeca(), getPosicaoID());
}

function getPosicaoID() {
  return localStorage.getItem("id");
}

function getPeca() {
  return localStorage.getItem("peca");
}

function limparDados() {
  localStorage.clear();
  for (var i = 1; i < 65; i++) {
    var qdr = document.getElementById(i);

    qdr.style.border = "0.1px solid #000000";
  }
}

var col1 = [1, 9, 17, 25, 33, 41, 49, 57];
var col2 = [8, 16, 24, 32, 40, 48, 56, 64];
var colA = [2, 10, 18, 26, 34, 42, 50, 58];
var colB = [7, 15, 23, 31, 39, 47, 55, 63];
function validarJogada(peca, id, ch) {
  if (peca == "♙") {
    
    var mov1 = document.getElementById(id - 8);
    if ($(mov1).text() == "") {
      selecao(mov1);
      for (var i = 49; i < 57; i++) {
        if (id == i) {
          var mov2 = document.getElementById(id - 16);
          if ($(mov2).text() == "") {
            selecao(mov2);
          }
        }
      }
    }
    if (coluna(id - 7) != "c1") {
      var mov3 = document.getElementById(id - 7);
      if ($(mov3).text() != "") {
        if (PouB(mov3) == "P") {
          selecao(mov3);
        }
      }
    }
    if (coluna(id - 9) != "c2") {
      var mov4 = document.getElementById(id - 9);
      if ($(mov4).text() != "") {
        if (PouB(mov4) == "P") {
          selecao(mov4);
        }
      }
    }
    for (var i = 9; i < 17; i++) {
      if (id == i && ch!="ch") {        
        var esc = document.getElementById("escolhaB");
        escolha(esc);
      }
    }
  }
  if (peca == "♟") {
    for (var i = 49; i < 57; i++) {
      if (id == i && ch!="ch") {
        var esc = document.getElementById("escolhaP");
        escolha(esc);
      }
    }
    var mov1 = document.getElementById(parseInt(id) + 8);
    if ($(mov1).text() == "") {
      selecao(mov1);
      for (var i = 9; i < 17; i++) {
        if (id == i) {
          var mov2 = document.getElementById(parseInt(id) + 16);
          if ($(mov2).text() == "") {
            selecao(mov2);
          }
        }
      }
    }
    if (coluna(parseInt(id) + 7) != "c2") {
      var mov3 = document.getElementById(parseInt(id) + 7);
      if ($(mov3).text() != "") {
        if (PouB(mov3) == "B") {
          selecao(mov3);
        }
      }
    }
    if (coluna(parseInt(id) + 9) != "c1") {
      var mov4 = document.getElementById(parseInt(id) + 9);
      if ($(mov4).text() != "") {
        if (PouB(mov4) == "B") {
          selecao(mov4);
        }
      }
    }
  }
  if (peca == "♜" || peca == "♖") {
    //movimento pra baixo
    if (id < 57) {
      for (var i = 8; i < 64; i = i + 8) {
        var mov1 = document.getElementById(parseInt(id) + i);
        if (parseInt(id) + i > 64) {
        } else {
          if ($(mov1).text() == "") {
            selecao(mov1);
          } else {
            if (selectPouB(peca, mov1, "break") == "break") {
              break;
            }
          }
        }
      }
    }
    //movimento pra cima
    if (id > 8) {
      for (var i = 8; i < 64; i = i + 8) {
        var mov1 = document.getElementById(parseInt(id) - i);
        if (parseInt(id) - i <= 0) {
        } else {
          if ($(mov1).text() == "") {
            selecao(mov1);
          } else {
            if (selectPouB(peca, mov1, "break") == "break") {
              break;
            }
          }
        }
      }
    }
    //movimento pra esquerda
    for (var i = 1; i < 8; i++) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento pra direita
    for (var i = 1; i < 8; i++) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
  }
  if (peca == "♗" || peca == "♝") {
    //movimento esquerda/cima
    for (var i = 9; i < 64; i = i + 9) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento direita/cima
    for (var i = 7; i < 64; i = i + 7) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento direita/baixo
    for (var i = 9; i < 64; i = i + 9) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento esquerda/baixo
    for (var i = 7; i < 64; i = i + 7) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
  }
  if (peca == "♕" || peca == "♛") {
    //movimento pra baixo
    if (id < 57) {
      for (var i = 8; i < 64; i = i + 8) {
        var mov1 = document.getElementById(parseInt(id) + i);
        if (parseInt(id) + i > 64) {
        } else {
          if ($(mov1).text() == "") {
            selecao(mov1);
          } else {
            if (selectPouB(peca, mov1, "break") == "break") {
              break;
            }
          }
        }
      }
    }
    //movimento pra cima
    if (id > 8) {
      for (var i = 8; i < 64; i = i + 8) {
        var mov1 = document.getElementById(parseInt(id) - i);
        if (parseInt(id) - i <= 0) {
        } else {
          if ($(mov1).text() == "") {
            selecao(mov1);
          } else {
            if (selectPouB(peca, mov1, "break") == "break") {
              break;
            }
          }
        }
      }
    }
    //movimento pra esquerda
    for (var i = 1; i < 8; i++) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento pra direita
    for (var i = 1; i < 8; i++) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento esquerda/cima
    for (var i = 9; i < 64; i = i + 9) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento direita/cima
    for (var i = 7; i < 64; i = i + 7) {
      if (id - i < 1) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) - i);
      if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(id - i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento direita/baixo
    for (var i = 9; i < 64; i = i + 9) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c1") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
    //movimento esquerda/baixo
    for (var i = 7; i < 64; i = i + 7) {
      if (parseInt(id) + i > 64) {
        break;
      }
      var mov1 = document.getElementById(parseInt(id) + i);
      if (
        coluna(parseInt(id) + i) != "c1" &&
        coluna(parseInt(id) + i) != "c2"
      ) {
        if ($(mov1).text() == "") {
          selecao(mov1);
        } else {
          if (selectPouB(peca, mov1, "break") == "break") {
            break;
          }
        }
      } else {
        if (coluna(parseInt(id) + i) == "c2") {
          break;
        } else {
          if (selectPouB(peca, mov1, "") == "break") {
            break;
          }
        }
      }
    }
  }
  if (peca == "♘" || peca == "♞") {
    var cavalo = [6, 10, 15, 17];
    for (i in cavalo) {
      if (id - cavalo[i] > 0) {
        if (cavalo[i] == 6 || cavalo[i] == 15) {
          if (coluna(parseInt(id) - cavalo[i]) != "c1") {
            if (cavalo[i] == 6 && coluna(parseInt(id) - cavalo[i]) == "cA") {
            } else {
              var mov2 = document.getElementById(parseInt(id) - cavalo[i]);
              if (PouB(mov2) != PouB(peca)) {
                selecao(mov2);
              }
            }
          }
        } else {
          if (coluna(parseInt(id) - cavalo[i]) != "c2") {
            if (cavalo[i] == 10 && coluna(parseInt(id) - cavalo[i]) == "cB") {
            } else {
              var mov2 = document.getElementById(parseInt(id) - cavalo[i]);
              if (PouB(mov2) != PouB(peca)) {
                selecao(mov2);
              }
            }
          }
        }
      }
      if (parseInt(id) + cavalo[i] < 65) {
        if (cavalo[i] == 10 || cavalo[i] == 17) {
          if (coluna(parseInt(id) + cavalo[i]) != "c1") {
            if (cavalo[i] == 10 && coluna(parseInt(id) + cavalo[i]) == "cA") {
            } else {
              var mov1 = document.getElementById(parseInt(id) + cavalo[i]);
              if (PouB(mov1) != PouB(peca)) {
                selecao(mov1);
              }
            }
          }
        } else {
          if (coluna(parseInt(id) + cavalo[i]) != "c2") {
            if (cavalo[i] == 6 && coluna(parseInt(id) + cavalo[i]) == "cB") {
            } else {
              var mov1 = document.getElementById(parseInt(id) + cavalo[i]);
              if (PouB(mov1) != PouB(peca)) {
                selecao(mov1);
              }
            }
          }
        }
      }
    }
  }
  if (peca == "♔") {
    if (rb1 != 1) {
      if (tb1 != 1) {
        var cav = document.getElementById("58");
        var bis = document.getElementById("59");
        var rai = document.getElementById("60");
        if ($(cav).text() == "" && $(bis).text() == "" && $(rai).text() == "") {
          var mov2 = document.getElementById("59");
          selecao(mov2);
        }
      }
      if (tb2 != 1) {
        var cav2 = document.getElementById("63");
        var bis2 = document.getElementById("62");
        if ($(cav2).text() == "" && $(bis2).text() == "") {
          var mov3 = document.getElementById("63");
          selecao(mov3);
        }
      }
    }
  }
  if (peca == "♚") {
    if (rp1 != 1) {
      if (tp1 != 1) {
        var cav = document.getElementById("2");
        var bis = document.getElementById("3");
        var rai = document.getElementById("4");
        if ($(cav).text() == "" && $(bis).text() == "" && $(rai).text() == "") {
          var mov2 = document.getElementById("3");
          selecao(mov2);
        }
      }
      if (tp2 != 1) {
        var cav2 = document.getElementById("7");
        var bis2 = document.getElementById("6");
        if ($(cav2).text() == "" && $(bis2).text() == "") {
          var mov3 = document.getElementById("7");
          selecao(mov3);
        }
      }
    }
  }
}
function coluna(id) {
  for (i in col1) {
    if (id == col1[i]) {
      return "c1";
    }
  }
  for (i in col2) {
    if (id == col2[i]) {
      return "c2";
    }
  }
  for (i in colA) {
    if (id == colA[i]) {
      return "cA";
    }
  }
  for (i in colB) {
    if (id == colB[i]) {
      return "cB";
    }
  }
  return "nc";
}
function selectPouB(peca, mov, brk) {
  if (brk == "break") {
    if (PouB(peca) == PouB(mov)) {
      return "break";
    } else {
      selecao(mov);
      return "break";
    }
  } else {
    if (PouB(peca) == PouB(mov)) {
      return "break";
    } else {
      selecao(mov);
    }
  }
}
function PouB(peca) {
  var cont = 0;
  for (i in pecasP) {
    if ($(peca).text() == pecasP[i]) {
      return "P";
    } else {
      if (peca == pecasP[i]) {
        return "P";
      } else {
        cont++;
      }
    }
  }
  if (cont == 16) {
    cont = 0;
    for (i in pecasB) {
      if ($(peca).text() == pecasB[i]) {
        return "B";
      } else {
        if (peca == pecasB[i]) {
          return "B";
        } else {
          cont++;
        }
      }
    }
    if (cont == 16) {
      return "V";
    }
  }
}

function escolha(esc) {
  console.log("escolha");

  esc.style.display = "block";
  $("#escolhaB button").click(function () {
    var op = $(this).text();
    console.log(op);
    localStorage.setItem("peca", op);
    esc.style.display = "none";
  });
  $("#escolhaP button").click(function () {
    var op = $(this).text();
    console.log(op);
    localStorage.setItem("peca", op);
    esc.style.display = "none";
  });
}
function selecao(select) {
  select.style.border = "thick solid #0000FF";
  if ($(select).text() == "♔" || $(select).text() == "♚") {
    alert("CHEQUE");
  }
}

var pecasP = [
  "♜",
  "♞",
  "♝",
  "♛",
  "♚",
  "♝",
  "♞",
  "♜",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟"
];
var pecasB = [
  "♖",
  "♘",
  "♗",
  "♔",
  "♕",
  "♗",
  "♘",
  "♖",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙"
];
var corTinicio = "rgb(106, 90, 205)";
var corT2inicio = "rgb(119, 136, 153)";
function corPretas() {
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 64; j++) {
      let el = document.getElementById(j + 1);
      var containerDiv = $("#" + (j + 1));

      if (containerDiv.css("background-color") == corTinicio) {
        el.style.background = conv_rgb(corT1.value);
      }
      if (containerDiv.css("background-color") == corT2inicio) {
        el.style.background = conv_rgb(corT2.value);
      }
      if ($(el).text() == pecasP[i]) {
        el.style.color = cor2.value;
      } else {
        if ($(el).text() == pecasB[i]) {
          el.style.color = cor1.value;
        }
      }
    }
    corTinicio = conv_rgb(corT1.value);
    corT2inicio = conv_rgb(corT2.value);
  }
}
function conv_rgb(hexa) {
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  var rgb =
    "rgb(" +
    hexToRgb(hexa)[0] +
    ", " +
    hexToRgb(hexa)[1] +
    ", " +
    hexToRgb(hexa)[2] +
    ")";
  return rgb;
}
function comerPecas(id, peca) {
  if (vez == 0) {
    vez = 1;
  } else {
    vez = 0;
  }
    if (PouB(getPeca()) == "P") {      
        if (PouB(peca) == "P") {
          alert("Jogada Inválida");
          return 0;
        } else {          
            if (PouB(peca) == "B") {
              $("#" + id).text(getPeca());
              limparDados();
              if(peca=="♔"){
                fimdejogo();
              }
              return 0;
            }          
          return 0;
        }      
    } else {
      if (PouB(getPeca()) == "B") {        
          if (PouB(peca) == "B") {
            alert("Jogada Inválida");
            return 0;
          } else {           
              if (PouB(peca) == "P") {
                $("#" + id).text(getPeca());
                limparDados();
                if(peca=="♚"){
                fimdejogo();
              }
                return 0;
              }            
            return 0;
          }        
      }
    }  
}
var vez = 0;
function vezJogador(peca) {
  for (var i in pecasB) {
    if (peca == pecasB[i]) {
      if (vez == 1) {
        alert("Vez do outro jogador");
        return false;
      } else {
        vez = 1;
        return true;
      }
    }
  }
  for (var i in pecasP) {
    if (peca == pecasP[i]) {
      if (vez == 0) {
        alert("Vez do outro jogador");
        return false;
      } else {
        vez = 0;
        return true;
      }
    }
  }
}

function cheque(peca) {
  var id = 0;
  for (var i = 1; i < 65; i++) {
    var esp = document.getElementById(i);
    if (PouB(peca) == "P") {
      if ($(esp).text() == "♚") {
        id = i;
      }
    }
    if (PouB(peca) == "B") {
      if ($(esp).text() == "♔") {
        id = i;
      }
    }
  }
  //movimento pra baixo
  if (id < 57) {
    for (var i = 8; i < 64; i = i + 8) {
      var mov1 = document.getElementById(parseInt(id) + i);
      if (parseInt(id) + i > 64) {
      } else {
        if ($(mov1).text() == "") {
        } else {
          if (PouB(peca) == PouB(mov1)) {
            break;
          } else {
            if ($(mov1).text() != "") {
              validarJogada($(mov1).text(), parseInt(id) + i, "ch");
            }
            break;
          }
        }
      }
    }
  }
  //movimento pra cima
  if (id > 8) {
    for (var i = 8; i < 64; i = i + 8) {
      var mov1 = document.getElementById(parseInt(id) - i);
      if (parseInt(id) - i <= 0) {
      } else {
        if ($(mov1).text() == "") {
        } else {
          if (PouB(peca) == PouB(mov1)) {
            break;
          } else {
            if ($(mov1).text() != "") {
              validarJogada($(mov1).text(), parseInt(id) - i, "ch");
            }
            break;
          }
        }
      }
    }
  }
  //movimento pra esquerda
  for (var i = 1; i < 8; i++) {
    if (id - i < 1) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) - i);
    if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
          break;
        }
      }
    } else {
      if (coluna(id - i) == "c2") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
        }
      }
    }
  }
  //movimento pra direita
  for (var i = 1; i < 8; i++) {
    if (parseInt(id) + i > 64) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) + i);
    if (coluna(parseInt(id) + i) != "c1" && coluna(parseInt(id) + i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i, "ch");
          }
          break;
        }
      }
    } else {
      if (coluna(parseInt(id) + i) == "c1") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i, "ch");
          }
        }
      }
    }
  }
  //movimento esquerda/cima
  for (var i = 9; i < 64; i = i + 9) {
    if (id - i < 1) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) - i);
    if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
          break;
        }
      }
    } else {
      if (coluna(id - i) == "c2") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
        }
      }
    }
  }
  //movimento direita/cima
  for (var i = 7; i < 64; i = i + 7) {
    if (id - i < 1) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) - i);
    if (coluna(id - i) != "c1" && coluna(id - i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
          break;
        }
      }
    } else {
      if (coluna(id - i) == "c1") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) - i, "ch");
          }
        }
      }
    }
  }
  //movimento direita/baixo
  for (var i = 9; i < 64; i = i + 9) {
    if (parseInt(id) + i > 64) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) + i);
    if (coluna(parseInt(id) + i) != "c1" && coluna(parseInt(id) + i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i,"ch");
          }
          break;
        }
      }
    } else {
      if (coluna(parseInt(id) + i) == "c1") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i, "ch");
          }
        }
      }
    }
  }
  //movimento esquerda/baixo
  for (var i = 7; i < 64; i = i + 7) {
    if (parseInt(id) + i > 64) {
      break;
    }
    var mov1 = document.getElementById(parseInt(id) + i);
    if (coluna(parseInt(id) + i) != "c1" && coluna(parseInt(id) + i) != "c2") {
      if ($(mov1).text() == "") {
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i, "ch");
          }
          break;
        }
      }
    } else {
      if (coluna(parseInt(id) + i) == "c2") {
        break;
      } else {
        if (PouB(peca) == PouB(mov1)) {
          break;
        } else {
          if ($(mov1).text() != "") {
            validarJogada($(mov1).text(), parseInt(id) + i, "ch");
          }
        }
      }
    }
  }
  //movimento cavalo
  var cavalo = [6, 10, 15, 17];
  for (i in cavalo) {
    if (id - cavalo[i] > 0) {
      if (cavalo[i] == 6 || cavalo[i] == 15) {
        if (coluna(parseInt(id) - cavalo[i]) != "c1") {
          if (cavalo[i] == 6 && coluna(parseInt(id) - cavalo[i]) == "cA") {
          } else {
            var mov2 = document.getElementById(parseInt(id) - cavalo[i]);
            if (PouB(mov2) != PouB(peca)) {
              if ($(mov1).text() != "") {
                validarJogada($(mov1).text(), parseInt(id) - cavalo[i], "ch");
              }
            }
          }
        }
      } else {
        if (coluna(parseInt(id) - cavalo[i]) != "c2") {
          if (cavalo[i] == 10 && coluna(parseInt(id) - cavalo[i]) == "cB") {
          } else {
            var mov2 = document.getElementById(parseInt(id) - cavalo[i]);
            if (PouB(mov2) != PouB(peca)) {
              if ($(mov2).text() != "") {
                validarJogada($(mov2).text(), parseInt(id) - cavalo[i], "ch");
              }
            }
          }
        }
      }
    }
    if (parseInt(id) + cavalo[i] < 65) {
      if (cavalo[i] == 10 || cavalo[i] == 17) {
        if (coluna(parseInt(id) + cavalo[i]) != "c1") {
          if (cavalo[i] == 10 && coluna(parseInt(id) + cavalo[i]) == "cA") {
          } else {
            var mov1 = document.getElementById(parseInt(id) + cavalo[i]);
            if (PouB(mov1) != PouB(peca)) {
              if ($(mov1).text() != "") {
                validarJogada($(mov1).text(), parseInt(id) + cavalo[i], "ch");
              }
            }
          }
        }
      } else {
        if (coluna(parseInt(id) + cavalo[i]) != "c2") {
          if (cavalo[i] == 6 && coluna(parseInt(id) + cavalo[i]) == "cB") {
          } else {
            var mov1 = document.getElementById(parseInt(id) + cavalo[i]);
            if (PouB(mov1) != PouB(peca)) {
              if ($(mov2).text() != "") {
                validarJogada($(mov2).text(), parseInt(id) + cavalo[i], "ch");
              }
            }
          }
        }
      }
    }
  }
}

var tp1 = 0;
var tp2 = 0;
var tb1 = 0;
var tb2 = 0;
var rp1 = 0;
var rb1 = 0;
function vrock() {
  var t1 = document.getElementById("1");
  if ($(t1).text() != "♜") {
    tp1 = 1;
  }
  var t2 = document.getElementById("8");
  if ($(t2).text() != "♜") {
    tp2 = 1;
  }
  var t3 = document.getElementById("57");
  if ($(t3).text() != "♖") {
    tb1 = 1;
  }
  var t4 = document.getElementById("64");
  if ($(t4).text() != "♖") {
    tb2 = 1;
  }
  var r1 = document.getElementById("5");
  if ($(r1).text() != "♚") {
    rp1 = 1;
  }
  var r2 = document.getElementById("61");
  if ($(r2).text() != "♔") {
    rb1 = 1;
  }
}
function rock(peca, id) {
  if (peca == "♔" && rb1 == 0) {
    if (id == 59 && tb1 == 0) {
      $("#" + 57).text("");
      $("#" + 60).text("♖");
    }
    if (id == 63 && tb2 == 0) {
      $("#" + 64).text("");
      $("#" + 62).text("♖");
    }
  }
  if (peca == "♚" && rp1 == 0) {
    if (id == 3 && tp1 == 0) {
      $("#" + 1).text("");
      $("#" + 4).text("♜");
    }
    if (id == 7 && tp2 == 0) {
      $("#" + 8).text("");
      $("#" + 6).text("♜");
    }
  }
}

function fimdejogo(cn){
  var telaFim = document.getElementById("FimDeJogo");
  telaFim.style.display = "block";
  if(cn==1){
    telaFim.style.display = "none";
  }
}
