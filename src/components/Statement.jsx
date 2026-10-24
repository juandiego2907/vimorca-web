import { useEffect, useRef, useState } from "react";
import { disciplines, fleet } from "../data/content";
import Counter from "./Counter";

const text =
  "Más de veinte profesionales. Flota pesada propia. Un solo responsable, del primer plano a la última piedra.";
const words = text.split(" ");

// Las palabras se iluminan a medida que el párrafo atraviesa la pantalla.
function Statement() {
  const ref = useRef(null);
  const [reduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [lit, setLit] = useState(reduced ? words.length : 0);

  useEffect(() => {
    if (reduced) return;

    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
        setLit(Math.round(Math.min(Math.max(progress, 0), 1) * words.length));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section className="statement">
      <div className="container">
        <p ref={ref} aria-label={text}>
          {words.map((word, i) => (
            <span key={i} className={i < lit ? "on" : undefined} aria-hidden="true">
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="stats" data-reveal>
          <div className="stat">
            <Counter to={20} prefix="+" />
            <span>Profesionales en sala técnica</span>
          </div>
          <div className="stat">
            <Counter to={disciplines.length} />
            <span>Disciplinas de ingeniería y apoyo</span>
          </div>
          <div className="stat">
            <Counter to={fleet.length} />
            <span>Tipos de equipo pesado propio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statement;
