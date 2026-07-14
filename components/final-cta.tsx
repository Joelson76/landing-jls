import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { site, whatsappUrl, mailtoUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section id="contato" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <Reveal className="relative mx-auto max-w-container overflow-hidden rounded-[2rem] border border-aqua/20 bg-gradient-to-br from-petrol-800 via-petrol-850 to-petrol-950 px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* atmosphere */}
        <div aria-hidden className="bp-grid absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-aqua/20 blur-[100px]"
        />

        <div className="relative">
          <p className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold/60" />
            Bora conversar
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-cream sm:text-5xl">
            Vamos resolver o TI da sua empresa —{" "}
            <span className="text-gradient">e construir o que ela precisa?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-mist">
            Manda um oi no WhatsApp com o que está pegando na sua empresa. A resposta vem
            direto de quem entende — sem robô, sem enrolação.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a
              href={mailtoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Mail className="h-5 w-5" />
              Mandar um e-mail
            </a>
          </div>

          {/* quick contact facts */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 font-mono text-sm text-mist">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-aqua-soft">
              <WhatsAppIcon className="h-4 w-4 text-aqua" />
              {site.whatsappDisplay}
            </a>
            <a href={mailtoUrl} className="inline-flex items-center gap-2 transition-colors hover:text-aqua-soft">
              <Mail className="h-4 w-4 text-aqua" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-aqua" />
              {site.city}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
