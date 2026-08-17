function About() {
  return (
    <section className="about section" id="nosotros">
      <div className="about-grid">
        <div className="about-title">
          <p className="section-label">SOBRE NOSOTROS</p>

          <h2>
            Construimos con
            <br />
            <span>propósito.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            Convertimos ideas en espacios que perduran. Nuestro equipo
            acompaña cada proyecto con una visión integral de diseño,
            planificación y construcción.
          </p>

          <p>
            Trabajamos junto a nuestros clientes para entender sus objetivos,
            optimizar cada etapa y entregar soluciones que combinan calidad,
            funcionalidad y atención al detalle.
          </p>

          <a href="#contacto" className="text-link">
            Conoce más sobre nosotros <span>↗</span>
          </a>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <strong>10+</strong>
          <span>Años de experiencia</span>
        </div>

        <div className="stat">
          <strong>120+</strong>
          <span>Proyectos realizados</span>
        </div>

        <div className="stat">
          <strong>10</strong>
          <span>Profesionales</span>
        </div>

        <div className="stat">
          <strong>98%</strong>
          <span>Clientes satisfechos</span>
        </div>
      </div>
    </section>
  );
}

export default About;