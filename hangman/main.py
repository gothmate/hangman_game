from random import randint

filmes = [ 
  "007 Casino Royale",
  "007 Contra GoldenEye",
  "12 Anos de Escravidão",
  "12 Homens e Uma Sentença",
  "12 Macacos",
  "13º Andar",
  "300",
  "500 Dias Com Ela",
  "2001: Uma Odisseia No Espaço",
  "A Bela e a Fera",
  "I.A.: Inteligência Artificial",
  "A Morte lhe Cai Bem",
  "A Múmia",
  "A Origem",
  "A Pele que Habito",
  "A Pequena Sereia",
  "A Vida é Bela",
  "Aladdin",
  "Alien",
  "Amnésia",
  "Amores Brutos",
  "Antes do Amanhecer",
  "Animais Noturnos",
  "Apollo 13 – Do Desastre ao Triunfo",
  "As Aventuras de Pi",
  "As Vantagens de Ser Invisível",
  "Até o Último Homem",
  "Uma Babá Quase Perfeita",
  "Babel",
  "Bastardos Inglórios",
  "Batman: O Cavaleiro das Trevas",
  "Batman: O Retorno",
  "Beleza Americana",
  "Blade Runner 2049",
  "Bohemiam Rhapsody",
  "Brilho Eterno de uma Mente sem Lembranças",
  "A Bruxa de Blair",
  "Indiana Jones e Os Caçadores da Arca Perdida",
  "Os Caça-Fantasmas",
  "A Chegada",
  "Chicago",
  "Cidade de Deus",
  "Cidade dos Anjos",
  "Cisne Negro",
  "Closer: Perto Demais",
  "Clube da Luta",
  "Com Amor, Simon",
  "Como Perder um Homem em 10 Dias",
  "Como Treinar o Seu Dragão",
  "Contato",
  "Coringa",
  "De Olhos Bem Fechados",
  "O Demolidor",
  "Detona Ralph",
  "De Volta Para o Futuro",
  "O Diabo Veste Prada",
  "Dirty Dancing: Ritmo Quente",
  "Divertida Mente",
  "Django Livre",
  "Dor e Glória",
  "Doutor Estranho",
  "E. T.: O Exraterrestre",
  "Efeito Borboleta",
  "Ela",
  "Entre Facas e Segredos",
  "Erin Brockovich — Uma Mulher de Talento&nbsp",
  "Esqueceram de Mim",
  "Ex Machina: Instinto Artificial",
  "O Exorcista",
  "O Exterminador do Futuro",
  "Extraordinário",
  "Os Fantasmas Se Divertem",
  "Feitiço do Tempo",
  "Fonte da Vida",
  "Ford vs Ferrari",
  "Forrest Gump: O Contador de Histórias",
  "Garota Exemplar",
  "Gattaca – A Experiência Genética",
  "Ghost: Do Outro Lado da Vida",
  "Gladiador",
  "Gravidade",
  "Green Book — O Guia",
  "Guardiões da Galáxia",
  "Guerreiro",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Hércules",
  "História de um Casamento",
  "Histórias Cruzadas",
  "Homem-Aranha: No Aranhaverso",
  "Ilha do Medo",
  "Império do Sol",
  "Interestelar",
  "Intocáveis",
  "Jerry Maguire: A Grande Virada",
  "Jojo Rabbit",
  "O Jogo da Imitação",
  "Jurassic Park: O Parque dos Dinossauros",
  "Kill Bill: Volume 1",
  "La La Land: Cantando Estações",
  "Labirinto",
  "Melhores Filmes de Todos os Tempos – Parte 2",
  "O Poderoso Chefão",
  "O Senhor dos Anéis: O Retorno do Rei",
  "O Cavaleiro das Trevas",
  "Matrix",
  "O Fantasma do Futuro",
  "Meu amigo Totoro",
  "Viagem ao Mundo dos Sonhos",
  "A Praia",
  "A Hora do Espanto",
  "30 Dias de Noite",
  "A Mão que Balança o Berço",
  "Os Pássaros",
  "Apertem os Cintos o Piloto Sumiu",
  "Corra que a Polícia Vem Aí",
  "Loucademia de Polícia",
  "Interestelar",
  "Pulp Fiction: Tempo de Violência",
  "Star Wars: Episódio V - O Império Contra-Ataca",
  "A Lista de Schindler",
  "Forrest Gump: O Contador de Histórias",
  "Cidade de Deus",
  "Um Sonho de Liberdade",
  "A Origem",
  "A Viagem de Chihiro",
  "Os Bons Companheiros",
  "Era uma Vez no Oeste",
  "A Vida é Bela",
  "O Silêncio dos Inocentes",
  "Os Suspeitos",
  "Seven: Os Sete Crimes Capitais",
  "De Volta para o Futuro",
  "Coração Valente",
  "O Show de Truman",
  "Os Infiltrados",
  "O Sexto Sentido",
  "O Rei Leão",
  "O Grande Lebowski",
  "Scarface",
  "Os Oito Odiados",
  "Os Intocáveis",
  "Um Estranho no Ninho",
  "2001: Uma Odisseia no Espaço",
  "Tubarão",
  "Os Goonies",
  "Alien, o Oitavo Passageiro",
  "Aliens, o Resgate",
  "Os Imperdoáveis",
  "Os Caçadores da Arca Perdida",
  "Toy Story",
  "A Origem",
  "O Grande Gatsby",
  "A Origem",
  "O Resgate do Soldado Ryan"
]

def lines(n, des):
  line = des
  print(line * n)
  
def center(frase, line, des):
  tam_frase = len(frase)
  espacos = round(((line * 2) - tam_frase) / 2)
  space = ' ' * espacos
  lines(line, des)
  print(f'{space}{frase}')
  lines(line, des)
  
def montagem(chosen_movie, ex):
  filme_escondido = []
  
  for letra in chosen_movie.lower():
    if letra == ' ':
      filme_escondido.append(' ')
    elif not letra.isalpha() and not letra.isnumeric():
      filme_escondido.append(letra)
    elif letra in ex:
      filme_escondido.append(letra)
    else:
      filme_escondido.append('__ ')
  return filme_escondido
  
center('Bem vindo ao jogo da forca!', 30, '~~')
center('Seu objetivo é acertar o nome do filme abaixo.', 30, '==')
center('Você terá um total de 6 chances', 30, '-*')

life = 6
index = randint(0, len(filmes))
chosen_movie = filmes[index]
erros = []

print('')
print('')

ex = []
fmont = montagem(chosen_movie, ex)
filme = fmont
[print(l, end='') for l in filme]
print()

while(True):
  if life == 0:
    print()
    print(f'O filme escolhido era "{chosen_movie}"')
    print('Você foi enforcado... mais sorte na próxima vida. :)')
    break
  print(f'\nVocê possui {life} tentativas')
  print()
  print(f'Tentativas erradas: {erros}')
  print()
  
  tentativas = input('Digite uma letra: ').lower()
  indice = 0
  for letra in chosen_movie.lower():
    if indice == len(chosen_movie)-1:
      if tentativas not in erros and tentativas not in ex:
        erros.append(tentativas)
        life -= 1

    if tentativas == letra:
      ex.append(letra)
      mont = montagem(chosen_movie, ex)
      filme = mont
    indice += 1
  [print(l, end=' ') for l in filme]
  if '__ ' not in filme:
    print()
    print("\nParabéns!!! Você venceu.")
    break
  

