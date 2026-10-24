import { useState } from "react";
import { projects } from "../data/content";
import { centerInScroller } from "../utils/centerInScroller";

const categories = ["Todas", ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [filter, setFilter] = useState("Todas");
  const visible =
    filter === "Todas" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="projects section" id="proyectos">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Proyectos</p>
          <h2>Hechos para permanecer.</h2>
          <p>Infraestructura pública y privada ejecutada por nuestro equipo en el estado Mérida.</p>
        </div>

        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="filter"
              aria-pressed={filter === category}
              onClick={(event) => {
                setFilter(category);
                centerInScroller(event.currentTarget);
              }}
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
