/**
 * Custom line illustrations for the Services section.
 * Shared visual language: 64×64 grid, 1.7 stroke via `currentColor` (set to
 * aqua by the parent), one warm-gold accent per icon, rounded caps/joins.
 * These are hand-drawn for JLS — NOT an imported icon pack.
 *
 * The four marked "🖼️ SUBSTITUÍVEL POR FOTO REAL" are the work domains you may
 * later swap for real photos — just replace the <Xxx /> in components/services.tsx.
 */

type ArtProps = { className?: string };

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const GOLD = "#f4b23e";

/* ── 1. Suporte técnico / atendimento ──────────────────────────────────── */
/* 🖼️ SUBSTITUÍVEL POR FOTO REAL: atendimento / suporte ao usuário */
export function SupportArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M15 33v-3a17 17 0 0 1 34 0v3" />
      <path d="M15 32h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z" />
      <path d="M49 32h-3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Z" />
      <path d="M46 43v2a7 7 0 0 1-7 7h-5" />
      <circle cx="31" cy="52" r="3" stroke={GOLD} />
    </svg>
  );
}

/* ── 2. Infraestrutura de rede ─────────────────────────────────────────── */
/* 🖼️ SUBSTITUÍVEL POR FOTO REAL: infraestrutura de rede / cabeamento */
export function NetworkArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {/* switch / router */}
      <rect x="19" y="28" width="26" height="10" rx="2.5" />
      <circle cx="25" cy="33" r="1" />
      <circle cx="29" cy="33" r="1" />
      <circle cx="33" cy="33" r="1" />
      {/* nodes */}
      <rect x="26" y="9" width="12" height="9" rx="2" />
      <rect x="9" y="46" width="12" height="9" rx="2" />
      <rect x="43" y="46" width="12" height="9" rx="2" />
      {/* links */}
      <path d="M32 28v-10" />
      <path d="M26 38 16 46" />
      <path d="M38 38 48 46" />
      <circle cx="32" cy="23" r="1.7" fill={GOLD} stroke="none" />
    </svg>
  );
}

/* ── 3. Sistemas Windows (instalação e configuração) ───────────────────── */
export function WindowsArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {/* four-pane flag */}
      <path d="M14 19 50 14 V46 L14 50 Z" />
      <path d="M32 16.5 V48" />
      <path d="M14 33 50 31" />
      {/* gold "configured" check on one pane */}
      <path d="M18 26.5 20.5 29 25 23.5" stroke={GOLD} />
    </svg>
  );
}

/* ── 4. Servidores Linux ───────────────────────────────────────────────── */
/* 🖼️ SUBSTITUÍVEL POR FOTO REAL: servidores / rack / Linux */
export function ServerArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {/* rack unit 1 */}
      <rect x="14" y="11" width="36" height="11" rx="2.5" />
      <circle cx="20" cy="16.5" r="1.3" />
      <path d="M40 14.5v4M44 14.5v4" />
      {/* rack unit 2 */}
      <rect x="14" y="25" width="36" height="11" rx="2.5" />
      <circle cx="20" cy="30.5" r="1.3" />
      <path d="M40 28.5v4M44 28.5v4" />
      {/* terminal (Linux CLI) */}
      <rect x="14" y="40" width="36" height="12" rx="2.5" />
      <path d="M19 44 22 47 19 50" stroke={GOLD} />
      <path d="M26 50h6" stroke={GOLD} />
    </svg>
  );
}

/* ── 5. Desenvolvimento de sistemas ────────────────────────────────────── */
/* 🖼️ SUBSTITUÍVEL POR FOTO REAL: desenvolvimento / código */
export function DevArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="10" y="14" width="44" height="36" rx="4" />
      <path d="M10 24h44" />
      <circle cx="16" cy="19" r="1.2" />
      <circle cx="21" cy="19" r="1.2" />
      <circle cx="26" cy="19" r="1.2" />
      <path d="M26 32 21 37 26 42" />
      <path d="M38 32 43 37 38 42" />
      <path d="M34 30 30 44" stroke={GOLD} />
    </svg>
  );
}

/* ── 6. Criação de sites ───────────────────────────────────────────────── */
export function SiteArt({ className }: ArtProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="10" y="12" width="44" height="40" rx="4" />
      <path d="M10 22h44" />
      <circle cx="16" cy="17" r="1.2" />
      <circle cx="21" cy="17" r="1.2" />
      <circle cx="26" cy="17" r="1.2" />
      <rect x="16" y="27" width="15" height="11" rx="2" />
      <path d="M35 29h13M35 33h10M35 37h13" />
      <rect x="16" y="42" width="10" height="6" rx="1.5" />
      <rect x="30" y="42" width="9" height="6" rx="1.5" stroke={GOLD} />
    </svg>
  );
}
