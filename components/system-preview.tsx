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
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src="/supriflow.png"
        alt="Interface do SupriFlow - Sistema de Gestão de Suprimentos"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

/* ── SafeTrack: EPI delivery + digital signature ───────────────────────── */
export function SafeTrackBody() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src="/safetrack.png"
        alt="Interface do SafeTrack - Sistema de Segurança do Trabalho"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

/* ── FuelDoc: compliance dossier + WhatsApp alerts ─────────────────────── */
export function FuelDocBody() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src="/fueldoc.png"
        alt="Interface do FuelDoc - Sistema de Compliance para Postos"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
