import { NetworkArt } from "@/components/illustrations";

/**
 * Hero visual — a stylized "engineer's terminal" window with a network motif.
 * Pure JSX/CSS (no image), so it's razor-sharp and animates cheaply.
 * This is one of the ~4 work-representing visuals (dev + infra), distributed
 * into the hero alongside the Services illustrations.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-aqua/20 opacity-40 blur-3xl"
      />

      {/* terminal window */}
      <div className="relative animate-float-slow rounded-2xl border border-white/10 bg-petrol-850/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-dim">jls@cambe: ~/infra</span>
        </div>

        {/* body */}
        <div className="space-y-3 p-6">
          <div className="rounded-lg bg-petrol-900/60 p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-aqua text-xl">✓</span>
              <span className="text-cream font-semibold">SupriFlow</span>
            </div>
            <p className="text-mist text-sm">Sistema em produção · rodando</p>
          </div>

          <div className="rounded-lg bg-petrol-900/60 p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold text-xl">✓</span>
              <span className="text-cream font-semibold">SafeTrack</span>
            </div>
            <p className="text-mist text-sm">Sistema em produção · rodando</p>
          </div>

          <div className="rounded-lg bg-petrol-900/60 p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold text-xl">✓</span>
              <span className="text-cream font-semibold">FuelDoc</span>
            </div>
            <p className="text-mist text-sm">Sistema em produção · rodando</p>
          </div>
        </div>
      </div>

      {/* floating "network" card — reuses the Services art for coherence */}
      <div className="absolute -right-4 -top-8 hidden animate-float rounded-2xl border border-aqua/20 bg-petrol-800/90 p-4 shadow-xl backdrop-blur-sm sm:block">
        <NetworkArt className="h-12 w-12 text-aqua" />
      </div>

      {/* floating status chip */}
      <div className="absolute -bottom-5 -left-4 flex animate-float items-center gap-2 rounded-full border border-white/10 bg-petrol-800/90 px-4 py-2 shadow-xl backdrop-blur-sm [animation-delay:1.5s]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-aqua" />
        </span>
        <span className="font-mono text-xs text-mist">3 sistemas em produção</span>
      </div>
    </div>
  );
}
