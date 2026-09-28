import { Metadata } from "next";
import { unitsData } from "@/data/units";
import { UNIDADES_JUNDU } from "@/data/unidades";
import { UnitPage } from "@/components/units/unit-page";

const data = unitsData.itagua;
const unidadeConfig = UNIDADES_JUNDU.itagua;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://site-jundu.vercel.app";

export const metadata: Metadata = {
  title: "Itaguá — Ubatuba",
  description: "Conheça o Jundu Itaguá em Ubatuba. Aproveite nossa gastronomia autoral, vista mar exclusiva e ambiente sofisticado no coração da cidade. Reserve sua mesa ou veja o cardápio.",
  alternates: {
    canonical: `${SITE_URL}/unidades/itagua`,
  },
  openGraph: {
    title: "Jundu Itaguá | Ubatuba | Gastronomia e Sofisticação",
    description: "Ambiente exclusivo na unidade Itaguá em Ubatuba. Gastronomia caiçara autoral, coquetelaria sofisticada e atmosfera única.",
    url: `${SITE_URL}/unidades/itagua`,
    siteName: "Jundu Ubatuba",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/units/jundu-unit-itagua.avif",
        width: 1200,
        height: 630,
        alt: "Jundu Itaguá Ubatuba",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jundu Itaguá | Ubatuba",
    description: "Gastronomia autoral e atmosfera sofisticada no coração de Ubatuba.",
    images: ["/images/units/jundu-unit-itagua.avif"],
  }
};

export default function ItaguaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": data.officialName,
    "url": `${SITE_URL}/unidades/itagua`,
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:00"
      }
    ],
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
        "item": `${SITE_URL}/unidades/itagua`
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
