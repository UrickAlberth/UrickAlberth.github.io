
const Questoes = [
    "Sonho em ser tão bom no que faço que minha opinião de especialista seja sempre solicitada.",
    "Me sinto mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o trabalho dos outros.",
    "Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho do meu jeito e no tempo por mim programado.",
    "Segurança e estabilidade são mais importantes para mim do que liberdade e autonomia.",
    "Estou sempre procurando ideias que me permitam iniciar meu próprio negócio.",
    "Sentirei sucesso na minha carreira se sentir que contribuí verdadeiramente para o bem-estar da sociedade.",
    "Sonho com uma carreira na qual eu possa solucionar problemas ou vencer em situações extremamente desafiadoras.",
    "Prefiro deixar meu emprego a ser colocado em um trabalho que comprometa minha capacidade de satisfazer meus interesses pessoais e familiares.",
    "Só me sentirei bem-sucedido em minha carreira se puder desenvolver minhas habilidades técnicas e funcionais até o mais alto nível de competência.",
    "Sonho em dirigir uma organização complexa e tomar decisões que afetem muitas pessoas.",
    "Me sinto mais realizado em meu trabalho quando tenho total liberdade de definir minhas próprias tarefas, horários e procedimentos.",
    "Prefiro manter minha atividade atual a aceitar outra tarefa que possa colocar em risco minha segurança na empresa.",
    "Montar meu próprio negócio é mais importante para mim do que atingir uma alta posição gerencial como funcionário.",
    "Me sinto mais realizado em minha carreira quando posso utilizar meus talentos a serviço dos outros.",
    "Me sinto realizado em minha carreira apenas quando enfrento e supero desafios extremamente difíceis.",
    "Sonho com uma carreira que me permita integrar minhas necessidades pessoais, familiares e de trabalho.",
    "Me tornar um gerente técnico em minha área de especialização é mais atraente para mim do que me tornar um gerente geral em alguma organização.",
    "Me sentirei bem-sucedido em minha carreira apenas quando me tornar um gerente geral em alguma organização.",
    "Me sentirei bem-sucedido em minha carreira apenas quando alcançar total autonomia e liberdade.",
    "Procuro trabalhos em organizações que me deem senso de segurança e estabilidade.",
    "Me sinto realizado em minha carreira quando sou capaz de construir alguma coisa que seja inteiramente resultado de minhas ideias e esforços.",
    "Utilizar minhas habilidades para tornar o mundo um lugar melhor para se viver e trabalhar é mais importante para mim do que alcançar uma posição gerencial de alto nível.",
    "Me sinto mais realizado em minha carreira quando soluciono problemas aparentemente insolúveis ou venço o que aparentemente era impossível de ser vencido.",
    "Me sinto bem-sucedido na vida apenas quando sou capaz de equilibrar minhas necessidades pessoais, familiares e de carreira.",
    "Prefiro sair da empresa onde estou a aceitar uma tarefa em esquema rotativo que me afaste da minha área de experiência.",
    "Me tornar um diretor geral é mais atraente para mim do que me tornar um diretor técnico em minha área de especialização.",
    "Para mim, poder fazer um trabalho do meu jeito, livre de regras e restrições, é mais importante do que segurança.",
    "Me sinto mais realizado em meu trabalho quando percebo que tenho total segurança financeira e estabilidade no trabalho.",
    "Me sinto bem-sucedido em meu trabalho apenas quando posso criar ou construir alguma coisa que seja inteiramente de minha autoria.",
    "Sonho em ter uma carreira que faça uma real contribuição à humanidade e à sociedade.",
    "Procuro oportunidades de trabalho que desafiem fortemente minhas habilidades para solucionar problemas.",
    "Equilibrar as exigências da minha vida pessoal e profissional é mais importante do que alcançar alta posição gerencial.",
    "Me sinto plenamente realizado em meu trabalho quando sou capaz de empregar minhas habilidades e talentos especiais.",
    "Prefiro sair da empresa onde estou a aceitar um cargo que me afaste do caminho da diretoria geral.",
    "Prefiro sair da empresa onde estou a aceitar um cargo que reduza minha autonomia e liberdade.",
    "Sonho em ter uma carreira que me dê senso de segurança e estabilidade.",
    "Sonho em iniciar e montar meu próprio negócio.",
    "Prefiro sair da empresa onde estou a aceitar um cargo que prejudique minha capacidade de ser útil aos outros.",
    "Trabalhar em problemas praticamente insolúveis para mim é mais importante do que alcançar uma posição gerencial de alto nível.",
    "Sempre procurei oportunidades de trabalho que minimizassem interferências com assuntos pessoais e familiares."
  ];
  function adicionarDivs() {
    const divContainer = document.getElementById("divContainer");

    Questoes.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const p = document.createElement("p");
    p.textContent = (index + 1) + ". " + item;

    const divOptions = document.createElement("div");
    divOptions.className = "options";

    for (let i = 1; i <= 6; i++) {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + (index + 1);
        input.value = i;
      
        const label = document.createElement("label");
        label.textContent = i;
        label.onclick = function() {
          input.checked = true;
        };
      
        divOptions.appendChild(input);
        divOptions.appendChild(label);
      }
      

    div.appendChild(p);
    div.appendChild(divOptions);

    divContainer.appendChild(div);
  });
}

// Chamando a função para adicionar as divs no HTML



  function calcular(){
  // Aplica o valor +4 aos checkboxes selecionados pelo usuário
  var checkboxes = document.querySelectorAll('input[name="opcao"]:checked');
  if (checkboxes.length > 3) {
    alert("Por favor, escolha apenas 3 opções.");
    return; // Encerra a função se houver mais de 3 checkboxes selecionados
  }

  for (var k = 0; k < checkboxes.length; k++) {
      document.querySelector('input[name="q' + checkboxes[k].id + '"]:checked').value=parseInt(document.querySelector('input[name="q' + checkboxes[k].id + '"]:checked').value)+4;
  }
  var checkboxList = document.getElementById("checkbox-list");
    checkboxList.innerHTML = "";

    var values = [];  // ou var values = {};
 

    for (var i = 1; i <= 40; i++) {
      values[i] = parseInt(document.querySelector('input[name="q' + i + '"]:checked').value);

    }

    const tecnica_funcional = (values[1]+values[9]+values[17]+values[25]+values[33])/5;
    const administrativa_geral = (values[2]+values[10]+values[18]+values[26]+values[34])/5;
    const autonomia_independencia = (values[3]+values[11]+values[19]+values[27]+values[35])/5;
    const seguranca_estabilidade = (values[4]+values[12]+values[20]+values[28]+values[36])/5;
    const criatividade_empreendedora = (values[5]+values[13]+values[21]+values[29]+values[37])/5;
    const dedicacao = (values[6]+values[14]+values[22]+values[30]+values[38])/5;
    const desafio = (values[7]+values[15]+values[23]+values[31]+values[39])/5;
    const estilo = (values[8]+values[16]+values[24]+values[32]+values[40])/5;

    document.getElementById("result").innerHTML = 
    "<strong>A ~ Competência técnica/funcional: </strong>" + tecnica_funcional +
     "<br>Pessoas tecnicamente ancoradas comprometem-se com uma carreira de especialização. Elas ficam motivadas quando são especialistas em um determinado assunto, buscam trabalhos desafiadores, querem testar o conhecimento e a habilidade que têm em sua área de atuação."+
     "<br>São pessoas que não visam altos cargos administrativos (essas, normalmente, são mais generalistas), e sim cargos de especialista em uma determinada área.<br><br>"+
     "<strong>B ~ Competência administrativa/geral:</strong> " + administrativa_geral +
     "<br>Quem tem como âncora de carreira a competência administrativa geral busca, ao longo de sua vida profissional, atingir os mais altos níveis de responsabilidade na organização."+
     "<br>São pessoas que visam a liderança e têm como motivação atingir o topo da hierarquia corporativa. Para elas, a especialização é uma armadilha: entendem a importância de conhecer as áreas funcionais, mas não buscam se aprofundar tecnicamente, pois querem a função de gerência-geral.<br><br>"+
     "<strong>C ~ Autonomia e independência:</strong> "+ autonomia_independencia+
     "<br>Pessoas com essa âncora vão buscar, com o passar do tempo, uma carreira que possibilite maior independência, que permita impor suas próprias condições."+
     "<br>A autonomia é inerente a qualquer ser humano, em níveis diferentes, mas quem tem fortemente essa âncora sente a necessidade de ser dono de seu próprio destino, fazer as coisas do seu jeito; por isso, vai organizar sua vida profissional em torno de trabalhos que lhe proporcionem mais escolha e poder de decisão.<br><br>"+
     "<strong>D ~ Segurança e estabilidade:</strong> "+seguranca_estabilidade+
     "<br>Aqui se enquadram pessoas que precisam se sentir seguras no ambiente de trabalho. Elas buscam maior previsibilidade do futuro, querem “saber onde pisam”. São atraídas por empregos em empresas que oferecem essa estabilidade, com bons planos de aposentadoria e boa reputação. É essa estabilidade, principalmente financeira, que vai guiar a carreira desses profissionais.<br><br>"+
     "<strong>E ~ Criatividade empreendedora:</strong> "+criatividade_empreendedora+
     "<br>Nessa âncora, estão os profissionais com tino para a criação de novos negócios e organizações. Não são pessoas necessariamente com criatividade artística, mas sim com um espírito empreendedor, que querem estabelecer ou reestruturar negócios próprios."+
     "<br>Têm motivação para, desde cedo, iniciar empreendimentos para ganhar dinheiro. Vale ressaltar que o enfoque aqui não é a busca por autonomia, e sim pela criação de negócios.<br><br>"+
     "<strong>F ~ Dedicação a uma causa:</strong> "+dedicacao+
     "<br>Pessoas com essa âncora são orientadas em sua carreira por valores que querem imprimir em seu trabalho. Elas se voltam para os valores e se dedicam a causas, mais do que aos seus talentos e competências. São profissionais que querem, de alguma forma, contribuir para um mundo melhor por meio de seu trabalho.<br><br>"+
     "<strong>G ~ Desafio puro:</strong> "+desafio+
     "<br>Nessa âncora, se encaixam profissionais que definem sucesso como a superação de obstáculos impossíveis ou como a capacidade de solucionar problemas insolúveis. São pessoas que necessitam sentir que podem conquistar qualquer coisa."+
     "<br>A busca por desafios permeia a carreira de quase todo mundo, mas, para quem é ancorado no desafio puro, é o que norteia a sua trajetória — todas as suas decisões profissionais vão sempre ser com o objetivo de superar desafios cada vez maiores.<br><br>"+
     "<strong>H ~ Estilo de vida:</strong> "+estilo+
     "<br>Muitas vezes, interpretam essa âncora como sendo a de pessoas que não dão prioridade à sua carreira, mas não se trata disso. A questão é que pessoas ancoradas pelo estilo de vida buscam encontrar uma forma de integrar todas as suas necessidades: individuais, de família e de carreira. Podem ser altamente motivadas pelo trabalho, mas entendem que ele deve ser apenas uma parte de sua vida como um todo."+
     "<br>São pessoas que querem, acima de tudo, flexibilidade. Por isso, olham mais para a atitude da empresa do que para o programa de trabalho propriamente dito. A diferença para a âncora da autonomia é que elas se adaptam bem ao ambiente organizacional, com suas regras e restrições, mas querem ter opções mais flexíveis de trabalho.";


  }

  function maisQuatro() {
    verificarMarcacao();
    
    var values = [];
    var maisAltos = [];
    var indice = [];
  
    for (var i = 1; i <= 40; i++) {
      values[i] = parseInt(document.querySelector('input[name="q' + i + '"]:checked').value);
      if (values[i] == 6) {
        maisAltos.push(Questoes[i-1]);
        indice.push(i);
      }
    }
  

  
    // Cria os checkboxes no HTML para as opções em maisAltos
    var checkboxList = document.getElementById("checkbox-list");
    checkboxList.innerHTML = ""; // Limpa a lista antes de recriá-la

    var label2 = document.createElement("label");
    label2.appendChild(document.createTextNode("Agora olhe pros itens que você pontuou com notas mais altas e escolha as 3 frases mais verdadeiras. Nessas 3 frases, aumentaremos +4 pontos."));
    checkboxList.appendChild(label2);
    var br = document.createElement("br");
    checkboxList.appendChild(br);
    var br = document.createElement("br");
      checkboxList.appendChild(br);

    for (var j = 0; j < maisAltos.length; j++) {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "opcao";
      checkbox.value = maisAltos[j];
      checkbox.id= indice[j];
      checkboxList.appendChild(checkbox);
  
      var label = document.createElement("label");
     label.appendChild(document.createTextNode(maisAltos[j]));
      checkboxList.appendChild(label);
      var br = document.createElement("br");
      checkboxList.appendChild(br);
      var br = document.createElement("br");
      checkboxList.appendChild(br);
    }
    var bt = document.createElement("button");
    bt.className = "submit-btn";
    bt.textContent = "Calcular Pontuação";
    bt.onclick = calcular;
    checkboxList.appendChild(bt);
    
   
  }
  
  function verificarMarcacao(){
    var groups = {}; // Objeto para armazenar os grupos de radios

  // Obtém todos os radios e verifica se estão marcados
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    var radio = radios[i];
    var groupName = radio.name; // Obtém o nome do grupo

    // Verifica se o grupo já está no objeto 'groups'
    if (!groups[groupName]) {
      groups[groupName] = false; // Define como não marcado inicialmente
    }

    // Verifica se o radio está marcado
    if (radio.checked) {
      groups[groupName] = true; // Marca o grupo como verdadeiro
    }
  }

  // Verifica se algum grupo não foi marcado
  var allGroupsMarked = Object.values(groups).every(Boolean);
  if (!allGroupsMarked) {
    alert("Por favor, marque todos os grupos de opções antes de calcular.");
    return; // Encerra a função se algum grupo não estiver marcado
  }
  }
 