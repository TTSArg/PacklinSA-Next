import type { Metadata } from "next";
import SectorPage from "../sector-page";
import { siteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Piezas de latón para GNC",
  description:
    "Conexiones y conjuntos de latón para aplicaciones de GNC, fabricados a medida por Packlin según planos y especificaciones.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: new URL("/gnc", siteUrl),
    siteName: "Packlin S.A.",
    title: "Piezas de latón para GNC | Packlin S.A.",
    description:
      "Conexiones y conjuntos de gas en latón, fabricados según planos y especificaciones para proyectos de GNC.",
    images: [
      {
        url: "/Fotos/LUC_9954.jpg",
        alt: "Colada de metal fundido como parte del proceso de fabricación de Packlin.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piezas de latón para GNC | Packlin S.A.",
    description:
      "Conexiones y conjuntos de gas en latón, fabricados según planos y especificaciones para proyectos de GNC.",
    images: ["/Fotos/LUC_9954.jpg"],
  },
  alternates: {
    canonical: new URL("/gnc", siteUrl),
  },
};

export default function GncPage() {
  return (
    <SectorPage
      eyebrow="Aplicaciones industriales"
      title="Piezas de latón para GNC"
      description="Conexiones y conjuntos de gas en latón, desarrollados según las medidas y especificaciones de cada proyecto."
      paragraphs={[
        "Fabricamos componentes de latón para el sector GNC con atención a las roscas y al ajuste de las uniones. El alcance de cada trabajo se define junto con el cliente a partir de sus planos o muestras.",
        "Para solicitar una cotización, compartinos el tipo de pieza, las dimensiones, el material requerido y la cantidad estimada.",
      ]}
      image="/Fotos/LUC_9954.jpg"
      imageAlt="Colada de metal fundido en un molde durante el proceso de fabricación."
    />
  );
}