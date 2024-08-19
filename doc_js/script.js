const check =document.getElementById("tema");
 check.addEventListener("click", function () {
      tema(this.checked)
    });
function tema(cor){
  // obtém a raiz do documento
const root = document.documentElement;
if(cor==true){
// define o valor da variável CSS
  root.style.setProperty('--background', '#171717');
  root.style.setProperty('--color', '#fafafa');
root.style.setProperty('--code_background', '#2f2f2f');
}else{
   root.style.setProperty('--background', '#f7f7f7');
  root.style.setProperty('--color', '#1c1c1c');
root.style.setProperty('--code_background', '#e5e7e9');
}

}

// Captura o elemento do ícone de menu e a lista de itens do menu
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector("#navbar");
const menuList = document.querySelector("#navbar ul");
const titulo = document.querySelector("#titulo");
const doc = document.querySelector("#main-doc");
menuList.style.width = "0px";
function esconder() {
  // Verifica se a lista de itens do menu está visível
  const isMenuVisible = menuList.style.width === "300px";

  // Se estiver visível, oculta a lista, caso contrário, exibe
  menuList.style.width = isMenuVisible ? "0px" : "300px";
  navbar.style.width=isMenuVisible ? "0px" : "300px";
  titulo.style=isMenuVisible ? "margin-left:auto":"margin-left:310px";
  doc.style=isMenuVisible ? "margin-left:auto":"margin-left:310px";
  menuIcon.style=isMenuVisible ? "margin-left:auto":"margin-left:300px";
 }
// Adiciona um evento de clique ao ícone de menu
menuIcon.addEventListener("click",  esconder );

// Adiciona um evento de clique a cada item do menu para ocultar o menu após clicar em um item (opcional)
const menuItems = document.querySelectorAll("#navbar li");
menuItems.forEach(item => {
  item.addEventListener("click", function () {
    esconder()
  });
});
