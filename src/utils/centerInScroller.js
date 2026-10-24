// Desplaza horizontalmente la barra que contiene `el` para dejarlo centrado.
// Sirve para los filtros y pestañas que en el celular no caben completos.
export function centerInScroller(el) {
  const scroller = el?.parentElement;
  if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;

  const left = el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2;
  scroller.scrollTo({ left, behavior: "smooth" });
}
