import { useState } from "react";
import { siteConfig, telLink, whatsappLink } from "../config/siteConfig";
import { quoteServices } from "../data/content";
import { ArrowRight, Building, MapPin, Phone } from "./Icons";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Centro Comercial Alto Chama, Mérida, Venezuela");

function Contact() {
  const { contact } = siteConfig;
  const [form, setForm] = useState({ service: "", name: "", place: "", details: "" });
  const [error, setError] = useState("");

  const update = (fields) => setForm((current) => ({ ...current, ...fields }));
  const set = (field) => (event) => update({ [field]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.service || !form.name.trim()) {
      setError("Elija un tipo de servicio y escriba su nombre para continuar.");
      return;
    }
    setError("");

    const message = [
      "Hola VIMORCA, quiero solicitar una cotización.",
      `Servicio: ${form.service}`,
      `Nombre: ${form.name.trim()}`,
      form.place.trim() && `Ubicación: ${form.place.trim()}`,
      form.details.trim() && `Detalles: ${form.details.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const number =
      form.service === "Detección de fugas" ? contact.whatsappFugas : contact.whatsapp;
    window.open(whatsappLink(message, number), "_blank", "noopener");
  };

  return (
    <section className="contact section blueprint" id="contacto">
      <div className="container contact-grid">
        <div data-reveal>
          <p className="eyebrow">Contacto</p>
          <h2>Construyamos algo que perdure.</h2>
          <p className="contact-lead">
            Cuéntenos qué necesita y le responderemos por WhatsApp con los próximos pasos.
            También puede visitarnos en nuestra oficina.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <MapPin />
              </span>
              <div>
                <small>Oficina</small>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {contact.address}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Phone />
              </span>
              <div>
                <small>Teléfonos</small>
                <div className="phone-links">
                  {[...contact.mobiles, ...contact.phones].map((phone) => (
                    <a href={telLink(phone)} key={phone}>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Building />
              </span>
              <div>
                <small>Razón social</small>
                {siteConfig.companyName} · RIF {siteConfig.rif}
              </div>
            </li>
          </ul>
        </div>

        <form className="quote-form" onSubmit={onSubmit} noValidate data-reveal>
          <h3>Solicitar cotización</h3>
          <p>Toma menos de un minuto. Se abrirá WhatsApp con su solicitud lista.</p>

          <div>
            <span className="field-label" id="service-label">
              ¿Qué necesita?
            </span>
            <div className="choice-grid" role="group" aria-labelledby="service-label">
              {quoteServices.map((service) => (
                <button
                  key={service}
                  type="button"
                  className="choice"
                  aria-pressed={form.service === service}
                  onClick={() => update({ service })}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="field-row">
            <div>
              <label className="field-label" htmlFor="quote-name">
                Nombre o empresa
              </label>
              <input
                id="quote-name"
                className="input"
                autoComplete="name"
                value={form.name}
                onChange={set("name")}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="quote-place">
                Municipio o sector
              </label>
              <input
                id="quote-place"
                className="input"
                autoComplete="address-level2"
                value={form.place}
                onChange={set("place")}
              />
            </div>
          </div>

          <div>
            <label className="field-label" htmlFor="quote-details">
              Describa el trabajo (opcional)
            </label>
            <textarea
              id="quote-details"
              className="input"
              value={form.details}
              onChange={set("details")}
            />
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-light">
            Enviar por WhatsApp <ArrowRight />
          </button>
          <p className="form-note">
            Si prefiere enviar fotos o planos, puede adjuntarlos en el mismo chat.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
