import type { Metadata, Viewport } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/site";
import "./globals.css";

// Display — geometric, confident (NOT Inter/Roboto/Space Grotesk)
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body — refined, highly readable
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Mono — technical eyebrows, code-window UI ("we're real engineers")
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "JLS Tecnologia — Consultoria de TI e Sistemas · Cambé-PR e Brasil",
    template: "%s | JLS Tecnologia",
  },
  description:
    "Suporte técnico, infraestrutura de rede, servidores Windows e Linux e desenvolvimento de sistemas sob medida. Atendimento presencial em Cambé e região (PR) e remoto para todo o Brasil. 3 SaaS próprios em produção pra provar.",
  keywords: [
    "consultoria de TI",
    "suporte técnico remoto",
    "infraestrutura de rede",
    "servidores Linux",
    "desenvolvimento de sistemas sob medida",
    "criação de sites",
    "TI Cambé-PR",
    "suporte de TI Brasil",
    "JLS Tecnologia",
  ],
  authors: [{ name: "JLS Tecnologia" }],
  creator: "JLS Tecnologia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "JLS Tecnologia",
    title: "JLS Tecnologia — Consultoria de TI e Sistemas · Cambé-PR e Brasil",
    description:
      "Do suporte do dia a dia ao sistema sob medida. Base em Cambé-PR — presencial na região e remoto para todo o Brasil, com 3 SaaS próprios em produção.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JLS Tecnologia — Consultoria de TI e Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JLS Tecnologia — Consultoria de TI e Sistemas · Cambé-PR e Brasil",
    description:
      "Do suporte do dia a dia ao sistema sob medida. Presencial em Cambé e região, remoto pro Brasil todo.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
