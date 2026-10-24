import { siteConfig, telLink, whatsappLink } from "../config/siteConfig";

const symptoms = [
  "El recibo de agua subió sin explicación",
  "Manchas de humedad en paredes o pisos",
  "El tanque o la cisterna nunca se llena",
  "Se escucha agua correr con todo cerrado",
];

const steps = [
  {
    number: "01",
    title: "Nos escribe",
    description: "Cuéntenos los síntomas y la ubicación por WhatsApp o teléfono.",
  },
  {
    number: "02",
    title: "Detectamos",
    description:
      "Rastreamos la tubería con equipo electroacústico y ubicamos el punto exacto de la fuga.",
  },
  {
    number: "03",
    title: "Marcamos",
    description:
      "Se rompe solo donde está la fuga, sin demoler pisos ni paredes de más.",
  },
  {
    number: "04",
    title: "Reparamos",
    description:
      "Entregamos el diagnóstico y, si lo desea, nuestro equipo hace la reparación.",
  },
];

function LeakDetection() {
  const phone = siteConfig.contact.mobiles[0];

  return (
    <section className="leaks section" id="fugas">
      <div className="leaks-grid">
        <div className="leaks-intro">
          <p className="section-label">DETECCIÓN DE FUGAS DE AGUA</p>

          <h2>
            Encontramos la fuga
            <br />
            <span>sin romper de más.</span>
          </h2>

          <p className="leaks-lead">
            Diagnóstico preciso de pérdidas de agua en viviendas, condominios,
            comercios y redes de distribución, sin destruir infraestructura
            innecesariamente.
          </p>

          <ul className="leaks-symptoms">
            {symptoms.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </ul>

          <div className="leaks-actions">
            <a
              href={whatsappLink(
                "Hola VIMORCA, vengo de la web y necesito detectar una fuga de agua en:",
                siteConfig.contact.whatsappFugas
              )}
              className="button button-urgent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tengo una fuga: escribir por WhatsApp
            </a>

            <a href={telLink(phone)} className="button button-outline">
              Llamar al {phone}
            </a>
          </div>
        </div>

        <figure className="leaks-image">
          <img
            src="/fugas-vimorca.jpg"
            alt="VIMORCA, análisis de pérdidas de agua con detector electroacústico"
            width="750"
            height="709"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="leaks-steps">
        {steps.map((step) => (
          <article className="leaks-step" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LeakDetection;
