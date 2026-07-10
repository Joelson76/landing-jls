"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: string;
}

/**
 * Accordion — hand-rolled, accessible (no radix dependency).
 * Single-open behavior, smooth grid-template-rows expand, rotating +/× icon.
 */
export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
              >
                <span
                  className={cn(
                    "font-display text-lg font-semibold transition-colors sm:text-xl",
                    isOpen ? "text-aqua-soft" : "text-cream group-hover:text-aqua-soft",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-aqua/60 bg-aqua/15 text-aqua-soft"
                      : "border-white/15 text-mist group-hover:border-aqua/40 group-hover:text-aqua",
                  )}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-mist">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
