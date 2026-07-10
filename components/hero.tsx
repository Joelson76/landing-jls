import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid max-w-container items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ── Copy ── */}
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-in">
            <span className="h-px w-6 bg-aqua/60" />
            Consultoria de TI · Cambé-PR · atende o Brasil
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            <span className="inline-block animate-fade-up">Suporte,</span>{" "}
            <span className="inline-block animate-fade-up [animation-delay:80ms]">
              infraestrutura
            </span>{" "}
            <span className="inline-block animate-fade-up [animation-delay:160ms]">e</span>{" "}
            <span className="inline-block animate-fade-up text-gradient [animation-delay:240ms]">
              sistemas
            </span>{" "}
            <span className="inline-block animate-fade-up [animation-delay:320ms]">sob</span>{" "}
            <span className="inline-block animate-fade-up [animation-delay:400ms]">medida</span>{" "}
            <span className="inline-block animate-fade-up [animation-delay:480ms]">
              para a sua empresa.
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-mist [animation-delay:560ms]">
            A JLS Tecnologia resolve o TI do dia a dia — do help desk aos servidores — e
            desenvolve software de verdade. Não falamos só de tecnologia:{" "}
            <span className="font-semibold text-cream">
              temos 3 sistemas próprios rodando em produção
            </span>{" "}
            pra provar.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center [animation-delay:640ms]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#sistemas"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group")}
            >
              Ver os sistemas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* honest proof strip — no invented numbers */}
          <dl className="mt-12 grid max-w-lg animate-fade-up grid-cols-3 gap-6 border-t border-white/10 pt-7 [animation-delay:720ms]">
            {[
              { n: "3", l: "SaaS próprios em produção" },
              { n: "1:1", l: "Atendimento com o fundador" },
              { n: "Brasil", l: "Remoto no país todo · base Cambé-PR" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold text-aqua-soft sm:text-3xl">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-dim">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Visual ── */}
        <div className="animate-fade-up [animation-delay:400ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
