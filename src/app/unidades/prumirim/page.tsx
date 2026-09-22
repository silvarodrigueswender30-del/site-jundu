import { Metadata } from "next";
import { unitsData } from "@/data/units";
import { UnitPage } from "@/components/units/unit-page";

const data = unitsData.prumirim;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://site-jundu.vercel.app";

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  alternates: {
    canonical: `${SITE_URL}/unidades/prumirim`,
  },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: `${SITE_URL}/unidades/prumirim`,
    type: "website",
    images: [
      {
        url: data.hero.image,
        width: 1200,
        height: 630,
        alt: data.name,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
    images: [data.hero.image],
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
