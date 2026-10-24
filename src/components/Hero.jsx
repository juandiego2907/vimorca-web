import { siteConfig, whatsappLink } from "../config/siteConfig";
import { capabilities, fleet } from "../data/content";
import Counter from "./Counter";
import { ArrowRight } from "./Icons";

function Hero() {
  return (
    <>
      <section className="hero blueprint" id="inicio">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Ingeniería · Arquitectura · Detección de fugas</p>

              <h1>
                Obras civiles e hidráulicas con <em>sala técnica y maquinaria propia.</em>
              </h1>

              <p className="hero-lead">
                Más de 20 profesionales y flota pesada propia para diseñar, construir y
                mantener infraestructura en Mérida. También localizamos fugas de agua sin
                romper de más.
              </p>

              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">
                  Cotizar un proyecto <ArrowRight />
                </a>
                <a
                  href={whatsappLink(
                    "Hola VIMORCA, vengo de la web y necesito detectar una fuga de agua.",
                    siteConfig.contact.whatsappFugas
                  )}
                  className="btn btn-urgent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tengo una fuga
                </a>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-photo">
                <img
                  src="/obra-muro-ciclopeo.jpg"
                  alt="Muro ciclópeo construido por VIMORCA en Santa Catalina, El Chama"
                  width="850"
                  height="463"
                  fetchPriority="high"
                />
                <div className="hero-tag">
                  <div>
                    <span>Obra entregada</span>
                    <strong>Recalce y muro ciclópeo</strong>
                  </div>
                  <span>El Chama · Mérida</span>
                </div>
              </div>
              <div className="hero-badge">
                <b>RIF</b>
                <span>{siteConfig.rif}</span>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <Counter to={20} prefix="+" />
              <span>Profesionales en sala técnica</span>
            </div>
            <div className="hero-stat">
              <Counter to={7} />
              <span>Disciplinas de ingeniería y apoyo</span>
            </div>
            <div className="hero-stat">
              <Counter to={fleet.length} />
              <span>Tipos de equipo pesado propio</span>
            </div>
            <div className="hero-stat">
              <b>Mérida</b>
              <span>Oficina en C.C. Alto Chama</span>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...capabilities, ...capabilities].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
