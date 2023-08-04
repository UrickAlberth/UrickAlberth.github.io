//codigo data
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var d = new Date();
document.getElementById("current_date1").innerHTML = semana[d.getDay()];

//codigo hora
function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
document.getElementById('hora').innerHTML=h;
  document.getElementById('minuto').innerHTML=m;
  document.getElementById('segundo').innerHTML=s;
setTimeout('time()',500);
}