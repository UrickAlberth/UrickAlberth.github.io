let screen = document.getElementById("tela");
let screen2 = document.getElementById("tela2");
let equation = "";
let currentNumber = "";
let memory = 0;
let result="";

// Adicione um evento de escuta para detectar a entrada do teclado
document.addEventListener("keydown", function(event) {
  // Verifique o código da tecla pressionada
  const key = event.key;
  if (/[0-9]/.test(key)) { // Dígitos de 0 a 9
    concatNumber(key);
  } else if (key === "." || key == ",") { // Ponto decimal
    verificarVirgula();
  } else if (key === "Enter") { // Tecla Enter para calcular o resultado
    calculateResult();
  } else if (key === "Escape") { // Tecla Esc para limpar a tela
    clearScreen();
  } else if(key == "+" || key == "-" || key == "*" || key == "/"){
    performOperation(key);
  } else if(key == "Backspace"){
    backspace();   
  }
  console.log(key)
});

let concat=null;
function concatNumber(number) {
  currentNumber += number;
  screen.value = currentNumber;
}

function verificarVirgula() {
  if (!currentNumber.includes(".")) {
      concatNumber(".");
  }
}

function clearScreen() {
  equation = "";
  currentNumber = "";
  screen.value = "";
  screen2.value = "";
}

function clearEntry() {
  currentNumber = "";
  screen.value = "";
}

function performOperation(operator) {
  if (currentNumber !== "") {
      equation += currentNumber + " " + operator + " ";      
  }else{
    equation += result + " " + operator + " "; 
  }
  screen2.value = equation;
      currentNumber = "";
}

function calculateResult() {
  if (currentNumber !== "") {
    equation += currentNumber;
  } else {
    equation += screen.value;
  }
  screen2.value = equation + " =";  
  try {
    result = eval(equation);
    screen.value = result;
  } catch (error) {
    screen.value = "Error";
  } finally {
    equation = "";
    currentNumber = "";
  }
}


function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  screen.value = currentNumber;
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  currentNumber = memory.toString();
  screen.value = currentNumber;
}

function memoryPlus() {
  if (currentNumber !== "") {
      memory += parseFloat(currentNumber);
      currentNumber = "";
      screen.value = memory;
  }
}

function memoryMinus() {
  if (currentNumber !== "") {
      memory -= parseFloat(currentNumber);
      currentNumber = "";
      screen.value = memory;
  }
}

function memoryStore() {
  if (currentNumber !== "") {
      memory = parseFloat(currentNumber);
      currentNumber = "";
  }
}

function calculateSquareRoot() {
  if (currentNumber !== "") {
      result = Math.sqrt(parseFloat(currentNumber));
      screen.value = result;
      currentNumber = result.toString();
  }
}

function calculatePower() {
  if (currentNumber !== "") {
      result = Math.pow(parseFloat(currentNumber), 2);
      screen.value = result;
      currentNumber = result.toString();
  }
}

function calculateFraction() {
  if (currentNumber !== "") {
      result = 1 / parseFloat(currentNumber);
      screen.value = result;
      currentNumber = result.toString();
  }
}

function percent(){
  if (currentNumber !== "") {
    result = parseFloat(currentNumber)/100;
    screen.value = result;
    currentNumber = result.toString();
}

}

function toggleSign() {
  if (currentNumber !== "") {
      currentNumber = (parseFloat(currentNumber) * -1).toString();
      screen.value = currentNumber;
  }
}
