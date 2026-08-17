const services = [
  {
    number: "01",
    title: "Construcción residencial",
    description:
      "Construcción integral de viviendas y proyectos residenciales, desde la planificación hasta la entrega.",
  },
  {
    number: "02",
    title: "Construcción comercial",
    description:
      "Espacios comerciales y corporativos diseñados para responder a las necesidades de cada proyecto.",
  },
  {
    number: "03",
    title: "Remodelación",
    description:
      "Transformamos espacios existentes mediante soluciones funcionales, modernas y de alta calidad.",
  },
  {
    number: "04",
    title: "Obras civiles",
    description:
      "Ejecución de obras civiles y proyectos de infraestructura con planificación y supervisión profesional.",
  },
];

function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="section-header">
        <div>
          <p className="section-label">NUESTROS SERVICIOS</p>
          <h2>
            Soluciones para
            <br />
            <span>cada proyecto.</span>
          </h2>
        </div>

        <p className="section-intro">
          Desde pequeñas remodelaciones hasta proyectos de gran escala,
          acompañamos cada etapa del proceso constructivo.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <span className="service-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;