import { useEffect, useRef, useState } from "react";
import { fleet, logistics } from "../data/content";
import { ArrowLeft, ArrowRight } from "./Icons";

function Fleet() {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scroll = (direction) => {
    const el = trackRef.current;
    const card = el.querySelector(".fleet-card");
    el.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="fleet section blueprint" id="flota">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Capacidad operativa</p>
            <h2>Flota propia para cumplir cronogramas.</h2>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <p>
              No dependemos de alquileres ni de terceros: movimiento de tierra, izamiento,
              transporte pesado y abastecimiento de agua con equipos de VIMORCA.
            </p>
            <div className="fleet-controls">
              <button
                type="button"
                className="icon-btn"
                aria-label="Equipo anterior"
                onClick={() => scroll(-1)}
                disabled={edges.start}
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className="icon-btn"
                aria-label="Equipo siguiente"
                onClick={() => scroll(1)}
                disabled={edges.end}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="fleet-track" ref={trackRef} onScroll={update}>
          {fleet.map((item) => (
            <article className="fleet-card" key={item.name}>
              <figure>
                <img src={item.image} alt={item.name} loading="lazy" />
              </figure>
              <div className="fleet-card-body">
                <span className="fleet-model">{item.models}</span>
                <h3>{item.name}</h3>
                <p>{item.use}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="logistics" data-reveal>
          {logistics.map((item) => (
            <div key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;
