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
        image: "/images/stories/story-atmosfera.webp",
        alt: "Prumirim",
        objectPosition: "center 40%"
      },
      {
        marker: "EXPANSÃO",
        title: "Lounge Bar Itaguá",
        description: "O bairro do Itaguá recebe o primeiro restaurante do grupo. A chef Maria Eustáquio assume a cozinha, unindo sofisticação e culinária caiçara.",
        image: "/images/editorial/gastronomia-provisoria.webp",
        alt: "Lounge Bar Itaguá",
        objectPosition: "center center"
      },
      {
        marker: "2021",
        title: "Espaço Jundu Gastrobar",
        description: "O maior restaurante do grupo nasce na Praia Grande. O chef Fabio Eustáquio combina técnicas asiáticas e ingredientes brasileiros em uma nova expressão gastronômica.",
        image: "/images/stories/story-gastronomia.webp",
        alt: "Espaço Jundu Gastrobar na Praia Grande",
        objectPosition: "center center"
      },
      {
        marker: "200+",
        title: "Pessoas, uma mesma essência",
        description: "O Grupo Jundu passa a reunir mais de 200 colaboradores com o propósito de fazer cada visitante sair melhor e mais feliz do que entrou.",
        image: "/images/stories/story-atendimento.webp",
        alt: "Equipe do Jundu",
        objectPosition: "center 30%"
      }
    ]
  },
  peopleBehindJundu: {
    eyebrow: "QUEM DÁ VIDA AO GRUPO",
    title: "Pessoas que fazem\no Jundu acontecer.",
    description: "O Jundu cresceu a partir de encontros: entre família, equipe, cozinha, arquitetura e território. Hoje, mais de 200 colaboradores compartilham o propósito de receber bem e transformar cada visita em uma experiência conectada a Ubatuba.",
    photo: {
      src: "/images/stories/story-atendimento.webp",
      alt: "Equipe de atendimento do Jundu conversando e sorrindo no ambiente do restaurante"
    },
    stats: {
      number: "200+",
      label: "COLABORADORES"
    },
    leaders: [
      {
        name: "Gilberto Eustáquio e Daniela Costa",
        role: "Fundadores do Grupo Jundu"
      },
      {
        name: "Maria Eustáquio",
        role: "Chef à frente da cozinha do Lounge Bar Itaguá"
      },
      {
        name: "Fabio Eustáquio",
        role: "Chef do Espaço Jundu Gastrobar"
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
        src: "/images/editorial/gastronomia-provisoria.webp",
        alt: "Prato servido no restaurante Jundu (Provisório)",
        // TODO: Substituir por fotografia de alta resolução do acervo final
      },
    },
    stories: {
      eyebrow: "Além do momento",
      title: "Histórias verticais,\nexperiência imersiva.",
      text: "Gestos, sabores e atmosferas registrados em movimento para revelar o que acontece entre a cozinha, o salão e o mar.",
      items: [
        {
          id: "story-atendimento",
          title: "Servir é acolher",
          category: "Atendimento",
          poster: "/images/stories/story-atendimento.webp",
          // TODO: videoSrc será adicionado quando os vídeos finais forem entregues
          alt: "Colaborador do Jundu servindo os convidados (Provisório)",
          objectPosition: "center 30%",
          duration: "0:42",
        },
        {
          id: "story-gastronomia",
          title: "O prato chega à mesa",
          category: "Gastronomia",
          poster: "/images/stories/story-gastronomia.webp",
          alt: "Prato sendo finalizado na cozinha do Jundu (Provisório)",
          objectPosition: "center center",
          duration: "0:38",
        },
        {
          id: "story-atmosfera",
          title: "A noite acende",
          category: "Atmosfera",
          poster: "/images/stories/story-atmosfera.webp",
          alt: "Iluminação noturna no salão do restaurante Jundu (Provisório)",
          objectPosition: "center 40%",
          duration: "0:55",
        },
      ] as StoryItem[],
    },
    architecture: {
      eyebrow: "EM PLANO, EM MEMÓRIA",
      title: "Imagem em escala\narquitetônica.",
      images: [
        {
          src: "/images/stories/story-atmosfera.webp",
          alt: "Interior do restaurante Jundu com estrutura de madeira e iluminação acolhedora",
          caption: "Arquitetura e atmosfera",
          objectPosition: "center 40%",
        },
        {
          src: "/images/stories/story-atendimento.webp",
          alt: "Colaborador do Jundu servindo os convidados",
          caption: "Pessoas e hospitalidade",
          objectPosition: "center 30%",
        },
        {
          src: "/images/stories/story-gastronomia.webp",
          alt: "Detalhe da gastronomia servida à mesa",
          caption: "Gastronomia e detalhe",
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
