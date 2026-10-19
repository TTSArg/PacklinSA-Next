import type { Metadata } from "next";
import SectorPage from "../../sector-page";
import { siteUrl } from "../../site-config";

export const metadata: Metadata = {
  title: "Válvulas y piezas de latón a medida",
  description:
    "Packlin fabrica piezas y componentes de latón a medida para válvulas y reguladores, con matrices exclusivas y control por lote.",
  alternates: {
    canonical: new URL("/productos/valvulas-de-laton", siteUrl),
  },
};

export default function BrassValvesPage() {
  return (
    <SectorPage
      eyebrow="Válvulas y reguladores"
      title="Piezas de latón para válvulas, hechas a medida"
      description="Fabricación de componentes de latón para válvulas y reguladores, según la especificación de cada cliente."
      paragraphs={[
        "Packlin trabaja piezas de latón fundido o forjado para aplicaciones industriales. Cada desarrollo parte de la pieza, las medidas y la cantidad requeridas.",
        "Las matrices se asignan a cada cliente. El proceso contempla terminación y control de calidad por lote para acompañar la continuidad de producción.",
      ]}
      image="/Fotos/LUC_9773.jpg"
      imageAlt="Lote de componentes metálicos fabricados en la planta de Packlin."
    />
  );
}