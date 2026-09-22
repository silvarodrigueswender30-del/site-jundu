export interface UnitData {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  location: string;
  address?: string; // Only if confirmed
  hours?: string; // Only if confirmed
  phone?: string; // Only if confirmed
  reserveUrl?: string; // Optional booking link
  
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    alt?: string;
  };
  
  experience: {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
  };
  
  gastronomy: {
    title: string;
    text: string;
    mainImage: string;
    secondaryImage1: string;
    secondaryImage2: string;
  };

  gallery: { src: string; alt: string }[];
  
  faq: { question: string; answer: string }[];
  
  seo: {
    title: string;
    description: string;
  };
}

export const unitsData: Record<string, UnitData> = {
  itagua: {
    id: "itagua",
    slug: "itagua",
    name: "Itaguá",
    officialName: "Jundu Lounge Bar Itaguá",
    location: "Ubatuba - SP",
    address: "Av. Leovigildo Dias Vieira, 810",
    hours: "Terça a Domingo — 12h às 23h",
    
    hero: {
      eyebrow: "JUNDU · ITAGUÁ · UBATUBA",
      title: "Jundu Itaguá.\nGastronomia e atmosfera no coração de Ubatuba.",
      subtitle: "Um espaço onde arquitetura, sabores, encontros e hospitalidade fazem parte da mesma experiência.",
      primaryCta: "Reservar uma mesa",
      secondaryCta: "Como chegar",
      image: "/images/units/jundu-unit-itagua.avif"
    },
    
    experience: {
      eyebrow: "ITAGUÁ",
      title: "Entre a cidade, a mesa e os encontros.",
      text: "Localizado no coração de Ubatuba, o Jundu Itaguá traz uma atmosfera sofisticada e acolhedora, ideal para quem busca uma vivência gastronômica completa. Com um projeto arquitetônico que valoriza elementos naturais, criamos o ambiente perfeito para almoços tranquilos, jantares memoráveis e encontros ao longo do dia.",
      image: "/images/history/jundu-history-itagua.avif"
    },
    
    gastronomy: {
      title: "Sabores que encontram o lugar.",
      text: "Nossa cozinha une ingredientes frescos a técnicas apuradas, sempre com respeito à origem. Para acompanhar, a coquetelaria autoral do nosso bar transforma ervas, frutas e destilados em criações únicas, perfeitas para o clima do Itaguá.",
      mainImage: "/images/editorial/jundu-origem-comida.avif",
      secondaryImage1: "/images/editorial/jundu-origem-drink.avif",
      secondaryImage2: "/images/architecture/jundu-material-light.avif"
    },
    
    gallery: [
      { src: "/images/units/jundu-unit-itagua.avif", alt: "Ambiente principal da unidade Itaguá" },
      { src: "/images/history/jundu-history-itagua.avif", alt: "Detalhe do Lounge Bar Itaguá" },
      { src: "/images/architecture/jundu-material-light.avif", alt: "Bar iluminado no Jundu Itaguá" },
      { src: "/images/editorial/jundu-origem-comida.avif", alt: "Prato autoral" },
      { src: "/images/people/jundu-people-a.avif", alt: "Hospitalidade e equipe em ação" },
      { src: "/images/architecture/jundu-architecture-presence.avif", alt: "Arquitetura e texturas de madeira no interior" }
    ],
    
    faq: [
      {
        question: "Precisa fazer reserva?",
        answer: "Recomendamos fazer reserva para garantir sua mesa, especialmente aos finais de semana e feriados."
      },
      {
        question: "Qual é o horário desta unidade?",
        answer: "A unidade Itaguá funciona de terça a domingo, das 12h às 23h."
      },
      {
        question: "Onde fica o Jundu Itaguá?",
        answer: "Estamos localizados na Av. Leovigildo Dias Vieira, 810, no bairro do Itaguá, em Ubatuba - SP."
      }
    ],
    
    seo: {
      title: "Jundu Itaguá | Restaurante no coração de Ubatuba",
      description: "Gastronomia, coquetelaria autoral e atmosfera sofisticada no Jundu Itaguá, localizado na Av. Leovigildo Dias Vieira, em Ubatuba. Reserve sua mesa."
    }
  },
  
  prumirim: {
    id: "prumirim",
    slug: "prumirim",
    name: "Prumirim",
    officialName: "Jundu Praia Bar Prumirim",
    location: "Prumirim, Ubatuba - SP",
    address: "Rodovia Rio-Santos, Km 33, Praia do Prumirim, Ubatuba - SP",
    
    hero: {
      eyebrow: "JUNDU · PRUMIRIM · UBATUBA",
      title: "Jundu Prumirim.\nO encontro entre a mesa e o mar.",
      subtitle: "Um restaurante pé na areia onde gastronomia, natureza e a paisagem de Prumirim se encontram.",
      primaryCta: "Reservar uma mesa",
      secondaryCta: "Como chegar",
      image: "/images/units/jundu-unit-prumirim.avif"
    },
    
    experience: {
      eyebrow: "PRUMIRIM",
      title: "Entre a mesa e o mar.",
      text: "Nascido das raízes caiçaras, o Praia Bar em Prumirim foi o primeiro endereço do Grupo Jundu. Aqui, a experiência acontece em total sintonia com a praia. A arquitetura natural, a sombra das árvores e o som das ondas formam o cenário para momentos de pausa e celebração.",
      image: "/images/history/jundu-history-prumirim.avif"
    },
    
    gastronomy: {
      title: "Frescor, brisa e sabores caiçaras.",
      text: "Nossa essência na praia reflete-se em pratos onde os frutos do mar e os ingredientes regionais são os protagonistas. Coquetéis refrescantes e petiscos bem executados completam o menu, perfeito para ser compartilhado à beira-mar.",
      mainImage: "/images/editorial/jundu-gastronomia.avif",
      secondaryImage1: "/images/stories/story-gastronomia.webp",
      secondaryImage2: "/images/architecture/jundu-landscape-meeting.avif"
    },
    
    gallery: [
      { src: "/images/units/jundu-unit-prumirim.avif", alt: "Vista para o mar e mesas no Jundu Prumirim" },
      { src: "/images/history/jundu-history-prumirim.avif", alt: "Pé na areia no Praia Bar Prumirim" },
      { src: "/images/architecture/jundu-landscape-meeting.avif", alt: "Integração do salão com a praia" },
      { src: "/images/editorial/jundu-gastronomia.avif", alt: "Prato com frutos do mar no Jundu" },
      { src: "/images/stories/story-atmosfera.webp", alt: "Clima e atmosfera do restaurante" }
    ],
    
    faq: [
      {
        question: "Onde fica o Jundu Prumirim?",
        answer: "O Praia Bar Prumirim fica localizado na Rodovia Rio-Santos, Km 33, Praia do Prumirim, Ubatuba - SP."
      },
      {
        question: "Precisa fazer reserva?",
        answer: "Recomendamos confirmar a disponibilidade e fazer reserva, especialmente na alta temporada, para garantir a melhor experiência."
      }
    ],
    
    seo: {
      title: "Jundu Prumirim | Restaurante Pé na Areia em Ubatuba",
      description: "Experimente a autêntica gastronomia caiçara com os pés na areia no Jundu Praia Bar, na Praia do Prumirim, Ubatuba. Conheça nossa estrutura."
    }
  },
  
  "praia-grande": {
    id: "praia-grande",
    slug: "praia-grande",
    name: "Praia Grande",
    officialName: "Espaço Jundu Gastrobar",
    location: "Praia Grande, Ubatuba - SP",
    
    hero: {
      eyebrow: "JUNDU · PRAIA GRANDE · UBATUBA",
      title: "Jundu Praia Grande.\nGastronomia, encontros e atmosfera.",
      subtitle: "Um espaço criado para reunir sabores, arquitetura, hospitalidade e celebrações em uma experiência própria.",
      primaryCta: "Reservar uma mesa",
      secondaryCta: "Como chegar",
      image: "/images/units/jundu-unit-praia-grande.avif"
    },
    
    experience: {
      eyebrow: "PRAIA GRANDE",
      title: "Um espaço feito para viver Ubatuba.",
      text: "O Espaço Jundu Gastrobar é nossa maior unidade, concebida para vibrar junto com uma das praias mais queridas da região. O projeto integra amplos salões e espaços para confraternizações, oferecendo uma experiência dinâmica onde a boa mesa e o clima de celebração andam juntos.",
      image: "/images/history/jundu-history-gastrobar.avif"
    },
    
    gastronomy: {
      title: "Novas técnicas, mesma essência.",
      text: "Aqui, a culinária do Jundu se expande. Ingredientes locais ganham contornos modernos com a integração de técnicas asiáticas e influências diversas, compondo um menu arrojado. O bar oferece uma seleção vibrante de drinks para acompanhar os diferentes ritmos da casa.",
      mainImage: "/images/kitchen/jundu-kitchen-06.avif",
      secondaryImage1: "/images/kitchen/jundu-kitchen-02.avif",
      secondaryImage2: "/images/editorial/jundu-events.avif"
    },
    
    gallery: [
      { src: "/images/units/jundu-unit-praia-grande.avif", alt: "Energia vibrante do Espaço Jundu Gastrobar" },
      { src: "/images/history/jundu-history-gastrobar.avif", alt: "Fachada e área externa do Jundu Praia Grande" },
      { src: "/images/editorial/jundu-events.avif", alt: "Ambiente preparado para eventos e grupos" },
      { src: "/images/kitchen/jundu-kitchen-06.avif", alt: "Técnicas modernas e pratos bem elaborados" },
      { src: "/images/kitchen/jundu-kitchen-02.avif", alt: "Detalhes do preparo na cozinha" }
    ],
    
    faq: [
      {
        question: "A unidade recebe eventos?",
        answer: "Sim, o Espaço Jundu Gastrobar é o nosso maior restaurante e possui estrutura pensada para acomodar comemorações e confraternizações."
      },
      {
        question: "Onde fica o Jundu Praia Grande?",
        answer: "Estamos localizados na Praia Grande, em Ubatuba, em um amplo espaço pronto para receber você e seus convidados."
      }
    ],
    
    seo: {
      title: "Jundu Praia Grande | Gastrobar em Ubatuba",
      description: "Gastronomia dinâmica, coquetelaria e um ambiente vibrante no Jundu Praia Grande. O espaço ideal para encontros e celebrações em Ubatuba."
    }
  }
};
