export interface StoryItem {
  id: string;
  title: string;
  category: string;
  poster: string;
  videoSrc?: string;
  alt: string;
  objectPosition: string;
  duration?: string;
}

export const siteData = {
  name: "Jundu Ubatuba",
  units: ["Itaguá", "Prumirim", "Praia Grande"],
  navigation: [
    { label: "Experiência", href: "#experiencia" },
    { label: "História", href: "#historia" },
    { label: "Unidades", href: "#unidades" },
    { label: "Eventos", href: "#eventos" },
  ],
  ctas: {
    primary: { label: "Conheça nossas unidades", href: "#unidades" },
    reserve: { label: "Reservar", href: "#reserva" },
    video: { label: "Assistir à experiência" },
  },
  brandManifesto: {
    eyebrow: "ORIGEM & TERRITÓRIO",
    title: "Onde a praia\ncria raízes.",
    paragraphs: [
      "Jundu é o nome de uma vegetação nativa que cresce junto à areia, resiste ao vento e ajuda a proteger o litoral. Foi dessa relação entre natureza, território e cultura caiçara que nasceu a identidade do Grupo Jundu.",
      "Uma marca criada em Ubatuba para transformar ingredientes, arquitetura, encontros e paisagem em experiências que carregam a essência do lugar."
    ],
    historyLabel: "CONHEÇA A NOSSA HISTÓRIA",
    historyHref: "#historia",
    rootArtwork: undefined,
  },
  brandTimeline: {
    eyebrow: "DESDE 2013",
    title: "Uma história que\ncomeçou na praia.",
    description: "Do primeiro Praia Bar em Prumirim a um grupo com diferentes experiências em Ubatuba, o Jundu cresceu sem perder a ligação com a cultura caiçara, a natureza e o desejo de receber bem.",
    milestones: [
      {
        marker: "2013",
        title: "Praia Bar Prumirim",
        description: "Gilberto Eustáquio e Daniela Costa inauguram o primeiro Jundu em 13 de novembro, levando para o quiosque a cultura caiçara, a arquitetura natural e a relação com a praia.",
        image: "/images/history/jundu-history-prumirim.avif",
        alt: "Prumirim",
        objectPosition: "center center"
      },
      {
        marker: "EXPANSÃO",
        title: "Lounge Bar Itaguá",
        description: "O bairro do Itaguá recebe o primeiro restaurante do grupo. A chef Maria Eustáquio assume a cozinha, unindo sofisticação e culinária caiçara.",
        image: "/images/history/jundu-history-itagua.avif",
        alt: "Lounge Bar Itaguá",
        objectPosition: "center center"
      },
      {
        marker: "2021",
        title: "Espaço Jundu Gastrobar",
        description: "O maior restaurante do grupo nasce na Praia Grande. O chef Fabio Eustáquio combina técnicas asiáticas e ingredientes brasileiros em uma nova expressão gastronômica.",
        image: "/images/history/jundu-history-gastrobar.avif",
        alt: "Espaço Jundu Gastrobar na Praia Grande",
        objectPosition: "center center"
      },
      {
        marker: "200+",
        title: "Pessoas, uma mesma essência",
        description: "O Grupo Jundu passa a reunir mais de 200 colaboradores com o propósito de fazer cada visitante sair melhor e mais feliz do que entrou.",
        image: "/images/history/jundu-history-people.avif",
        alt: "Equipe do Jundu",
        objectPosition: "center center"
      }
    ]
  },
  peopleBehindJundu: {
    eyebrow: "QUEM DÁ VIDA À EXPERIÊNCIA",
    title: "A essência do Jundu\npassa por muitas mãos.",
    description: "Da cozinha ao salão, do bar ao cuidado com cada detalhe, o Jundu é construído todos os dias por pessoas que compartilham o mesmo jeito de receber. Técnica, afeto, repertório e presença transformam cada visita em uma experiência conectada ao lugar.",
    photo: {
      src: "/images/people/jundu-people-a.avif",
      alt: "Equipe do Jundu em ação"
    },
    stats: {
      number: "200+",
      label: "COLABORADORES"
    },
    leaders: [
      {
        name: "COZINHA",
        role: "Ingredientes, técnica e memória transformados em experiência."
      },
      {
        name: "HOSPITALIDADE",
        role: "Um jeito de receber que atravessa todas as unidades."
      },
      {
        name: "BAR & SALÃO",
        role: "Ritmo, presença e cuidado em cada encontro."
      }
    ]
  },
  sections: {
    editorial: {
      eyebrow: "Gastronomia & Território",
      title: "O sabor de Ubatuba em cada detalhe.",
      text: "Ingredientes, arquitetura e encontros se conectam em uma experiência que nasce do litoral e ganha identidade em cada ambiente.",
      link: { label: "Conheça a nossa história", href: "#historia" },
      image: {
        src: "/images/editorial/jundu-gastronomia.avif",
        alt: "Prato da alta gastronomia servido no restaurante Jundu",
      },
    },
    stories: {
      eyebrow: "HISTÓRIAS EM MOVIMENTO",
      title: "O Jundu acontece\nem movimento.",
      text: "Gestos, sabores e atmosferas que transformam cada visita em experiência.",
      items: [
        {
          id: "story-atendimento",
          title: "Servir é acolher.",
          category: "ATENDIMENTO",
          poster: "/images/stories/story-atendimento.webp", // Will be ignored by component
          videoSrc: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/atendimento%20(2).mp4#t=1.5",
          alt: "Gesto humano e hospitalidade no atendimento do Jundu",
          objectPosition: "center 30%",
        },
        {
          id: "story-gastronomia",
          title: "O prato chega à mesa.",
          category: "GASTRONOMIA",
          poster: "/images/stories/story-gastronomia.webp",
          videoSrc: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/gastronomia.mp4#t=1.5",
          alt: "Preparo de pratos e técnica na cozinha do Jundu",
          objectPosition: "center center",
        },
        {
          id: "story-atmosfera",
          title: "O ambiente se abre ao mar.",
          category: "ATMOSFERA",
          poster: "/images/stories/story-atmosfera.webp",
          videoSrc: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/atmosfera.mp4#t=1.5",
          alt: "Arquitetura e iluminação noturna criando a experiência do Jundu",
          objectPosition: "center 40%",
        },
      ] as StoryItem[],
    },
    architecture: {
      eyebrow: "ARQUITETURA & ATMOSFERA",
      title: "Espaços que fazem\nparte da experiência.",
      text: "Madeira, luz, vegetação e paisagem se encontram em ambientes pensados para acolher, permanecer e criar memória.",
      images: [
        {
          src: "/images/stories/story-atmosfera.webp",
          alt: "Interior do restaurante Jundu com estrutura de madeira e iluminação acolhedora",
          caption: "ARQUITETURA & PRESENÇA",
          objectPosition: "center 40%",
        },
        {
          src: "/images/stories/story-atendimento.webp",
          alt: "Colaborador do Jundu servindo os convidados",
          caption: "MATÉRIA & LUZ",
          objectPosition: "center 30%",
        },
        {
          src: "/images/stories/story-gastronomia.webp",
          alt: "Detalhe da gastronomia servida à mesa",
          caption: "PAISAGEM & ENCONTRO",
          objectPosition: "center center",
        },
      ],
    },
    jWindow: {
      eyebrow: "SÍMBOLO VIVO",
      title: 'O "J" se torna uma\njanela para o Jundu.',
      text: "A identidade aparece no recorte, na transição e no movimento — sem repetir a logo inteira.",
      image: "/images/hero/jundu-hero-desktop.webp",
      alt: "Fotografia do ambiente Jundu vista através da letra J",
    },
    gastronomyPillars: {
      eyebrow: "GASTRONOMIA & COQUETELARIA",
      title: "Da origem\nao copo.",
      text: "A cozinha do Jundu nasce da cultura caiçara e se abre para novas técnicas, ingredientes e encontros. Dos pratos autorais à coquetelaria, cada criação procura traduzir Ubatuba sem limitar sua expressão.",
      cta: {
        label: "CONHEÇA NOSSAS UNIDADES",
        href: "#unidades"
      },
      gallery: {
        main: {
          src: "/images/editorial/jundu-origem-comida.avif",
          alt: "Preparo de prato no Jundu, ressaltando o processo, presença humana e cozinha viva"
        },
        secondaryTop: {
          src: "/images/editorial/jundu-origem-drink.avif",
          alt: "Preparo de drink no Jundu, destacando coquetelaria autoral e gelo cristalino"
        }
      },
      pillars: [
        {
          id: "01",
          title: "Cultura caiçara",
          description: "A relação com o mar, a praia e os ingredientes brasileiros permanece como ponto de partida para os sabores do Jundu."
        },
        {
          id: "02",
          title: "Cozinha em movimento",
          description: "Maria Eustáquio une sofisticação à culinária caiçara, enquanto Fabio Eustáquio aproxima técnicas asiáticas de ingredientes brasileiros."
        },
        {
          id: "03",
          title: "Coquetelaria autoral",
          description: "Frutas, ervas, destilados e referências locais constroem bebidas que acompanham a identidade de cada unidade."
        }
      ]
    },
    eventsShowcase: {
      eyebrow: "CELEBRAÇÕES & ENCONTROS",
      title: "Eventos que\nganham cenário.",
      text: "Do encontro íntimo às grandes celebrações, o Grupo Jundu reúne gastronomia, hospitalidade e atmosferas marcantes para transformar cada ocasião em uma experiência.",
      cta: {
        label: "PLANEJE SEU EVENTO",
        href: "#contato"
      },
      photo: {
        src: "/images/stories/story-atmosfera.webp",
        alt: "Ambiente do Grupo Jundu preparado para receber encontros"
      },
      highlight: {
        prefix: "ATÉ",
        number: "350",
        suffix: "PESSOAS",
        description: "Capacidade divulgada para eventos no Espaço Jundu Gastrobar."
      },
      modalities: [
        {
          id: "01",
          title: "CASAMENTOS",
          description: "Celebrações com identidade, gastronomia e a paisagem de Ubatuba por perto."
        },
        {
          id: "02",
          title: "EVENTOS CORPORATIVOS",
          description: "Estrutura para encontros, confraternizações e experiências de marca."
        },
        {
          id: "03",
          title: "ANIVERSÁRIOS & CELEBRAÇÕES",
          description: "Momentos especiais conduzidos com cuidado em cada detalhe."
        }
      ]
    },
    natureCommitment: {
      eyebrow: "GUARDIÕES DA NATUREZA",
      title: "Crescer junto ao litoral\né também cuidar dele.",
      text: "O nome Jundu carrega a memória de uma vegetação nativa essencial para a proteção das praias. Essa relação com o território também orienta escolhas do grupo, que busca unir hospitalidade, responsabilidade social e cuidado com o ambiente.",
      highlight: "Natureza não é cenário.\nÉ parte da nossa origem.",
      commitments: [
        {
          id: "01",
          title: "RECICLAGEM",
          description: "Todas as unidades mantêm um processo de organização e encaminhamento de resíduos para reciclagem."
        },
        {
          id: "02",
          title: "TERRITÓRIO",
          description: "A cultura caiçara, a paisagem e a vegetação costeira fazem parte da origem e da identidade do Jundu."
        },
        {
          id: "03",
          title: "RESPONSABILIDADE",
          description: "O grupo declara o compromisso de contribuir continuamente para o desenvolvimento sustentável da economia local."
        }
      ]
    },
    locations: {
      eyebrow: "UBATUBA, TRÊS EXPERIÊNCIAS",
      title: "Três unidades.\nTrês atmosferas.",
      text: "Da praia ao salão, cada endereço traduz o Jundu de uma forma particular — mantendo a mesma essência em cada experiência.",
      units: [
        {
          id: "itagua",
          name: "Itaguá",
          description: "O charme e a tradição no coração da cidade.",
          image: "/images/stories/story-atmosfera.webp",
          alt: "Ambiente da unidade Jundu Itaguá",
          objectPosition: "center 40%"
        },
        {
          id: "prumirim",
          name: "Prumirim",
          description: "A natureza e o mar se encontram à sua mesa.",
          image: "/images/stories/story-gastronomia.webp",
          alt: "Ambiente da unidade Jundu Prumirim",
          objectPosition: "center center"
        },
        {
          id: "praia-grande",
          name: "Praia Grande",
          description: "Energia vibrante em uma das praias mais queridas.",
          image: "/images/stories/story-atendimento.webp",
          alt: "Ambiente da unidade Jundu Praia Grande",
          objectPosition: "center 30%"
        }
      ]
    },
    finalCta: {
      title: "Viva essa experiência.",
      subtitle: "Descubra o sabor e a atmosfera de Ubatuba em nossas unidades.",
      primaryAction: { label: "Conheça as Unidades", href: "#unidades" },
      secondaryAction: { label: "Fazer uma Reserva", href: "#reserva" },
    },
    footer: {
      brand: "Jundu Ubatuba",
      social: [
        { label: "Instagram", href: "https://instagram.com/junduubatuba" },
        { label: "Facebook", href: "https://facebook.com/junduubatuba" }
      ],
      legal: [
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Privacidade", href: "#" }
      ],
      credit: "Desenvolvido por Off-Data"
    }
  },
};
