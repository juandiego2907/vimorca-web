import { useState } from "react";
import { projects } from "../data/content";

const categories = ["Todas", ...new Set(projects.map((project) => project.category))];

function Compare() {
  const [pos, setPos] = useState(50);

  return (
    <div className="compare" style={{ "--pos": `${pos}%` }}>
      <img
        src="/obra-muro-construccion.jpg"
        alt="Encofrado del muro ciclópeo durante la obra"
        loading="lazy"
      />
      <img
        className="compare-after"
        src="/obra-muro-ciclopeo.jpg"
        alt="Muro ciclópeo terminado"
        loading="lazy"
      />
      <span className="compare-label left">Durante</span>
      <span className="compare-label right">Terminado</span>
      <span className="compare-handle" />
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(event) => setPos(Number(event.target.value))}
        aria-label="Deslice para comparar la obra durante la construcción y terminada"
      />
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("Todas");
  const visible =
    filter === "Todas" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Proyectos</p>
            <h2>
              Obras reales, <span className="accent">hechas para permanecer.</span>
            </h2>
          </div>
          <p>
            Infraestructura pública y privada ejecutada por nuestro equipo en el estado
            Mérida.
          </p>
        </div>

        <article className="featured" data-reveal>
          <Compare />
          <div className="featured-body">
            <p className="eyebrow">Obra destacada</p>
            <h3>Recalce y muro ciclópeo</h3>
            <p>
              Contención estructural y protección de cuenca mediante ingeniería civil
              aplicada, para estabilizar el terreno frente a la erosión hidráulica.
            </p>
            <dl className="spec">
              <dt>Ubicación</dt>
              <dd>Santa Catalina, El Chama, Mcpio. Libertador, Mérida</dd>
              <dt>Tipo</dt>
              <dd>Obra hidráulica · protección de cuenca</dd>
              <dt>Equipos</dt>
              <dd>Excavadora de oruga Cat</dd>
            </dl>
          </div>
        </article>

        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="filter"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.id} tabIndex={0}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-info">
                <span className="chip">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <p className="summary">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
