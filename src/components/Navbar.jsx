import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import { siteConfig, whatsappLink } from "../config/siteConfig";
import { Logo } from "./Icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta el enlace de la sección visible.
  useEffect(() => {
    // #inicio y #contacto no tienen enlace: al verlos se limpia el resaltado.
    const sections = ["#inicio", ...navLinks.map((link) => link.href), "#contacto"]
      .map((href) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`navbar${scrolled ? " is-scrolled" : ""}${open ? " nav-open" : ""}`}
    >
      <div className="container navbar-inner">
        <a href="#inicio" className="brand" onClick={close} aria-label="VIMORCA, inicio">
          <Logo />
          <span className="brand-name">{siteConfig.companyName}</span>
        </a>

        <nav className="nav-links" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contacto" className="btn btn-light">
            Cotizar
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="mobile-menu" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-light" onClick={close}>
            Cotizar proyecto
          </a>
          <a
            href={whatsappLink("Hola VIMORCA, vengo de la web y quiero más información.")}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
