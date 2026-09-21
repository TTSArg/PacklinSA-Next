import Image from "next/image";
import logoPacklin from "./logoPacklin.png";

const stats = [
  { value: "20", label: "Años en la industria" },
  { value: "27", label: "Empresas activas" },
  { value: "9", label: "Personas en el equipo" },
  { value: "~1 sem.", label: "Plazo de entrega estándar" },
];

const services = [
  { title: "Matriz exclusiva por cliente", text: "Cada cliente tiene su propia matriz. No hay producción genérica ni moldes compartidos." },
  { title: "Red productiva propia", text: "20 años de vínculos con matriceros y proveedores de materia prima, listos cuando se necesitan." },
  { title: "Flexibilidad de materia prima", text: "Si preferís proveer vos mismo el latón, te lo facilitamos. La calidad queda garantizada desde el origen." },
  { title: "Capacidad de respuesta", text: "Producción sostenida incluso en contextos críticos: pandemia, subas o escasez de materia prima." },
];

const sectors = [
  "Válvulas y reguladores",
  "GNC",
  "Matafuegos",
  "Bombas",
  "Cerrajería",
  "Sanitarios",
];

const history = [
  ["2006 - Fundación", "José Luis Ramírez inicia Packlin S.A."],
  ["De inquilinos a dueños", "Pasar a ser propietarios del galpón donde operamos."],
  ["Pandemia 2020", "Parte de la cadena de oxigenoterapia cuando el circuito habitual no daba respuesta."],
  ["Hoy", "20 años de trayectoria, 27 empresas activas y un equipo de 9 personas."],
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
              <Image className="brand-logo" src={logoPacklin} alt="Packlin" width={44} height={44} priority />
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
            <p className="eyebrow">Forjado y fundición de piezas de latón · Desde 2006</p>
            <h1>Precisión industrial, con trato de empresa familiar.</h1>
            <p className="lead">
              Fabricamos piezas de latón a medida para empresas industriales argentinas,
              con matrices exclusivas por cliente, control de calidad en cada etapa y
              entregas en aproximadamente una semana.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#contacto">
                Solicitar cotización
              </a>
              <a className="btn btn-secondary" href="#productos">
                Ver qué fabricamos
              </a>
            </div>

            <ul className="hero-badges" aria-label="Atributos clave">
              <li>Matriz exclusiva por cliente</li>
              <li>Transporte propio</li>
              <li>Atención directa de los dueños</li>
            </ul>
          </div>

          <div className="hero-media" aria-label="Imagen de fábrica">
            <img
              src="/1.jpg"
              alt="Packlin producción y piezas de latón"
            />
            <div className="hero-card">
              <strong>Packlin en números</strong>
              <span>Una empresa familiar con oficio de planta y continuidad probada.</span>
            </div>
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
          <span>Matriz exclusiva por cliente</span>
          <span>Transporte propio, sin tercerizar</span>
          <span>Atención directa de los dueños</span>
          <span>Continuidad probada en contextos críticos</span>
        </div>
      </div>

      <section id="empresa" className="section intro">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Quiénes somos</p>
            <h2>Una empresa familiar con oficio de planta.</h2>
          </div>
          <div>
            <p>
              Packlin nace en 2006, fundada por José Luis Ramírez. Hoy somos nueve
              personas -siete en planta y dos en administración- y las decisiones
              siguen tomándolas quienes atienden cada pedido.
            </p>
            <p>
              Esa cercanía es también nuestra forma de trabajar: seguimos invirtiendo
              para mejorar y sostenernos en el mercado, con la meta de que la empresa
              continúe con las próximas generaciones.
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
            <h2>Cuatro razones que dan tranquilidad.</h2>
          </div>

          <div className="cards-grid four-grid">
            {services.map((service) => (
              <article key={service.title} className="card feature-card">
                <div className="icon">{service.title.charAt(0)}</div>
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
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Un proceso de planta, con control en cada etapa.</h2>
          </div>

          <div className="cards-grid four-grid">
            {sectors.map((sector) => (
              <article key={sector} className="card sector-card">
                <h3>{sector}</h3>
                <p>Fabricación a medida con control directo en cada pedido.</p>
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
            <p className="eyebrow">Proceso de trabajo</p>
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
              <p>Con transporte propio, en aproximadamente una semana.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow dark">Clientes</p>
            <h2>27 empresas industriales trabajan hoy con nosotros.</h2>
          </div>
          <a className="btn btn-primary" href="#contacto">
            Conocer clientes
          </a>
        </div>
      </section>

      <section id="clientes" className="section faq-section" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Quiénes confían en Packlin</p>
            <h2 id="faq-title">La mayoría llegó por recomendación.</h2>
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
            <p>Contanos qué pieza necesitás, en qué cantidad y para cuándo. Te respondemos con una cotización clara, sin vueltas.</p>
            <p className="quote-note">
              También podés llamarnos al <a href="tel:+541133101085">011 3310-1085</a>.
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
                <Image className="brand-logo" src={logoPacklin} alt="Packlin" width={44} height={44} />
              </span>
              <span className="brand-text">Packlin S.A.</span>
            </a>
            <p>
              Forjado y fundición de piezas de latón a medida, desde 2006.
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
              <li>Atención directa y transporte propio</li>
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
