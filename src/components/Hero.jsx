import { useEffect, useState } from "react";

const INTRO_MS = 4000;
const FONT_WAIT_MS = 1200;
const NAME = "VIMORCA";

// Isotipo para la intro: el triángulo se dibuja con trazo y luego entra la V.
function IntroLogo() {
  return (
    <svg className="intro-logo" viewBox="0 0 48 40" aria-hidden="true">
      <path
        className="outline"
        d="M4 3h41L25 37"
        fill="none"
        stroke="#2fa257"
        strokeWidth="2"
        pathLength="1"
      />
      <g className="mark">
        <path d="M2 6h14l6 9 6-9h14L22 36Z" fill="#5a56d6" />
        <path d="M10 15h24M14 21h16M18 27h8" stroke="#000" strokeWidth="2.2" />
      </g>
    </svg>
  );
}

// Abre con el video a pantalla completa y la marca centrada; luego se retira
// la marca y aparecen el titular, la navegación y el resto de la página.
function Hero() {
  const [playing, setPlaying] = useState(false);
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
    let timer;
    let cancelled = false;

    // Arranca cuando la tipografía está lista (o tras un tope) para que el
    // nombre no cambie de fuente a mitad de la animación.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, FONT_WAIT_MS))]).then(() => {
      if (cancelled) return;
      requestAnimationFrame(() => setPlaying(true));
      timer = setTimeout(finish, INTRO_MS);
    });

    const onInput = () => finish();
    window.addEventListener("wheel", onInput, { passive: true, once: true });
    window.addEventListener("touchmove", onInput, { passive: true, once: true });
    window.addEventListener("keydown", onInput, { once: true });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("wheel", onInput);
      window.removeEventListener("touchmove", onInput);
      window.removeEventListener("keydown", onInput);
    };
  }, []);

  useEffect(() => {
    if (ready) document.documentElement.classList.remove("intro-active");
  }, [ready]);

  const classes = ["hero", playing && "intro-play", ready && "is-ready"].filter(Boolean);

  return (
    <section className={classes.join(" ")} id="inicio">
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
        <IntroLogo />
        <p className="intro-word" aria-label={NAME}>
          {NAME.split("").map((letter, i) => (
            <span key={i} style={{ "--i": i }} aria-hidden="true">
              {letter}
            </span>
          ))}
        </p>
        <span className="intro-rule" />
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
