const elementos = {
  1:{Nome:"Hidrogênio",Simbolo:"H",Massa:"1,008",Tipo:"Não metais",Grupo:1,Periodo:1,ImagemURL:"https://images-of-elements.com/hydrogen.jpg"},
  2:{Nome:"Hélio",Simbolo:"He",Massa:"4,0026",Tipo:"Gases nobres",Grupo:18,Periodo:1,ImagemURL:"https://images-of-elements.com/helium.jpg"},
  3:{Nome:"Lítio",Simbolo:"Li",Massa:"6,941",Tipo:"Metais alcalinos",Grupo:1,Periodo:2,ImagemURL:"https://images-of-elements.com/lithium.jpg"},
  4:{Nome:"Berílio",Simbolo:"Be",Massa:"9,0122",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:2,ImagemURL:"https://images-of-elements.com/beryllium.jpg"},
  5:{Nome:"Boro",Simbolo:"B",Massa:"10,81",Tipo:"Semimetais",Grupo:13,Periodo:2,ImagemURL:"https://images-of-elements.com/boron.jpg"},
  6:{Nome:"Carbono",Simbolo:"C",Massa:"12,011",Tipo:"Não metais",Grupo:14,Periodo:2,ImagemURL:"https://images-of-elements.com/carbon.jpg"},
  7:{Nome:"Nitrogênio",Simbolo:"N",Massa:"14,007",Tipo:"Não metais",Grupo:15,Periodo:2,ImagemURL:"https://images-of-elements.com/nitrogen.jpg"},
  8:{Nome:"Oxigênio",Simbolo:"O",Massa:"15,999",Tipo:"Não metais",Grupo:16,Periodo:2,ImagemURL:"https://images-of-elements.com/oxygen.jpg"},
  9:{Nome:"Flúor",Simbolo:"F",Massa:"18,998",Tipo:"Halogênios",Grupo:17,Periodo:2,ImagemURL:"https://images-of-elements.com/fluorine.jpg"},
  10:{Nome:"Neônio",Simbolo:"Ne",Massa:"20,18",Tipo:"Gases nobres",Grupo:18,Periodo:2,ImagemURL:"https://images-of-elements.com/neon.jpg"},
  11:{Nome:"Sódio",Simbolo:"Na",Massa:"22990",Tipo:"Metais alcalinos",Grupo:1,Periodo:3,ImagemURL:"https://images-of-elements.com/sodium.jpg"},
  12:{Nome:"Magnésio",Simbolo:"Mg",Massa:"24,305",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:3,ImagemURL:"https://images-of-elements.com/magnesium.jpg"},
  13:{Nome:"Alumínio",Simbolo:"Al",Massa:"26,982",Tipo:"Outros metais",Grupo:13,Periodo:3,ImagemURL:"https://images-of-elements.com/aluminum.jpg"},
  14:{Nome:"Silício",Simbolo:"Si",Massa:"28,085",Tipo:"Semimetais",Grupo:14,Periodo:3,ImagemURL:"https://images-of-elements.com/silicon.jpg"},
  15:{Nome:"Fósforo",Simbolo:"P",Massa:"30,974",Tipo:"Não metais",Grupo:15,Periodo:3,ImagemURL:"https://images-of-elements.com/phosphor.jpg"},
  16:{Nome:"Enxofre",Simbolo:"S",Massa:"32,06",Tipo:"Não metais",Grupo:16,Periodo:3,ImagemURL:"https://images-of-elements.com/sulfur.jpg"},
  17:{Nome:"Cloro",Simbolo:"Cl",Massa:"35,45",Tipo:"Halogênios",Grupo:17,Periodo:3,ImagemURL:"https://images-of-elements.com/chlorine.jpg"},
  18:{Nome:"Argônio",Simbolo:"Ar",Massa:"39,948",Tipo:"Gases nobres",Grupo:18,Periodo:3,ImagemURL:"https://images-of-elements.com/argon.jpg"},
  19:{Nome:"Potássio",Simbolo:"K",Massa:"39,098",Tipo:"Metais alcalinos",Grupo:1,Periodo:4,ImagemURL:"https://images-of-elements.com/potassium.jpg"},
  20:{Nome:"Cálcio",Simbolo:"Ca",Massa:"40,078",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:4,ImagemURL:"https://images-of-elements.com/calcium.jpg"},
  21:{Nome:"Escândio",Simbolo:"Sc",Massa:"44,956",Tipo:"Metais de transição",Grupo:3,Periodo:4,ImagemURL:"https://images-of-elements.com/scandium.jpg"},
  22:{Nome:"Titânio",Simbolo:"Ti",Massa:"47,867",Tipo:"Metais de transição",Grupo:4,Periodo:4,ImagemURL:"https://images-of-elements.com/titanium.jpg"},
  23:{Nome:"Vanádio",Simbolo:"V",Massa:"50,942",Tipo:"Metais de transição",Grupo:5,Periodo:4,ImagemURL:"https://images-of-elements.com/vanadium.jpg"},
  24:{Nome:"Crômio",Simbolo:"Cr",Massa:"51,996",Tipo:"Metais de transição",Grupo:6,Periodo:4,ImagemURL:"https://images-of-elements.com/chromium.jpg"},
  25:{Nome:"Manganês",Simbolo:"Mn",Massa:"54,938",Tipo:"Metais de transição",Grupo:7,Periodo:4,ImagemURL:"https://images-of-elements.com/manganese.jpg"},
  26:{Nome:"Ferro",Simbolo:"Fe",Massa:"55,845",Tipo:"Metais de transição",Grupo:8,Periodo:4,ImagemURL:"https://images-of-elements.com/iron.jpg"},
  27:{Nome:"Cobalto",Simbolo:"Co",Massa:"58,933",Tipo:"Metais de transição",Grupo:9,Periodo:4,ImagemURL:"https://images-of-elements.com/cobalt.jpg"},
  28:{Nome:"Níquel",Simbolo:"Ni",Massa:"58,693",Tipo:"Metais de transição",Grupo:10,Periodo:4,ImagemURL:"https://images-of-elements.com/nickel.jpg"},
  29:{Nome:"Cobre",Simbolo:"Cu",Massa:"63,546",Tipo:"Metais de transição",Grupo:11,Periodo:4,ImagemURL:"https://images-of-elements.com/copper.jpg"},
  30:{Nome:"Zinco",Simbolo:"Zn",Massa:"65,38",Tipo:"Metais de transição",Grupo:12,Periodo:4,ImagemURL:"https://images-of-elements.com/zinc.jpg"},
  31:{Nome:"Gálio",Simbolo:"Ga",Massa:"69,723",Tipo:"Outros metais",Grupo:13,Periodo:4,ImagemURL:"https://images-of-elements.com/gallium.jpg"},
  32:{Nome:"Germânio",Simbolo:"Ge",Massa:"72,63",Tipo:"Semimetais",Grupo:14,Periodo:4,ImagemURL:"https://images-of-elements.com/germanium.jpg"},
  33:{Nome:"Arsênio",Simbolo:"As",Massa:"74,922",Tipo:"Semimetais",Grupo:15,Periodo:4,ImagemURL:"https://images-of-elements.com/arsenic.jpg"},
  34:{Nome:"Selênio",Simbolo:"Se",Massa:"78,971",Tipo:"Não metais",Grupo:16,Periodo:4,ImagemURL:"https://images-of-elements.com/selenium.jpg"},
  35:{Nome:"Bromo",Simbolo:"Br",Massa:"79,904",Tipo:"Halogênios",Grupo:17,Periodo:4,ImagemURL:"https://images-of-elements.com/bromine.jpg"},
  36:{Nome:"Criptónio",Simbolo:"Kr",Massa:"83,798",Tipo:"Gases nobres",Grupo:18,Periodo:4,ImagemURL:"https://images-of-elements.com/krypton.jpg"},
  37:{Nome:"Rubídio",Simbolo:"Rb",Massa:"85,468",Tipo:"Metais alcalinos",Grupo:1,Periodo:5,ImagemURL:"https://images-of-elements.com/rubidium.jpg"},
  38:{Nome:"Estrôncio",Simbolo:"Sr",Massa:"87,62",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:5,ImagemURL:"https://images-of-elements.com/strontium.jpg"},
  39:{Nome:"Ítrio",Simbolo:"Y",Massa:"88,906",Tipo:"Metais de transição",Grupo:3,Periodo:5,ImagemURL:"https://images-of-elements.com/yttrium.jpg"},
  40:{Nome:"Zircônio",Simbolo:"Zr",Massa:"91,224",Tipo:"Metais de transição",Grupo:4,Periodo:5,ImagemURL:"https://images-of-elements.com/zirconium.jpg"},
  41:{Nome:"Nióbio",Simbolo:"Nb",Massa:"92,906",Tipo:"Metais de transição",Grupo:5,Periodo:5,ImagemURL:"https://images-of-elements.com/niobium.jpg"},
  42:{Nome:"Molibdênio",Simbolo:"Mo",Massa:"95,95",Tipo:"Metais de transição",Grupo:6,Periodo:5,ImagemURL:"https://images-of-elements.com/molybdenum.jpg"},
  43:{Nome:"Tecnécio",Simbolo:"Tc",Massa:"[98]",Tipo:"Metais de transição",Grupo:7,Periodo:5,ImagemURL:"https://images-of-elements.com/technetium.jpg"},
  44:{Nome:"Rutênio",Simbolo:"Ru",Massa:"101,07",Tipo:"Metais de transição",Grupo:8,Periodo:5,ImagemURL:"https://images-of-elements.com/ruthenium.jpg"},
  45:{Nome:"Ródio",Simbolo:"Rh",Massa:"102,905",Tipo:"Metais de transição",Grupo:9,Periodo:5,ImagemURL:"https://images-of-elements.com/rhodium.jpg"},
  46:{Nome:"Paládio",Simbolo:"Pd",Massa:"106,42",Tipo:"Metais de transição",Grupo:10,Periodo:5,ImagemURL:"https://images-of-elements.com/palladium.jpg"},
  47:{Nome:"Prata",Simbolo:"Ag",Massa:"107,87",Tipo:"Metais de transição",Grupo:11,Periodo:5,ImagemURL:"https://images-of-elements.com/silver.jpg"},
  48:{Nome:"Cádmio",Simbolo:"Cd",Massa:"112,41",Tipo:"Metais de transição",Grupo:12,Periodo:5,ImagemURL:"https://images-of-elements.com/cadmium.jpg"},
  49:{Nome:"Índio",Simbolo:"In",Massa:"114,82",Tipo:"Outros metais",Grupo:13,Periodo:5,ImagemURL:"https://images-of-elements.com/indian.jpg"},
  50:{Nome:"Estanho",Simbolo:"Sn",Massa:"118,71",Tipo:"Outros metais",Grupo:14,Periodo:5,ImagemURL:"https://images-of-elements.com/tin.jpg"},
  51:{Nome:"Antimônio",Simbolo:"Sb",Massa:"121,79",Tipo:"Semimetais",Grupo:15,Periodo:5,ImagemURL:"https://images-of-elements.com/antimony.jpg"},
  52:{Nome:"Telúrio",Simbolo:"Te",Massa:"127,6",Tipo:"Semimetais",Grupo:16,Periodo:5,ImagemURL:"https://images-of-elements.com/tellurium.jpg"},
  53:{Nome:"Iodo",Simbolo:"I",Massa:"126,9",Tipo:"Halogênios",Grupo:17,Periodo:5,ImagemURL:"https://images-of-elements.com/iodine.jpg"},
  54:{Nome:"Xenônio",Simbolo:"Xe",Massa:"131,29",Tipo:"Gases nobres",Grupo:18,Periodo:5,ImagemURL:"https://images-of-elements.com/xenon.jpg"},
  55:{Nome:"Césio",Simbolo:"Cs",Massa:"132,905",Tipo:"Metais alcalinos",Grupo:1,Periodo:6,ImagemURL:"https://images-of-elements.com/cesium.jpg"},
  56:{Nome:"Bário",Simbolo:"Ba",Massa:"137,33",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:6,ImagemURL:"https://images-of-elements.com/barium.jpg"},
  57:{Nome:"Lantânio",Simbolo:"La",Massa:"138,91",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/lanthanum.jpg"},
  58:{Nome:"Cério",Simbolo:"Ce",Massa:"140,12",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/cerium.jpg"},
  59:{Nome:"Praseodímio",Simbolo:"Pr",Massa:"140,91",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/praseodymium.jpg"},
  60:{Nome:"Neodímio",Simbolo:"Nd",Massa:"144,24",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/neodymium.jpg"},
  61:{Nome:"Promécio",Simbolo:"Pm",Massa:"[145]",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/promethium.jpg"},
  62:{Nome:"Samário",Simbolo:"Sm",Massa:"150,36",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/samarium.jpg"},
  63:{Nome:"Európio",Simbolo:"Eu",Massa:"151,96",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/europium.jpg"},
  64:{Nome:"Gadolínio",Simbolo:"Gd",Massa:"157,25",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/gadolinium.jpg"},
  65:{Nome:"Térbio",Simbolo:"Tb",Massa:"158,93",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/terbium.jpg"},
  66:{Nome:"Disprósio",Simbolo:"Dy",Massa:"162,5",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/dysprosium.jpg"},
  67:{Nome:"Hólmio",Simbolo:"Ho",Massa:"164,93",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/holmium.jpg"},
  68:{Nome:"Érbio",Simbolo:"Er",Massa:"167,26",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/erbium.jpg"},
  69:{Nome:"Túlio",Simbolo:"Tm",Massa:"168,93",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/thulium.jpg"},
  70:{Nome:"Itérbio",Simbolo:"Yb",Massa:"173,05",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/ytterbium.jpg"},
  71:{Nome:"Lutécio",Simbolo:"Lu",Massa:"174,97",Tipo:"Lantanídeos",Grupo:3,Periodo:6,ImagemURL:"https://images-of-elements.com/lutetium.jpg"},
  72:{Nome:"Háfnio",Simbolo:"Hf",Massa:"178,49",Tipo:"Metais de transição",Grupo:4,Periodo:6,ImagemURL:"https://images-of-elements.com/hafnium.jpg"},
  73:{Nome:"Tântalo",Simbolo:"Ta",Massa:"180,948",Tipo:"Metais de transição",Grupo:5,Periodo:6,ImagemURL:"https://images-of-elements.com/tantalum.jpg"},
  74:{Nome:"Tungstênio",Simbolo:"W",Massa:"183,84",Tipo:"Metais de transição",Grupo:6,Periodo:6,ImagemURL:"https://images-of-elements.com/tungsten.jpg"},
  75:{Nome:"Rênio",Simbolo:"Re",Massa:"186,207",Tipo:"Metais de transição",Grupo:7,Periodo:6,ImagemURL:"https://images-of-elements.com/rhenium.jpg"},
  76:{Nome:"Ósmio",Simbolo:"Os",Massa:"190,23",Tipo:"Metais de transição",Grupo:8,Periodo:6,ImagemURL:"https://images-of-elements.com/osmium.jpg"},
  77:{Nome:"Irídio",Simbolo:"Ir",Massa:"192,217",Tipo:"Metais de transição",Grupo:9,Periodo:6,ImagemURL:"https://images-of-elements.com/iridium.jpg"},
  78:{Nome:"Platina",Simbolo:"Pt",Massa:"195,084",Tipo:"Metais de transição",Grupo:10,Periodo:6,ImagemURL:"https://images-of-elements.com/platinum.jpg"},
  79:{Nome:"Ouro",Simbolo:"Au",Massa:"196,97",Tipo:"Metais de transição",Grupo:11,Periodo:6,ImagemURL:"https://images-of-elements.com/gold.jpg"},
  80:{Nome:"Mercúrio",Simbolo:"Hg",Massa:"200,59",Tipo:"Metais de transição",Grupo:12,Periodo:6,ImagemURL:"https://images-of-elements.com/mercury.jpg"},
  81:{Nome:"Tálio",Simbolo:"Tl",Massa:"204,38",Tipo:"Outros metais",Grupo:13,Periodo:6,ImagemURL:"https://images-of-elements.com/thallium.jpg"},
  82:{Nome:"Chumbo",Simbolo:"Pb",Massa:"207,2",Tipo:"Outros metais",Grupo:14,Periodo:6,ImagemURL:"https://images-of-elements.com/lead.jpg"},
  83:{Nome:"Bismuto",Simbolo:"Bi",Massa:"208,98",Tipo:"Semimetais",Grupo:15,Periodo:6,ImagemURL:"https://images-of-elements.com/bismuth.jpg"},
  84:{Nome:"Polônio",Simbolo:"Po",Massa:"[209]",Tipo:"Semimetais",Grupo:16,Periodo:6,ImagemURL:"https://images-of-elements.com/polonium.jpg"},
  85:{Nome:"Ástato",Simbolo:"At",Massa:"[210]",Tipo:"Halogênios",Grupo:17,Periodo:6,ImagemURL:"https://images-of-elements.com/astatine.jpg"},
  86:{Nome:"Radônio",Simbolo:"Rn",Massa:"[222]",Tipo:"Gases nobres",Grupo:18,Periodo:6,ImagemURL:"https://images-of-elements.com/radon.jpg"},
  87:{Nome:"Frâncio",Simbolo:"Fr",Massa:"[223]",Tipo:"Metais alcalinos",Grupo:1,Periodo:7,ImagemURL:"https://images-of-elements.com/francium.jpg"},
  88:{Nome:"Rádio",Simbolo:"Ra",Massa:"[226]",Tipo:"Metais alcalinoterrosos",Grupo:2,Periodo:7,ImagemURL:"https://images-of-elements.com/radio.jpg"},
  89:{Nome:"Actínio",Simbolo:"Ac",Massa:"[227]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/actinium.jpg"},
  90:{Nome:"Tório",Simbolo:"Th",Massa:"232,04",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/thorium.jpg"},
  91:{Nome:"Protactínio",Simbolo:"Pa",Massa:"231,04",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/protactinium.jpg"},
  92:{Nome:"Urânio",Simbolo:"U",Massa:"238,03",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/uranium.jpg"},
  93:{Nome:"Netúnio",Simbolo:"Np",Massa:"[237]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/neptunium.jpg"},
  94:{Nome:"Plutônio",Simbolo:"Pu",Massa:"[244]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/plutonium.jpg"},
  95:{Nome:"Amerício",Simbolo:"Am",Massa:"[243]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/americium.jpg"},
  96:{Nome:"Cúrio",Simbolo:"Cm",Massa:"[247]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/curium.jpg"},
  97:{Nome:"Berquélio",Simbolo:"Bk",Massa:"[247]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/berkelium.jpg"},
  98:{Nome:"Califórnio",Simbolo:"Cf",Massa:"[251]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/california.jpg"},
  99:{Nome:"Einstênio",Simbolo:"Es",Massa:"[252]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/einsteinium.jpg"},
  100:{Nome:"Férmio",Simbolo:"Fm",Massa:"[257]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/fermium.jpg"},
  101:{Nome:"Mendelévio",Simbolo:"Md",Massa:"[258]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/mendelevium.jpg"},
  102:{Nome:"Nobélio",Simbolo:"No",Massa:"[259]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/nobelium.jpg"},
  103:{Nome:"Laurêncio",Simbolo:"Lr",Massa:"[262]",Tipo:"Actinídeos",Grupo:3,Periodo:7,ImagemURL:"https://images-of-elements.com/laurentius.jpg"},
  104:{Nome:"Rutherfórdio",Simbolo:"Rf",Massa:"[267]",Tipo:"Metais de transição",Grupo:4,Periodo:7,ImagemURL:"https://images-of-elements.com/rutherfordium.jpg"},
  105:{Nome:"Dúbnio",Simbolo:"Db",Massa:"[268]",Tipo:"Metais de transição",Grupo:5,Periodo:7,ImagemURL:"https://images-of-elements.com/dubnium.jpg"},
  106:{Nome:"Seabórgio",Simbolo:"Sg",Massa:"[269]",Tipo:"Metais de transição",Grupo:6,Periodo:7,ImagemURL:"https://images-of-elements.com/seaborgium.jpg"},
  107:{Nome:"Bóhrio",Simbolo:"Bh",Massa:"[270]",Tipo:"Metais de transição",Grupo:7,Periodo:7,ImagemURL:"https://images-of-elements.com/bohrio.jpg"},
  108:{Nome:"Hássio",Simbolo:"Hs",Massa:"[277]",Tipo:"Metais de transição",Grupo:8,Periodo:7,ImagemURL:"https://images-of-elements.com/hassium.jpg"},
  109:{Nome:"Meitnério",Simbolo:"Mt",Massa:"[278]",Tipo:"Metais de transição",Grupo:9,Periodo:7,ImagemURL:"https://images-of-elements.com/meitnerium.jpg"},
  110:{Nome:"Darmstádtio",Simbolo:"Ds",Massa:"[281]",Tipo:"Metais de transição",Grupo:10,Periodo:7,ImagemURL:"https://images-of-elements.com/darmstadtium.jpg"},
  111:{Nome:"Roentgênio",Simbolo:"Rg",Massa:"[281]",Tipo:"Metais de transição",Grupo:11,Periodo:7,ImagemURL:"https://images-of-elements.com/roentgenium.jpg"},
  112:{Nome:"Copemício",Simbolo:"Cn",Massa:"[285]",Tipo:"Metais de transição",Grupo:12,Periodo:7,ImagemURL:"https://images-of-elements.com/copemitium.jpg"},
  113:{Nome:"Nihônio",Simbolo:"Nh",Massa:"[286]",Tipo:"Outros metais",Grupo:13,Periodo:7,ImagemURL:"https://images-of-elements.com/nihonium.jpg"},
  114:{Nome:"Fleróvio",Simbolo:"Fl",Massa:"[289]",Tipo:"Outros metais",Grupo:14,Periodo:7,ImagemURL:"https://images-of-elements.com/flerovium.jpg"},
  115:{Nome:"Moscóvio",Simbolo:"Mc",Massa:"[289]",Tipo:"Outros metais",Grupo:15,Periodo:7,ImagemURL:"https://images-of-elements.com/moscovius.jpg"},
  116:{Nome:"Livermório",Simbolo:"Lv",Massa:"[293]",Tipo:"Outros metais",Grupo:16,Periodo:7,ImagemURL:"https://images-of-elements.com/livermorium.jpg"},
  117:{Nome:"Tenesso",Simbolo:"Ts",Massa:"[294]",Tipo:"Halogênios",Grupo:17,Periodo:7,ImagemURL:"https://images-of-elements.com/tennesso.jpg"},
  118:{Nome:"Oganessônio",Simbolo:"Og",Massa:"[294]",Tipo:"Gases nobres",Grupo:18,Periodo:7,ImagemURL:"https://images-of-elements.com/oganesson.jpg"},
  };
function criarTabelaPeriodica() {
  // Matriz representando a tabela periódica com os elementos e espaços em branco
  const tabelaPeriodica = [
    "E________________E",
    "EE__________EEEEEE",
    "EE__________EEEEEE",
    "EEEEEEEEEEEEEEEEEE",
    "EEEEEEEEEEEEEEEEEE",
    "EE_EEEEEEEEEEEEEEE",
    "EE_EEEEEEEEEEEEEEE",
    "__________________",
    "___EEEEEEEEEEEEEEE", // Lantanídeos
    "___EEEEEEEEEEEEEEE" // Actinídeos
  ];
  let numeroAtomico = 0;
  let ac = 0;
  // Criar a tabela HTML
  const tabelaHTML = document.createElement("table");

  for (const linhaTexto of tabelaPeriodica) {
    const linhaHTML = document.createElement("tr");

    for (let i = 0; i < linhaTexto.length; i++) {
      const celulaHTML = document.createElement("td");

      if (linhaTexto[i] === "E") {
        numeroAtomico++;
        if (numeroAtomico == 57) {
          numeroAtomico = 72;
          ac = 1;
        }
        if (numeroAtomico == 89) {
          numeroAtomico = 104;
        }
        if (numeroAtomico == 119) {
          numeroAtomico = 57;
          ac = 0;
        }
        if (numeroAtomico == 72 && ac == 0) {
          numeroAtomico = 89;
        }
        celulaHTML.innerHTML =
          "<span id='nA'>" +
          numeroAtomico +
          "</span>" +
          elementos[numeroAtomico].Simbolo +
          "<br><label>" +
          elementos[numeroAtomico].Nome +
          "</label><br><span id='massa'>" +
          elementos[numeroAtomico].Massa +
          "</span>";
        celulaHTML.style =
          "border: 1px solid #ccc;box-shadow: 1px 1px " +
          brilho() +
          " " +
          brilho() +
          " " +
          coresTipo(elementos[numeroAtomico].Tipo) +
          ";";
          celulaHTML.setAttribute("onclick","mostrarImagem("+numeroAtomico+")")
      } else {
        celulaHTML.textContent = " ";
      }

      linhaHTML.appendChild(celulaHTML);
    }

    tabelaHTML.appendChild(linhaHTML);
  }

  return tabelaHTML;
}

function coresTipo(tipo) {
  if (tipo == "Não metais") {
    return "#a1d344;";
  }
  if (tipo == "Gases nobres") {
    return "#3d9ee3;";
  }
  if (tipo == "Metais alcalinos") {
    return "#f1b200;";
  }
  if (tipo == "Metais alcalinoterrosos") {
    return "#eada00;";
  }
  if (tipo == "Semimetais") {
    return "#4db6ac;";
  }
  if (tipo == "Halogênios") {
    return "#70cbeb;";
  }
  if (tipo == "Outros metais") {
    return "#a2c7d3;";
  }
  if (tipo == "Metais de transição") {
    return "#eb8e8e;";
  }
  if (tipo == "Lantanídeos") {
    return "#90e3e9;";
  }
  if (tipo == "Actinídeos") {
    return "#dcadd6;";
  }
}

function brilho() {
  const root = document.documentElement;
  const valorBrilho = getComputedStyle(root).getPropertyValue("--brilho");

  return "5px";
}

// Exemplo de uso: Adicionar a tabela à div com o ID "tabelaPeriodicaContainer"
const tabelaPeriodicaContainer = document.getElementById(
  "tabelaPeriodicaContainer"
);
const tabelaPeriodica = criarTabelaPeriodica();
tabelaPeriodicaContainer.appendChild(tabelaPeriodica);

function mostrarImagem(elementoId) {
  const elemento = elementos[elementoId];
  const imagemElemento = document.getElementById("imagemElemento");
  imagemElemento.innerHTML = `<img src="${elemento.ImagemURL}" alt="${elemento.Nome}" />`;
}