import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsappUrl, mailtoUrl, navLinks } from "@/lib/site";

const systems = [
  { label: "SupriFlow", href: "https://supriflow.jlstecnologia.com.br/" },
  { label: "SafeTrack", href: "https://safetrack.jlstecnologia.com.br/" },
  { label: "FuelDoc", href: "https://fueldoc.jlstecnologia.com.br/" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-petrol-950">
      <div className="mx-auto max-w-container px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand + contact */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Consultoria de TI e desenvolvimento de sistemas. Base em Cambé-PR —
              presencial na região e remoto para todo o Brasil, do suporte do dia a dia
              ao software sob medida.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-cream transition-colors hover:text-aqua-soft"
              >
                <WhatsAppIcon className="h-4 w-4 text-aqua" />
                {site.whatsappDisplay}
              </a>
              <br />
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2.5 text-cream transition-colors hover:text-aqua-soft"
              >
                <Mail className="h-4 w-4 text-aqua" />
                {site.email}
              </a>
              <br />
              <span className="inline-flex items-center gap-2.5 text-mist">
                <MapPin className="h-4 w-4 text-aqua" />
                {site.city}
              </span>
            </div>
          </div>

          {/* nav */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Navegação</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-mist transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* systems */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Sistemas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {systems.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mist transition-colors hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono">Cambé-PR · atendemos o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
