import { siteConfig, telLink } from "../config/siteConfig";

function Footer() {
  const { contact, social } = siteConfig;
  const socialLinks = [
    ["Instagram", social.instagram],
    ["Facebook", social.facebook],
    ["LinkedIn", social.linkedin],
  ].filter(([, url]) => url);

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
          <a href="#fugas">Detección de fugas</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
        </div>

        <div className="footer-column">
          <span>Contacto</span>
          {[...contact.mobiles, ...contact.phones].map((phone) => (
            <a href={telLink(phone)} key={phone}>
              {phone}
            </a>
          ))}
          {contact.email && (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          )}
          <span>{contact.address}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 {siteConfig.companyName} · RIF {siteConfig.rif}
        </span>

        {socialLinks.length > 0 && (
          <div>
            {socialLinks.map(([name, url]) => (
              <a href={url} key={name} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
        )}

        <span>Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
