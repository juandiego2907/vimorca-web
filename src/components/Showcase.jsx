import { useState } from "react";

// Obra destacada a pantalla completa con comparador durante / terminado.
function Showcase() {
  const [pos, setPos] = useState(50);

  return (
    <section className="showcase" id="obra">
      <div className="compare" style={{ "--pos": `${pos}%` }}>
        <img
          src="/obra-muro-construccion.jpg"
          alt="Encofrado del muro ciclópeo durante la obra"
          loading="lazy"
        />
        <img
          className="compare-after"
          src="/obra-muro-ciclopeo.jpg"
          alt="Muro ciclópeo terminado"
          loading="lazy"
        />
        <span className="compare-label left">Durante</span>
        <span className="compare-label right">Terminado</span>
        <span className="compare-handle" />
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(event) => setPos(Number(event.target.value))}
          aria-label="Deslice para comparar la obra durante la construcción y terminada"
        />
      </div>

      <div className="container showcase-caption" data-reveal>
        <div>
          <p className="eyebrow">Obra destacada</p>
          <h2>Recalce y muro ciclópeo.</h2>
        </div>
        <div>
          <p>
            Contención estructural y protección de cuenca para estabilizar el terreno frente
            a la erosión hidráulica.
          </p>
          <dl className="spec">
            <dt>Ubicación</dt>
            <dd>Santa Catalina, El Chama, Mcpio. Libertador, Mérida</dd>
            <dt>Tipo</dt>
            <dd>Obra hidráulica · protección de cuenca</dd>
            <dt>Equipos</dt>
            <dd>Excavadora de oruga Cat</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
