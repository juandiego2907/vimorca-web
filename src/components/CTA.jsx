import { whatsappLink } from "../config/siteConfig";

function CTA() {
  return (
    <section className="cta" id="contacto">
      <div className="cta-overlay" />

      <div className="cta-content">
        <p className="section-label">HABLEMOS DE TU PROYECTO</p>

        <h2>
          ¿Listo para
          <br />
          <span>construir?</span>
        </h2>

        <p>
          Cuéntanos qué tienes en mente y descubre cómo podemos convertirlo
          en realidad.
        </p>

        <a
          href={whatsappLink(
            "Hola VIMORCA, vengo de la web y quiero solicitar una cotización para un proyecto."
          )}
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar una cotización <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default CTA;
