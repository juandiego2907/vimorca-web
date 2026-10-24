import { useEffect, useRef, useState } from "react";

// Cuenta desde 0 hasta `to` cuando el número entra en pantalla.
function Counter({ to, prefix = "", suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduced || !("IntersectionObserver" in window)) return;

    let frame;
    setValue(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <b ref={ref}>
      {prefix}
      {value}
      {suffix}
    </b>
  );
}

export default Counter;
