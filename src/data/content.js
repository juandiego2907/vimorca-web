// Contenido del sitio, tomado del dossier corporativo de VIMORCA.

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#fugas", label: "Detección de fugas" },
  { href: "#flota", label: "Flota" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
];

export const serviceAreas = [
  {
    id: "ingenieria",
    label: "Ingeniería",
    title: "Obras civiles, hidráulicas y estructurales",
    problems: [
      "El río socava la base de una vía o un puente",
      "Un talud cede junto a viviendas o carreteras",
      "Necesita un proyecto firmado para una licitación",
    ],
    solution:
      "Recalces, muros ciclópeos y de contención, protección de cuencas, estudios geológicos y proyectos mecánicos y eléctricos. Ejecutamos con nuestra propia maquinaria.",
    items: [
      "Obras hidráulicas y estructurales",
      "Movimiento de tierra",
      "Proyectos mecánicos y eléctricos",
      "Asesoría en ingeniería",
    ],
    image: "/obra-muro-construccion.jpg",
  },
  {
    id: "arquitectura",
    label: "Arquitectura",
    title: "Diseño, urbanismo y construcción",
    problems: [
      "Tiene un terreno y no sabe qué se puede construir",
      "Quiere ampliar o remodelar sin perder control del costo",
      "Necesita planos y permisología en regla",
    ],
    solution:
      "Diseño arquitectónico, proyectos urbanísticos, construcción llave en mano y mantenimiento, con una sola empresa responsable del plano a la entrega.",
    items: [
      "Diseños y construcción",
      "Proyectos urbanísticos",
      "Remodelación",
      "Mantenimiento general",
    ],
    image: "/vimorca-oficina.jpg",
  },
  {
    id: "fugas",
    label: "Detección de fugas",
    title: "Localización de fugas sin romper de más",
    problems: [
      "El recibo de agua subió sin explicación",
      "Hay humedad en paredes o pisos",
      "El tanque o la cisterna nunca se llena",
    ],
    solution:
      "Diagnóstico con equipo electroacústico para ubicar el punto exacto de la pérdida. Se rompe solo donde hace falta y, si lo desea, hacemos la reparación.",
    items: [
      "Viviendas y condominios",
      "Comercios y hoteles",
      "Redes de distribución",
      "Mantenimiento preventivo hidráulico",
    ],
    image: "/fugas-vimorca.jpg",
  },
];

export const leakSymptoms = [
  "El recibo de agua subió sin explicación",
  "Manchas de humedad en paredes o pisos",
  "El tanque o la cisterna nunca se llena",
  "Se escucha agua correr con todo cerrado",
  "Charcos o tierra húmeda sin motivo",
  "Baja presión en grifos y duchas",
];

export const leakSteps = [
  {
    title: "Nos escribe",
    description: "Cuéntenos los síntomas y la ubicación por WhatsApp o teléfono.",
  },
  {
    title: "Detectamos",
    description:
      "Rastreamos la tubería con equipo electroacústico hasta el punto exacto de la fuga.",
  },
  {
    title: "Marcamos",
    description: "Se rompe solo donde está la fuga, sin demoler pisos ni paredes de más.",
  },
  {
    title: "Reparamos",
    description: "Entregamos el diagnóstico y, si lo desea, nuestro equipo hace la reparación.",
  },
];

export const fleet = [
  {
    name: "Excavadoras de oruga",
    models: "Cat 345C · New Holland E485",
    use: "Remoción de alto volumen para obras civiles de gran escala.",
    image: "/flota-excavadora.jpg",
  },
  {
    name: "Cargadores frontales",
    models: "Cat 980G",
    use: "Manejo de materiales y despeje de vías.",
    image: "/flota-cargador.jpg",
  },
  {
    name: "Tractores de oruga",
    models: "Cat D9N",
    use: "Preparación de terrenos complejos.",
    image: "/flota-tractor.jpg",
  },
  {
    name: "Grúa de izamiento",
    models: "Grove RT630",
    use: "Maniobra e izamiento de elementos estructurales.",
    image: "/flota-grua.jpg",
  },
  {
    name: "Cisternas",
    models: "Abastecimiento en sitio",
    use: "Control de agua en obra y apoyo a frentes de trabajo.",
    image: "/flota-cisterna.jpg",
  },
];

export const logistics = [
  { name: "Camiones articulados", detail: "Ej. Cat D400E, para terreno irregular y máxima carga." },
  { name: "Chutos y tractocamiones", detail: "Ej. Iveco Stralis, para larga distancia y traslado de maquinaria." },
  { name: "Semirremolques y bateas", detail: "Plataformas para insumos estructurales." },
];

export const projects = [
  {
    id: "muro-chama",
    category: "Hidráulica",
    title: "Recalce y muro ciclópeo",
    location: "Santa Catalina, El Chama · Mcpio. Libertador, Mérida",
    summary:
      "Contención estructural y protección de cuenca para estabilizar el terreno frente a la erosión del río.",
    image: "/obra-muro-ciclopeo.jpg",
  },
  {
    id: "barandas-viaductos",
    category: "Vialidad",
    title: "Barandas de seguridad",
    location: "Viaductos Miranda y Sucre · Mcpio. Libertador, Mérida",
    summary:
      "Acondicionamiento de vías públicas con soldadura estructural especializada y diseño vial.",
    image: "/obra-barandas-viaducto.jpg",
  },
  {
    id: "cauce",
    category: "Hidráulica",
    title: "Inspección de talud y cauce",
    location: "Mérida, Venezuela",
    summary: "Levantamiento técnico de socavación bajo estructura vial para definir la solución.",
    image: "/obra-cauce-chama.jpg",
  },
  {
    id: "reconstruccion",
    category: "Urbanismo",
    title: "Proyecto de reconstrucción",
    location: "Mérida, Venezuela",
    summary: "Recuperación de entorno ribereño y accesos en zona de montaña.",
    image: "/vimorca-projects.jpg",
  },
];

export const processSteps = [
  {
    title: "Consultamos",
    description: "Escuchamos sus necesidades y visitamos el sitio para entender el proyecto.",
  },
  {
    title: "Planificamos",
    description: "Definimos alcance, presupuesto, cronograma, materiales y equipos.",
  },
  {
    title: "Construimos",
    description: "Ejecutamos con sala técnica y maquinaria propia, bajo supervisión constante.",
  },
  {
    title: "Entregamos",
    description: "Cerramos la obra verificando que cada detalle cumpla nuestros estándares.",
  },
];

export const values = [
  {
    title: "Excelencia y calidad",
    description: "Precisión en cada estructura ejecutada, respaldada por experiencia.",
  },
  {
    title: "Sostenibilidad",
    description: "Optimizamos recursos y protegemos el entorno en el manejo de obras y fluidos.",
  },
  {
    title: "Integridad y confianza",
    description: "Seguridad laboral, transparencia y responsabilidad con el cliente.",
  },
  {
    title: "Responsabilidad social",
    description: "Infraestructura que aporta bienestar y progreso real a las comunidades.",
  },
];

export const leadership = [
  { name: "Ing. Orlando Villavicencio", role: "Presidente" },
  { name: "Arq. Angela Galiano", role: "Vicepresidente" },
  { name: "Ing. Guido Moreno", role: "Asesor de la Directiva" },
];

export const disciplines = [
  { name: "Ingeniería civil", count: 5 },
  { name: "Ingeniería hidráulica", count: 4 },
  { name: "Geología", count: 2 },
  { name: "Ingeniería eléctrica", count: 1 },
  { name: "Arquitectura", count: 2 },
  { name: "Topografía y apoyo", count: 5 },
  { name: "Administración y legal", count: 3 },
];

export const quoteServices = [
  "Obra civil o hidráulica",
  "Proyecto de arquitectura",
  "Detección de fugas",
  "Movimiento de tierra",
  "Otro",
];
