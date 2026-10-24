import { useState } from "react";
import { siteConfig, telLink, whatsappLink } from "../config/siteConfig";
import { leakSteps, leakSymptoms } from "../data/content";
import { Check, Phone, WhatsApp } from "./Icons";

function LeakDetection() {
  const [selected, setSelected] = useState([]);
  const phone = siteConfig.contact.mobiles[0];

  const toggle = (symptom) =>
    setSelected((current) =>
      current.includes(symptom)
        ? current.filter((item) => item !== symptom)
        : [...current, symptom]
    );

  const message = [
    "Hola VIMORCA, vengo de la web y necesito detectar una fuga de agua.",
    selected.length > 0 && `Síntomas: ${selected.join("; ")}.`,
    "Ubicación:",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section className="leaks section" id="fugas">
      <div className="container">
        <div className="leaks-grid">
          <div data-reveal>
            <p className="eyebrow">Detección de fugas de agua</p>
            <h2>
              Encontramos la fuga <span className="accent">sin romper de más.</span>
            </h2>
            <p className="leaks-lead">
              Diagnóstico preciso de pérdidas de agua en viviendas, condominios, comercios y
              redes de distribución, sin destruir infraestructura innecesariamente.
            </p>

            <div className="symptom-picker">
              <p>¿Qué está notando? Marque lo que aplique:</p>
              <div className="symptoms">
                {leakSymptoms.map((symptom) => (
                  <button
                    key={symptom}
                    type="button"
                    className="symptom"
                    aria-pressed={selected.includes(symptom)}
                    onClick={() => toggle(symptom)}
                  >
                    <span className="symptom-check">
                      <Check />
                    </span>
                    {symptom}
                  </button>
                ))}
              </div>
            </div>

            <div className="leaks-actions">
              <a
                href={whatsappLink(message, siteConfig.contact.whatsappFugas)}
                className="btn btn-urgent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
                {selected.length > 0
                  ? `Enviar ${selected.length} síntoma${selected.length > 1 ? "s" : ""} por WhatsApp`
                  : "Escribir por WhatsApp"}
              </a>
              <a href={telLink(phone)} className="btn btn-outline">
                <Phone />
                Llamar al {phone}
              </a>
            </div>
            <p className="leaks-hint">
              Los síntomas marcados se agregan al mensaje para que llegue con el diagnóstico
              adelantado.
            </p>
          </div>

          <figure className="leaks-card" data-reveal style={{ "--delay": "0.15s" }}>
            <img
              src="/fugas-vimorca.jpg"
              alt="VIMORCA, análisis de pérdidas de agua con detector electroacústico"
              width="750"
              height="709"
              loading="lazy"
            />
            <figcaption className="leaks-card-body">
              <strong>Detección electroacústica</strong>
              <span>
                Escuchamos la tubería para ubicar el punto exacto de la pérdida antes de
                romper.
              </span>
            </figcaption>
          </figure>
        </div>

        <ol className="steps" data-reveal>
          {leakSteps.map((step) => (
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

export default LeakDetection;
