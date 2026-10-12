import Image from "next/image";

const stats = [
  { value: "20", label: "Años en la industria" },
  { value: "27", label: "Empresas activas" },
  { value: "Tu pedido en 1 semana.", label: "Plazo de entrega estándar" },
];

const services = [
  {
    title: "Matriz exclusiva por cliente",
    text: "Cada cliente tiene su propia matriz. No hay producción genérica ni moldes compartidos.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" /></svg>,
  },
  {
    title: "Red productiva propia",
    text: "20 años de vínculos con matriceros y proveedores de materia prima, listos cuando se necesitan.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7 6h10M6.5 7.5l4 8M17.5 7.5l-4 8" /></svg>,
  },
  {
    title: "Flexibilidad de materia prima",
    text: "Si preferís proveer vos mismo el latón, te lo facilitamos. La calidad queda garantizada desde el origen.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m4 9 2-4h12l2 4-2 10H6L4 9Z" /><path d="M4 9h16M8 9l1 10M16 9l-1 10" /></svg>,
  },
  {
    title: "Capacidad de respuesta",
    text: "Producción sostenida incluso en contextos críticos: pandemia, subas o escasez de materia prima.",
    icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 5 14h6l-1 8 9-13h-6l1-7Z" /></svg>,
  },
];

const sectors = [
  {
    title: "Válvulas y reguladores",
    text: "Piezas de latón fundido con buena resistencia a la corrosión y roscas estables, para un cierre hermético y un funcionamiento confiable en el tiempo.",
  },
  {
    title: "GNC",
    text: "Conexiones y conjuntos de gas en latón, con roscas precisas y buena estanqueidad. Es un material de baja generación de chispas por fricción.",
  },
  {
    title: "Matafuegos",
    text: "Componentes para válvulas y conexiones que mantienen el ajuste y el sellado, con resistencia a la corrosión para responder cuando se los necesita.",
  },
  {
    title: "Bombas",
    text: "Cuerpos y conexiones de latón con buena resistencia al desgaste y a la corrosión por agua, que conservan su geometría en uso continuo.",
  },
  {
    title: "Cerrajería",
    text: "El latón combina baja fricción, resistencia al desgaste y buena terminación superficial, para herrajes de accionamiento suave y larga vida útil.",
  },
  {
    title: "Sanitarios",
    text: "Piezas para conexiones y mecanismos con resistencia a la corrosión por agua, estanqueidad en las uniones y terminaciones cuidadas.",
  },
];

const history = [
  ["2006 - Fundación", "José Luis Ramírez inicia Packlin S.A."],
  ["De inquilinos a dueños", "Pasar a ser propietarios del galpón donde operamos."],
  ["Pandemia 2020", "Parte de la cadena de oxigenoterapia cuando el circuito habitual no daba respuesta."],
  ["Hoy", "20 años de trayectoria y 27 empresas activas."],
];

const clients = [
  ["Acytra S.A.I.C.", "https://acytra.com/"], ["8 Bloq", "https://www.8bloq.com.ar/"],
  ["Casa Jarse", "https://casajarse.com/"], ["DAS Tecnología", "https://dastecnologiasrl.com/"],
  ["Emerald S.A.", "https://www.emeraldargentina.com.ar/"], ["E.Q.A. S.A.I.C.", "https://eqa.com.ar/"],
  ["GNC - Macro", "https://macrogas.vercel.app/"], ["Incen Sanit S.A.", "https://www.incen-sanit.com.ar/"],
  ["Interlaken", "https://www.interlaken.com.ar/"], ["Industrias EPTA", "https://epta.com.ar/"],
  ["Klinger S.A.", "https://klinger.com.ar/"], ["Lacar Incendios", "https://www.lacarincendio.com.ar/"],
  ["Metalúrgica ATK", "https://atk.com.ar/"], ["Rowa S.A.", "https://bombasrowa.com/"],
  ["Rebron S.R.L.", "https://rebron.com.ar/"], ["Gaspetro", "https://www.gaspetro.com.ar/"],
  ["Vaportec", "https://vaportec.com.ar/"], ["Vanguard Lock", "https://www.vanguardlock.com/"],
  ["Yaltres S.R.L.", "https://www.yaltres.com/"], ["Grupo Tornado S.A.", "https://intor.com.ar/"],
  ["Herrajes Galo", "https://www.herrajesgalo.com.ar/"], ["Alcarduplex S.A.", "https://alcarduplex.com/"],
  ["Metal Mec del Oeste", "https://metalmecdeloeste.com.ar/"], ["Talleres Paz", "https://www.tallerespaz.com.ar/"],
  ["Varela Peric S.A.", "https://www.instagram.com/varelaperic/"], ["Garcia Conde", ""], ["Paul", ""],
];

const products = [
  "Válvulas de latón", "Cámaras de agua y gas", "Pestillos y codos",
  "Nueces, tuercas y robinetes", "Piezas cónicas", "Discos a medida", "Media unión",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <span className="brand-logo-shell">
              <Image className="brand-logo" src="/logo.png" alt="Packlin" width={44} height={44} priority />
            </span>
            <span className="brand-text">Packlin</span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#empresa">Nosotros</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a href="#productos">Productos</a>
            <a href="#clientes">Clientes</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="btn btn-primary" href="#contacto">
            Solicitar cotización
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Forjado y fundición de piezas de latón</p>
            <h1>Precisión industrial, soluciones a medida.</h1>
            <p className="lead">
              Fabricamos piezas de latón a medida para la industria en Argentina,
              somos parte de la cadena de valor y cuidamos detalladamente la calidad en cada etapa
            </p>
          </div>

          <div className="hero-media" aria-label="Imagen de fábrica">
            <img
              src="/1.jpg"
              alt="Packlin producción y piezas de latón"
            />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Estadísticas de la empresa">
        <div className="container stats-grid">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <div className="trustbar">
        <div className="container trustbar-grid">
          <span className="trust-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 8h8M8 12h8M8 16h4" />
            </svg>
            <span>Matriz exclusiva por cliente</span>
          </span>
          <span className="trust-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h11v11H3zM14 10h4l3 3v5h-7z" />
              <circle cx="7.5" cy="18" r="1.5" />
              <circle cx="17.5" cy="18" r="1.5" />
            </svg>
            <span>Transporte propio, sin tercerizar</span>
          </span>
          <span className="trust-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3" />
              <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 4.8" />
            </svg>
            <span>Atención directa de los dueños</span>
          </span>
          <span className="trust-item">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Continuidad probada en contextos críticos</span>
          </span>
        </div>
      </div>

      <section id="empresa" className="section intro">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Quiénes somos</p>
            <h2>Una empresa comprometida con la calidad.</h2>
          </div>
          <div>
            <p>
              Packlin nace en 2006, fundada por José Luis Ramírez. 
              Desde entonces se ha conformado un equipo que en cada pedido
              aporta a la cadena de valor de la empresa y de los clientes.

              Es estos años hemos construido una red de técnicos y proveedores de confianza,
              con la que podemos garantizar soporte, calidad y cercanía
            </p>
            <p>
              Asumimos el constante desafío de mejorar y sostenernos en el mercado,
              con el proposito de que esta empresa siga generando confianza 
              en las próximas generaciones
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Nuestra historia</p>
            <h2>Una trayectoria construida con trabajo y continuidad.</h2>
          </div>
          <div className="history-list">
            {history.map(([title, text]) => (
              <article key={title}><strong>{title}</strong><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Por qué trabajar con Packlin</p>
            <h2>Cuatro razones para elegirnos.</h2>
          </div>

          <div className="cards-grid four-grid">
            {services.map((service) => (
              <article key={service.title} className="card feature-card">
                <div className="feature-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Una fábrica, muchas industrias</p>
            <h2>Cada rubro nos desafía distinto, y esa experiencia nos hace más versátiles e innovadores</h2>
          </div>

          <div className="cards-grid four-grid">
            {sectors.map((sector) => (
              <article key={sector.title} className="card sector-card">
                <h3>{sector.title}</h3>
                <p>{sector.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Qué fabricamos</p>
            <h2>Piezas de latón a medida.</h2>
          </div>

          <div className="product-list">
            {products.map((product) => <span key={product} className="tag">{product}</span>)}
          </div>
          <div className="callout">
            <strong>Estamos ampliando nuestra cartera.</strong>
            <p>Sumamos empresas de climatización y nos reencontramos con clientes de siempre. Si trabajás en el rubro, conversemos.</p>
          </div>
        </div>
      </section>

      <section id="proceso" className="section process">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Un proceso de planta, con control en cada etapa.</h2>
          </div>

          <div className="timeline">
            <article>
              <span>01</span>
              <h3>Consulta técnica</h3>
              <p>Recibimos la especificación: pieza, medida y cantidad.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Fundición o forjado</h3>
              <p>Lingote 60/40 o barra/perfil, según la pieza.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Terminación y control</h3>
              <p>Granallado, rotofinish y control de calidad por lote.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Entrega</h3>
              <p>Con transporte propio, acercamos tu pedido.</p>
            </article>
          </div>
        </div>
      </section>

     
      <section id="clientes" className="section faq-section" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Quiénes confían en Packlin</p>
            <h2 id="faq-title">Años de experiencia se traducen en diversidad, adaptabilidad e innovación </h2>
          </div>

          <div className="clients-grid">
            {clients.map(([name, url]) => url ? <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a> : <span key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="section quote-section" aria-labelledby="quote-title">
        <div className="container quote-layout">
          <div>
            <p className="eyebrow">Cotización</p>
            <h2 id="quote-title">Conversemos sobre tu próximo pedido.</h2>
            <p>Contanos qué pieza necesitás, en qué cantidad y para cuándo. Atención personalizada.</p>
            <p className="quote-note">
              Podés llamarnos al <a href="tel:+541133101085">011 3310-1085</a>.
            </p>
          </div>
          <form className="quote-form">
            <label>Empresa<input name="empresa" placeholder="Nombre de tu empresa" /></label>
            <label>Pieza / material<input name="pieza" placeholder="Ej: Válvula de latón 60/40" /></label>
            <label>Cantidad<input name="cantidad" placeholder="Ej: 200 unidades" /></label>
            <label>Contacto<input name="contacto" placeholder="Teléfono, WhatsApp o email" /></label>
            <button className="btn btn-primary" type="submit">Enviar consulta</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#inicio" className="brand footer-brand" aria-label="Ir al inicio">
              <span className="brand-logo-shell">
                <Image className="brand-logo" src="/logo.png" alt="Packlin" width={44} height={44} />
              </span>
              <span className="brand-text">Packlin S.A.</span>
            </a>
            <p>
              Forjado y fundición de piezas de latón a medida desde 2006. Parte de la cadena de valor de la industria, con atención directa y transporte propio.
            </p>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Leonardo+Euler+2435%2C+B1613+Los+Polvorines%2C+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leonardo Euler 2435, B1613 Los Polvorines, Provincia de Buenos Aires
                </a>
              </li>
              <li><a href="tel:+541133101085">011 3310-1085</a></li>
              </ul>
          </div>

          <div>
            <h3>Navegación</h3>
            <ul className="footer-links">
              <li><a href="#empresa">Nosotros</a></li>
              <li><a href="#proceso">Cómo trabajamos</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Packlin S.A. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
