import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SystemMock — a stylized "product screenshot" in a browser frame.
 * Abstract skeleton UI (not a claim about the real screens), tinted per product,
 * with depth: border, shadow and an accent glow. Satisfies the media element
 * without shipping heavy image files.
 */
export function SystemMock({
  Icon,
  host,
  accent,
  children,
}: {
  Icon: LucideIcon;
  host: string;
  /** tailwind text color class for the accent, e.g. "text-aqua" */
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className={cn("absolute -inset-6 rounded-3xl opacity-20 blur-2xl", accent.replace("text-", "bg-"))}
      />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-petrol-950/80 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-petrol-900/80 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-petrol-950/70 px-2.5 py-1">
            <Icon className={cn("h-3 w-3", accent)} />
            <span className="truncate font-mono text-[0.65rem] text-dim">{host}</span>
          </div>
        </div>
        {/* app body */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

/** A soft skeleton bar. */
function Bar({ w = "w-full", accent = false }: { w?: string; accent?: boolean }) {
  return <div className={cn("h-2 rounded-full", w, accent ? "bg-aqua/50" : "bg-white/10")} />;
}

/** A small stat tile. */
function Tile({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-petrol-850/70 p-2.5">
      <div className={cn("h-1.5 w-8 rounded-full", accent.replace("text-", "bg-"))} />
      <div className="mt-2 h-3 w-10 rounded bg-white/15" />
      <div className="mt-1 text-[0.55rem] font-medium uppercase tracking-wider text-dim">{label}</div>
    </div>
  );
}

/* ── SupriFlow: procurement kanban ─────────────────────────────────────── */
export function SupriFlowBody() {
  const cols = ["Pedido", "Aprovado", "Recebido"];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <Bar w="w-24" accent />
        <div className="h-5 w-14 rounded-md bg-aqua/20" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c, i) => (
          <div key={c} className="rounded-lg border border-white/10 bg-petrol-850/60 p-2">
            <div className="mb-2 text-[0.55rem] font-semibold uppercase tracking-wider text-mist">{c}</div>
            <div className="space-y-1.5">
              <div className="rounded bg-petrol-800 p-1.5">
                <Bar w="w-full" />
                <div className="mt-1"><Bar w="w-2/3" /></div>
              </div>
              {i < 2 && (
                <div className="rounded bg-petrol-800 p-1.5">
                  <Bar w="w-3/4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SafeTrack: EPI delivery + digital signature ───────────────────────── */
export function SafeTrackBody() {
  return (
    <div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        <Tile label="EPIs" accent="text-gold" />
        <Tile label="Entregas" accent="text-aqua" />
      </div>
      <div className="space-y-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-petrol-850/60 px-2.5 py-2">
            <span className="grid h-4 w-4 place-items-center rounded-sm bg-gold/20 text-gold text-[8px]">✓</span>
            <Bar w={i === 1 ? "w-1/2" : "w-3/4"} />
            {/* signature squiggle */}
            <svg viewBox="0 0 40 12" className="ml-auto h-3 w-10 text-aqua/70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 8c3-6 5 4 8-1s5 3 8-2 6 5 9 1 4-3 4-3" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── FuelDoc: compliance dossier + WhatsApp alerts ─────────────────────── */
export function FuelDocBody() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between rounded-lg border border-white/10 bg-petrol-850/60 px-2.5 py-2">
        <div>
          <div className="text-[0.55rem] font-semibold uppercase tracking-wider text-mist">Dossiê de compliance</div>
          <div className="mt-1"><Bar w="w-20" accent /></div>
        </div>
        <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[0.55rem] font-semibold text-gold">NR-20</span>
      </div>
      <div className="space-y-1.5">
        {["APR + FPS", "Documentos", "Alerta WhatsApp"].map((label, i) => (
          <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-petrol-850/60 px-2.5 py-2">
            <span className={cn("h-2 w-2 rounded-full", i === 2 ? "bg-gold" : "bg-aqua")} />
            <span className="text-[0.6rem] font-medium text-mist">{label}</span>
            <div className="ml-auto"><Bar w="w-8" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
