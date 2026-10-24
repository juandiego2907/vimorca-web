import { whatsappLink } from "../config/siteConfig";

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola VIMORCA, vengo de la web y quiero más información.")}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a VIMORCA por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 3C8.8 3 3 8.7 3 15.8c0 2.3.6 4.5 1.8 6.4L3 29l7-1.8c1.8 1 3.9 1.5 6 1.5 7.2 0 13-5.7 13-12.8S23.2 3 16 3Zm0 23.4c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.3 10 10.1 5.3 16 5.3s10.7 4.7 10.7 10.5S21.9 26.4 16 26.4Zm5.9-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.7c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.7 1.2 3.1 1.3 3.3 2.3 3.5 5.6 4.9c2.1.9 2.9 1 3.9.8.6-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.2-.6-.4Z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
