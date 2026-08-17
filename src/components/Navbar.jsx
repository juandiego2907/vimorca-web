import { siteConfig } from "../config/siteConfig";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="logo">
        {siteConfig.companyName}
      </a>

      <nav className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#nosotros">Nosotros</a>
      </nav>

      <a href="#contacto" className="nav-button">
        Solicitar cotización
      </a>
    </header>
  );
}

export default Navbar;