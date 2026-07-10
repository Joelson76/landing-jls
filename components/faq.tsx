import { Reveal } from "@/components/reveal";
import { Accordion, type AccordionItemData } from "@/components/ui/accordion";

const faqs: AccordionItemData[] = [
  {
    question: "Vocês atendem presencialmente ou só remoto? De onde vocês são?",
    answer:
      "Os dois. Nossa base é em Cambé-PR: presencialmente atendemos Cambé e região. E remotamente atendemos empresas de todo o Brasil — suporte, desenvolvimento e sites funcionam de qualquer lugar, e costumam ser mais rápidos à distância.",
  },
  {
    question: "Trabalham com contrato mensal ou fazem serviço avulso?",
    answer:
      "Os dois. Dá pra chamar a gente pra um serviço pontual (formatar um servidor, montar uma rede, um chamado urgente) ou fechar um suporte contínuo pra sua empresa. A gente combina o formato que faz sentido pro seu tamanho.",
  },
  {
    question: "Quanto tempo leva pra desenvolver um sistema sob medida?",
    answer:
      "Depende do tamanho, mas começamos pequeno: mapeamos o processo, entregamos uma primeira versão útil rápido e vamos evoluindo a partir dela. Você não espera meses pra ver algo funcionando.",
  },
  {
    question: "Vocês dão suporte depois de entregar o sistema ou o site?",
    answer:
      "Sim. Não sumimos depois da entrega — seguimos disponíveis pra ajustes, dúvidas e melhorias. É a vantagem de falar direto com quem construiu.",
  },
  {
    question: "Minha empresa é pequena. Vale a pena chamar vocês?",
    answer:
      "Vale. Boa parte do nosso trabalho é com pequenas e médias empresas — daqui da região e de outros lugares do Brasil — que precisam de TI confiável sem pagar preço de multinacional. A gente dimensiona a solução pro seu caso.",
  },
  {
    question: "Vocês são de Cambé — atendem empresas de outras cidades e estados?",
    answer:
      "Com certeza. Cambé-PR é a nossa base, mas atendemos empresas de todo o Brasil de forma remota. Suporte, sistemas e sites a gente resolve sem sair do lugar — e vamos presencialmente quando é aqui na região.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-container gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-aqua/60" />
            Perguntas frequentes
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Ficou alguma dúvida?
          </h2>
          <p className="mt-4 text-mist">
            As perguntas que a gente mais escuta de quem está pensando em contratar. Se a
            sua não estiver aqui, é só chamar no WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
