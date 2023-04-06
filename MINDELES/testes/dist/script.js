const fileInput = document.querySelector('input[type="file"]');
const fileList = document.querySelector('#file-list');
const uploadButton = document.querySelector('button');

// Adiciona um listener para quando o botão de upload for clicado
uploadButton.addEventListener('click', function(e) {
  // Clica no input do tipo file
  fileInput.click();
});

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
});