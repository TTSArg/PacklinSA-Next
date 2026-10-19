import Image from "next/image";
import Link from "next/link";

type SectorPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export default function SectorPage({
  eyebrow,
  title,
  description,
  paragraphs,
  image,
  imageAlt,
}: SectorPageProps) {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Packlin, volver al inicio">
            <span className="brand-logo-shell">
              <Image className="brand-logo" src="/logo.png" alt="Packlin" width={44} height={44} priority />
            </span>
            <span className="brand-text">Packlin S.A.</span>
          </Link>
          <Link className="btn btn-secondary" href="/#productos">Ver productos</Link>
        </div>
      </header>

      <section className="section intro">
        <div className="container">
          <p className="eyebrow dark">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="two-col">
            <div className="history-list">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="photo-frame sector-image">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          </div>
          <div className="callout">
            <strong>¿Tenés un plano, una muestra o una especificación?</strong>
            <p>Conversamos sobre la pieza, el material y la cantidad para preparar una cotización.</p>
            <Link className="btn btn-primary" href="/#contacto">Solicitar cotización</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-bottom">
            <Link href="/">Volver a Packlin S.A.</Link>
        </div>
      </footer>
    </main>
  );
}