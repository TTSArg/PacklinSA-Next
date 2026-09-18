const stats = [
  { value: "+45", label: "Años de trayectoria" },
  { value: "+5000", label: "Piezas fabricadas" },
  { value: "18", label: "Sectores atendidos" },
  { value: "100%", label: "Personalización" },
];

const services = [
  {
    title: "Forjado",
    text: "Producción de piezas ferrosas con resistencia y durabilidad para aplicaciones industriales exigentes.",
  },
  {
    title: "Estampado",
    text: "Procesos optimizados para piezas de alta repetición y precisión dimensional.",
  },
  {
    title: "Mecanizado",
    text: "Acabado y ajustes finos para piezas terminadas con alta exigencia técnica.",
  },
];

const sectors = [
  "Petrolera",
  "Agrícola",
  "Automotriz",
  "Transporte",
];

const products = [
  {
    title: "Punta de eje",
    category: "Sector automotriz",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conjunto de enganche",
    category: "Transporte",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gancho de tracción",
    category: "Agroindustria",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <span className="brand-mark">MI</span>
            <span className="brand-text">Metal Industrial</span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#empresa">Empresa</a>
            <a href="#servicios">Servicios</a>
            <a href="#productos">Productos</a>
            <a href="#sectores">Sectores</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="btn btn-primary" href="#contacto">
            Consultar
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Más de 40 años de experiencia</p>
            <h1>Soluciones industriales en piezas metálicas para cada sector.</h1>
            <p className="lead">
              Fabricamos piezas forjadas, estampadas y mecanizadas con calidad,
              precisión y capacidad de producción para industrias automotriz,
              agro, transporte y petrolera.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#contacto">
                Solicitar presupuesto
              </a>
              <a className="btn btn-secondary" href="#productos">
                Ver productos
              </a>
            </div>

            <ul className="hero-badges" aria-label="Atributos clave">
              <li>Producción a medida</li>
              <li>Control de calidad</li>
              <li>Atención comercial ágil</li>
            </ul>
          </div>

          <div className="hero-media" aria-label="Imagen de fábrica">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
              alt="Operarios y maquinaria en planta industrial de fabricación metálica"
            />
            <div className="hero-card">
              <strong>3500 m² cubiertos</strong>
              <span>Planta con capacidad productiva para grandes volúmenes.</span>
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

      <section id="empresa" className="section intro">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Quiénes somos</p>
            <h2>Empresa con experiencia sólida en forjado y mecanizado de precisión.</h2>
          </div>
          <div>
            <p>
              Somos una empresa industrial argentina dedicada a la fabricación de
              piezas ferrosas y piezas terminadas para distintas industrias.
              Trabajamos con procesos de forjado, estampado, mecanizado y
              soluciones a medida adaptadas a cada necesidad del cliente.
            </p>
            <p>
              Nuestra misión es brindar productos confiables, tiempos de respuesta
              eficientes y una relación comercial clara con foco en la calidad, la
              precisión y la continuidad.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Servicios</p>
            <h2>Capacidades técnicas para producción industrial.</h2>
          </div>

          <div className="cards-grid three-grid">
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

      <section id="sectores" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Sectores</p>
            <h2>Atención especializada por industria.</h2>
          </div>

          <div className="cards-grid four-grid">
            {sectors.map((sector) => (
              <article key={sector} className="card sector-card">
                <h3>{sector}</h3>
                <p>
                  Soluciones diseñadas para condiciones reales de trabajo,
                  exigencia técnica y continuidad operativa.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Productos destacados</p>
            <h2>Piezas fabricadas para aplicaciones reales.</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.title} className="product-card">
                <img src={product.image} alt={product.title} />
                <div className="product-body">
                  <span className="tag">{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>
                    Fabricación reforzada para uso en componentes críticos y
                    procesos de alta demanda.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Proceso</p>
            <h2>Cómo trabajamos con cada cliente.</h2>
          </div>

          <div className="timeline">
            <article>
              <span>01</span>
              <h3>Consulta</h3>
              <p>Analizamos necesidad, materiales, tolerancias y volumen.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Diseño</h3>
              <p>Definimos especificaciones técnicas y alternativas de fabricación.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Producción</h3>
              <p>Controlamos procesos con trazabilidad y cumplimiento de calidad.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Entrega</h3>
              <p>Garantizamos tiempos de entrega y comunicación durante todo el proceso.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow dark">Necesitás una solución a medida</p>
            <h2>Hablemos de tu proyecto.</h2>
          </div>
          <a className="btn btn-primary" href="#contacto">
            Solicitar presupuesto
          </a>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Preguntas frecuentes.</h2>
          </div>

          <div className="faq-list">
            <details open>
              <summary>¿Fabrican piezas según requerimientos específicos?</summary>
              <p>
                Sí. Podemos trabajar con especificaciones técnicas, planos,
                materiales y volúmenes personalizados.
              </p>
            </details>
            <details>
              <summary>¿Atenden distintos sectores industriales?</summary>
              <p>
                Atendemos principalmente automotriz, transporte, agro, petrolero
                y otros sectores con necesidad industrial.
              </p>
            </details>
            <details>
              <summary>¿Pueden asesorar en diseño o mejora de piezas?</summary>
              <p>
                Ofrecemos orientación técnica para evaluar viabilidad de
                producción, material y proceso de fabricación.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer id="contacto" className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#inicio" className="brand footer-brand" aria-label="Ir al inicio">
              <span className="brand-mark">MI</span>
              <span className="brand-text">Metal Industrial</span>
            </a>
            <p>
              Fabricación industrial con foco en calidad, precisión y atención
              comercial cercana.
            </p>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>Paulo VI 669, Villa Gdor. Gálvez, Santa Fe</li>
              <li>
                <a href="tel:+543413819726">+54 341 381-9726</a>
              </li>
              <li>
                <a href="mailto:info@metalindustrial.com.ar">info@metalindustrial.com.ar</a>
              </li>
              <li>Lunes a viernes · 7:00 a 16:00 hs</li>
            </ul>
          </div>

          <div>
            <h3>Navegación</h3>
            <ul className="footer-links">
              <li><a href="#empresa">Empresa</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Metal Industrial. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
