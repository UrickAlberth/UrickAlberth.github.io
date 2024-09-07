let musicas = [
	{
		Nome: "01. Do I Wanna Know?",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/01.%20Do%20I%20Wanna%20Know%3F.mp3"
	},
	{
		Nome: "02. R U Mine?",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/02.%20R%20U%20Mine%3F.mp3"
	},
	{
		Nome: "03. One For The Road",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/03.%20One%20For%20The%20Road.mp3"
	},
	{
		Nome: "04. Arabella",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/04.%20Arabella.mp3"
	},
	{
		Nome: "05. I Want It All",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/05.%20I%20Want%20It%20All.mp3"
	},
	{
		Nome: "06. 1 Party Anthem",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/06.%20No.%201%20Party%20Anthem.mp3"
	},
	{
		Nome: "07. Mad Sounds",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/07.%20Mad%20Sounds.mp3"
	},
	{
		Nome: "08. Fireside",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/08.%20Fireside.mp3"
	},
	{
		Nome: "09. Why'd You Only Call Me When You're High?",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/09.%20Why'd%20You%20Only%20Call%20Me%20When%20You're%20High%3F.mp3"
	},
	{
		Nome: "10. Snap Out Of It",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/10.%20Snap%20Out%20Of%20It.mp3"
	},
	{
		Nome: "11. Knee Socks",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/11.%20Knee%20Socks.mp3"
	},
	{
		Nome: "12. I Wanna Be Yours",
		Link:
			"https://ia801300.us.archive.org/18/items/01.-do-i-wanna-know_202312/12.%20I%20Wanna%20Be%20Yours.mp3"
	}
];

function addPlayList() {
	const ul = document.getElementById("playList");
	ul.innerHTML = "";

	for (let i = 0; i < musicas.length; i++) {
		const li = document.createElement("li");
		li.textContent = musicas[i].Nome;
		li.id = "id" + i;

		const button = document.createElement("button");
		button.textContent = "▶";
		button.setAttribute("onclick", `player(${i})`);
		li.appendChild(button);

		ul.appendChild(li);
	}
}

addPlayList();

const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

let audioContext;
let analyser;
let dataArray;
let bufferLength;
let audio; // Variável global para armazenar o objeto de áudio
let isPlaying = false; // Variável para verificar se o áudio está tocando

let currentTrackIndex = 0;
let itemInplay;
let SalveDuration=0;
function player(som) {
	if (isPlaying) {
		pause(som)
	}
	let newSon=true;
	if(currentTrackIndex == som){
		newSon=false;
	}
	currentTrackIndex = som;
	if (!audio || !isPlaying) {
		audio = new Audio(musicas[som].Link);
		audio.crossOrigin = "anonymous";
		audioContext = false;
	}

	if (!audioContext) {
		audioContext = new (window.AudioContext || window.webkitAudioContext)();
		analyser = audioContext.createAnalyser();
		const source = audioContext.createMediaElementSource(audio);
		source.connect(analyser);
		analyser.connect(audioContext.destination);

		analyser.fftSize = 2048;
		bufferLength = analyser.frequencyBinCount;
		dataArray = new Uint8Array(bufferLength);
	}

	audio.onended = playNext; // Adiciona evento para tocar a próxima música ao fim da atual

	 
		audio.play().catch((error) => console.error("Playback failed:", error));
		if(!newSon){
			audio.currentTime=SalveDuration;
		}else{
			audio.currentTime=0;
		}
	
		
		isPlaying = true;
		const item = document.getElementById("id" + som);
		item.classList.add("Inplay");
		itemInplay = item;

		// Atualizar o range de tempo
		updateRange(audio)
	

	audioContext.resume().then(() => {
		if (isPlaying) {
			drawWave();
		}
	});
const btn = document.getElementById("BtnPlay_Pause");
btn.textContent = "| |";
btn.onclick = () => pause(som);

}

function pause(som){
	if (isPlaying) {
		audio.pause();
		isPlaying = false;
		itemInplay.classList.remove("Inplay");
		const btn = document.getElementById("BtnPlay_Pause");
btn.textContent = "▶";
btn.onclick = () => player(som);
	}
	const range = document.getElementById(`rangeMusica`);
	SalveDuration=range.value;
}


function updateRange(audio) {
	const range = document.getElementById(`rangeMusica`);
		range.min = 0;
		range.value = 0;
		range.step = 1;
		range.oninput = () => {
			if (audio) {
				audio.currentTime = range.value;
				SalveDuration=audio.currentTime
			}
		};
		audio.ontimeupdate = () => {
			range.value = audio.currentTime;
			range.max = audio.duration - 3;
			const Vrange = document.getElementById(`valorRange`);
			let duration= audio ? parseInt(audio.duration/60)+":"+parseInt((audio.duration/60-parseInt(audio.duration/60))*60):"00:00";
			Vrange.textContent = parseInt(range.value/60)+":"+parseInt((range.value/60-parseInt(range.value/60))*60)+" / "+duration;
		};
}

function playNext() {
	pause(currentTrackIndex)
	currentTrackIndex = (currentTrackIndex + 1) % musicas.length;	
	SalveDuration=0;
	player(currentTrackIndex);

}
function playPrev() {
	pause(currentTrackIndex)
	currentTrackIndex =
		currentTrackIndex > 0 ? currentTrackIndex - 1 : musicas.length - 1;
SalveDuration=0;
	player(currentTrackIndex);

}

function drawWave() {
	requestAnimationFrame(drawWave);

	analyser.getByteTimeDomainData(dataArray);

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.lineWidth = 5;
	ctx.strokeStyle = "white";

	ctx.beginPath();

	const sliceWidth = canvas.width / bufferLength;
	let x = 0;

	for (let i = 0; i < bufferLength; i++) {
		const v = dataArray[i] / 128.0;
		const y = (v * canvas.height) / 2;

		if (i === 0) {
			ctx.moveTo(x, y);
		} else {
			ctx.lineTo(x, y);
		}

		x += sliceWidth;
	}

	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();
}