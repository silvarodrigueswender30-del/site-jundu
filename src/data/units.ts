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
    video?: string;
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
      image: "/images/units/itagua/itagua-ambiente-lounge.avif",
      video: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/StorySaver.to_AQPLuGdvItXugImVeuObTHcGY6_WR5cMLT3BL7bgKFyJIj6KYxsRcpqqdkylS-20KR-0d2XaLUMRkeZ0yLCZo7iJ_jmg4gIljIMme94.mp4"
    },
    
    gastronomy: {
      title: "Sabores que encontram o lugar.",
      text: "Nossa cozinha une ingredientes frescos a técnicas apuradas, sempre com respeito à origem. Para acompanhar, a coquetelaria autoral do nosso bar transforma ervas, frutas e destilados em criações únicas, perfeitas para o clima do Itaguá.",
      mainImage: "/images/units/itagua/itagua-gastronomia-principal.avif",
      secondaryImage1: "/images/units/itagua/itagua-coquetelaria.avif",
      secondaryImage2: "/images/units/itagua/itagua-ambiente-lounge.avif"
    },
    
    gallery: [
      { src: "/images/units/itagua/itagua-galeria-01.avif", alt: "Atmosfera e experiência gastronômica no Jundu Itaguá" },
      { src: "/images/units/itagua/itagua-galeria-02.avif", alt: "Detalhes do salão e arquitetura do Jundu Itaguá" },
      { src: "/images/units/itagua/itagua-galeria-03.avif", alt: "Experiência de bebidas e coquetelaria autoral" },
      { src: "/images/units/itagua/itagua-galeria-04.avif", alt: "Momentos e gastronomia no Jundu Itaguá" },
      { src: "/images/units/itagua/itagua-galeria-05.avif", alt: "Prato especial da cozinha autoral Jundu" }
    ],
    
    faq: [
      {
        question: "Onde fica o Jundu Itaguá?",
        answer: "O Jundu Itaguá está localizado na Av. Leovigildo Dias Vieira, 810, no bairro do Itaguá, em Ubatuba - SP."
      },
      {
        question: "Qual é o horário de funcionamento do Jundu Itaguá?",
        answer: "A unidade Itaguá funciona de terça a domingo, das 12h às 23h."
      },
      {
        question: "Precisa fazer reserva no Jundu Itaguá?",
        answer: "Para garantir melhor atendimento, recomendamos consultar a disponibilidade da unidade pelo canal oficial de reservas."
      },
      {
        question: "Como fazer uma reserva no Jundu Itaguá?",
        answer: "Você pode consultar disponibilidade e fazer sua reserva pelo canal oficial indicado nesta página."
      },
      {
        question: "Como chegar ao Jundu Itaguá?",
        answer: "Utilize o botão “Como chegar” nesta página para abrir a localização oficial da unidade no Google Maps."
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
      image: "/images/units/prumirim/prumirim-ambiente-praia.avif",
      video: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/jundupraiabar.mp4"
    },
    
    gastronomy: {
      title: "Frescor, brisa e sabores caiçaras.",
      text: "Nossa essência na praia reflete-se em pratos onde os frutos do mar e os ingredientes regionais são os protagonistas. Coquetéis refrescantes e petiscos bem executados completam o menu, perfeito para ser compartilhado à beira-mar.",
      mainImage: "/images/units/prumirim/prumirim-gastronomia-principal.avif",
      secondaryImage1: "/images/units/prumirim/prumirim-coquetelaria.avif",
      secondaryImage2: "/images/units/prumirim/prumirim-ambiente-praia.avif"
    },
    
    gallery: [
      { src: "/images/units/prumirim/prumirim-galeria-01.avif", alt: "Vista deslumbrante e experiência completa no Jundu Prumirim" },
      { src: "/images/units/prumirim/prumirim-galeria-02.avif", alt: "Estrutura integrada à natureza na Praia do Prumirim" },
      { src: "/images/units/prumirim/prumirim-galeria-03.avif", alt: "Detalhes do ambiente e sombra das árvores na praia" },
      { src: "/images/units/prumirim/prumirim-galeria-04.avif", alt: "Prato especial de frutos do mar frescos" },
      { src: "/images/units/prumirim/prumirim-galeria-05.avif", alt: "Momentos de pausa e celebração na praia" }
    ],
    
    faq: [
      {
        question: "Onde fica o Jundu Prumirim?",
        answer: "O Jundu Prumirim está localizado na Rodovia Rio-Santos, Km 33, Praia do Prumirim, Ubatuba - SP."
      },
      {
        question: "O Jundu Prumirim é um restaurante pé na areia?",
        answer: "Sim. A unidade de Prumirim está integrada à praia e combina gastronomia, natureza e a paisagem do litoral de Ubatuba."
      },
      {
        question: "Precisa fazer reserva no Jundu Prumirim?",
        answer: "Para garantir melhor atendimento, recomendamos consultar a disponibilidade da unidade pelo canal oficial de reservas."
      },
      {
        question: "Como fazer uma reserva no Jundu Prumirim?",
        answer: "Você pode consultar disponibilidade e fazer sua reserva pelo canal oficial indicado nesta página."
      },
      {
        question: "Como chegar ao Jundu Prumirim?",
        answer: "Utilize o botão “Como chegar” nesta página para abrir a localização oficial da unidade no Google Maps."
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
      image: "/images/units/praia-grande/praia-grande-ambiente-gastrobar.avif",
      video: "https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/jundogastro.mp4"
    },
    
    gastronomy: {
      title: "Novas técnicas, mesma essência.",
      text: "Aqui, a culinária do Jundu se expande. Ingredientes locais ganham contornos modernos com a integração de técnicas asiáticas e influências diversas, compondo um menu arrojado. O bar oferece uma seleção vibrante de drinks para acompanhar os diferentes ritmos da casa.",
      mainImage: "/images/units/praia-grande/praia-grande-gastronomia-principal.avif",
      secondaryImage1: "/images/units/praia-grande/praia-grande-coquetelaria.avif",
      secondaryImage2: "/images/units/praia-grande/praia-grande-ambiente-gastrobar.avif"
    },
    
    gallery: [
      { src: "/images/units/praia-grande/praia-grande-galeria-01.avif", alt: "Ambiente principal e salão do Espaço Jundu Gastrobar" },
      { src: "/images/units/praia-grande/praia-grande-galeria-02.avif", alt: "Área externa e fachada do Jundu Praia Grande" },
      { src: "/images/units/praia-grande/praia-grande-galeria-03.avif", alt: "Detalhes da arquitetura e decoração interna" },
      { src: "/images/units/praia-grande/praia-grande-galeria-04.avif", alt: "Experiência gastronômica e mesa posta" },
      { src: "/images/units/praia-grande/praia-grande-galeria-05.avif", alt: "Encontros e momentos no Jundu Praia Grande" }
    ],
    
    faq: [
      {
        question: "Onde fica o Jundu Praia Grande?",
        answer: "O Espaço Jundu Gastrobar está localizado na Praia Grande, em Ubatuba - SP."
      },
      {
        question: "O Jundu Praia Grande recebe eventos?",
        answer: "Sim, o Espaço Jundu Gastrobar é o nosso maior restaurante e possui estrutura pensada para acomodar comemorações e confraternizações."
      },
      {
        question: "Precisa fazer reserva no Jundu Praia Grande?",
        answer: "Para garantir melhor atendimento, recomendamos consultar a disponibilidade da unidade pelo canal oficial de reservas."
      },
      {
        question: "Como fazer uma reserva no Jundu Praia Grande?",
        answer: "Você pode consultar disponibilidade e fazer sua reserva pelo canal oficial indicado nesta página."
      },
      {
        question: "Como chegar ao Jundu Praia Grande?",
        answer: "Utilize o botão “Como chegar” nesta página para abrir a localização oficial da unidade no Google Maps."
      }
    ],
    
    seo: {
      title: "Jundu Praia Grande | Gastrobar em Ubatuba",
      description: "Gastronomia dinâmica, coquetelaria e um ambiente vibrante no Jundu Praia Grande. O espaço ideal para encontros e celebrações em Ubatuba."
    }
  }
};
