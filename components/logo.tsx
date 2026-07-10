import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * <Logo /> — reusable brand lockup for the header and footer.
 *
 * Uses the real JLS cloud mark (`public/logo-mark.png`, cropped from the original
 * `logo.png` so the dark "JLS Tecnologia" wordmark doesn't sit on the dark site
 * background) paired with a light HTML wordmark for guaranteed contrast.
 *
 * The original full lockup is still at `public/logo.png` (used as the favicon).
 * To regenerate the cropped mark, re-run the crop step or drop a new
 * transparent-background icon at `public/logo-mark.png`.
 */
export function Logo({
  variant = "full",
  className,
}: {
  variant?: "full" | "mark";
  className?: string;
}) {
  return (
    <Link
      href="#top"
      aria-label="JLS Tecnologia — início"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-aqua",
        className,
      )}
    >
      <Image
        src="/logo-mark.png"
        alt="JLS Tecnologia"
        width={913}
        height={706}
        priority
        className="h-9 w-auto drop-shadow-[0_2px_10px_rgba(63,224,207,0.25)] transition-transform duration-500 group-hover:-translate-y-0.5 md:h-10"
      />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-cream md:text-xl">
            JLS <span className="text-aqua-soft">Tecnologia</span>
          </span>
          <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-dim">
            Cambé · PR
          </span>
        </span>
      )}
    </Link>
  );
}
