function updateTime() {
	const now = new Date();
	const timeString = now.toLocaleTimeString("pt-BR", { hour12: false });
	document.getElementById("timeDisplay").innerText = timeString;
}

function updateDate() {
	const now = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};
	const dateString = now.toLocaleDateString("pt-BR", options);
	document.getElementById("currentDate").innerText = dateString;
}

function generateCalendar() {
	const now = new Date();
	const month = now.getMonth() + contM;
	const year = now.getFullYear() + contY;
	const monthNames = [
		"janeiro",
		"fevereiro",
		"março",
		"abril",
		"maio",
		"junho",
		"julho",
		"agosto",
		"setembro",
		"outubro",
		"novembro",
		"dezembro"
	];

	document.getElementById("monthName").innerText = monthNames[month];
	document.getElementById("year").innerText = year;

	const firstDay = new Date(year, month, 1).getDay();
	const lastDate = new Date(year, month + 1, 0).getDate();

	const daysContainer = document.getElementById("daysContainer");
	daysContainer.innerHTML = "";

	let contDIV=0;
	for (let i = 0; i < firstDay; i++) {
		const emptyDiv = document.createElement("div");
		daysContainer.appendChild(emptyDiv);
		contDIV++;
	}

	for (let date = 1; date <= lastDate; date++) {
		const dateDiv = document.createElement("div");
		dateDiv.innerText = date;
		dateDiv.id=date;
		dateDiv.onclick = () => select(date);
		if (date === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
			dateDiv.classList.add("today");
		}
		daysContainer.appendChild(dateDiv);
		contDIV++;
	}
	for (contDIV; contDIV < 42; contDIV++) {
		const emptyDiv = document.createElement("div");
		daysContainer.appendChild(emptyDiv);
		
	}
	
}

let contM = 0;
let contY = 0;
function next_or_prev(action) {
	const now = new Date();
	const month = now.getMonth();
	if (action == 1) {
		contM++;
		if (12 == month + contM) {
			contM = month * -1;
			contY++;
		}
	} else if (action == 0) {
		contM--;
		if (-1 == month + contM) {
			contM = 11-month;
			contY--;
		}
	} else {
		contM = 0;
		contY = 0;		
	}
	generateCalendar();
}

function select(day){
	 document.querySelectorAll('.selected').forEach(divs => {divs.classList.remove("selected")});
	const dayselect = document.getElementById(day);
	dayselect.classList.add("selected");
}

/*const calendar = document.querySelector('.days-container');

calendar.addEventListener('mousemove', function(event) {
    const circleRadius = 75;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    document.querySelectorAll('.days-container div').forEach(day => {
        const dayRect = day.getBoundingClientRect();
        const dayCenterX = dayRect.left + dayRect.width / 2;
        const dayCenterY = dayRect.top + dayRect.height / 2;

        const distance = Math.sqrt(
            Math.pow(dayCenterX - mouseX, 2) + 
            Math.pow(dayCenterY - mouseY, 2)
        );

        if (distance < circleRadius) {
            day.classList.add('with-border');
        } else {
            day.classList.remove('with-border');
        }
    });
});*/


document.addEventListener("DOMContentLoaded", () => {
	updateTime();
	updateDate();
	generateCalendar();
	setInterval(updateTime, 1000);
});