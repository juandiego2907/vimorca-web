const projects = [
  {
  category: "URBANÍSTICO",
  title: "Proyecto reconstrucción",
  location: "Mérida, Venezuela",
  image: "/vimorca-projects.jpg",
},
  {
    category: "OBRA HIDRÁULICA",
    title: "Recalce y muro ciclópeo",
    location: "Santa Catalina, El Chama · Mcpio. Libertador, Mérida",
    image: "/obra-muro-ciclopeo.jpg",
  },
  {
    category: "SEGURIDAD VIAL",
    title: "Barandas de seguridad",
    location: "Viaductos Miranda y Sucre · Mcpio. Libertador, Mérida",
    image: "/obra-barandas-viaducto.jpg",
  },
];

function Projects() {
  return (
    <section className="projects section" id="proyectos">
      <div className="section-header projects-header">
        <div>
          <p className="section-label">PROYECTOS DESTACADOS</p>

          <h2>
            Hechos para
            <br />
            <span>permanecer.</span>
          </h2>
        </div>

        <a href="#contacto" className="projects-link">
          Ver todos los proyectos <span>↗</span>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card project-card-${index + 1}`}
            key={project.title}
          >
            <img src={project.image} alt={project.title} loading="lazy" />

            <div className="project-overlay">
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;