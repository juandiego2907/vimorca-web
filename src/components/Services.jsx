import { useState } from "react";
import { serviceAreas } from "../data/content";

function Services() {
  const [activeId, setActiveId] = useState(serviceAreas[0].id);
  const area = serviceAreas.find((item) => item.id === activeId);

  const onKeyDown = (event) => {
    const index = serviceAreas.findIndex((item) => item.id === activeId);
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    const next = serviceAreas[(index + step + serviceAreas.length) % serviceAreas.length];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className="services section" id="servicios">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Servicios</p>
          <h2>Tres disciplinas. Un solo responsable.</h2>
          <p>
            Del estudio técnico a la ejecución con equipo propio. Elija un área y vea qué
            resolvemos y cómo lo hacemos.
          </p>
        </div>

        <div
          className="segmented"
          role="tablist"
          aria-label="Áreas de servicio"
          onKeyDown={onKeyDown}
        >
          {serviceAreas.map((item) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={item.id === activeId}
              aria-controls="service-panel"
              tabIndex={item.id === activeId ? 0 : -1}
              className="tab"
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className="service-panel"
          id="service-panel"
          role="tabpanel"
          aria-labelledby={`tab-${area.id}`}
          key={area.id}
        >
          <div className="service-body">
            <h3>{area.title}</h3>

            <div>
              <p className="service-label">¿Le pasa esto?</p>
              <ul className="problem-list">
                {area.problems.map((problem) => (
                  <li key={problem}>{problem}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="service-label">Cómo lo resolvemos</p>
              <p className="service-solution">{area.solution}</p>
            </div>

            <div className="service-items">
              {area.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a href={area.id === "fugas" ? "#fugas" : "#contacto"} className="link-more">
              {area.id === "fugas" ? "Cómo detectamos fugas" : "Cotizar este servicio"}
            </a>
          </div>

          <div className="service-media">
            <img src={area.image} alt={area.title} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
