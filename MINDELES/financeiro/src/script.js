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