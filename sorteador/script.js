const qtdPessoasInput = document.getElementById("qtde-pessoas");
const qtdSorteiosInput = document.getElementById("qtde-sorteios");
const sortearButton = document.getElementById("btn-sortear");
const continuarButton = document.getElementById("btn-continuar");
const reiniciarButton = document.getElementById("btn-reiniciar");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");

let pessoas = [];
let sorteios = 0;
let contadorSorteios = 0;
let sorteados = [];

function gerarPessoas(qtd) {
  pessoas = [];
  for (let i = 1; i <= qtd; i++) {
    pessoas.push(i);
  }
}

function sortear(qtdSorteios) {
  if (sorteados.length === pessoas.length) {
    alert("Todos já foram sorteados!");
    return;
  }
  for (let i = 0; i < qtdSorteios; i++) {
    if (sorteados.length === pessoas.length) {
      alert("Todos já foram sorteados!");
      return;
    }
    let sorteado;
    do {
      sorteado = pessoas[Math.floor(Math.random() * pessoas.length)];
    } while (sorteados.includes(sorteado));
    sorteados.push(sorteado);    
    resultado.textContent += `Sorteio ${contadorSorteios + 1}: Pessoa ${sorteado}\n`;
    contador.textContent = `Sorteios realizados: ${++contadorSorteios}`;
  }
  if (sorteados.length === pessoas.length) {
    sortearButton.disabled = true;
    continuarButton.disabled = true;
    reiniciarButton.disabled = false;
  } else {
    sortearButton.disabled = true;
    continuarButton.disabled = false;
    reiniciarButton.disabled = false;
  }
}

sortearButton.addEventListener("click", () => {
  const qtdPessoas = parseInt(qtdPessoasInput.value);
  sorteios = parseInt(qtdSorteiosInput.value);
  if (qtdPessoas < sorteios) {
    alert("A quantidade de sorteios não pode ser maior do que a quantidade de pessoas.");
    return;
  }
  gerarPessoas(qtdPessoas);
  resultado.textContent = "";
  contadorSorteios = 0;
  sorteados = [];
  sortear(sorteios);
});

continuarButton.addEventListener("click", () => {
  const qtdSorteios = parseInt(qtdSorteiosInput.value);
  sortear(qtdSorteios);
});

reiniciarButton.addEventListener("click", () => {
  qtdPessoasInput.value = 10;
  qtdSorteiosInput.value = 1;
  resultado.textContent = "";
  contador.textContent = "";
  sorteados = [];
  sortearButton.disabled = false;
  continuarButton.disabled = true;
  reiniciarButton.disabled = true;
});
