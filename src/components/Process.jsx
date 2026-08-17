const steps = [
  {
    number: "01",
    title: "Consultamos",
    description:
      "Escuchamos tus necesidades, objetivos y expectativas para entender realmente el proyecto.",
  },
  {
    number: "02",
    title: "Planificamos",
    description:
      "Desarrollamos una estrategia clara con presupuesto, tiempos, materiales y recursos.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Nuestro equipo ejecuta cada etapa con supervisión, coordinación y atención al detalle.",
  },
  {
    number: "04",
    title: "Entregamos",
    description:
      "Finalizamos el proyecto asegurándonos de que cada detalle cumpla con nuestros estándares.",
  },
];

function Process() {
  return (
    <section className="process section">
      <div className="section-header">
        <div>
          <p className="section-label">NUESTRO PROCESO</p>

          <h2>
            Del concepto
            <br />
            <span>a la realidad.</span>
          </h2>
        </div>

        <p className="section-intro">
          Una metodología clara nos permite mantener cada proyecto bajo
          control y ofrecer una experiencia transparente de principio a fin.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <span>{step.number}</span>

            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;