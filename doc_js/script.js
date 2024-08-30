// Alterna o tema ao clicar no checkbox
document.getElementById("tema").addEventListener("click", function () {
  alterarTema(this.checked);
});

function alterarTema(temaEscuro) {
  const root = document.documentElement;
  const propriedades = temaEscuro 
    ? { '--background': '#171717', '--color': '#fafafa', '--code_background': '#2f2f2f' }
    : { '--background': '#f7f7f7', '--color': '#1c1c1c', '--code_background': '#e5e7e9' };

  Object.keys(propriedades).forEach(key => {
    root.style.setProperty(key, propriedades[key]);
  });
}

// Configuração inicial de estilos
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector("#navbar");
const menuList = document.querySelector("#navbar ul");
const titulo = document.querySelector("#titulo");
const doc = document.querySelector("#main-doc");
const elementsToMove = [titulo, doc, menuIcon];

// Inicializa o menu como oculto
ocultarMenu();

// Função para alternar a visibilidade do menu
function alternarMenu() {
  const isMenuVisible = menuList.style.width === "300px";
  const novaLargura = isMenuVisible ? "0px" : "300px";
  const margemEsquerda = isMenuVisible ? "auto" : "310px";

  menuList.style.width = novaLargura;
  navbar.style.width = novaLargura;
  
  elementsToMove.forEach(element => {
    element.style.marginLeft = margemEsquerda;
  });
}

// Oculta o menu inicialmente
function ocultarMenu() {
  menuList.style.width = "0px";
  navbar.style.width = "0px";
  elementsToMove.forEach(element => {
    element.style.marginLeft = "auto";
  });
}

// Evento de clique no ícone do menu para alternar visibilidade
menuIcon.addEventListener("click", alternarMenu);

// Oculta o menu após clicar em um item do menu
document.querySelectorAll("#navbar li").forEach(item => {
  item.addEventListener("click", alternarMenu);
});
