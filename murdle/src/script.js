    const solucao = {
      suspeito: "s3",
      arma: "a3",
      local: "l1"
    };

    const btnVerificar = document.getElementById("btnVerificar");
    const resultado = document.getElementById("resultado");

    btnVerificar.addEventListener("click", () => {
      const suspeito = document.getElementById("suspeito").value;
      const arma = document.getElementById("arma").value;
      const local = document.getElementById("local").value;

      if (!suspeito || !arma || !local) {
        resultado.textContent = "Por favor, selecione todas as opções!";
        resultado.style.color = "red";
        return;
      }

      if (
        suspeito === solucao.suspeito &&
        arma === solucao.arma &&
        local === solucao.local
      ) {
        resultado.textContent = "Parabéns! Você acertou o culpado, a arma e o local do crime!";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "Não é bem isso... Tente novamente!";
        resultado.style.color = "red";
      }
    });

// Estados e cores associados
const estados = ["✖", "✔", ""];
const cores = ["red", "green", "black"];

// Definição dos trios (cada array contém os números das divs que formam um grupo)
const trios = [
  [17, 18, 19],
  [20, 21, 22],
  [23, 24, 25],
  [26, 27, 28],
  [29, 30, 31],
  [32, 33, 34],
  [35, 36, 37],
  [38, 39, 40],
  [41, 42, 43],
  [17, 20, 23],
  [18, 21, 24],
  [19, 22, 25],
  [26, 29, 32],
  [27, 30, 33],
  [28, 31, 34],
  [35, 38, 41],
  [36, 39, 42],
  [37, 40, 43]
];

// Função de validação para simular a atualização de uma div (identificada por "divNum")
// e verificar se, em cada trio que a contém, a atualização manteria:
// - no máximo 1 "✔" e no máximo 2 "✖"
function isValidUpdate(divNum, novoEstado) {
  // Verifica cada trio que contenha a div em questão
  for (let trio of trios) {
    if (trio.includes(divNum)) {
      let countCheck = 0;
      let countX = 0;
      // Percorre todas as divs do trio
      for (let num of trio) {
        let estado;
        // Se for a div que está sendo atualizada, usa o novoEstado
        if (num === divNum) {
          estado = novoEstado;
        } else {
          let elem = document.querySelector(`.div${num}`);
          estado = elem ? elem.textContent : "";
        }
        if (estado === "✔") countCheck++;
        if (estado === "✖") countX++;
      }
      // Se houver mais de 1 "✔" ou mais de 2 "✖" no trio, a atualização é inválida
      if (countCheck > 1 || countX > 2) {
        return false;
      }
    }
  }
  return true;
}

// Adiciona evento de clique para as divs de .div17 até .div43
for (let i = 17; i <= 43; i++) {
  let div = document.querySelector(`.div${i}`);
  if (div) {
    // Obtém o número da div a partir da classe (neste exemplo usamos o valor de i)
    let divNum = i;
    div.addEventListener("click", function () {
      let estadoAtual = this.textContent;
      let indiceAtual = estados.indexOf(estadoAtual);
      // Define o próximo índice de forma cíclica
      let indiceProximo = (indiceAtual + 1) % estados.length;
      let tentativas = 0;
      let novoEstado = estados[indiceProximo];
      
      // Tenta encontrar um estado válido (máximo de tentativas igual à quantidade de estados)
      while (tentativas < estados.length) {
        if (isValidUpdate(divNum, novoEstado)) {
          this.textContent = novoEstado;
          // Atualiza a cor de acordo com o índice do estado válido
          this.style.color = cores[estados.indexOf(novoEstado)];
          break;
        } else {
          // Se não for válido, tenta o próximo estado
          indiceProximo = (indiceProximo + 1) % estados.length;
          novoEstado = estados[indiceProximo];
          tentativas++;
        }
      }
    });
  }
}
