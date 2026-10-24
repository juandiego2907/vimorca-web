export const siteConfig = {
  companyName: "VIMORCA",
  rif: "J-30359181-7",
  tagline: "Su inversión en el presente tiene su futuro asegurado.",
  description:
    "Ingeniería, arquitectura, obras civiles e hidráulicas y detección de fugas de agua en Mérida, Venezuela.",

  contact: {
    // Números del dossier corporativo. Confirmar con el cliente cuál atiende
    // proyectos y cuál atiende fugas.
    phones: ["0274-2668137", "0274-2668213", "0274-2713852"],
    mobiles: ["0414-7170044", "0412-5201135", "0414-3740351"],
    whatsapp: "584147170044",
    whatsappFugas: "584147170044",
    email: "",
    address:
      "Av. Andrés Bello, C.C. Alto Chama, Torre Norte, Piso 4, Ofic. 4-02. Mérida, Venezuela",
  },

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
};

export function whatsappLink(message, number = siteConfig.contact.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// "0414-7170044" -> "tel:+584147170044"
export function telLink(phone) {
  return `tel:+58${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}
