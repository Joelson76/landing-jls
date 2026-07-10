import { UserRound, MapPin, Layers, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

const reasons: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: UserRound,
    title: "Atendimento direto com quem resolve",
    desc: "Você fala com o fundador, não com um call center que empurra o problema. Resposta rápida e alguém que conhece a sua operação.",
  },
  {
    Icon: MapPin,
    title: "Presencial na região, remoto no Brasil todo",
    desc: "Base em Cambé-PR: presencialmente, atendemos você na região quando o problema pede alguém no local. Remotamente, o suporte, o desenvolvimento e os sites atendem sua empresa em qualquer lugar do país.",
  },
  {
    Icon: Layers,
    title: "Do suporte ao software, numa empresa só",
    desc: "Em vez de contratar um pra rede, outro pra suporte e outro pra sistema, você resolve tudo em um lugar — que entende como as partes conversam.",
  },
  {
    Icon: Gauge,
    title: "Stack moderna, aplicada de verdade",
    desc: "Os mesmos padrões e tecnologias dos nossos SaaS em produção entram no seu projeto. Nada de solução amarrada em ferramenta ultrapassada.",
  },
];

export function WhyJLS() {
  return (
    <section id="sobre" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* left — pitch */}
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-aqua/60" />
              Por que a JLS
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              Tecnologia séria, com jeito de gente da região.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              A JLS Tecnologia nasceu em Cambé-PR e hoje atende empresas de todo o Brasil —
              presencialmente na região e remotamente onde você estiver — sempre de um jeito
              próximo e sem enrolação. A diferença: além de dar suporte e cuidar da sua
              infraestrutura, a gente projeta e coloca sistemas no ar — e usa isso todo dia.
            </p>

            <div className="mt-8 rounded-2xl border border-aqua/15 bg-petrol-850/50 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-aqua/80">
                // o diferencial
              </p>
              <p className="mt-3 text-cream">
                Poucas empresas de TI local têm{" "}
                <span className="font-semibold text-aqua-soft">
                  produtos SaaS reais rodando em produção.
                </span>{" "}
                A gente tem três. Isso é a garantia de que sabemos construir — não só
                indicar ou revender.
              </p>
            </div>
          </Reveal>

          {/* right — reasons grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 80}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-petrol-850 to-petrol-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/30"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-aqua/15 bg-petrol-950/60 text-aqua transition-colors group-hover:border-aqua/40">
                  <r.Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-cream">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
