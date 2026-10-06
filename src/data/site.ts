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
    eyebrow: "A PLANTA QUE DEU NOME À CASA",
    title: "Cresce onde\nquase nada cresce.",
    paragraphs: [
      "Na faixa de areia, onde o vento não negocia e o sal castiga, uma vegetação teimosa se agarra ao chão e segura a praia inteira no lugar. O nome dela é jundu.",
      "Foi essa planta que emprestou o nome, e o jeito, a uma ideia nascida em Ubatuba: transformar ingrediente, madeira, encontro e paisagem em lugares que resistem ao tempo e protegem o que importa: o momento de estar junto."
    ],
    historyLabel: "LEIA COMO TUDO COMEÇOU",
    historyHref: "#historia",
    rootArtwork: undefined,
  },
  brandTimeline: {
    eyebrow: "DESDE 2013",
    title: "Começou com um\nquiosque de praia.",
    description: "Depois de anos no Projeto Tamar e de fins de semana ajudando os pais no quiosque da família, na mesma praia de Prumirim, Gil Eustáquio resolveu montar o próprio lugar. Começou como brincadeira e foi ficando sério. Treze anos depois, são três casas, mais de 200 pessoas e uma pergunta que guia cada decisão: o que faria alguém sair daqui mais feliz do que entrou?",
    milestones: [
      {
        marker: "2013",
        title: "O dia em que a praia ganhou endereço",
        description: "Em 13 de novembro, Gilberto Eustáquio e Daniela Costa, veterinária de formação, abrem o Praia Bar em Prumirim: mesas de tronco, pé na areia e a cultura caiçara em cada traço.",
        image: "/images/history/jundu-history-prumirim.avif",
        alt: "Mesas pé na areia sob cobertura rústica de palha no Praia Bar Prumirim",
        objectPosition: "center center"
      },
      {
        marker: "EXPANSÃO",
        title: "Itaguá: a cozinha ganha uma chef",
        description: "O primeiro restaurante do grupo nasce no bairro do Itaguá. Maria Eustáquio assume o fogão e une sofisticação à culinária caiçara.",
        image: "/images/history/jundu-history-itagua.avif",
        alt: "Salão iluminado do restaurante Jundu no Itaguá com estrutura de madeira e clientes às mesas",
        objectPosition: "center center"
      },
      {
        marker: "2021",
        title: "Praia Grande: o maior salto",
        description: "Nasce o Espaço Jundu Gastrobar, a maior casa do grupo. O chef Fabio Eustáquio cruza técnicas asiáticas com ingredientes brasileiros e abre uma nova expressão gastronômica.",
        image: "/images/history/jundu-history-gastrobar.avif",
        alt: "Camarões empanados e coquetéis autorais no Espaço Jundu Gastrobar",
        objectPosition: "center center"
      },
      {
        marker: "200+",
        title: "Gente que faz o lugar",
        description: "Mais de 200 colaboradores com um propósito só: fazer cada visitante sair melhor e mais feliz do que entrou.",
        image: "/images/history/jundu-history-people.avif",
        alt: "Equipe de cozinha do Jundu com aventais da casa reunida na cozinha",
        objectPosition: "center center"
      }
    ]
  },
  peopleBehindJundu: {
    eyebrow: "POR TRÁS DE CADA PRATO",
    title: "Por trás de cada\nprato, existe\num rosto.",
    description: "Você sente o sabor. Nem sempre vê quem o construiu: a mão que acerta o ponto na cozinha, o olhar do salão que percebe antes de você pedir, o bar que acerta a medida. O Jundu é feito todos os dias por pessoas que dividem o mesmo jeito de receber, e é isso que você sente, mesmo sem saber explicar.",
    photo: {
      src: "/images/people/jundu-people-a.avif",
      alt: "Equipe do Jundu em ação"
    },
    stats: {
      number: "200+",
      label: "PESSOAS NO TIME"
    },
    leaders: [
      {
        name: "COZINHA",
        role: "Ingredientes, técnica e memória viram o prato que chega quente à mesa."
      },
      {
        name: "HOSPITALIDADE",
        role: "Um jeito de receber que atravessa os três endereços."
      },
      {
        name: "BAR & SALÃO",
        role: "Ritmo, olhar atento e cuidado em cada encontro."
      }
    ]
  },
  sections: {
    editorial: {
      eyebrow: "Gastronomia & Território",
      title: "Ubatuba tem gosto. Venha provar.",
      text: "Mar, brasa, fruta, erva, farinha. O litoral encontra o fogo certo e chega à mesa com a arquitetura e a conversa em volta. Não é só jantar: é entender, em poucas garfadas, onde você está.",
      link: { label: "Entre na nossa história", href: "#historia" },
      image: {
        src: "/images/editorial/jundu-gastronomia.avif",
        alt: "Prato da alta gastronomia servido no restaurante Jundu",
      },
    },
    stories: {
      eyebrow: "HISTÓRIAS EM MOVIMENTO",
      title: "Antes de vir,\nveja como é estar aqui.",
      text: "Chamas, passos, copos, risadas. Três cenas curtas para sentir o ritmo da casa antes de sentar nela.",
      items: [
        {
          id: "story-atendimento",
          title: "Aqui, servir é acolher.",
          category: "ATENDIMENTO",
          poster: "/images/stories/story-atendimento.webp", // Will be ignored by component
          videoSrc: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/atendimento%20(2).mp4#t=1.5",
          alt: "Gesto humano e hospitalidade no atendimento do Jundu",
          objectPosition: "center 30%",
        },
        {
          id: "story-gastronomia",
          title: "Do fogo, direto para você.",
          category: "GASTRONOMIA",
          poster: "/images/stories/story-gastronomia.webp",
          videoSrc: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/gastronomia.mp4#t=1.5",
          alt: "Preparo de pratos e técnica na cozinha do Jundu",
          objectPosition: "center center",
        },
        {
          id: "story-atmosfera",
          title: "A casa se abre para o mar.",
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
      title: "Você entra.\nO tempo desacelera.",
      text: "Madeira que guarda calor. Luz que vira conversa. Vegetação, brisa, mar na moldura. Cada espaço foi pensado para você ficar mais um pouco, e a hora passa sem pedir licença.",
      images: [
        {
          src: "/images/architecture/jundu-architecture-presence.avif",
          alt: "Interior do restaurante Jundu com estrutura de madeira e iluminação acolhedora",
          caption: "ARQUITETURA & PRESENÇA",
          objectPosition: "center center",
        },
        {
          src: "/images/architecture/jundu-material-light.avif",
          alt: "Detalhe do bar com textura de madeira, teto tramado e luminárias",
          caption: "MATÉRIA & LUZ",
          objectPosition: "center center",
        },
        {
          src: "/images/architecture/jundu-landscape-meeting.avif",
          alt: "Vista aberta do interior do restaurante para a praia e o mar",
          caption: "PAISAGEM & ENCONTRO",
          objectPosition: "center center",
        },
      ],
    },
    jWindow: {
      eyebrow: "UMA MESMA ESSÊNCIA",
      title: 'Muda o cenário.\nA sensação permanece.',
      text: "Praia, cidade ou natureza: cada endereço tem a sua atmosfera. Mas o abraço é o mesmo, com o cuidado, o acolhimento e o jeito de receber que fazem você se sentir em casa antes mesmo de abrir o cardápio.",
      image: "/images/architecture/jundu-material-light.avif",
      alt: "Fotografia de detalhe do bar Jundu vista através da letra J",
    },
    gastronomyPillars: {
      eyebrow: "GASTRONOMIA & COQUETELARIA",
      title: "Do fogão\nao último gole.",
      text: "A cozinha nasce da cultura caiçara e se abre ao novo: técnicas, ingredientes, encontros. Do prato autoral à coquetelaria, cada criação tenta responder à mesma pergunta: como seria Ubatuba se coubesse num prato? E num copo?",
      cta: {
        label: "ESCOLHA O SEU JUNDU",
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
          description: "O mar, a praia e os ingredientes brasileiros são o ponto de partida. Tudo o que o Jundu cria volta para eles."
        },
        {
          id: "02",
          title: "Cozinha em movimento",
          description: "Maria Eustáquio une sofisticação à culinária caiçara. Fabio Eustáquio traz técnicas asiáticas para ingredientes brasileiros. Dois olhares, uma mesma mesa."
        },
        {
          id: "03",
          title: "Coquetelaria autoral",
          description: "Frutas, ervas, destilados e referências locais viram bebidas com a cara de cada unidade, e você só entende no primeiro gole."
        }
      ]
    },
    eventsShowcase: {
      eyebrow: "CELEBRAÇÕES & ENCONTROS",
      title: "Seu momento merece\num cenário.",
      text: "Alguns dias não cabem em qualquer lugar. Aniversários, casamentos, confraternizações: quando gastronomia, atmosfera e hospitalidade se encontram, a data vira lembrança. No Jundu, cada ocasião encontra um espaço com identidade própria.",
      cta: {
        label: "QUERO PLANEJAR MEU EVENTO",
        href: "#contato"
      },
      photo: {
        src: "/images/editorial/jundu-events.avif",
        alt: "Ambiente do Grupo Jundu preparado para receber encontros"
      },
      highlight: {
        prefix: "ATÉ",
        number: "350",
        suffix: "PESSOAS",
        description: "Capacidade no Espaço Jundu Gastrobar. As demais unidades têm formatos próprios para cada tipo de encontro."
      },
      modalities: [
        {
          id: "01",
          title: "CASAMENTOS",
          description: "O sim com o mar de testemunha, a gastronomia como presente e a paisagem de Ubatuba por perto."
        },
        {
          id: "02",
          title: "EVENTOS CORPORATIVOS",
          description: "Equipes que se encontram num cenário diferente voltam diferentes. Estrutura para confraternizações e experiências de marca."
        },
        {
          id: "03",
          title: "ANIVERSÁRIOS & CELEBRAÇÕES",
          description: "Os momentos que você quer guardar, conduzidos com cuidado em cada detalhe."
        }
      ]
    },
    natureCommitment: {
      eyebrow: "GUARDIÕES DA NATUREZA",
      title: "Quem vive do litoral\ncuida do litoral.",
      text: "O jundu protege a praia muito antes de qualquer restaurante existir. Seguimos o exemplo dele: escolhas que unem hospitalidade, responsabilidade social e cuidado com o ambiente.",
      highlight: "Natureza não é cenário.\nÉ parte da nossa origem.",
      commitments: [
        {
          id: "01",
          title: "RECICLAGEM",
          description: "Todas as unidades organizam e encaminham resíduos para reciclagem."
        },
        {
          id: "02",
          title: "TERRITÓRIO",
          description: "Cultura caiçara, paisagem e vegetação costeira não são tema: são a origem do Jundu."
        },
        {
          id: "03",
          title: "RESPONSABILIDADE",
          description: "Um compromisso contínuo de contribuir com o desenvolvimento sustentável da economia local."
        }
      ]
    },
    locations: {
      eyebrow: "TRÊS ENDEREÇOS, UMA ESCOLHA",
      title: "Qual Jundu combina\ncom o seu dia?",
      text: "Pé na areia, jantar com assinatura ou uma tarde longa de frente para o mar? Cada endereço traduz o Jundu de um jeito, e todos guardam a mesma essência.",
      units: [
        {
          id: "itagua",
          name: "Itaguá",
          description: "O charme e a tradição no coração da cidade.",
          image: "/images/units/jundu-unit-itagua.avif",
          alt: "Ambiente da unidade Jundu Itaguá",
          objectPosition: "center center"
        },
        {
          id: "prumirim",
          name: "Prumirim",
          description: "A natureza e o mar se encontram à sua mesa.",
          image: "/images/units/jundu-unit-prumirim.avif",
          alt: "Ambiente da unidade Jundu Prumirim",
          objectPosition: "center center"
        },
        {
          id: "praia-grande",
          name: "Praia Grande",
          description: "Energia vibrante em uma das praias mais queridas.",
          image: "/images/units/jundu-unit-praia-grande.avif",
          alt: "Ambiente da unidade Jundu Praia Grande",
          objectPosition: "center center"
        }
      ]
    },
    finalCta: {
      title: "Sua mesa está esperando.",
      subtitle: "Escolha o seu Jundu, reserve e deixe que a gente cuide do resto: o sabor, o cenário e a sensação de ser bem recebido.",
      primaryAction: { label: "Escolher minha unidade", href: "#unidades" },
      secondaryAction: { label: "Reservar agora", href: "#reserva" },
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
