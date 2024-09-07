const ctx = document.getElementById('myChart');
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