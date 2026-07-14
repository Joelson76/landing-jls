import { ArrowUpRight, Check, Boxes, ShieldCheck, Fuel } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  SystemMock,
  SupriFlowBody,
  SafeTrackBody,
  FuelDocBody,
} from "@/components/system-preview";
import { cn } from "@/lib/utils";

type SaaS = {
  id: string;
  name: string;
  tag: string;
  Icon: LucideIcon;
  host: string;
  url: string;
  accent: string;
  pitch: string;
  bullets: string[];
  Preview: () => JSX.Element;
};

const systems: SaaS[] = [
  {
    id: "supriflow",
    name: "SupriFlow",
    tag: "Gestão de suprimentos",
    Icon: Boxes,
    host: "supriflow.jlstecnologia.com.br",
    url: "https://supriflow.jlstecnologia.com.br/",
    accent: "text-aqua",
    pitch:
      "Chega de controlar compras no caderno ou em planilha perdida. O SupriFlow organiza pedidos, fornecedores e todo o fluxo de compras num lugar só — você sabe o que foi pedido, o que já chegou e quanto está gastando.",
    bullets: [
      "Pedidos e aprovações num fluxo claro, do pedido à entrega",
      "Cadastro de fornecedores com histórico de compras",
      "Visão do gasto em tempo real, sem planilha bagunçada",
    ],
    Preview: SupriFlowBody,
  },
  {
    id: "safetrack",
    name: "SafeTrack",
    tag: "Segurança do trabalho (SST)",
    Icon: ShieldCheck,
    host: "safetrack.jlstecnologia.com.br",
    url: "https://safetrack.jlstecnologia.com.br/",
    accent: "text-gold",
    pitch:
      "Segurança do trabalho em dia, sem papelada. O SafeTrack controla a entrega de EPIs com assinatura digital e mantém a conformidade da empresa organizada — pronta pra mostrar na fiscalização a qualquer momento.",
    bullets: [
      "Entrega de EPI com assinatura digital — adeus ficha de papel",
      "Controle de quem recebeu o quê e quando",
      "Conformidade de SST organizada e auditável",
    ],
    Preview: SafeTrackBody,
  },
  {
    id: "fueldoc",
    name: "FuelDoc",
    tag: "Compliance para postos",
    Icon: Fuel,
    host: "fueldoc.jlstecnologia.com.br",
    url: "https://fueldoc.jlstecnologia.com.br/",
    accent: "text-gold",
    pitch:
      "Posto de combustível vive de documento em dia. O FuelDoc reúne todo o dossiê de conformidade do seu posto — formulários APR+FPS e documentos da NR-20 — e ainda te avisa no WhatsApp antes de qualquer prazo vencer.",
    bullets: [
      "Dossiê de compliance completo, sempre à mão",
      "Formulários APR+FPS e catálogo de documentos NR-20",
      "Alertas no WhatsApp antes dos prazos vencerem",
    ],
    Preview: FuelDocBody,
  },
];

export function Systems() {
  return (
    <section id="sistemas" className="relative border-y border-white/5 bg-petrol-950/40 py-24 sm:py-28">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-6 bg-gold/60" />
            Sistemas desenvolvidos
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            Não é só consultoria — a gente{" "}
            <span className="text-gradient">constrói e coloca no ar.</span>
          </h2>
          <p className="mt-4 text-lg text-mist">
            Três SaaS próprios, já em produção e usados por empresas de verdade. É a prova
            prática de que o seu sistema sob medida também vai sair — e funcionar.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {systems.map((s, i) => (
            <Reveal key={s.id}>
              <SystemRow saas={s} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemRow({ saas, flip }: { saas: SaaS; flip: boolean }) {
  const { name, tag, Icon, host, url, accent, pitch, bullets, Preview } = saas;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* text */}
      <div className={flip ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className={cn("grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-petrol-850", accent)}>
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">{name}</h3>
            <p className={cn("font-mono text-xs uppercase tracking-wider", accent)}>{tag}</p>
          </div>
        </div>

        <p className="mt-5 text-lg leading-relaxed text-mist">{pitch}</p>

        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5", accent)}>
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[0.97rem] text-cream/90">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "aqua", size: "md" }), "group mt-8")}
        >
          Conhecer o sistema
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* preview */}
      <div className={flip ? "lg:order-1" : ""}>
        <SystemMock Icon={Icon} host={host} accent={accent}>
          <Preview />
        </SystemMock>
      </div>
    </div>
  );
}
