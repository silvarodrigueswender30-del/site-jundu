export interface UnidadeData {
  id: string;
  nome: string;
  slug: string;
  cardapioUrl: string;
  reservaUrl: string;
  subtitulo?: string;
}

export const UNIDADES_JUNDU: Record<string, UnidadeData> = {
  praiaGrande: {
    id: "praia-grande",
    nome: "Praia Grande",
    slug: "/unidades/praia-grande",
    cardapioUrl: "https://livemenu.app/menu/67ec29c2b2054486ed106e72",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29c2b2054486ed106e72",
    subtitulo: "Espaço Gastrobar com vista mar e gastronomia autoral"
  },
  itagua: {
    id: "itagua",
    nome: "Itaguá",
    slug: "/unidades/itagua",
    cardapioUrl: "https://livemenu.app/menu/67ec29ba04169407e5ff59ec",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29ba04169407e5ff59ec",
    subtitulo: "Lounge Bar elegante no coração de Ubatuba"
  },
  prumirim: {
    id: "prumirim",
    nome: "Prumirim",
    slug: "/unidades/prumirim",
    cardapioUrl: "https://livemenu.app/menu/67ec29cab2054486ed106ecf",
    reservaUrl: "https://reservation-widget.tagme.com.br/smartlink/67ec29cab2054486ed106ecf",
    subtitulo: "Praia Bar autêntico pé na areia"
  }
};
