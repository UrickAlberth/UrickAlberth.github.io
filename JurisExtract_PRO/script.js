function extractProcesses() {
	const text = document.getElementById("inputText").value;
	const regex = /\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}/g;
	let matches = text.match(regex) || [];

	// Remove duplicatas
	matches = [...new Set(matches)];

	// Ordena pelo sétimo dígito
	matches.sort((a, b) => {
		let digitA = a[6];
		let digitB = b[6];
		return digitA - digitB;
	});

	const outputSection = document.getElementById("output");
	const emptyState = document.getElementById("emptyState");
	const processList = document.getElementById("processList");
	const resultsCount = document.getElementById("resultsCount");

	if (matches.length > 0) {
		processList.innerHTML = "";

		matches.forEach((proc) => {
			const listItem = document.createElement("li");
			listItem.className = "process-item";
			listItem.innerHTML = `
                        <span class="process-number">${proc}</span>
                        <div class="process-actions">
                            <button class="action-btn" onclick="copyToClipboard('${proc}')" title="Copiar">
                                <i class="fas fa-copy"></i>
                            </button>
                            <button class="action-btn" onclick="searchProcess('${proc}')" title="Pesquisar">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    `;
			processList.appendChild(listItem);
		});

		resultsCount.textContent = `${matches.length} ${
			matches.length === 1 ? "item" : "itens"
		}`;
		outputSection.style.display = "block";
		emptyState.style.display = "none";
	} else {
		outputSection.style.display = "none";
		emptyState.style.display = "block";
	}
}

function clearAll() {
	document.getElementById("inputText").value = "";
	document.getElementById("output").style.display = "none";
	document.getElementById("emptyState").style.display = "block";
}

async function pasteFromClipboard() {
	try {
		const text = await navigator.clipboard.readText();
		document.getElementById("inputText").value = text;
	} catch (err) {
		alert(
			"Não foi possível acessar o clipboard. Por favor, cole manualmente (Ctrl+V)."
		);
		console.error("Erro ao acessar clipboard:", err);
	}
}

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			showTooltip("Copiado!");
		})
		.catch((err) => {
			console.error("Erro ao copiar:", err);
		});
}

function copyAllProcesses() {
	const processNumbers = Array.from(document.querySelectorAll(".process-number"))
		.map((el) => el.textContent)
		.join("\n");

	if (processNumbers) {
		navigator.clipboard.writeText(processNumbers).then(() => {
			showTooltip("Todos os processos copiados!");
		});
	}
}

function searchProcess(processNumber) {
	// Implementação da busca personalizada pode ser adicionada aqui
	 let termoBusca = "processo " + processNumber;
    let url = `https://www.google.com/search?q=${encodeURIComponent(termoBusca)}`;
    window.open(url, "_blank");
}

function showTooltip(message) {
	const tooltip = document.createElement("div");
	tooltip.textContent = message;
	tooltip.style.position = "fixed";
	tooltip.style.bottom = "20px";
	tooltip.style.left = "50%";
	tooltip.style.transform = "translateX(-50%)";
	tooltip.style.backgroundColor = "var(--primary-color)";
	tooltip.style.color = "white";
	tooltip.style.padding = "10px 20px";
	tooltip.style.borderRadius = "4px";
	tooltip.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
	tooltip.style.zIndex = "1000";
	tooltip.style.animation = "fadeIn 0.3s, fadeOut 0.3s 2s forwards";

	document.body.appendChild(tooltip);

	setTimeout(() => {
		document.body.removeChild(tooltip);
	}, 2500);
}

// Adiciona animação de fadeOut
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
document.head.appendChild(style);