import { Metadata } from "next";
import { unitsData } from "@/data/units";
import { UNIDADES_JUNDU } from "@/data/unidades";
import { UnitPage } from "@/components/units/unit-page";

const data = unitsData.prumirim;
const unidadeConfig = UNIDADES_JUNDU.prumirim;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://site-jundu.vercel.app";

export const metadata: Metadata = {
  title: "Prumirim — Ubatuba",
  description: "Conheça o Jundu Prumirim em Ubatuba. Aproveite nossa gastronomia autoral, vista mar exclusiva e ambiente pé na areia na Praia do Prumirim. Reserve sua mesa ou veja o cardápio.",
  alternates: {
    canonical: `${SITE_URL}/unidades/prumirim`,
  },
  openGraph: {
    title: "Jundu Prumirim | Ubatuba | Gastronomia e Vista Mar",
    description: "Ambiente exclusivo na Praia do Prumirim em Ubatuba. Gastronomia caiçara autoral, coquetéis refrescantes e pé na areia.",
    url: `${SITE_URL}/unidades/prumirim`,
    siteName: "Jundu Ubatuba",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/units/jundu-unit-prumirim.avif",
        width: 1200,
        height: 630,
        alt: "Jundu Prumirim Ubatuba",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jundu Prumirim | Ubatuba",
    description: "Autêntico restaurante pé na areia na Praia do Prumirim em Ubatuba.",
    images: ["/images/units/jundu-unit-prumirim.avif"],
  }
};

export default function PrumirimPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": data.officialName,
    "url": `${SITE_URL}/unidades/prumirim`,
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
      "streetAddress": data.address,
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
        "item": `${SITE_URL}/unidades/prumirim`
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
