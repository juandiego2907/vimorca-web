function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          INGENIERÍA · ARQUITECTURA · CONSTRUCCIÓN
        </p>

        <h1>
         Su inversion en el presente,
          <br />
          tiene su futuro <span>asegurado.</span>
        </h1>

        <p className="hero-description">
          Asesoría, diseño, construcción y ejecución de proyectos integrales
          con calidad, experiencia y responsabilidad.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="button button-primary">
            Solicitar una asesoría
          </a>

          <a href="#servicios" className="button button-secondary">
            Conocer nuestros servicios
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div>
          <strong>CALIDAD</strong>
          <span>En cada proyecto</span>
        </div>

        <div>
          <strong>EXPERIENCIA</strong>
          <span>Soluciones integrales</span>
        </div>

        <div>
          <strong>CONFIANZA</strong>
          <span>Construya con VIMORCA</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;