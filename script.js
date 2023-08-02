const filmes = [
	'007 Casino Royale',
	'007 Contra GoldenEye',
	'12 Anos de Escravidão',
	'12 Homens e Uma Sentença',
	'12 Macacos',
	'13º Andar',
	'300',
	'500 Dias Com Ela',
	'2001: Uma Odisseia No Espaço',
	'A Bela e a Fera',
	'I.A.: Inteligência Artificial',
	'A Morte lhe Cai Bem',
	'A Múmia',
	'A Origem',
	'A Pele que Habito',
	'A Pequena Sereia',
	'A Vida é Bela',
	'Aladdin',
	'Alien',
	'Amnésia',
	'Amores Brutos',
	'Antes do Amanhecer',
	'Animais Noturnos',
	'Apollo 13 – Do Desastre ao Triunfo',
	'As Aventuras de Pi',
	'As Vantagens de Ser Invisível',
	'Até o Último Homem',
	'Uma Babá Quase Perfeita',
	'Babel',
	'Bastardos Inglórios',
	'Batman: O Cavaleiro das Trevas',
	'Batman: O Retorno',
	'Beleza Americana',
	'Blade Runner 2049',
	'Bohemiam Rhapsody',
	'Brilho Eterno de uma Mente sem Lembranças',
	'A Bruxa de Blair',
	'Indiana Jones e Os Caçadores da Arca Perdida',
	'Os Caça-Fantasmas',
	'A Chegada',
	'Chicago',
	'Cidade de Deus',
	'Cidade dos Anjos',
	'Cisne Negro',
	'Closer: Perto Demais',
	'Clube da Luta',
	'Com Amor, Simon',
	'Como Perder um Homem em 10 Dias',
	'Como Treinar o Seu Dragão',
	'Contato',
	'Coringa',
	'De Olhos Bem Fechados',
	'O Demolidor',
	'Detona Ralph',
	'De Volta Para o Futuro',
	'O Diabo Veste Prada',
	'Dirty Dancing: Ritmo Quente',
	'Divertida Mente',
	'Django Livre',
	'Dor e Glória',
	'Doutor Estranho',
	'E. T.: O Exraterrestre',
	'Efeito Borboleta',
	'Ela',
	'Entre Facas e Segredos',
	'Erin Brockovich — Uma Mulher de Talento&nbsp',
	'Esqueceram de Mim',
	'Ex Machina: Instinto Artificial',
	'O Exorcista',
	'O Exterminador do Futuro',
	'Extraordinário',
	'Os Fantasmas Se Divertem',
	'Feitiço do Tempo',
	'Fonte da Vida',
	'Ford vs Ferrari',
	'Forrest Gump: O Contador de Histórias',
	'Garota Exemplar',
	'Gattaca – A Experiência Genética',
	'Ghost: Do Outro Lado da Vida',
	'Gladiador',
	'Gravidade',
	'Green Book — O Guia',
	'Guardiões da Galáxia',
	'Guerreiro',
	'Harry Potter e o Prisioneiro de Azkaban',
	'Hércules',
	'História de um Casamento',
	'Histórias Cruzadas',
	'Homem-Aranha: No Aranhaverso',
	'Ilha do Medo',
	'Império do Sol',
	'Interestelar',
	'Intocáveis',
	'Jerry Maguire: A Grande Virada',
	'Jojo Rabbit',
	'O Jogo da Imitação',
	'Jurassic Park: O Parque dos Dinossauros',
	'Kill Bill: Volume 1',
	'La La Land: Cantando Estações',
	'Labirinto',
	'Melhores Filmes de Todos os Tempos – Parte 2',
	'O Poderoso Chefão',
	'O Senhor dos Anéis: O Retorno do Rei',
	'O Cavaleiro das Trevas',
	'Matrix',
	'O Fantasma do Futuro',
	'Meu amigo Totoro',
	'Viagem ao Mundo dos Sonhos',
	'A Praia',
	'A Hora do Espanto',
	'30 Dias de Noite',
	'A Mão que Balança o Berço',
	'Os Pássaros',
	'Apertem os Cintos o Piloto Sumiu',
	'Corra que a Polícia Vem Aí',
	'Loucademia de Polícia',
	'Interestelar',
	'Pulp Fiction: Tempo de Violência',
	'Star Wars: Episódio V - O Império Contra-Ataca',
	'A Lista de Schindler',
	'Forrest Gump: O Contador de Histórias',
	'Cidade de Deus',
	'Um Sonho de Liberdade',
	'A Origem',
	'A Viagem de Chihiro',
	'Os Bons Companheiros',
	'Era uma Vez no Oeste',
	'A Vida é Bela',
	'O Silêncio dos Inocentes',
	'Os Suspeitos',
	'Seven: Os Sete Crimes Capitais',
	'De Volta para o Futuro',
	'Coração Valente',
	'O Show de Truman',
	'Os Infiltrados',
	'O Sexto Sentido',
	'O Rei Leão',
	'O Grande Lebowski',
	'Scarface',
	'Os Oito Odiados',
	'Os Intocáveis',
	'Um Estranho no Ninho',
	'2001: Uma Odisseia no Espaço',
	'Tubarão',
	'Os Goonies',
	'Alien, o Oitavo Passageiro',
	'Aliens, o Resgate',
	'Os Imperdoáveis',
	'Os Caçadores da Arca Perdida',
	'Toy Story',
	'A Origem',
	'O Grande Gatsby',
	'A Origem',
	'O Resgate do Soldado Ryan',
];

const hanger = document.querySelector('.hanger');
const ul = document.getElementById('ul');
const result = document.querySelector('.result');
const tries = document.querySelector('.try');
const erradas = document.querySelector('.letrasErradas');
const replayBtn = document.getElementById('replay');

function isAlpha(char) {
	return /^[a-zA-Z]+$/.test(char);
}

function isNumeric(char) {
	return /^[0-9]+$/.test(char);
}

function montagem(chosenMovie, ex) {
	let filmeEscondido = [];
	ul.replaceChildren();

	for (let i = 0; i < chosenMovie.length; i++) {
		const letra = chosenMovie[i];

		if (letra === ' ') {
			filmeEscondido.push(letra);
		} else if (!isAlpha(letra) && !isNumeric(letra)) {
			filmeEscondido.push(letra);
		} else if (ex.includes(letra)) {
			filmeEscondido.push(letra);
		} else {
			filmeEscondido.push('__');
		}
	}

	if (!filmeEscondido.includes('__')) {
		desabilitarInput();
		replayBtn.disabled = false;
		result.innerHTML += '<p>Parabéns! Você venceu.</p>';
	}

	filmeEscondido.forEach((letter) => {
		const li = document.createElement('li');
		li.textContent = letter;
		ul.appendChild(li);
	});
}

function desabilitarInput() {
	tries.disabled = true;
}
function habilitarInput() {
	tries.disabled = false;
}

let life = 6;
const erros = [];
const ex = [];
const indice = Math.floor(Math.random() * filmes.length);
let chosenMovie = filmes[indice].toLowerCase();
let fmont = montagem(chosenMovie, ex);

function replay() {
	life = 6;
	let index = Math.floor(Math.random() * filmes.length);
	chosenMovie = filmes[index].toLowerCase();
	erros.splice(0, erros.length);
	ex.splice(0, ex.length);
	habilitarInput();
	montagem(chosenMovie, ex);
	tries.value = '';

	replayBtn.disabled = true;
	result.innerHTML = '';
	erradas.innerHTML = '';
	hanger.innerHTML =
		'<img class="hangman" src="./assets/hangman_start.svg" alt="hangman">';
	tries.addEventListener('input', play);
}

function play() {
	let tentativa = tries.value.toLowerCase();
	for (let i = 0; i < chosenMovie.length; i++) {
		if (tentativa === chosenMovie[i]) {
			!ex.includes(tentativa) ? ex.push(chosenMovie[i]) : console.log();
		} else {
			if (!chosenMovie.includes(tentativa) && !erros.includes(tentativa)) {
				erros.push(tentativa);
				erradas.innerHTML = `<p>Erros: ${erros.join(', ')}`;
				life--;
				if (life === 0) {
					hanger.innerHTML =
						'<img class="hangmanDead" src="./assets/hangman_dead.svg" alt="hangman"><div class="dead">*</div>';
					result.innerHTML = `<p>O filme escolhido era: "${chosenMovie}"</p><p>Boa sorte na próxima vida...	</p>`;
					desabilitarInput();
					replayBtn.disabled = false;
					return;
				}
			}
		}
	}
	tries.value = '';
	fmont = montagem(chosenMovie, ex);
}

tries.addEventListener('input', play);
