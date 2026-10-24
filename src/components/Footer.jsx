import { siteConfig, telLink } from "../config/siteConfig";
import { navLinks } from "../data/content";
import { Logo } from "./Icons";

function Footer() {
  const { contact, social } = siteConfig;
  const socialLinks = [
    ["Instagram", social.instagram],
    ["Facebook", social.facebook],
    ["LinkedIn", social.linkedin],
  ].filter(([, url]) => url);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#inicio" className="brand">
              <Logo />
              <span className="brand-name">{siteConfig.companyName}</span>
            </a>
            <p className="footer-tagline">{siteConfig.tagline}</p>
          </div>

          <div className="footer-col">
            <h4>Explorar</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            {[...contact.mobiles, ...contact.phones].map((phone) => (
              <a href={telLink(phone)} key={phone}>
                {phone}
              </a>
            ))}
            {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
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
      </div>
    </footer>
  );
}

export default Footer;
