import { disciplines, leadership, values } from "../data/content";
import { Community, Gauge, Leaf, Shield } from "./Icons";

const valueIcons = [Gauge, Leaf, Shield, Community];
const maxCount = Math.max(...disciplines.map((item) => item.count));

function About() {
  return (
    <section className="about section" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <p className="eyebrow">Nosotros</p>
            <h2>
              Talento humano, maquinaria propia <span className="accent">y precisión técnica.</span>
            </h2>
            <p className="about-lead">
              VIMORCA es una organización técnica orientada a la eficiencia: la respuesta
              arquitectónica e ingenieril para que cada proyecto se ejecute con precisión en
              calidad, tiempo y costo.
            </p>
            <p className="about-text">
              Nuestra misión es ofrecer soluciones integrales en obras hidráulicas, civiles,
              mecánicas, eléctricas y estructurales con los más altos estándares de calidad,
              seguridad y sostenibilidad ambiental.
            </p>

            <div className="leaders">
              {leadership.map((person) => (
                <div className="leader" key={person.name}>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal style={{ "--delay": "0.15s" }}>
            <figure className="about-photo">
              <img
                src="/equipo-sala-tecnica.jpg"
                alt="Sala técnica de VIMORCA revisando un proyecto en la oficina de Alto Chama"
                loading="lazy"
              />
              <figcaption>Sala técnica · C.C. Alto Chama, Mérida</figcaption>
            </figure>

            <div className="disciplines">
              <p className="service-label">Ecosistema multidisciplinario</p>
              {disciplines.map((item) => (
                <div className="discipline" key={item.name}>
                  <span>{item.name}</span>
                  <b>{String(item.count).padStart(2, "0")}</b>
                  <span className="discipline-bar">
                    <i style={{ "--w": `${(item.count / maxCount) * 100}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="values" data-reveal>
          {values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <div className="value" key={value.title}>
                <span className="value-icon">
                  <Icon />
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
