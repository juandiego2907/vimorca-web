import { siteConfig, telLink, whatsappLink } from "../config/siteConfig";
import { Phone, WhatsApp } from "./Icons";

// Botón flotante en escritorio y barra fija de Llamar / WhatsApp en móvil.
function WhatsAppButton() {
  const link = whatsappLink("Hola VIMORCA, vengo de la web y quiero más información.");

  return (
    <>
      <a
        href={link}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a VIMORCA por WhatsApp"
      >
        <WhatsApp />
        <span>WhatsApp</span>
      </a>

      <nav className="mobile-bar" aria-label="Contacto rápido">
        <a href={telLink(siteConfig.contact.mobiles[0])}>
          <Phone />
          Llamar
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <WhatsApp />
          WhatsApp
        </a>
      </nav>
    </>
  );
}

export default WhatsAppButton;
