/**
 * Single source of truth for JLS Tecnologia contact + brand data.
 * Change the number/email/message here and every CTA on the page updates.
 */
export const site = {
  name: "JLS Tecnologia",
  tagline: "Consultoria de TI e desenvolvimento de sistemas — de Cambé-PR pro Brasil",
  city: "Cambé - PR",
  region: "Cambé e região",
  email: "joelson76@gmail.com",
  // WhatsApp: (43) 99179-9911 → 55 (BR) + 43 (DDD) + 991799911
  whatsappDisplay: "(43) 99179-9911",
  whatsappNumber: "5543991799911",
  whatsappMessage:
    "Olá! Vim pelo site da JLS Tecnologia e gostaria de falar sobre TI para a minha empresa.",
  url: "https://jlstecnologia.com.br",
} as const;

/** Pre-filled WhatsApp deep link that opens the chat directly. */
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

/** Gmail web link with pre-filled recipient and subject. */
export const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${encodeURIComponent(
  "Contato pelo site — JLS Tecnologia",
)}`;

/** Header / footer navigation. */
export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sistemas", href: "#sistemas" },
  { label: "A JLS", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
