import { useEffect, useState } from "react";
import { Logo } from "./Icons";

const INTRO_MS = 3400;

// Abre con el video a pantalla completa y la marca centrada; luego se retira
// la marca y aparecen el titular, la navegación y el resto de la página.
function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => setReady(true);

    if (reduced || window.scrollY > 40) {
      root.classList.remove("intro-active");
      finish();
      return;
    }

    root.classList.add("intro-active");
    const timer = setTimeout(finish, INTRO_MS);
    const onInput = () => finish();
    window.addEventListener("wheel", onInput, { passive: true, once: true });
    window.addEventListener("touchmove", onInput, { passive: true, once: true });
    window.addEventListener("keydown", onInput, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", onInput);
      window.removeEventListener("touchmove", onInput);
      window.removeEventListener("keydown", onInput);
    };
  }, []);

  useEffect(() => {
    if (ready) document.documentElement.classList.remove("intro-active");
  }, [ready]);

  return (
    <section className={`hero${ready ? " is-ready" : ""}`} id="inicio">
      <video
        className="hero-video"
        src="/hero-obra.mp4"
        poster="/hero-obra-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-shade" />

      <div className="hero-intro" aria-hidden={ready}>
        <Logo />
        <p className="intro-word">VIMORCA</p>
        <p className="intro-line">Ingeniería · Arquitectura · Construcción</p>
        <button type="button" className="intro-skip" onClick={() => setReady(true)}>
          Entrar
        </button>
      </div>

      <div className="hero-content">
        <div className="container">
          <p className="eyebrow">Mérida · Venezuela</p>
          <h1>Construimos lo que perdura.</h1>
          <p className="hero-lead">
            Ingeniería, arquitectura y obra civil con sala técnica de más de 20
            profesionales y flota pesada propia.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-light">
              Cotizar un proyecto
            </a>
            <a href="#obra" className="link-more">
              Ver nuestras obras
            </a>
          </div>
        </div>
      </div>

      <span className="scroll-cue">Descubra</span>
    </section>
  );
}

export default Hero;
