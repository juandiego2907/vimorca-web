const projects = [
  {
  category: "URBANÍSTICO",
  title: "Proyecto reconstrucción",
  location: "Mérida, Venezuela",
  image: "/vimorca-projects.jpg",
},
  {
    category: "COMERCIAL",
    title: "Colegio",
    location: "Mérida, Venezuela",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "REMODELACIÓN",
    title: "Proyecto",
    location: "Mérida, Venezuela",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
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
            <img src={project.image} alt={project.title} />

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