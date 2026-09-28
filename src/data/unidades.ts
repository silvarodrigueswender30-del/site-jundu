export interface UnidadeData {
  id: string;
  nome: string;
  slug: string;
  cardapioUrl: string;
  reservaUrl: string;
  instagramUrl: string;
  subtitulo?: string;
}

export const UNIDADES_JUNDU: Record<string, UnidadeData> = {
  praiaGrande: {
    id: "praia-grande",
    nome: "Praia Grande",
    slug: "/unidades/praia-grande",
    cardapioUrl: "https://livemenu.app/menu/67ec29c2b2054486ed106e72",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29c2b2054486ed106e72",
    instagramUrl: "https://www.instagram.com/espacojundu?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    subtitulo: "Espaço Gastrobar com vista mar e gastronomia autoral"
  },
  itagua: {
    id: "itagua",
    nome: "Itaguá",
    slug: "/unidades/itagua",
    cardapioUrl: "https://livemenu.app/menu/67ec29ba04169407e5ff59ec",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29ba04169407e5ff59ec",
    instagramUrl: "https://www.instagram.com/jundu_restaurante?igshid=MzMyNGUyNmU2YQ%3D%3D",
    subtitulo: "Lounge Bar elegante no coração de Ubatuba"
  },
  prumirim: {
    id: "prumirim",
    nome: "Prumirim",
    slug: "/unidades/prumirim",
    cardapioUrl: "https://livemenu.app/menu/67ec29cab2054486ed106ecf",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29cab2054486ed106ecf",
    instagramUrl: "https://www.instagram.com/jundupraiabar?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    subtitulo: "Praia Bar autêntico pé na areia"
  }
};
