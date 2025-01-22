let id=-1;
function addParty() {
	const container = document.getElementById("partyContainerA");
	const div = document.createElement("div");
	id++;
	div.innerHTML = `
                <input type="text" placeholder="Nome da Parte" required>
                <input type="text" placeholder="Advogado(a)">
                <label>
                    Intimação: <input type="checkbox" onchange="toggleIdInput(this,${id})">
										ID: <input id="${id}" type="number" disabled>
                </label>
            `;
	container.appendChild(div);
}

function addPartyR() {
	const container = document.getElementById("partyContainerR");
	const div = document.createElement("div");
	id++;
	div.innerHTML = `
                <input type="text" placeholder="Nome da Parte" required>
                <input type="text" placeholder="Advogado(a)">
                <label>
                    Intimação: <input type="checkbox" onchange="toggleIdInput(this,${id})">
										ID: <input id="${id}" type="number" disabled>
                </label>
            `;
	container.appendChild(div);
}

function addWitness() {
	const container = document.getElementById("witnessContainer");
	const div = document.createElement("div");
	id++;
	div.innerHTML = `
                <input type="text" placeholder="Nome da Testemunha" required>
                <input type="text" placeholder="Observação">
								<label>
                    Intimação: <input type="checkbox" onchange="toggleIdInput(this,${id})">
										ID: <input id="${id}" type="number" disabled>
                </label>
            `;
	container.appendChild(div);
}

document
	.getElementById("audienceForm")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const processNumber = document.getElementById("processNumber").value;
		const dateTime = document.getElementById("dateTime").value;
		const location = document.getElementById("location").value;
		const audienceType = document.getElementById("audienceType").value;

		const partiesA = Array.from(
			document.querySelectorAll("#partyContainerA > div")
		).map((div) => ({
			name: div.children[0].value,
			lawyer: div.children[1].value,
			summons: div.children[2].children[0].checked,
			id: div.children[2].children[1].value
		}));
		const partiesR = Array.from(
			document.querySelectorAll("#partyContainerR > div")
		).map((div) => ({
			name: div.children[0].value,
			lawyer: div.children[1].value,
			summons: div.children[2].children[0].checked,
			id: div.children[2].children[1].value
		}));

		const witnesses = Array.from(
			document.querySelectorAll("#witnessContainer > div")
		).map((div) => ({
			name: div.children[0].value,
			obs: div.children[1].value,
			summons: div.children[2].children[0].checked,
			id: div.children[2].children[1].value
		}));

		// Preencher os dados no HTML da pauta
		document.getElementById("pautaProcessNumber").innerText = processNumber;
		document.getElementById("pautaDateTime").innerText = formatDateTime(dateTime);
		document.getElementById("pautaLocation").innerText = capitalizeWords(location);
		document.getElementById("pautaAudienceType").innerText = capitalizeWords(audienceType);

		let partiesHTML = "";
		partiesA.forEach((party) => {
			partiesHTML += `
  <div class="party">
    <ul>
      <li><strong>Autor(a):</strong> ${capitalizeWords(party.name)}
        <ul>
          <li><strong>Advogado(a):</strong> ${capitalizeWords(party.lawyer)}</li>
          <li><strong>Intimação:</strong> ${party.summons ? "SIM" : "NÃO"} ID(${party.id})</li>
        </ul>
      </li>
    </ul>
  </div>
`;
		});
		partiesR.forEach((party) => {
			partiesHTML += `
  <div class="party">
    <ul>
      <li><strong>Ré(u):</strong> ${capitalizeWords(party.name)}
        <ul>
          <li><strong>Advogado(a):</strong> ${capitalizeWords(party.lawyer)}</li>
          <li><strong>Intimação:</strong> ${party.summons ? "SIM" : "NÃO"} ID(${party.id})</li>
        </ul>
      </li>
    </ul>
  </div>
`;
		});
		document.getElementById("pautaParties").innerHTML = partiesHTML;

		let witnessesHTML = "";
		witnesses.forEach((witness) => {
			witnessesHTML += `
                        <div class="witness">
													<ul>
                            <li><strong>Testemunha:</strong> ${capitalizeWords(witness.name)}</li>
														<ul>
														<li><strong>Intimação:</strong> ${witness.summons ? "SIM" : "NÃO"} ID(${witness.id})</li>
                            <li><strong>Observação:</strong> ${witness.obs}</li>
														</ul>
													</ul>
                        </div>
                    `;
		});
		document.getElementById("pautaWitnesses").innerHTML = witnessesHTML;

		// Exibir a pauta de audiência
		document.getElementById("pauta").style.display = "block";
		document.getElementById("form").style.display = "none";

		// Gerar PDF a partir do conteúdo HTML
		//generatePDF();
	});

function generatePDF() {
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF();

	// Gerar o PDF a partir do HTML
	doc.html(document.getElementById("pauta"), {
		callback: function (doc) {
			doc.save("Pauta_Audiencia.pdf");
		},
		margin: [10, 10, 10, 10],
		x: 10,
		y: 10
	});
}

function toggleIdInput(checkbox,id) {
    const idInput = document.getElementById(id);
    idInput.disabled = !checkbox.checked; // Habilita se estiver marcado, desabilita se não
		idInput.value=idInput.disabled?"":idInput.value;
  }

function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês é 0-indexado
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function formatCNJ(input) {
    // Remove todos os caracteres não numéricos
    let value = input.value.replace(/\D/g, "");

    // Aplica a máscara: 0000000-00.0000.0.00.0000
    value = value
      .replace(/^(\d{7})(\d)/, "$1-$2")         // Hífen após os primeiros 7 dígitos
      .replace(/-(\d{2})(\d)/, "-$1.$2")       // Ponto após os próximos 2 dígitos
      .replace(/(\.\d{4})(\d)/, "$1.$2")       // Ponto após os próximos 4 dígitos
      .replace(/(\.\d{1})(\d{2})(\d{4})$/, "$1.$2.$3"); // Ponto e 4 dígitos finais

    // Atualiza o valor do input com a máscara aplicada
    input.value = value;
  }

function capitalizeWords(text) {
    return text
        .split(" ") // Divide a string em palavras
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza cada palavra
        .join(" "); // Junta as palavras de volta
}

function printPauta() {
    const pautaDiv = document.getElementById("pauta");
    
    // Cria uma nova janela ou iframe
    const printWindow = window.open("", "_blank");
    
    // Insere o conteúdo da div na nova janela
    printWindow.document.write(`
        <html>
        <head>
            <title>Imprimir Pauta</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .section { margin-bottom: 10px; }
                .section-title { font-weight: bold; }
                hr { margin: 20px 0; }
								button { display:none; }
            </style>
        </head>
        <body>
            ${pautaDiv.innerHTML}
        </body>
        </html>
    `);

    // Fecha a escrita do documento
    printWindow.document.close();
    
    // Espera carregar e chama o comando de impressão
    printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
    };
}

function voltar(){
	document.getElementById("pauta").style.display = "none";
		document.getElementById("form").style.display = "block";
}