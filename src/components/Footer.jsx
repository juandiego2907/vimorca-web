import { siteConfig } from "../config/siteConfig";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            {siteConfig.companyName}
          </a>

          <p>
            {siteConfig.tagline}
          </p>
        </div>

        <div className="footer-column">
          <span>Explorar</span>
          <a href="#">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
        </div>

        <div className="footer-column">
          <span>Contacto</span>
          <a href={`tel:${siteConfig.contact.phone}`}>
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          <span>{siteConfig.contact.address}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {siteConfig.companyName}</span>

        <div>
          <a href={siteConfig.social.instagram}>Instagram</a>
          <a href={siteConfig.social.linkedin}>LinkedIn</a>
        </div>

        <span>Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;