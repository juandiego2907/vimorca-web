const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowRight() {
  return (
    <svg {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg {...base}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function Phone() {
  return (
    <svg {...base}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MapPin() {
  return (
    <svg {...base}>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Building() {
  return (
    <svg {...base}>
      <path d="M4 21V4h11v17M15 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18" />
    </svg>
  );
}

export function Check() {
  return (
    <svg {...base} strokeWidth={3}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function Gauge() {
  return (
    <svg {...base}>
      <path d="M4 15a8 8 0 1 1 16 0M12 15l4-5" />
      <circle cx="12" cy="15" r="1.2" />
    </svg>
  );
}

export function Leaf() {
  return (
    <svg {...base}>
      <path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l7-7" />
    </svg>
  );
}

export function Shield() {
  return (
    <svg {...base}>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Community() {
  return (
    <svg {...base}>
      <circle cx="12" cy="8" r="3" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M7 20a5 5 0 0 1 10 0M2 19a3 3 0 0 1 4-3M22 19a3 3 0 0 0-4-3" />
    </svg>
  );
}

export function WhatsApp() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3C8.8 3 3 8.7 3 15.8c0 2.3.6 4.5 1.8 6.4L3 29l7-1.8c1.8 1 3.9 1.5 6 1.5 7.2 0 13-5.7 13-12.8S23.2 3 16 3Zm0 23.4c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.3 10 10.1 5.3 16 5.3s10.7 4.7 10.7 10.5S21.9 26.4 16 26.4Zm5.9-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.7c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.7 1.2 3.1 1.3 3.3 2.3 3.5 5.6 4.9c2.1.9 2.9 1 3.9.8.6-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.2-.6-.4Z"
      />
    </svg>
  );
}

// Isotipo VIMORCA: "V" de franjas índigo dentro de un triángulo verde.
export function Logo() {
  return (
    <svg viewBox="0 0 48 40" aria-hidden="true">
      <path d="M4 3h41L25 37" fill="none" stroke="#2fa257" strokeWidth="2.4" />
      <path d="M2 6h14l6 9 6-9h14L22 36Z" fill="#5a56d6" />
      <path d="M10 15h24M14 21h16M18 27h8" stroke="#0f1433" strokeWidth="2.2" />
    </svg>
  );
}
