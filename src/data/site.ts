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
    { label: "Unidades", href: "#unidades" },
    { label: "Gastronomia", href: "#gastronomia" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contato", href: "#contato" },
  ],
  ctas: {
    primary: { label: "Conheça nossas unidades", href: "#unidades" },
    reserve: { label: "Reservar", href: "#reserva" },
    video: { label: "Assistir à experiência" },
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
  },
};
