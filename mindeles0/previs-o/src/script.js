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