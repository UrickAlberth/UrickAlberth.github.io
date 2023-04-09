function abrir() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("h1", null, "Criar Nova Conta"), /*#__PURE__*/
  React.createElement("h3", null, " J\xE1 registrado?", /*#__PURE__*/React.createElement("a", { onClick: () => tela_entrar() }, " Entrar aqui.")), /*#__PURE__*/
  React.createElement("h3", null, "NOME"), /*#__PURE__*/
  React.createElement("input", { type: "text", placeholder: "Digite seu nome" }), /*#__PURE__*/
  React.createElement("h3", null, "EMAIL"), /*#__PURE__*/
  React.createElement("input", { type: "email", placeholder: "Digite seu email" }), /*#__PURE__*/
  React.createElement("h3", null, "SENHA"), /*#__PURE__*/
  React.createElement("input", { type: "password", placeholder: "Digite sua senha" }), /*#__PURE__*/
  React.createElement("h3", null, "DATA DE NASCIMENTO"), /*#__PURE__*/
  React.createElement("input", { type: "date" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("input", { id: "cadastrar", type: "submit", value: "CADASTRAR", onClick: () => verificar_cadastro() })),



  document.querySelector("body"));


}
function tela_entrar() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("h1", null, "Entrar"), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("span", { id: "bv" }, "Seja bem-vindo(a)!"), /*#__PURE__*/
  React.createElement("h3", null, "NOME"), /*#__PURE__*/
  React.createElement("input", { type: "text", placeholder: "Digite seu nome" }), /*#__PURE__*/
  React.createElement("h3", null, "SENHA"), /*#__PURE__*/
  React.createElement("input", { type: "password", placeholder: "Digite sua senha" }), /*#__PURE__*/
  React.createElement("h3", null, " N\xE3o \xE9 registrado? ", /*#__PURE__*/React.createElement("a", { onClick: () => abrir() }, "Cadastre aqui."))), /*#__PURE__*/

  React.createElement("br", null), /*#__PURE__*/
  React.createElement("input", { id: "entrar", type: "submit", value: "ENTRAR", onClick: () => validar_login() })),

  document.querySelector("body"));

}
const usuarios = [
{
  nome: "Urick Alberth",
  email: "urickalberth@gmail.com",
  senha: "131313",
  dataNascimento: "13/05/2001" },

{
  nome: "renata",
  email: "ciclano@example.com",
  senha: "1234",
  dataNascimento: "10/02/1995" },

{
  nome: "lucas",
  email: "beltrano@example.com",
  senha: "1234",
  dataNascimento: "23/05/1985" }];


function verificar_cadastro() {
  const nome = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const senha = document.querySelector('input[type="password"]').value.trim();
  const dataNascimento = document.querySelector('input[type="date"]').value.trim();

  // Verifica se todos os campos foram preenchidos
  if (!nome || !email || !senha || !dataNascimento) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  // Verifica se já existe um usuário cadastrado com o mesmo email
  const usuarioExistente = usuarios.find(usuario => usuario.email === email);
  if (usuarioExistente) {
    alert("Já existe um usuário cadastrado com esse email");
    return;
  }

  // Cria um novo objeto usuário com os dados informados e adiciona ao array de usuários
  const novoUsuario = { nome, email, senha, dataNascimento };
  usuarios.push(novoUsuario);

  // Redireciona para a tela de login
  tela_entrar();
}
function validar_login() {
  const nome = document.querySelector('input[type="text"]').value.trim();
  const senha = document.querySelector('input[type="password"]').value.trim();

  // Verifica se todos os campos foram preenchidos
  if (!nome || !senha) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  // Verifica se existe um usuário cadastrado com o mesmo nome e senha informados
  const usuarioExistente = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
  if (!usuarioExistente) {
    alert("Usuário não encontrado. Verifique o nome e a senha informados");
    return;
  }

  // Exibe a mensagem de boas-vindas e redireciona para o menu principal
  alert("Seja bem-vindo(a), " + nome + "!");
  configuracoes.senha = senha;
  configuracoes.usuario = nome;
  tela_menu();
}

function tela_menu() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("a", { onClick: tela_config }, /*#__PURE__*/React.createElement("img", { id: "config", src: "https://cdn-icons-png.flaticon.com/512/5994/5994793.png", width: "20px" })), /*#__PURE__*/
  React.createElement("h1", null, "Menu Principal"), /*#__PURE__*/
  React.createElement("button", { onClick: tela_agenda }, "Agenda"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("hr", null), /*#__PURE__*/
  React.createElement("button", { onClick: tela_pacientes }, "Clientes/Prontu\xE1rio"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("hr", null), /*#__PURE__*/
  React.createElement("button", { onClick: tela_testes }, "Testes e Question\xE1rios"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("hr", null), /*#__PURE__*/
  React.createElement("button", { onClick: tela_financeiro }, "Financeiro"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("button", { id: "sair", onClick: tela_entrar }, "SAIR")),

  document.querySelector("body"));

}

function tela_config() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("h1", null, "Configura\xE7\xF5es"), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "color" }), "Cor do Tema"), /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "checkbox" }), "Notifica\xE7\xF5es"), /*#__PURE__*/
  React.createElement("span", null, "CRM", /*#__PURE__*/React.createElement("input", { type: "number" })), /*#__PURE__*/
  React.createElement("span", null, "Idioma", /*#__PURE__*/
  React.createElement("select", null, /*#__PURE__*/
  React.createElement("option", null, "Portugu\xEAs"), /*#__PURE__*/
  React.createElement("option", null, "Ingl\xEAs"), /*#__PURE__*/
  React.createElement("option", null, "Espanhol"), /*#__PURE__*/
  React.createElement("option", null, "Japon\xEAs"))), /*#__PURE__*/


  React.createElement("span", null, "Hor\xE1rio", /*#__PURE__*/React.createElement("input", { type: "time" }), " at\xE9 ", /*#__PURE__*/React.createElement("input", { type: "time" })), /*#__PURE__*/
  React.createElement("h3", null, "Alterar Senha"), /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/
  React.createElement("input", { type: "password", placeholder: "Senha Atual" }), /*#__PURE__*/
  React.createElement("input", { type: "password", placeholder: "Nova senha" })), /*#__PURE__*/

  React.createElement("span", { id: "s_n" }, /*#__PURE__*/
  React.createElement("button", { id: "sim", onClick: salvar_config }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/1/1687.png" })), /*#__PURE__*/
  React.createElement("button", { id: "nao", onClick: redefinir_config }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4467/4467408.png" })))), /*#__PURE__*/


  React.createElement("br", null), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" }))),


  document.querySelector("body"));

}
const configuracoes = {
  tema: "57e6d9",
  notificacao: "false",
  crm: "123456",
  idioma: "Português",
  horarioE: "08:00",
  horarioS: "18:00",
  senha: "",
  usuario: "" };

function salvar_config() {
  const senha_atual = document.querySelector('input[type="password"][placeholder="Senha Atual"]').value;
  const nova_senha = document.querySelector('input[type="password"][placeholder="Nova senha"]').value;

  // verifica a senha atual
  if (senha_atual && senha_atual === configuracoes.senha) {
    configuracoes.senha = nova_senha;
    usuarios.forEach(function (usuario) {
      if (configuracoes.usuario === usuario.nome) {
        usuario.senha = configuracoes.senha;
      }
    });
  }

  // altera os valores dos demais campos
  configuracoes.tema = document.querySelector('input[type="color"]').value;
  configuracoes.notificacao = document.querySelector('input[type="checkbox"]').checked;
  configuracoes.crm = document.querySelector('input[type="number"]').value;
  configuracoes.idioma = document.querySelector('select').value;
  configuracoes.horarioE = document.querySelector('input[type="time"]:first-of-type').value;
  configuracoes.horarioS = document.querySelector('input[type="time"]:last-of-type').value;
  tema(configuracoes.tema);
  alert("alteração salva!");
}
function redefinir_config() {
  // redefine os valores dos campos para os valores padrão
  configuracoes.tema = "#57e6d9";
  configuracoes.notificacao = "false";
  configuracoes.crm = "123456";
  configuracoes.idioma = "Português";
  configuracoes.horarioE = "08:00";
  configuracoes.horarioS = "18:00";
  configuracoes.senha = "";
  tema(configuracoes.tema);
  alert("Padrão Redefinido");
}
function tema(cor) {
  let cor_clara = getShades(cor)['900'].light;
  let cor_escura = getShades(cor)['300'].dark;
  // obtém a raiz do documento
  const root = document.documentElement;

  // define o valor da variável CSS
  root.style.setProperty('--cor-principal', cor);
  root.style.setProperty('--cor-dark', cor_escura);
  root.style.setProperty('--cor-light', cor_clara);
}
function tela_agenda() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("div", { class: "calendar-container" }, /*#__PURE__*/
  React.createElement("table", { class: "calendar" }, /*#__PURE__*/
  React.createElement("thead", null, /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Dom"), /*#__PURE__*/
  React.createElement("th", null, "Seg"), /*#__PURE__*/
  React.createElement("th", null, "Ter"), /*#__PURE__*/
  React.createElement("th", null, "Qua"), /*#__PURE__*/
  React.createElement("th", null, "Qui"), /*#__PURE__*/
  React.createElement("th", null, "Sex"), /*#__PURE__*/
  React.createElement("th", null, "S\xE1b"))), /*#__PURE__*/


  React.createElement("tbody", null, /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null), /*#__PURE__*/
  React.createElement("td", null), /*#__PURE__*/
  React.createElement("td", null), /*#__PURE__*/
  React.createElement("td", null), /*#__PURE__*/
  React.createElement("td", null), /*#__PURE__*/
  React.createElement("td", null, "01"), /*#__PURE__*/
  React.createElement("td", null, "02")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "03"), /*#__PURE__*/
  React.createElement("td", null, "04"), /*#__PURE__*/
  React.createElement("td", null, "05"), /*#__PURE__*/
  React.createElement("td", null, "06"), /*#__PURE__*/
  React.createElement("td", null, "07"), /*#__PURE__*/
  React.createElement("td", null, "08"), /*#__PURE__*/
  React.createElement("td", null, "09")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "10"), /*#__PURE__*/
  React.createElement("td", null, "11"), /*#__PURE__*/
  React.createElement("td", null, "12"), /*#__PURE__*/
  React.createElement("td", null, "13"), /*#__PURE__*/
  React.createElement("td", null, "14"), /*#__PURE__*/
  React.createElement("td", null, "15"), /*#__PURE__*/
  React.createElement("td", null, "16")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "17"), /*#__PURE__*/
  React.createElement("td", null, "18"), /*#__PURE__*/
  React.createElement("td", null, "19"), /*#__PURE__*/
  React.createElement("td", null, "20"), /*#__PURE__*/
  React.createElement("td", null, "21"), /*#__PURE__*/
  React.createElement("td", null, "22"), /*#__PURE__*/
  React.createElement("td", null, "23")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "24"), /*#__PURE__*/
  React.createElement("td", null, "25"), /*#__PURE__*/
  React.createElement("td", null, "26"), /*#__PURE__*/
  React.createElement("td", null, "27"), /*#__PURE__*/
  React.createElement("td", null, "28"), /*#__PURE__*/
  React.createElement("td", null, "29"), /*#__PURE__*/
  React.createElement("td", null, "30"))))), /*#__PURE__*/




  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("span", { id: "dia" }), /*#__PURE__*/
  React.createElement("span", { id: "nome" }), /*#__PURE__*/
  React.createElement("span", { id: "hora" }, "Hor\xE1rio da consulta: "), /*#__PURE__*/
  React.createElement("span", { id: "telefone" }, "Telefone : "), /*#__PURE__*/
  React.createElement("span", null, "Anota\xE7\xF5es:"), /*#__PURE__*/


  React.createElement("textarea", { id: "anot" }), /*#__PURE__*/
  React.createElement("span", { id: "s_n" }, /*#__PURE__*/
  React.createElement("button", { id: "concluir-btn", onClick: () => concluir_evento(id_evento) }, /*#__PURE__*/
  React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/1/1687.png" })), /*#__PURE__*/


  React.createElement("button", { id: "cancelar-btn", onClick: () => cancelar_evento(id_evento) }, /*#__PURE__*/
  React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4467/4467408.png" })))), /*#__PURE__*/




  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_novoevento }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4691/4691141.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

  setTimeout(() => {addEventListenersToTable();}, 100);
  setTimeout(() => {verificaEventosDoMes(eventos);}, 100);
}
function concluir_evento(id) {
  const evento = eventos.find(e => e.id === id);
  const mensagem = `O evento ${evento.nome_paciente} foi concluído com o valor de ${evento.valor}.`;
  alert(mensagem);
  eventos = eventos.filter(e => e.id !== id);
  tela_menu();
}
function cancelar_evento(id) {
  const evento = eventos.find(e => e.id === id);
  const mensagem = `O evento ${evento.nome_paciente} foi cancelado.`;
  alert(mensagem);
  eventos = eventos.filter(e => e.id !== id);
  tela_menu();
}
var eventos = [
{
  id: 1,
  nome_paciente: "Paciente 1",
  hora: "08:00",
  data: "03/05/2023",
  telefone: "(31) 9 1234-5678",
  anotacoes: "Digite a evolução do paciente, resulatados etc..",
  valor: "250,00" },

{
  id: 2,
  nome_paciente: "Paciente 2",
  hora: "08:00",
  data: "25/05/2023",
  telefone: "(31) 9 4567-7898",
  anotacoes: "Apresentação",
  valor: "250,00" }];



function addEventListenersToTable() {
  const table = document.querySelector('.calendar');
  table.addEventListener('click', handleTdClick);
}
function handleTdClick(event) {
  if (event.target.tagName !== 'TD') {
    return;
  }

  const cell = event.target;

  // Verifica se o evento atual é o mesmo que o anterior
  if (cell.style.color === 'blue') {
    cell.style.color = 'black';
    event = null;
    return;
  }

  cell.style.color = 'blue';
  const dia = cell.innerText;

  const evento = eventos.find(e => e.data.split("/")[0] == dia);
  if (evento) {
    const index = eventos.indexOf(evento);
    showEvent(evento);
  } else {
    clearDetails();
  }
}
let id_evento = "";
function showEvent(evento) {
  const { nome_paciente, hora, data, telefone, anotacoes, valor, id } = evento;
  document.querySelector("#dia").textContent = data;
  document.querySelector("#nome").textContent = nome_paciente;
  document.querySelector("#hora").textContent = `Horário da consulta: ${hora}`;
  document.querySelector("#telefone").textContent = `Telefone: ${telefone}`;
  document.querySelector("#anot").textContent = anotacoes;
  id_evento = id;
}
function clearDetails() {
  const diaSpan = document.getElementById("dia");
  const nomeSpan = document.getElementById("nome");
  const horaSpan = document.getElementById("hora");
  const telefoneSpan = document.getElementById("telefone");
  const anotacoesTextarea = document.getElementById("anot");

  diaSpan.innerText = "";
  nomeSpan.innerText = "";
  horaSpan.innerText = "";
  telefoneSpan.innerText = "";
  anotacoesTextarea.innerText = "";
}
function tela_novoevento() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("h1", null, " Novo Evento"), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "text", placeholder: "Nome do Paciente" })), /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "datetime-local" })), /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "tel", placeholder: "(__)_ ____-____" })), /*#__PURE__*/
  React.createElement("span", null, /*#__PURE__*/React.createElement("input", { type: "number", placeholder: "Valor R$" })), /*#__PURE__*/
  React.createElement("span", null, "Anota\xE7\xF5es:"), /*#__PURE__*/


  React.createElement("textarea", { id: "anot" }, "Digite a evolu\xE7\xE3o do paciente, resulatados etc.."), /*#__PURE__*/
  React.createElement("span", { id: "s_n" }, /*#__PURE__*/
  React.createElement("button", { id: "sim", onClick: cad_evento }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/1/1687.png" })), /*#__PURE__*/
  React.createElement("button", { id: "nao", onClick: tela_agenda }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4467/4467408.png" })))), /*#__PURE__*/


  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_novoevento }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4691/4691141.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("body"));

}
var proximo_id = eventos.length + 1; // próximo ID disponível é o tamanho atual do array + 1

function cad_evento() {
  const nome_paciente = document.querySelector('input[type="text"]').value;
  const data_hora = new Date(document.querySelector('input[type="datetime-local"]').value);
  const data = data_hora.toLocaleDateString('pt-BR');
  const hora = data_hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const telefone = document.querySelector('input[type="tel"]').value;
  const anotacoes = document.querySelector('#anot').value;
  const valor = document.querySelector('input[type="number"]').value;

  // Verifica se todos os campos foram preenchidos
  if (!nome_paciente || !data || !hora || !telefone || !anotacoes || !valor) {
    alert('Por favor, preencha todos os campos');
    return;
  }

  // Adiciona o novo evento ao array "eventos" com o próximo ID disponível
  eventos.push({
    id: proximo_id,
    nome_paciente: nome_paciente,
    hora: hora,
    data: data,
    telefone: telefone,
    anotacoes: anotacoes,
    valor: valor });


  proximo_id++; // incrementa o próximo ID disponível

  // Volta para a tela de menu
  tela_menu();
}
function verificaEventosDoMes(eventos) {
  // Seleciona todos os elementos td da tabela
  const tds = document.querySelectorAll('.calendar td');

  // Itera sobre todos os tds
  tds.forEach(td => {
    const dia = td.textContent.trim();
    const evento = eventos.find(e => e.data.split("/")[0] == dia);

    if (evento) {
      td.classList.add('tem-evento');
    } else {
      td.classList.remove('tem-evento');
    }
  });
}
function tela_pacientes() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, " Pacientes"), /*#__PURE__*/
  React.createElement("input", { id: "pesquisa", type: "text", placeholder: "\uD83D\uDD0DPesquisar.." }),
  pacientes.map((paciente, index) => /*#__PURE__*/
  React.createElement("div", { id: "box", key: index, onClick: () => tela_prontuario(index) }, /*#__PURE__*/
  React.createElement("img", { id: "perfil", src: paciente.foto, alt: paciente.nome }), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("span", { id: "destaque" }, paciente.nome), /*#__PURE__*/
  React.createElement("span", null, paciente.telefone), /*#__PURE__*/
  React.createElement("span", null, paciente.data_nasc)))), /*#__PURE__*/



  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_novopaciente }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4691/4691141.png", alt: "Novo evento" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png", alt: "Menu" })))),


  document.querySelector("#root"));

}
function tela_novopaciente() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("table", { class: "cadp" }, /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { rowspan: "2" }, /*#__PURE__*/React.createElement("img", { id: "perfil", src: "https://cdn-icons-png.flaticon.com/512/848/848043.png" })), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, /*#__PURE__*/React.createElement("input", { type: "text", placeholder: "Nome Completo" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "Telefone para contato:"), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, /*#__PURE__*/React.createElement("input", { type: "number", placeholder: "(__) _ ____-____" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, /*#__PURE__*/React.createElement("input", { type: "number", placeholder: "RG: __.___.___" })), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, /*#__PURE__*/React.createElement("input", { type: "number", placeholder: "CPF: ___.___.___-__" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, "lista de medicamento em uso:")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, /*#__PURE__*/React.createElement("textarea", { id: "lista", name: "lista", rows: "5" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "Profiss\xE3o:"), /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, /*#__PURE__*/React.createElement("input", { type: "text", placeholder: "_____________" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, "Informa\xE7\xF5es Complementares: ")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, /*#__PURE__*/React.createElement("textarea", { id: "lista", name: "lista", rows: "5" })))), /*#__PURE__*/


  React.createElement("span", { id: "s_n" }, /*#__PURE__*/
  React.createElement("button", { id: "sim", onClick: cad_paciente }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/1/1687.png" })), /*#__PURE__*/
  React.createElement("button", { id: "nao", onClick: tela_pacientes }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4467/4467408.png" })))), /*#__PURE__*/


  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_pacientes }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

}
function cad_paciente() {
  // Obter os valores dos campos do formulário
  const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
  const data = new Date(document.querySelector('input[type="date"]').value);
  const data_nasc = data.toLocaleDateString('pt-BR');
  const telefone = document.querySelector('input[placeholder="(__) _ ____-____"]').value;
  const rg = document.querySelector('input[placeholder="RG: __.___.___"]').value;
  const cpf = document.querySelector('input[placeholder="CPF: ___.___.___-__"]').value;
  const lista_med = document.querySelector('textarea[name="lista"]').value;
  const profissao = document.querySelector('input[placeholder="_____________"]').value;
  const complementar = document.querySelectorAll('textarea[name="lista"]')[1].value;

  // Criar um objeto representando o novo paciente
  const novoPaciente = {
    nome: nome,
    foto: "https://cdn-icons-png.flaticon.com/512/848/848043.png",
    data_nasc: data_nasc,
    telefone: telefone,
    rg: rg,
    cpf: cpf,
    lista_med: lista_med,
    profissao: profissao,
    complementar: complementar };


  // Adicionar o novo paciente à lista de pacientes
  pacientes.push(novoPaciente);
  alert("Novo Paciente adicionado");
  tela_pacientes();
}
function tela_prontuario(index) {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("div", { id: "box" }, /*#__PURE__*/
  React.createElement("table", { id: "pront" }, /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { rowspan: "2" }, /*#__PURE__*/React.createElement("img", { id: "perfil", src: pacientes[index].foto })), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, pacientes[index].nome)), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, pacientes[index].data_nasc)), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "Telefone para contato:"), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, pacientes[index].telefone)), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "RG: ", pacientes[index].rg), /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "CPF: ", pacientes[index].cpf)), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, "lista de medicamento em uso:")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, /*#__PURE__*/React.createElement("textarea", { id: "lista", name: "lista", rows: "5" },
  pacientes[index].lista_med))), /*#__PURE__*/


  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "1" }, "Profiss\xE3o:"), /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, pacientes[index].profissao)), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, "Informa\xE7\xF5es Complementares: ")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { colspan: "2" }, /*#__PURE__*/React.createElement("textarea", { id: "lista", name: "lista", rows: "5" },
  pacientes[index].complementar))))), /*#__PURE__*/




  React.createElement("br", null), /*#__PURE__*/
  React.createElement("button", { id: "relatorio", onClick: tela_relatorio }, /*#__PURE__*/React.createElement("b", null, "Gerar Relat\xF3rio Psicol\xF3gico")), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_pacientes }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("body"));

}
const pacientes = [
{
  nome: "Paciente1",
  foto: "https://cdn-icons-png.flaticon.com/512/848/848043.png",
  data_nasc: "13/05/2001",
  telefone: "31993052729",
  rg: "12123123",
  cpf: "12312312312",
  lista_med: "remedio1,remedio2,remedio3",
  profissao: "Assistente",
  complementar: "outras informações" },

{
  nome: "Paciente2",
  foto: "https://cdn-icons-png.flaticon.com/512/848/848043.png",
  data_nasc: "13/05/2001",
  telefone: "31993052729",
  rg: "12123123",
  cpf: "12312312312",
  lista_med: "remedio1,remedio2,remedio3",
  profissao: "Assistente",
  complementar: "outras informações" },

{
  nome: "Paciente3",
  foto: "https://cdn-icons-png.flaticon.com/512/848/848043.png",
  data_nasc: "13/05/2001",
  telefone: "31993052729",
  rg: "12123123",
  cpf: "12312312312",
  lista_med: "remedio1,remedio2,remedio3",
  profissao: "Assistente",
  complementar: "outras informações" }];


function tela_relatorio() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement("body", null, /*#__PURE__*/
  React.createElement("h1", null, "RELAT\xD3RIO"), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("center", null, /*#__PURE__*/
  React.createElement("form", { class: "relatorio" }, /*#__PURE__*/
  React.createElement("table", null, /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", { colspan: "2" }, "Dados de identifica\xE7\xE3o")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Nome:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "nome" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Idade:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "idade" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "G\xEAnero:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "genero" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Estado civil:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "estado_civil" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Escolaridade:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "escolaridade" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Profiss\xE3o:"), /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "text", name: "profissao" })))), /*#__PURE__*/


  React.createElement("label", { for: "motivo" }, "Motivo da avalia\xE7\xE3o:"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("textarea", { name: "motivo", id: "motivo" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "historia" }, "Hist\xF3ria cl\xEDnica:"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("textarea", { name: "historia", id: "historia" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "resultados" }, "Resultados:"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("textarea", { name: "resultados", id: "resultados" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "conclusao" }, "Conclus\xE3o:"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("textarea", { name: "conclusao", id: "conclusao" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "recomendacoes" }, "Recomenda\xE7\xF5es:"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("textarea", { name: "recomendacoes", id: "recomendacoes" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "assinatura" }, "Atesto a veracidade dos dados apresentados neste relat\xF3rio."), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("label", { for: "crp" }, "Assinatura, CRP:"), /*#__PURE__*/
  React.createElement("input", { type: "text", name: "crp" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("input", { type: "date", name: "data" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
  React.createElement("input", { type: "button", value: "Imprimir", onClick: () => {window.print();} })))), /*#__PURE__*/



  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_pacientes }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("body"));

}
function tela_testes() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, "Testes e Question\xE1rios"), /*#__PURE__*/
  React.createElement("input", { type: "file", id: "file-input", multiple: true }), /*#__PURE__*/
  React.createElement("button", { id: "upload-button", onClick: uploud }, "Upload"), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("ul", { id: "file-list" }), /*#__PURE__*/
  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

}
function uploud() {
  const fileInput = document.querySelector('input[type="file"]');
  const fileList = document.querySelector('#file-list');

  // Clica no input do tipo file
  fileInput.click();

  // Adiciona um listener para quando um arquivo for selecionado
  fileInput.addEventListener('change', function (e) {
    // Percorre todos os arquivos selecionados
    for (let file of fileInput.files) {
      // Cria um novo elemento a para o nome do arquivo
      const fileElement = document.createElement('a');
      // Cria um objeto URL para o arquivo selecionado
      const fileURL = URL.createObjectURL(file);
      // Define os atributos do elemento a
      fileElement.innerText = file.name;
      fileElement.setAttribute('href', fileURL);
      fileElement.setAttribute('download', file.name);
      // Adiciona o elemento a à lista de arquivos    
      fileList.appendChild(fileElement);
    }
    // Remove o listener de evento "change" para evitar múltiplas chamadas do mesmo
    fileInput.removeEventListener('change', arguments.callee);

  });
}
function tela_financeiro() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, "Financeiro"), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("table", { class: "financeiro" }, /*#__PURE__*/
  React.createElement("th", { colspan: "3" }, "Quantidade de Consultas /Valor Recebido por per\xEDodo"), /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { rowspan: "5" }, /*#__PURE__*/React.createElement("div", { id: "qt" }, "20")), /*#__PURE__*/
  React.createElement("td", { rowspan: "5" }, /*#__PURE__*/React.createElement("div", { id: "vl" }, "R$2000,00")), /*#__PURE__*/
  React.createElement("td", null, "Inicio do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Final do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("button", { onClick: tela_quantitativo }, "Confirmar"))))), /*#__PURE__*/



  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("table", { class: "financeiro" }, /*#__PURE__*/
  React.createElement("th", { colspan: "2" }, "Receitas"), /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { rowspan: "5" }, /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("canvas", { id: "myChart" }))), /*#__PURE__*/


  React.createElement("td", null, "Inicio do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Final do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("button", { onClick: tela_receitas }, "Confirmar"))))), /*#__PURE__*/



  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", { id: "box2" }, /*#__PURE__*/
  React.createElement("table", { class: "financeiro" }, /*#__PURE__*/
  React.createElement("th", { colspan: "2" }, "Pagamentos Previstos"), /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", { rowspan: "5" }, /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("canvas", { id: "myChart2" }))), /*#__PURE__*/


  React.createElement("td", null, "Inicio do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "Final do periodo")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("input", { type: "date" }))), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, /*#__PURE__*/React.createElement("button", { onClick: tela_previsoes }, "Confirmar"))))), /*#__PURE__*/



  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

  setTimeout("grafico_fin()", 100);
}
function grafico_fin() {
  const ctx = document.getElementById('myChart');
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
      datasets: [{
        label: 'Lucros',
        data: [10, 20, 30, 40, 50],
        borderWidth: 1 }] },


    options: {
      scales: {
        y: {
          beginAtZero: true } } } });




  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Previsões',
        data: [10, 5, 30, 15],
        backgroundColor: [
        'rgba(65, 184, 213,1)',
        'rgba(255, 0, 64, 1)',
        'rgba(65, 184, 213,1)',
        'rgba(255, 0, 64, 1)'],

        borderWidth: 1 }] },


    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true } } } });





}
function tela_quantitativo() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, "Quantitativo"), /*#__PURE__*/
  React.createElement("div", { id: "box3" }, /*#__PURE__*/
  React.createElement("canvas", { id: "quant" })), /*#__PURE__*/

  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_financeiro }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

  setTimeout("grafico_quat()", 100);
}
function grafico_quat() {
  const ctx = document.getElementById('quant');
  const mixedChart = new Chart(ctx, {
    data: {
      datasets: [{
        type: 'bar',
        label: 'Consultas',
        data: [10, 20, 30, 40],
        backgroundColor: ['rgba(34, 69, 146,1)'] },
      {
        type: 'line',
        label: 'Recebido',
        data: [15, 25, 35, 50],
        backgroundColor: ['rgba(2, 127, 230,1)'] }],

      labels: ['January', 'February', 'March', 'April'] } });



  mixedChart.options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true } }] },



    height: 600 // altere o valor para o tamanho desejado
  };

  mixedChart.update(); // atualiza o gráfico com as novas opções
}
function tela_receitas() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, "Receitas"), /*#__PURE__*/
  React.createElement("table", { class: "receitas" }, /*#__PURE__*/
  React.createElement("th", null, "MESES"), /*#__PURE__*/
  React.createElement("th", null, "2022"), /*#__PURE__*/
  React.createElement("th", null, "2023"), /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Janeiro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1000,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Fevereiro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 900,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1000,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Mar\xE7o"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1500,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Abril"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1300,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1150,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Maio"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1500,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1900,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Junho"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1000,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Julho"), /*#__PURE__*/
  React.createElement("td", null, "R$ 2000,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 2100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Agosto"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1700,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Setembro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1400,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1200,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Outubro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1400,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1900,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Novembro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1000,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("th", null, "Desembro"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1000,00"), /*#__PURE__*/
  React.createElement("td", null, "R$ 1100,00"))), /*#__PURE__*/


  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_financeiro }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

}
function tela_previsoes() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(React.Fragment, null, /*#__PURE__*/
  React.createElement("h1", null, "Previs\xE3o"), /*#__PURE__*/
  React.createElement("span", { id: "data-atual" }), /*#__PURE__*/
  React.createElement("table", { class: "previsao" }, /*#__PURE__*/
  React.createElement("th", null, "VALOR"), /*#__PURE__*/
  React.createElement("th", null, "DATA PREVISTA"), /*#__PURE__*/
  React.createElement("th", null, "SITUA\xC7\xC3O"), /*#__PURE__*/
  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 250,00"), /*#__PURE__*/
  React.createElement("td", null, "13/05/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 100,00"), /*#__PURE__*/
  React.createElement("td", null, "11/12/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 250,00"), /*#__PURE__*/
  React.createElement("td", null, "12/11/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 350,00"), /*#__PURE__*/
  React.createElement("td", null, "13/05/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 150,00"), /*#__PURE__*/
  React.createElement("td", null, "14/04/2023"), /*#__PURE__*/
  React.createElement("td", null, "Em atraso")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 300,00"), /*#__PURE__*/
  React.createElement("td", null, "15/01/2023"), /*#__PURE__*/
  React.createElement("td", null, "Em atraso")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 350,00"), /*#__PURE__*/
  React.createElement("td", null, "16/07/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 250,00"), /*#__PURE__*/
  React.createElement("td", null, "17/05/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 150,00"), /*#__PURE__*/
  React.createElement("td", null, "18/09/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 200,00"), /*#__PURE__*/
  React.createElement("td", null, "19/08/2023"), /*#__PURE__*/
  React.createElement("td", null, "A receber")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 350,00"), /*#__PURE__*/
  React.createElement("td", null, "20/03/2023"), /*#__PURE__*/
  React.createElement("td", null, "Em atraso")), /*#__PURE__*/

  React.createElement("tr", null, /*#__PURE__*/
  React.createElement("td", null, "R$ 150,00"), /*#__PURE__*/
  React.createElement("td", null, "13/02/2023"), /*#__PURE__*/
  React.createElement("td", null, "Em atraso"))), /*#__PURE__*/


  React.createElement("br", null), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_financeiro }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/60/60775.png" })), /*#__PURE__*/
  React.createElement("button", { id: "homer", onClick: tela_menu }, /*#__PURE__*/React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/6097/6097220.png" })))),


  document.querySelector("#root"));

  setTimeout("dia_previsao()", 100);
}
function dia_previsao() {
  // Obtém todas as células da tabela
  const cells = document.querySelectorAll('td');

  // Percorre as células e altera a cor do texto com base no conteúdo
  cells.forEach(cell => {
    if (cell.textContent === 'A receber') {
      cell.style.color = 'blue';
    } else if (cell.textContent === 'Em atraso') {
      cell.style.color = 'red';
    }
  });
  var dataAtual = new Date();

  // Formata a data como string
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1; // os meses começam em 0
  var ano = dataAtual.getFullYear();
  var dataString = '0' + dia + '/' + 0 + mes + '/' + ano;

  // Atualiza o conteúdo do elemento HTML
  document.getElementById('data-atual').textContent = dataString;
}
function getShades(color) {
  const palette = [
  { name: '50', value: -0.9 },
  { name: '100', value: -0.7 },
  { name: '200', value: -0.5 },
  { name: '300', value: -0.3 },
  { name: '400', value: -0.1 },
  { name: '500', value: 0 },
  { name: '600', value: 0.1 },
  { name: '700', value: 0.3 },
  { name: '800', value: 0.5 },
  { name: '900', value: 0.7 }];


  // Converte a cor hexadecimal para RGB
  const hexToRgb = (hex) =>
  hex.
  replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).
  substring(1).
  match(/.{2}/g).
  map(x => parseInt(x, 16));

  // Converte RGB para hexadecimal
  const rgbToHex = (rgb) =>
  '#' +
  rgb.
  map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).
  join('');

  // Obtém a cor mais escura
  const getDarkShade = (color, value) => {
    const rgb = hexToRgb(color);
    const newRgb = rgb.map(x => Math.round(x * (1 + value)));
    return rgbToHex(newRgb);
  };

  // Obtém a cor mais clara
  const getLightShade = (color, value) => {
    const rgb = hexToRgb(color);
    const newRgb = rgb.map(x => Math.round(x + (255 - x) * value));
    return rgbToHex(newRgb);
  };

  // Retorna um objeto com as cores
  const shades = {};
  palette.forEach(shade => {
    shades[shade.name] = {
      dark: getDarkShade(color, shade.value),
      light: getLightShade(color, shade.value) };

  });
  return shades;
}
