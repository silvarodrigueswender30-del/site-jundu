import { Metadata } from "next";
import { unitsData } from "@/data/units";
import { UNIDADES_JUNDU } from "@/data/unidades";
import { UnitPage } from "@/components/units/unit-page";

const data = unitsData["praia-grande"];
const unidadeConfig = UNIDADES_JUNDU.praiaGrande;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://site-jundu.vercel.app";

export const metadata: Metadata = {
  title: "Praia Grande — Ubatuba",
  description: "Conheça o Espaço Jundu Gastrobar na Praia Grande em Ubatuba. Aproveite nossa gastronomia autoral, vista mar exclusiva e ambiente vibrante. Reserve sua mesa ou veja o cardápio.",
  alternates: {
    canonical: `${SITE_URL}/unidades/praia-grande`,
  },
  openGraph: {
    title: "Jundu Praia Grande | Ubatuba | Gastrobar e Vista Mar",
    description: "Ambiente vibrante no Espaço Jundu Gastrobar em Ubatuba. Gastronomia autoral, coquetelaria sofisticada e salões para eventos.",
    url: `${SITE_URL}/unidades/praia-grande`,
    siteName: "Jundu Ubatuba",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/units/jundu-unit-praia-grande.avif",
        width: 1200,
        height: 630,
        alt: "Jundu Praia Grande Ubatuba",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jundu Praia Grande | Ubatuba",
    description: "Gastrobar vibrante com gastronomia autoral na Praia Grande em Ubatuba.",
    images: ["/images/units/jundu-unit-praia-grande.avif"],
  }
};

export default function PraiaGrandePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": data.officialName,
    "url": `${SITE_URL}/unidades/praia-grande`,
    "image": [
      `${SITE_URL}${data.hero.image}`,
      `${SITE_URL}${data.gallery[0].src}`
    ],
    "sameAs": [
      unidadeConfig.instagramUrl
    ],
    ...(data.phone && { "telephone": data.phone }),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ubatuba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "acceptsReservations": true
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Unidades",
        "item": `${SITE_URL}#unidades`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": `${SITE_URL}/unidades/praia-grande`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <UnitPage data={data} />
    </>
  );
}
