function abrir() {
  ReactDOM.render(
    <body>
      <h1>Criar Nova Conta</h1>
      <h3> Já registrado?<a onClick={() => tela_entrar()}> Entrar aqui.</a></h3>
      <h3>NOME</h3>
      <input type="text" placeholder="Digite seu nome" />
      <h3>EMAIL</h3>
      <input type="email" placeholder="Digite seu email" />
      <h3>SENHA</h3>
      <input type="password" placeholder="Digite sua senha" />
      <h3>DATA DE NASCIMENTO</h3>
      <input type="date" />
      <br/>
      <input id="cadastrar" type="submit" value="CADASTRAR" onClick={() => verificar_cadastro()} />

    
    </body>,
    document.querySelector("body")
  );
 
}
function tela_entrar() {
  ReactDOM.render(
    <body>
      <h1>Entrar</h1>
      <div id="box2">
        <span id="bv">Seja bem-vindo(a)!</span>
        <h3>NOME</h3>
        <input type="text" placeholder="Digite seu nome" />    
        <h3>SENHA</h3>
        <input type="password" placeholder="Digite sua senha" />      
        <h3> Não é registrado? <a onClick={() => abrir()}>Cadastre aqui.</a></h3>
      </div>
      <br />
      <input id="entrar" type="submit" value="ENTRAR" onClick={() => validar_login()} />
    </body>,
    document.querySelector("body")
  );
}
const usuarios = [
  {
    nome: "Urick Alberth",
    email: "urickalberth@gmail.com",
    senha: "131313",
    dataNascimento: "13/05/2001"
  },
  {
    nome: "renata",
    email: "ciclano@example.com",
    senha: "1234",
    dataNascimento: "10/02/1995"
  },
  {
    nome: "lucas",
    email: "beltrano@example.com",
    senha: "1234",
    dataNascimento: "23/05/1985"
  }
];
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
  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
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
  const usuarioExistente = usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senha);
  if (!usuarioExistente) {
    alert("Usuário não encontrado. Verifique o nome e a senha informados");
    return;
  }

  // Exibe a mensagem de boas-vindas e redireciona para o menu principal
  alert("Seja bem-vindo(a), " + nome + "!");
  configuracoes.senha=senha;
  configuracoes.usuario=nome;
  tela_menu();
}

function tela_menu() {
  ReactDOM.render(
    <body>
      <a onClick={tela_config}><img id="config" src="https://cdn-icons-png.flaticon.com/512/5994/5994793.png" width="20px"/></a>
      <h1>Menu Principal</h1>      
      <button onClick={tela_agenda} >Agenda</button>
      <br/>
      <hr/>
      <button onClick={tela_pacientes} >Clientes/Prontuário</button>
      <br/>
      <hr/>
      <button onClick={tela_testes} >Testes e Questionários</button>
      <br/>
      <hr/>
      <button onClick={tela_financeiro} >Financeiro</button>
      <br/>
      <button id="sair" onClick={tela_entrar} >SAIR</button>
    </body>,
    document.querySelector("body")
  );
}

function tela_config(){
  ReactDOM.render(
    <body>
      <h1>Configurações</h1>
      <div id="box2">
         <span><input type="color" value="#57e6d9"/>Cor do Tema</span>    
        <span><input type="checkbox"/>Notificações</span>   
        <span>CRM<input type="number"/></span>   
        <span>Idioma
          <select>
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
            <option>Japonês</option>
            </select>
        </span>   
        <span>Horário<input type="time"/> até <input type="time"/></span>   
      <h3>Alterar Senha</h3>
        <span>
      <input type="password" placeholder="Senha Atual" />  
          <input type="password" placeholder="Nova senha" />  
        </span>
      <span id="s_n">
        <button id="sim" onClick={salvar_config}><img  src="https://cdn-icons-png.flaticon.com/512/1/1687.png"/></button>
        <button id="nao" onClick={redefinir_config}><img  src="https://cdn-icons-png.flaticon.com/512/4467/4467408.png"/></button>
        </span>
      </div>
      <br/>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png"/></button>
   
    </body>,
    document.querySelector("body")
  );
}
const configuracoes =   {
    tema: "57e6d9",
    notificacao: "false",
    crm: "123456",
    idioma: "Português",
    horarioE: "08:00",
    horarioS: "18:00",
  senha:"",
  usuario:""
  };
function salvar_config() {
  const senha_atual = document.querySelector('input[type="password"][placeholder="Senha Atual"]').value;
  const nova_senha = document.querySelector('input[type="password"][placeholder="Nova senha"]').value;
  
  // verifica a senha atual
  if (senha_atual && senha_atual === configuracoes.senha) {
    configuracoes.senha = nova_senha;
    usuarios.forEach(function(usuario) {
  if (configuracoes.usuario===usuario.nome){
    usuario.senha=configuracoes.senha;
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
function tema(cor){
  let cor_clara = getShades(cor)['900'].light;
  let cor_escura = getShades(cor)['300'].dark;
  // obtém a raiz do documento
const root = document.documentElement;

// define o valor da variável CSS
root.style.setProperty('--cor-principal', cor);
  root.style.setProperty('--cor-dark', cor_escura);
root.style.setProperty('--cor-light', cor_clara);
}
function tela_agenda(){
  ReactDOM.render(
    <>
        <div class="calendar-container">  
  <table class="calendar">
    <thead>
      <tr>
        <th>Dom</th>
        <th>Seg</th>
        <th>Ter</th>
        <th>Qua</th>
        <th>Qui</th>
        <th>Sex</th>
        <th>Sáb</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>01</td>
        <td>02</td>
      </tr>
      <tr>
        <td>03</td>
        <td>04</td>
        <td>05</td>
        <td>06</td>
        <td>07</td>
        <td>08</td>
        <td>09</td>
      </tr>
      <tr>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
      </tr>
      <tr>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
      </tr>
      <tr>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
    </div>
      <br/>
      <div id="box2">
        <span id="dia"></span>
         <span id="nome"></span>    
        <span id="hora">Horário da consulta: </span>   
        <span id="telefone">Telefone : </span>            
        <span>
          Anotações:          
        </span> 
        <textarea id="anot"></textarea>
      <span id="s_n">
        <button id="concluir-btn" onClick={() => concluir_evento(id_evento)}>
  <img src="https://cdn-icons-png.flaticon.com/512/1/1687.png"/>
</button>

<button id="cancelar-btn" onClick={() => cancelar_evento(id_evento)}>
  <img src="https://cdn-icons-png.flaticon.com/512/4467/4467408.png"/>
</button>

        </span>
      </div>
      <br/>
      <div>
      <button id="homer" onClick={tela_novoevento} ><img src="https://cdn-icons-png.flaticon.com/512/4691/4691141.png"/></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png"/></button>
      </div>
    </>,
    document.querySelector("#root")
  );  
  setTimeout(() => {  addEventListenersToTable();}, 100);
setTimeout(() => {  verificaEventosDoMes(eventos);}, 100);
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
    valor: "250,00"
  },
  {
    id: 2,
    nome_paciente: "Paciente 2",
    hora: "08:00",
    data: "25/05/2023",
    telefone: "(31) 9 4567-7898",
    anotacoes: "Apresentação",
    valor: "250,00"
  }
];

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
let id_evento="";
function showEvent(evento) {
  const { nome_paciente, hora, data, telefone, anotacoes, valor, id } = evento;
  document.querySelector("#dia").textContent = data;
  document.querySelector("#nome").textContent = nome_paciente;
  document.querySelector("#hora").textContent = `Horário da consulta: ${hora}`;
  document.querySelector("#telefone").textContent = `Telefone: ${telefone}`;
  document.querySelector("#anot").textContent = anotacoes;
 id_evento=id;
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
function tela_novoevento(){
  ReactDOM.render(
    <body>
      <h1> Novo Evento</h1>
      <div id="box2">        
         <span><input type="text" placeholder="Nome do Paciente"/></span>    
        <span><input type="datetime-local"/></span>  
        <span><input type="tel" placeholder="(__)_ ____-____"/></span> 
        <span><input type="number" placeholder="Valor R$"/></span>
        <span>
          Anotações:          
        </span> 
        <textarea id="anot">Digite a evolução do paciente, resulatados etc..</textarea>
      <span id="s_n">
        <button id="sim" onClick={cad_evento}><img  src="https://cdn-icons-png.flaticon.com/512/1/1687.png"/></button>
        <button id="nao" onClick={tela_agenda}><img  src="https://cdn-icons-png.flaticon.com/512/4467/4467408.png"/></button>
        </span>
      </div>
      <br/>
      <div>
      <button id="homer" onClick={tela_novoevento} ><img src="https://cdn-icons-png.flaticon.com/512/4691/4691141.png"/></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png"/></button>
      </div>
    </body>,
    document.querySelector("body")
  );
}
var proximo_id = eventos.length + 1; // próximo ID disponível é o tamanho atual do array + 1

function cad_evento() {
  const nome_paciente = document.querySelector('input[type="text"]').value;
  const data_hora = new Date(document.querySelector('input[type="datetime-local"]').value);
  const data = data_hora.toLocaleDateString('pt-BR');
  const hora = data_hora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
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
    valor: valor
  });

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
  ReactDOM.render(
    <>
      <h1> Pacientes</h1>
      <input id="pesquisa" type="text" placeholder="&#128269;Pesquisar.."/>
      {pacientes.map((paciente, index) => (
        <div id="box" key={index} onClick={() => tela_prontuario(index)}>
          <img id="perfil" src={paciente.foto} alt={paciente.nome} />
          <div>
            <span id="destaque">{paciente.nome}</span>
            <span>{paciente.telefone}</span>
            <span>{paciente.data_nasc}</span>
          </div>
        </div>
      ))}
      <br/>
      <div>
        <button id="homer" onClick={tela_novopaciente}><img src="https://cdn-icons-png.flaticon.com/512/4691/4691141.png" alt="Novo evento" /></button>
        <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" alt="Menu" /></button>
      </div>
    </>,
    document.querySelector("#root")
  );
}
function tela_novopaciente(){
  ReactDOM.render(
    <>
      <div id="box2">
      <table class="cadp">
  <tr>
    <td rowspan="2"><img id="perfil" src="https://cdn-icons-png.flaticon.com/512/848/848043.png"/></td>
    <td colspan="1"><input type="text" placeholder="Nome Completo"/></td>
  </tr>
  <tr>
    <td colspan="1"><input type="date"/></td>
  </tr>
  <tr>
    <td colspan="1">Telefone para contato:</td>
    <td colspan="1"><input type="number" placeholder="(__) _ ____-____"/></td>
  </tr>
  <tr>
    <td colspan="1"><input type="number" placeholder="RG: __.___.___"/></td>
    <td colspan="1"><input type="number" placeholder="CPF: ___.___.___-__"/></td>
  </tr>
  <tr>
    <td colspan="2">lista de medicamento em uso:</td>
  </tr>
        <tr>
    <td colspan="2"><textarea id="lista" name="lista" rows="5"></textarea></td>
  </tr>
  <tr>
    <td colspan="1">Profissão:</td>
    <td colspan="2"><input type="text" placeholder="_____________"/></td>    
  </tr>
  <tr>
    <td colspan="2">Informações Complementares: </td>
  </tr>
        <tr>
    <td colspan="2"><textarea id="lista" name="lista" rows="5"></textarea></td>
  </tr>
</table>
  <span id="s_n">
        <button id="sim" onClick={cad_paciente}><img  src="https://cdn-icons-png.flaticon.com/512/1/1687.png"/></button>
        <button id="nao" onClick={tela_pacientes}><img  src="https://cdn-icons-png.flaticon.com/512/4467/4467408.png"/></button>
        </span>
      </div>
    <br/>
   <div>
      <button id="homer" onClick={tela_pacientes}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
         </>,
    document.querySelector("#root")
  );
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
    complementar: complementar
  };

  // Adicionar o novo paciente à lista de pacientes
  pacientes.push(novoPaciente);
  alert("Novo Paciente adicionado")
  tela_pacientes();
}
function tela_prontuario(index) {
  ReactDOM.render(
    <body>
      <div id="box">
      <table id="pront">
        <tr>
          <td rowspan="2" ><img id="perfil" src={pacientes[index].foto} /></td>
          <td colspan="1">{pacientes[index].nome}</td>
        </tr>  
        <tr>
          <td colspan="1">{pacientes[index].data_nasc}</td>
        </tr>
        <tr>
          <td colspan="1" >Telefone para contato:</td>
          <td colspan="1">{pacientes[index].telefone}</td>
        </tr>
        <tr>
          <td colspan="1">RG: {pacientes[index].rg}</td>
          <td colspan="1">CPF: {pacientes[index].cpf}</td>
        </tr>
        <tr>
          <td colspan="2" >lista de medicamento em uso:</td>
        </tr>
        <tr>
          <td colspan="2"><textarea id="lista" name="lista" rows="5">
{pacientes[index].lista_med}
      </textarea></td>
        </tr>
        <tr>
          <td colspan="1" >Profissão:</td>
          <td colspan="2">{pacientes[index].profissao}</td>
        </tr>
        <tr>
          <td colspan="2" >Informações Complementares: </td>
        </tr>
        <tr>
          <td colspan="2"><textarea id="lista" name="lista" rows="5">
{pacientes[index].complementar}
      </textarea></td>
        </tr>
      </table>
    </div>
    <br/>
    <button id="relatorio" onClick={tela_relatorio}><b>Gerar Relatório Psicológico</b></button>
    <div>
      <button id="homer" onClick={tela_pacientes}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
    </body>,
    document.querySelector("body")
  );
}
const pacientes=[
  {
    nome:"Paciente1",
    foto:"https://cdn-icons-png.flaticon.com/512/848/848043.png",
    data_nasc:"13/05/2001",
    telefone:"31993052729",
    rg:"12123123",
    cpf:"12312312312",
    lista_med:"remedio1,remedio2,remedio3",
    profissao:"Assistente",
    complementar:"outras informações"
  },
  {
    nome:"Paciente2",
    foto:"https://cdn-icons-png.flaticon.com/512/848/848043.png",
    data_nasc:"13/05/2001",
    telefone:"31993052729",
    rg:"12123123",
    cpf:"12312312312",
    lista_med:"remedio1,remedio2,remedio3",
    profissao:"Assistente",
    complementar:"outras informações"
  },
  {
    nome:"Paciente3",
    foto:"https://cdn-icons-png.flaticon.com/512/848/848043.png",
    data_nasc:"13/05/2001",
    telefone:"31993052729",
    rg:"12123123",
    cpf:"12312312312",
    lista_med:"remedio1,remedio2,remedio3",
    profissao:"Assistente",
    complementar:"outras informações"
  }
]
function tela_relatorio() {
  ReactDOM.render(
    <body>
       <h1>RELATÓRIO</h1>
    <div id="box2">
      <center>
      <form class="relatorio">
        <table >
          <tr>
            <th colspan="2">Dados de identificação</th>
          </tr>
          <tr>
            <td>Nome:</td>
            <td><input type="text" name="nome"/></td>
          </tr>
          <tr>
            <td>Idade:</td>
            <td><input type="text" name="idade"/></td>
          </tr>
          <tr>
            <td>Gênero:</td>
            <td><input type="text" name="genero"/></td>
          </tr>
          <tr>
            <td>Estado civil:</td>
            <td><input type="text" name="estado_civil"/></td>
          </tr>
          <tr>
            <td>Escolaridade:</td>
            <td><input type="text" name="escolaridade"/></td>
          </tr>
          <tr>
            <td>Profissão:</td>
            <td><input type="text" name="profissao"/></td>
          </tr>
        </table>
        <label for="motivo">Motivo da avaliação:</label>
        <br/>
        <textarea name="motivo" id="motivo"></textarea>
        <br/>
        <label for="historia">História clínica:</label>
        <br/>
        <textarea name="historia" id="historia"></textarea>
        <br/>
        <label for="resultados">Resultados:</label>
        <br/>
        <textarea name="resultados" id="resultados"></textarea>
        <br/>
        <label for="conclusao">Conclusão:</label>
        <br/>
        <textarea name="conclusao" id="conclusao"></textarea>
        <br/>
        <label for="recomendacoes">Recomendações:</label>
        <br/>
        <textarea name="recomendacoes" id="recomendacoes"></textarea>
        <br/>
        <label for="assinatura">Atesto a veracidade dos dados apresentados neste relatório.</label>
        <br/>
        <label for="crp">Assinatura, CRP:</label>
        <input type="text" name="crp"/>
        <br/>        
        <input type="date" name="data"/>
        <br/><br/>
        <input type="button" value="Imprimir" onClick={() =>{window.print()}}/>
      </form>
      </center>
    </div>
    <br/>
    <div>
      <button id="homer" onClick={tela_pacientes}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
    </body>,
    document.querySelector("body")
  );
}
function tela_testes() {
  ReactDOM.render(
    <>
      <h1>Testes e Questionários</h1>
      <input type="file" id="file-input" multiple />
      <button id="upload-button" onClick={uploud}>Upload</button>
      <br/>
      <ul id="file-list"></ul>
      <br/>
      <div>   
        <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
      </div>
    </>,
    document.querySelector("#root")
  );
}
function uploud() {
  const fileInput = document.querySelector('input[type="file"]');
  const fileList = document.querySelector('#file-list');

  // Clica no input do tipo file
  fileInput.click();

  // Adiciona um listener para quando um arquivo for selecionado
  fileInput.addEventListener('change', function(e) {
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
function tela_financeiro(){
   ReactDOM.render(
    <>
        <h1>Financeiro</h1>      
      <div id="box2">        
  <table class="financeiro">
    <th colspan="3">Quantidade de Consultas /Valor Recebido por período</th>
    <tr>
      <td rowspan="5" ><div id="qt">20</div></td>
      <td rowspan="5" ><div id="vl">R$2000,00</div></td>
      <td>Inicio do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
    <tr>
      <td>Final do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
     <tr>
       <td><button onClick={tela_quantitativo}>Confirmar</button></td>
    </tr>
        </table>
      </div>
       <br/>
      <div id="box2">        
  <table class="financeiro">
    <th colspan="2">Receitas</th>
    <tr>
      <td rowspan="5" >
        <div >
  <canvas id="myChart"></canvas>
</div>
      </td>
      <td>Inicio do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
    <tr>
      <td>Final do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
     <tr>
       <td><button onClick={tela_receitas}>Confirmar</button></td>
    </tr>
        </table>
      </div>
       <br/>
      <div id="box2">        
  <table class="financeiro">
    <th colspan="2">Pagamentos Previstos</th>
    <tr>
      <td rowspan="5" >
        <div >
  <canvas id="myChart2"></canvas>
</div>
      </td>
      <td>Inicio do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
    <tr>
      <td>Final do periodo</td>
    </tr>
    <tr>
      <td><input type="date"/></td>
    </tr>
     <tr>
       <td><button onClick={tela_previsoes}>Confirmar</button></td>
    </tr>
        </table>
      </div>    
      <br/>
      <div>      
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
      </div>
       </>,
    document.querySelector("#root")
  );
   setTimeout("grafico_fin()", 100);
}
function grafico_fin(){
  const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
      datasets: [{
        label: 'Lucros',
        data: [10,20,30,40,50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Previsões',
        data: [10,5,30,15],
        backgroundColor: [
      'rgba(65, 184, 213,1)',
      'rgba(255, 0, 64, 1)',
      'rgba(65, 184, 213,1)',      
      'rgba(255, 0, 64, 1)'
    ],
        borderWidth: 1
      }]
    },
    options: {
       indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    
  });
}
function tela_quantitativo(){
   ReactDOM.render(
    <>
        <h1>Quantitativo</h1>       
     <div id="box3">
  <canvas id="quant"></canvas>
</div>
      <br/>
      <div>
      <button id="homer" onClick={tela_financeiro}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
         </>,
    document.querySelector("#root")
  );
   setTimeout("grafico_quat()", 100);
}
function grafico_quat(){
  const ctx = document.getElementById('quant');
const mixedChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Consultas',
            data: [10, 20, 30, 40],
          backgroundColor: [ 'rgba(34, 69, 146,1)'],
        }, {
            type: 'line',
            label: 'Recebido',
            data: [15, 25, 35, 50],
          backgroundColor: [ 'rgba(2, 127, 230,1)'],
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    
});
mixedChart.options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }]
  },
  height: 600 // altere o valor para o tamanho desejado
};

mixedChart.update(); // atualiza o gráfico com as novas opções
}
function tela_receitas(){
ReactDOM.render(
    <>
     <h1>Receitas</h1>      
     <table class="receitas">
       <th>MESES</th>
       <th>2022</th>
       <th>2023</th>
       <tr>
         <th>Janeiro</th>
         <td>R$ 1000,00</td>
         <td>R$ 1100,00</td>
       </tr>
       <tr>
         <th>Fevereiro</th>
         <td>R$ 900,00</td>
         <td>R$ 1000,00</td>
       </tr>   
       <tr>
         <th>Março</th>
         <td>R$ 1500,00</td>
         <td>R$ 1100,00</td>
       </tr>   
       <tr>
         <th>Abril</th>
         <td>R$ 1300,00</td>
         <td>R$ 1150,00</td>
       </tr>   
       <tr>
         <th>Maio</th>
         <td>R$ 1500,00</td>
         <td>R$ 1900,00</td>
       </tr>   
       <tr>
         <th>Junho</th>
         <td>R$ 1000,00</td>
         <td>R$ 1100,00</td>
       </tr>   
       <tr>
         <th>Julho</th>
         <td>R$ 2000,00</td>
         <td>R$ 2100,00</td>
       </tr>   
       <tr>
         <th>Agosto</th>
         <td>R$ 1700,00</td>
         <td>R$ 1100,00</td>
       </tr>   
       <tr>
         <th>Setembro</th>
         <td>R$ 1400,00</td>
         <td>R$ 1200,00</td>
       </tr>   
       <tr>
         <th>Outubro</th>
         <td>R$ 1400,00</td>
         <td>R$ 1900,00</td>
       </tr>   
       <tr>
         <th>Novembro</th>
         <td>R$ 1000,00</td>
         <td>R$ 1100,00</td>
       </tr>   
       <tr>
         <th>Desembro</th>
         <td>R$ 1000,00</td>
         <td>R$ 1100,00</td>
       </tr>   
      </table>
      <br/>
      <div>
      <button id="homer" onClick={tela_financeiro}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
         </>,
    document.querySelector("#root")
  );
}
function tela_previsoes(){
ReactDOM.render(
    <>
     <h1>Previsão</h1> 
      <span id="data-atual"></span>
     <table class="previsao">
       <th>VALOR</th>
       <th>DATA PREVISTA</th>
       <th>SITUAÇÃO</th>
       <tr>
         <td>R$ 250,00</td>
         <td>13/05/2023</td>
         <td>A receber</td>
       </tr>
       <tr>
         <td>R$ 100,00</td>
         <td>11/12/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 250,00</td>
         <td>12/11/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 350,00</td>
         <td>13/05/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 150,00</td>
         <td>14/04/2023</td>
         <td>Em atraso</td>
       </tr>   
       <tr>
         <td>R$ 300,00</td>
         <td>15/01/2023</td>
         <td>Em atraso</td>
       </tr>   
       <tr>
         <td>R$ 350,00</td>
         <td>16/07/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 250,00</td>
         <td>17/05/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 150,00</td>
         <td>18/09/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 200,00</td>
         <td>19/08/2023</td>
         <td>A receber</td>
       </tr>   
       <tr>
         <td>R$ 350,00</td>
         <td>20/03/2023</td>
         <td>Em atraso</td>
       </tr>   
       <tr>
         <td>R$ 150,00</td>
         <td>13/02/2023</td>
         <td>Em atraso</td>
       </tr>   
      </table>
      <br/>
      <div>
      <button id="homer" onClick={tela_financeiro}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" /></button>
      <button id="homer" onClick={tela_menu}><img src="https://cdn-icons-png.flaticon.com/512/6097/6097220.png" /></button>
    </div>
         </>,
    document.querySelector("#root")
  );
  setTimeout("dia_previsao()", 100);
}
function dia_previsao(){
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
    var dataString = '0'+dia + '/' + 0+mes + '/' + ano;

    // Atualiza o conteúdo do elemento HTML
    document.getElementById('data-atual').textContent = dataString;
}
function getShades(color) {
  const palette = [
    { name: '50',  value: -0.9 },
    { name: '100', value: -0.7 },
    { name: '200', value: -0.5 },
    { name: '300', value: -0.3 },
    { name: '400', value: -0.1 },
    { name: '500', value: 0 },
    { name: '600', value: 0.1 },
    { name: '700', value: 0.3 },
    { name: '800', value: 0.5 },
    { name: '900', value: 0.7 },
  ];

  // Converte a cor hexadecimal para RGB
  const hexToRgb = (hex) =>
    hex
      .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  // Converte RGB para hexadecimal
  const rgbToHex = (rgb) =>
    '#' +
    rgb
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  // Obtém a cor mais escura
  const getDarkShade = (color, value) => {
    const rgb = hexToRgb(color);
    const newRgb = rgb.map((x) => Math.round(x * (1 + value)));
    return rgbToHex(newRgb);
  };

  // Obtém a cor mais clara
  const getLightShade = (color, value) => {
    const rgb = hexToRgb(color);
    const newRgb = rgb.map((x) => Math.round(x + (255 - x) * value));
    return rgbToHex(newRgb);
  };

  // Retorna um objeto com as cores
  const shades = {};
  palette.forEach((shade) => {
    shades[shade.name] = {
      dark: getDarkShade(color, shade.value),
      light: getLightShade(color, shade.value),
    };
  });
  return shades;
}
