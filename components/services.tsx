import { Reveal } from "@/components/reveal";
import {
  SupportArt,
  NetworkArt,
  WindowsArt,
  ServerArt,
  DevArt,
  SiteArt,
} from "@/components/illustrations";

type Service = {
  id: string;
  n: string;
  title: string;
  desc: string;
  Art: (p: { className?: string }) => JSX.Element;
  span: string;
  banner?: boolean;
};

const services: Service[] = [
  {
    id: "suporte",
    n: "01",
    title: "Suporte ao usuário",
    desc: "Help desk e atendimento técnico do dia a dia. Computador travando, e-mail que não abre, impressora que sumiu da rede — a gente resolve rápido, presencial ou remoto.",
    Art: SupportArt,
    span: "lg:col-span-2",
  },
  {
    id: "rede",
    n: "02",
    title: "Infraestrutura de rede",
    desc: "Rede lenta ou caindo trava a empresa inteira. Planejamos e organizamos cabeamento, Wi-Fi e equipamentos pra sua rede parar de dar dor de cabeça.",
    Art: NetworkArt,
    span: "lg:col-span-1",
  },
  {
    id: "windows",
    n: "03",
    title: "Sistemas Windows",
    desc: "Instalação e configuração de Windows do jeito certo — do zero ou recuperando aquele PC que ficou lento. Entregamos pronto pra usar.",
    Art: WindowsArt,
    span: "lg:col-span-1",
  },
  {
    id: "linux",
    n: "04",
    title: "Servidores Linux",
    desc: "Servidores Linux estáveis e seguros pra hospedar sistemas, arquivos e serviços da empresa — sem depender de gambiarra.",
    Art: ServerArt,
    span: "lg:col-span-1",
  },
  {
    id: "dev",
    n: "05",
    title: "Desenvolvimento sob demanda",
    desc: "Aquela planilha que virou um monstro? Desenvolvemos o sistema que a sua operação precisa, feito sob medida pro seu processo — não um pacote genérico.",
    Art: DevArt,
    span: "lg:col-span-1",
  },
  {
    id: "sites",
    n: "06",
    title: "Criação de sites",
    desc: "Sites institucionais, landing pages e lojas virtuais rápidos e que aparecem no Google. A sua empresa com cara profissional na internet.",
    Art: SiteArt,
    span: "lg:col-span-3",
    banner: true,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-6 bg-aqua/60" />
            O que a gente faz
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            TI completa, de ponta a ponta.
          </h2>
          <p className="mt-4 text-lg text-mist">
            Do chamado urgente à infraestrutura que sustenta o seu negócio — uma empresa só
            pra cuidar de toda a sua tecnologia.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 70} className={s.span}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { n, title, desc, Art, banner } = service;

  return (
    <article
      className={
        "group relative flex h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-petrol-850 to-petrol-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-[0_24px_60px_-24px_rgba(63,224,207,0.25)] sm:p-7 " +
        (banner ? "flex-col gap-6 sm:flex-row sm:items-center" : "flex-col")
      }
    >
      {/* index watermark */}
      <span className="pointer-events-none absolute right-5 top-4 font-mono text-xs text-white/15 transition-colors group-hover:text-aqua/40">
        {n}
      </span>

      {/* illustration plate */}
      <div
        className={
          "relative grid shrink-0 place-items-center rounded-xl border border-aqua/15 bg-petrol-950/60 text-aqua transition-colors duration-300 group-hover:border-aqua/40 " +
          (banner ? "h-20 w-20" : "h-16 w-16")
        }
      >
        <div className="absolute inset-0 rounded-xl bg-aqua/5 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <Art className={banner ? "h-11 w-11" : "h-9 w-9"} />
      </div>

      <div className={banner ? "" : "mt-5"}>
        <h3 className="font-display text-xl font-bold text-cream">{title}</h3>
        <p className={"mt-2.5 leading-relaxed text-mist " + (banner ? "max-w-xl" : "text-[0.95rem]")}>
          {desc}
        </p>
      </div>
    </article>
  );
}
