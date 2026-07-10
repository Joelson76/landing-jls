import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Systems } from "@/components/systems";
import { WhyJLS } from "@/components/why-jls";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* ── Ambient background: blueprint grid + petroleum glows ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bp-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-aqua/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-petrol-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-gold/[0.06] blur-[120px]" />
      </div>

      <Header />

      <main>
        <Hero />
        <Services />
        <Systems />
        <WhyJLS />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
