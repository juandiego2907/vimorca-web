import { processSteps } from "../data/content";

function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Nuestro proceso</p>
            <h2>
              Del concepto <span className="accent">a la obra entregada.</span>
            </h2>
          </div>
          <p>
            Una metodología clara mantiene cada proyecto bajo control y le da visibilidad de
            principio a fin.
          </p>
        </div>

        <ol className="steps" data-reveal>
          {processSteps.map((step) => (
            <li className="step" key={step.title} style={{ listStyle: "none" }}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
