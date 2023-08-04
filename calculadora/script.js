let screen = document.getElementById("tela");
let equation = "";
let virgula = true;

// Adicione um evento de escuta para detectar a entrada do teclado
document.addEventListener("keydown", function(event) {
  // Verifique o código da tecla pressionada
  const key = event.key;
  if (/[0-9]/.test(key)) { // Dígitos de 0 a 9
    concatNumber(key);
  } else if (key === ".") { // Ponto decimal
    verificarVirgula();
  } else if (key === "+") { // Adição
    performOperation("+");
  } else if (key === "-") { // Subtração
    performOperation("-");
  } else if (key === "*") { // Multiplicação
    performOperation("*");
  } else if (key === "/") { // Divisão
    performOperation("/");
  } else if (key === "Enter") { // Tecla Enter para calcular o resultado
    calculateResult();
  } else if (key === "Escape") { // Tecla Esc para limpar a tela
    clearScreen();
  }
});

function acionarTeclas(tecla){
  var linhas = document.querySelectorAll("td");

  for (var i = 0; i < linhas.length; i++) {
    if (linhas[i].innerText.trim() === tecla.toString()) {
      linhas[i].style.backgroundColor = "blue";
      setTimeout(function() {
        linhas[i].style.backgroundColor = ""; // restaura a cor original após 1 segundo
      }, 1000);
      break; // opcional: interrompe o loop se encontrar o número correspondente
    }
  }
}

function concatNumber(number) {
  acionarTeclas(number)
  equation += number;
  screen.value = equation;
}

function verificarVirgula() {
  if (virgula) {
    concatNumber(".");
    virgula = false;
  }
}

function clearScreen() {
  acionarTeclas("C")
  equation = "";
  screen.value = "";
  virgula = true;
}

function performOperation(operator) {
  acionarTeclas(operator)
  equation += operator;
  screen.value = equation;
  virgula = true;
}

function calculateResult() {
  acionarTeclas("=")
  try {
    let result = eval(equation);
    equation = result.toFixed(2);
    screen.value = equation;
  } catch (error) {
    screen.value = "Error";
  }
}
