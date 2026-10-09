// Conteúdo das páginas "Conheça a estrutura" e "Bares e restaurantes".
// As fotos ficam em public/img/fotos e são nomeadas pelo id do nó no Figma.

const foto = (id) => `img/fotos/${id}.jpg`;

export const estrutura = [
  {
    id: 'praia-do-santinho',
    titulo: 'Praia do Santinho',
    paragrafos: [
      'Mar, areia, natureza e aquele clima perfeito de férias. 🌊☀️',
      'A Praia do Santinho fica aos pés do resort e é o cenário ideal para aproveitar o dia, relaxar à beira-mar ou se aventurar nas ondas. Cercada por dunas e Mata Atlântica, combina paisagens incríveis com tudo o que uma viagem a praia pede.',
    ],
    fotos: ['2012-187', '2012-190', '2012-191', '2012-192', '2012-193'].map(foto),
  },
  {
    id: 'dunas',
    titulo: 'Dunas',
    paragrafos: [
      'Paisagens incríveis, natureza por todos os lados e um toque de aventura. 🏜️✨',
      'As dunas são perfeitas para quem quer explorar a região, fazer uma caminhada diferente ou se divertir com sandboard. Um passeio que combina visual bonito, movimento e aquela sensação de estar realmente vivendo o destino.',
    ],
    fotos: ['2025-211', '2025-222'].map(foto),
  },
  {
    id: 'academia',
    titulo: 'Academia',
    paragrafos: [
      'Pra quem não quer abrir mão do treino nem nas férias. 💪',
      'A academia do Costão é moderna, climatizada e conta com equipamentos para musculação e diferentes tipos de exercício. Uma ótima opção para começar o dia em movimento antes de aproveitar o restante da programação.',
    ],
    fotos: ['2025-262', '2025-267', '2025-272'].map(foto),
  },
  {
    id: 'quadras',
    titulo: 'Quadras',
    paragrafos: [
      'Pra quem não dispensa uma partida nem nas férias. 🎾⚽',
      'O Costão tem opções para todos os estilos: beach tennis, vôlei de praia, futebol society, tênis e futmesa. É só reunir a galera, escolher a modalidade e aproveitar o dia em movimento.',
    ],
    fotos: ['2029-291', '2029-297', '2029-303', '2029-309', '2029-315', '2029-321'].map(foto),
  },
  {
    id: 'spa',
    titulo: 'Costão Spa by L’Occitane',
    paragrafos: [
      'Um convite para desacelerar e aproveitar o lado mais relaxante da viagem.',
      'O SPA oferece massagens e tratamentos com produtos L’Occitane au Brésil, em um ambiente acolhedor e elegante. Perfeito para quem quiser reservar um momento só para descansar e recarregar as energias.',
    ],
    fotos: ['2029-372', '2029-381', '2029-390', '2029-399'].map(foto),
  },
  {
    id: 'cinema',
    titulo: 'Cinema',
    paragrafos: [
      'Uma opção mais tranquila para curtir entre uma atividade e outra. 🎬',
      'O cinema do Costão tem sala confortável, boa projeção e uma programação variada para diferentes públicos. Perfeito para relaxar no fim do dia ou aproveitar um momento mais leve durante a estadia.',
    ],
    fotos: ['2029-441', '2029-448'].map(foto),
  },
  {
    id: 'teatro',
    titulo: 'Teatro Fernando Marcondes',
    paragrafos: [
      'Uma opção para quem quiser curtir a noite com entretenimento dentro do próprio resort. 🎭',
      'O teatro recebe shows, peças e apresentações culturais em uma estrutura moderna e confortável. Vale conferir a programação durante a estadia para aproveitar alguma atração especial.',
    ],
    fotos: ['2029-481', '2029-486'].map(foto),
  },
  {
    id: 'piscinas',
    titulo: 'Piscinas',
    paragrafos: [
      'Aqui, descanso e diversão vêm com vista privilegiada. 🏊‍♀️☀️',
      'O Costão conta com 11 piscinas espalhadas pelo resort, incluindo opções climatizadas, áreas infantis e uma piscina de borda infinita com vista para a Praia do Santinho. Perfeito para relaxar, se refrescar e aproveitar o dia sem pressa.',
    ],
    fotos: ['2029-507', '2029-512', '2029-535', '2029-544', '2029-553', '2029-562'].map(foto),
  },
];

// destaque: linhas em negrito (horários); nota: observação menor
export const bares = [
  {
    id: 'bar-carijos',
    titulo: 'Bar Carijós',
    paragrafos: [
      'O ponto certo para fechar o dia com música, drinks e boa companhia. 🍹🎶',
      'A partir das 17h, o DJ anima o ambiente até às 23h, com opções de caipirinhas, drinks clássicos, cervejas, destilados e bebidas sem álcool. Um espaço perfeito para reunir a galera e curtir o clima da viagem.',
    ],
    fotos: ['2029-635', '2029-643', '2029-651', '2029-659'].map(foto),
  },
  {
    id: 'sambaqui',
    titulo: 'Espaço gastronômico Sambaqui',
    paragrafos: [
      'Churrasco, sabores regionais e clima de férias. 🔥🥩',
      'O Sambaqui serve diariamente opções como costela no fogo de chão, picanha, filés, frango e petiscos, além de buffet com acompanhamentos variados. Uma ótima escolha para quem quer aproveitar um almoço completo sem sair do clima do resort.',
    ],
    destaque: ['Horário: das 12h às 15h'],
    fotos: ['2029-681', '2029-686', '2029-930'].map(foto),
  },
  {
    id: 'bares-das-piscinas',
    titulo: 'Bares das piscinas',
    paragrafos: [
      'Piscina, sol e uma bebida gelada por perto. 🍹☀️',
      'Os bares das piscinas oferecem opções alcoólicas e não alcoólicas inclusas no sistema All Inclusive, perfeitas para aproveitar o dia sem sair da área de lazer.',
    ],
    destaque: ['Horário: das 10h30 às 18h'],
    fotos: ['2029-945', '2029-951', '2029-957', '2029-975', '2029-984'].map(foto),
  },
  {
    id: 'trattoria',
    titulo: 'Trattoria',
    paragrafos: [
      'Uma noite com sabor de Itália no Costão. 🍝🍕',
      'A Trattoria oferece massas frescas, lasanhas, gnocchi, antepastos, queijos e mais de 15 sabores de pizza preparados no forno à lenha. Uma ótima opção para quem quiser variar o jantar e aproveitar uma experiência gastronômica diferente.',
    ],
    destaque: ['Horário: das 19h às 22h'],
    nota: 'Reservas disponíveis conforme o número mínimo de noites.',
    fotos: ['2029-998', '2029-1006', '2029-1014', '2029-1022', '2029-1030'].map(foto),
  },
  {
    id: 'kaigan',
    titulo: 'Kaigan',
    paragrafos: [
      'Uma experiência oriental para deixar a noite ainda mais especial. 🍣✨',
      'O Kaigan oferece um menu degustação com seleção de sushis, pratos quentes e sabores tradicionais da gastronomia oriental, em um ambiente intimista e sofisticado.',
    ],
    destaque: ['Horário: das 19h30 às 22h'],
    nota: 'Reservas disponíveis conforme o número mínimo de noites.',
    fotos: ['2029-1044', '2029-1052', '2029-1060', '2029-1068', '2029-1076', '2029-1105', '2029-1115'].map(foto),
  },
  {
    id: 'nossa-senhora-da-vitoria',
    titulo: 'Nossa Senhora da Vitória',
    paragrafos: [
      'Uma experiência mais sofisticada para aproveitar a gastronomia do Costão. ✨🍽️',
      'O restaurante combina cozinha contemporânea e clássicos em um menu sazonal de quatro tempos, com pratos elaborados e apresentação cuidadosa.',
      'Ideal para quem quiser transformar o jantar em um momento especial.',
    ],
    destaque: ['Horário: das 19h30 às 22h'],
    nota: 'Reservas disponíveis conforme o número mínimo de noites.',
    fotos: ['2029-1131', '2029-1141', '2029-1151', '2029-1161', '2029-1171', '2029-1181', '2029-1191'].map(foto),
  },
  {
    id: 'nossa-senhora-das-ondas',
    titulo: 'Nossa Senhora das Ondas',
    paragrafos: [
      'A principal parada gastronômica do Costão, do café da manhã ao jantar. 🌊🍽️',
      'Com buffet variado e renovado diariamente, o restaurante oferece saladas, pratos quentes e frios, pães, sobremesas e outras opções preparadas com ingredientes frescos. Tudo isso em um ambiente de frente para o mar.',
    ],
    destaque: ['Horário:', 'Café da manhã: 7h às 10h30', 'Almoço: 12h às 15h', 'Jantar: 19h às 23h'],
    fotos: [
      '2033-1207', '2033-1217', '2033-1227', '2033-1237', '2033-1247',
      '2033-1257', '2033-1267', '2033-1359', '2033-1373', '2035-1387',
    ].map(foto),
  },
  {
    id: 'rancho-do-pescador',
    titulo: 'Rancho do Pescador',
    paragrafos: [
      'Sabores de Florianópolis com vista para o mar. 🦐🌊',
      'O Rancho do Pescador oferece opções como ostras, casquinha de siri, lula e camarões, além de uma carta de drinks, vinhos e espumantes. Uma experiência à beira-mar para quem quiser provar a gastronomia local.',
    ],
    destaque: ['Horário: das 10h às 18h', '*Custo extra.'],
    fotos: ['2035-1407', '2035-1421', '2035-1435', '2035-1449'].map(foto),
  },
  {
    id: 'sports-bar',
    titulo: 'Costão Sports Bar',
    paragrafos: [
      'Esporte, música e diversão até tarde. 🏀🎱🎶',
      'O Sports Bar conta com 30 TVs com transmissões ao vivo, mesas de bilhar e pôquer, ambientes temáticos e cardápio de drinks e petiscos. No fim da noite, o clima muda com shows ao vivo e DJ.',
    ],
    destaque: ['Horário: das 19h30 às 2h'],
    fotos: [
      '2038-1553', '2038-1560', '2038-1625', '2038-1636',
      '2038-1647', '2038-1658', '2038-1672', '2038-1683',
    ].map(foto),
  },
];

// Cards do dia 19 (página "Um dia para aproveitar")
export const cardsEstrutura = [
  { titulo: 'Praia do Santinho', foto: foto('2020-899'), alvo: 'praia-do-santinho' },
  { titulo: 'Dunas', foto: foto('2020-914'), alvo: 'dunas' },
  { titulo: 'Academia', foto: foto('2020-917'), alvo: 'academia' },
  { titulo: 'Quadras', foto: foto('2020-920'), alvo: 'quadras' },
  { titulo: 'Lounge', foto: foto('2020-923'), alvo: null },
  { titulo: 'Costão Spa by L’Occitane', foto: foto('2020-926'), alvo: 'spa' },
  { titulo: 'Cinema', foto: foto('2020-929'), alvo: 'cinema' },
  { titulo: 'Teatro Fernando Marcondes', foto: foto('2020-933'), alvo: 'teatro' },
  { titulo: 'Piscinas', foto: foto('2020-936'), alvo: 'piscinas' },
];

export const cardsBares = [
  { titulo: 'Bar Carijós', foto: foto('2023-970'), alvo: 'bar-carijos' },
  { titulo: 'Espaço gastronômico Sambaqui', foto: foto('2023-984'), alvo: 'sambaqui' },
  { titulo: 'Bares das piscinas', foto: foto('2023-992'), alvo: 'bares-das-piscinas' },
  { titulo: 'Trattoria', foto: foto('2023-998'), alvo: 'trattoria' },
  { titulo: 'Kaigan', foto: foto('2023-1004'), alvo: 'kaigan' },
  { titulo: 'Nossa Senhora da Vitória', foto: foto('2023-1010'), alvo: 'nossa-senhora-da-vitoria' },
  { titulo: 'Nossa Senhora das Ondas', foto: foto('2023-1016'), alvo: 'nossa-senhora-das-ondas' },
  { titulo: 'Rancho do Pescador', foto: foto('2023-1022'), alvo: 'rancho-do-pescador' },
  { titulo: 'Costão Sports Bar', foto: foto('2023-1028'), alvo: 'sports-bar' },
];

export const looks = [
  { foto: foto('2041-1807'), alt: 'Vestido longo estampado' },
  { foto: foto('2041-1808'), alt: 'Conjunto verde de calça e blusa assimétrica' },
  { foto: foto('2043-1815'), alt: 'Camisa clara de manga curta e calça de linho' },
  { foto: foto('2043-1817'), alt: 'Camisa de tricô e calça clara' },
  { foto: foto('2043-1825'), alt: 'Vestido curto vermelho de frente única' },
  { foto: foto('2043-1830'), alt: 'Conjunto laranja de blusa e short' },
  { foto: foto('2043-1827'), alt: 'Conjunto de camisa e bermuda em tecido texturizado' },
  { foto: foto('2043-1832'), alt: 'Camisa estampada e bermuda clara' },
];
