document.addEventListener("DOMContentLoaded", () => {
	loadFuelData();

	document.getElementById("saveData").addEventListener("click", saveFuelData);
	document.getElementById("currentFuel").addEventListener("input", saveFuelData);
});

function getFuelData() {
	return {
		gasPrice: parseFloat(document.getElementById("gasPrice").value) || 0,
		ethanolPrice: parseFloat(document.getElementById("ethanolPrice").value) || 0,
		currentFuel: parseFloat(document.getElementById("currentFuel").value) || 0,
		lastKm: parseFloat(document.getElementById("lastKm").value) || 0,
		consumption: parseFloat(document.getElementById("consumption").value) || 0
	};
}

function saveFuelData() {
	const fuelData = getFuelData();
	localStorage.setItem("fuelData", JSON.stringify(fuelData));
	updateInterface(fuelData);
}

function loadFuelData() {
	const storedData = localStorage.getItem("fuelData");
	if (storedData) {
		const fuelData = JSON.parse(storedData);
		Object.keys(fuelData).forEach((key) => {
			if (document.getElementById(key)) {
				document.getElementById(key).value = fuelData[key];
			}
		});
		updateInterface(fuelData);
	}
}

function updateInterface(fuelData) {
	const { gasPrice, ethanolPrice, currentFuel, consumption } = fuelData;
	const capacity = 50;
	const litersToFull = (capacity - currentFuel).toFixed(1);
	const refuelValueGas = (litersToFull * gasPrice).toFixed(2);
	const refuelValueEth = (litersToFull * ethanolPrice).toFixed(2);
	const autonomy = (currentFuel * consumption).toFixed(1);

	document.getElementById("litersToFull").innerText = litersToFull;
	document.getElementById("refuelValueGas").innerText = refuelValueGas;
	document.getElementById("refuelValueEth").innerText = refuelValueEth;
	document.getElementById("autonomy").innerText = autonomy;
	document.getElementById("fuelLevelText").innerText = `(${(
		(currentFuel / capacity) *
		100
	).toFixed(0)}%)`;

	updateFuelBar(currentFuel, capacity);
}

function updateFuelBar(currentFuel, capacity) {
	const segments = document.querySelectorAll(".fuel-bar .segment");
	const filledSegments = Math.round((currentFuel / capacity) * segments.length);

	segments.forEach((seg, index) => {
		seg.classList.toggle("full", index < filledSegments);
		seg.onclick = () => setFuelLevel(index, segments.length);
	});
}

function setFuelLevel(index, totalSegments) {
	const currentFuel = ((index + 0.5) * 4.2 + 2 - 0.3).toFixed(1);
	document.getElementById("currentFuel").value = currentFuel;
	saveFuelData();
}

const combustivel = document.getElementById("tipo");
const litros_reais = document.getElementById("forma");
let registros = [];
function abastecer() {
	const tipo = combustivel.value;
	const forma = litros_reais.value;
	const valor = parseFloat(document.getElementById("abts").value);
	const data = document.getElementById("data").value;
	const km = document.getElementById("lastKm").value;
	const Vcombustivel = parseFloat(document.getElementById(tipo === "Gasolina" ? "gasPrice" : "ethanolPrice").value);

	const [valorLitros, valorReais] = forma === "Valor"
		? [(valor / Vcombustivel).toFixed(2), valor.toFixed(2)]
		: [valor.toFixed(2), (valor * Vcombustivel).toFixed(2)];

	const registroABTS = { km, litros: valorLitros, valor: valorReais, tipo, data };
	registros.push(registroABTS)
	localStorage.setItem("registros", JSON.stringify(registros));
	loadRegistros()
}

function loadRegistros() {
    const storedData = localStorage.getItem("registros");
    const area = document.getElementById("areaRegistros");
    
    if (storedData) {
        const registroSalvo = JSON.parse(storedData);
        area.innerHTML = "";
        // Use a document fragment for better performance when appending multiple elements
        const fragment = document.createDocumentFragment();
        registroSalvo.forEach(registro => {
            const div = document.createElement("div");
            div.className = "results";
            div.innerHTML = `
                <p>Km: <br><span>${registro.km}</span></p>
                <p>Litros: <span>${registro.litros}</span><br>Valor:<br> R$<span>${registro.valor}</span></p>
                <p>Tipo: <span>${registro.tipo}</span><br>Data:<br><span>${registro.data}</span></p>
            `;
            fragment.appendChild(div);
        });
        area.appendChild(fragment);
    }
}

function calcularViagem() {
  const distanciaIda = parseFloat(document.getElementById("distanciaIda").value) || 0;
  const distanciaVolta = parseFloat(document.getElementById("distanciaVolta").value) || 0;
  const consumo = parseFloat(document.getElementById("consumption").value) || 0;
  const gasPrice = parseFloat(document.getElementById("gasPrice").value) || 0;
  const ethanolPrice = parseFloat(document.getElementById("ethanolPrice").value) || 0;

  const distanciaTotal = distanciaIda + distanciaVolta;
  const combustivelNecessario = (distanciaTotal / consumo).toFixed(2);

  const custoGasolina = (combustivelNecessario * gasPrice).toFixed(2);
  const custoEtanol = (combustivelNecessario * ethanolPrice).toFixed(2);

  document.getElementById("combustivelNecessario").innerText = combustivelNecessario;
  document.getElementById("custoGasolina").innerText = custoGasolina;
  document.getElementById("custoEtanol").innerText = custoEtanol;
}

function exibirSection(classe) {
    const elementos = document.querySelectorAll(`.${classe}`);
    
    elementos.forEach(elemento => {
        elemento.style.display = elemento.style.display === "none" ? "block" : "none";
    });
}