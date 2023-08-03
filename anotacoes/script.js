
// Abrir o banco de dados ou criar um novo caso não exista
const request = indexedDB.open("meu_bloco_de_anotacoes", 1);

// Evento disparado quando o banco de dados for criado ou atualizado
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Cria uma tabela (object store) para armazenar as notas
  const notesStore = db.createObjectStore("notas", {
    keyPath: "id",
    autoIncrement: true
  });
};

function adicionarNota(nota) {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readwrite");
    const notesStore = transaction.objectStore("notas");

    const addRequest = notesStore.add(nota);

    addRequest.onsuccess = (event) => {
      console.log("Nota adicionada com sucesso!");
      recuperarNotas(); // Atualizar a lista após adicionar uma nota
    };

    addRequest.onerror = (event) => {
      console.error("Erro ao adicionar nota:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

function recuperarNotas() {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readwrite");
    const notesStore = transaction.objectStore("notas");
    const getAllRequest = notesStore.getAll();

    getAllRequest.onsuccess = (event) => {
      const notas = event.target.result;
      const notasDiv = document.getElementById("notas");
      notasDiv.innerHTML = ""; // Limpar a div antes de adicionar as notas novamente

      notas.forEach((nota) => {
        // Substituir a quebra de linha por <br> no conteúdo da nota
        const conteudoFormatado = quebraDeLinha(nota);

        const notaDiv = document.createElement("div");
        notaDiv.innerHTML = `
          <h3>${nota.title}</h3>
          <p>${conteudoFormatado}</p>
          <button class="btnExcluir" data-id="${nota.id}">Excluir</button>
          <button class="btnEditar" data-id="${nota.id}">Editar</button>
        `;
        notasDiv.appendChild(notaDiv);
      });

      // Adicionar os event listeners para os botões de excluir
      const btnsExcluir = document.getElementsByClassName("btnExcluir");
      for (const btn of btnsExcluir) {
        btn.addEventListener("click", () => {
          const id = Number(btn.getAttribute("data-id"));
          excluirNota(id);
          recuperarNotas(); // Atualizar a lista após excluir uma nota
        });
      }

      const btnsEditar = document.getElementsByClassName("btnEditar");
      for (const btn of btnsEditar) {
        const id = Number(btn.getAttribute("data-id"));
        btn.setAttribute("onClick", "editarNota(" + id + ")");
      }
    };

    getAllRequest.onerror = (event) => {
      console.error("Erro ao recuperar notas:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

function excluirNota(id) {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readwrite");
    const notesStore = transaction.objectStore("notas");
    const deleteRequest = notesStore.delete(id);

    deleteRequest.onsuccess = (event) => {
      console.log("Nota excluída com sucesso!");
    };

    deleteRequest.onerror = (event) => {
      console.error("Erro ao excluir nota:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

function editarNota(id) {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readonly");
    const notesStore = transaction.objectStore("notas");
    const getRequest = notesStore.get(id);
    getRequest.onsuccess = (event) => {
      const nota = event.target.result;
      if (nota) {
        document.getElementById("titulo").value = nota.title;
        document.getElementById("conteudo").value = nota.content;
        const btnAdicionar = document.getElementById("btnAdicionar");
        btnAdicionar.style.display = "none";
        const btnAlterar = document.getElementById("btnAlterar");
        btnAlterar.style.display = "inline-block";
        btnAlterar.setAttribute("onClick", "preatualizar(" + id + ")");
      }
    };

    getRequest.onerror = (event) => {
      console.error("Erro ao obter nota:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}
function preatualizar(id) {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readonly");
    const notesStore = transaction.objectStore("notas");
    const getRequest = notesStore.get(id);
    getRequest.onsuccess = (event) => {
      const nota = event.target.result;
      nota.title = document.getElementById("titulo").value;
      nota.content = document.getElementById("conteudo").value;
      // Chamar a função para atualizar a nota com os novos valores
      atualizarNota(id, nota);
    };
  };
}

function atualizarNota(id, nota) {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readwrite");
    const notesStore = transaction.objectStore("notas");

    const updateRequest = notesStore.put(nota);

    updateRequest.onsuccess = () => {
      console.log("Nota editada com sucesso!");
      document.getElementById("titulo").value = "";
      document.getElementById("conteudo").value = "";
      const btnAdicionar = document.getElementById("btnAdicionar");
      btnAdicionar.style.display = "inline-block";
      const btnAlterar = document.getElementById("btnAlterar");
      btnAlterar.style.display = "none";

      // Atualizar a lista após a edição da nota
      recuperarNotas();
    };

    updateRequest.onerror = (event) => {
      console.error("Erro ao editar nota:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

function apagarTodasNotas() {
  const request = indexedDB.open("meu_bloco_de_anotacoes");

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["notas"], "readwrite");
    const notesStore = transaction.objectStore("notas");

    const clearRequest = notesStore.clear();

    clearRequest.onsuccess = (event) => {
      console.log("Todas as notas foram apagadas com sucesso!");
      recuperarNotas(); // Atualizar a lista após a exclusão de todas as notas
    };

    clearRequest.onerror = (event) => {
      console.error("Erro ao apagar todas as notas:", event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

function quebraDeLinha(nota) {
  if (nota.content.substr(0, 4) != "code") {
    return nota.content.replaceAll("\n", "<br>");
  } else {
    
      executarScriptDoHTML(nota.content);
    
    var notaSemScript = removerTagScript(nota.content);
    return notaSemScript;
  }
}
function removerTagScript(htmlString) {
  // Expressão regular para encontrar a tag <script> e seu conteúdo
  const scriptTagRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Remover a tag <script> e seu conteúdo da string
  const stringSemScript = htmlString.replace(scriptTagRegex, '');

  return stringSemScript;
}
function executarScriptDoHTML(html) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = html;

  const scriptElement = tempElement.querySelector('script');

  if (scriptElement) {
    const scriptConteudo = scriptElement.textContent;

    try {
      // Formatando o código do script usando js-beautify
      const codigoFormatado = js_beautify(scriptConteudo, { indent_size: 2 });
 const novaClasseScript = 'newscript'; // Defina aqui a classe do novo script

// Remover os scripts anteriores com a mesma classe (se houver algum)
const scriptsAntigos = document.querySelectorAll(`script.${novaClasseScript}`);
scriptsAntigos.forEach((script) => {
  script.parentNode.removeChild(script);
});

// Criar e adicionar o novo script
const novoScript = document.createElement('script');
novoScript.textContent = codigoFormatado;
novoScript.classList.add(novaClasseScript); // Adiciona a nova classe ao novo script

setTimeout(function() {
  document.body.appendChild(novoScript);
}, 2000);
      
  
      console.log('Script executado com sucesso!');
    } catch (err) {
      console.error('Erro ao executar o script:', err);
    }
  } else {
    console.warn('Nenhuma tag <script> encontrada no código HTML.');
  }
}

// Exemplo de uso:
document.getElementById("btnAdicionar").addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value;
  const conteudo = document.getElementById("conteudo").value;
  const nota = { title: titulo, content: conteudo };
  adicionarNota(nota);
  document.getElementById("titulo").value = "";
  document.getElementById("conteudo").value = "";
});

// Recuperar as notas assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
  recuperarNotas();
});

document.getElementById("btnApagar").addEventListener("click", () => {
  const confirmarExclusao = confirm(
    "Tem certeza que deseja excluir todas as notas?"
  );

  if (confirmarExclusao) {
    apagarTodasNotas();
  } else {
    return;
  }
});
