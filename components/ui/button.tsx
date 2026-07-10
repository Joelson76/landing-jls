import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — shadcn/ui base, heavily customized for the JLS "blueprint" system.
 * Pill shape, gold primary CTA with warm glow, aqua-tinted outline/ghost.
 * Exported `buttonVariants` so <a> links can share the exact same styling.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Warm gold — the impossible-to-miss primary action
        primary:
          "bg-gold text-petrol-950 shadow-[0_12px_40px_-12px_rgba(244,178,62,0.7)] hover:bg-gold-deep hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(244,178,62,0.8)]",
        // Aqua-outlined secondary
        outline:
          "border border-aqua/30 text-cream hover:border-aqua/70 hover:bg-aqua/5 hover:-translate-y-0.5",
        // Quiet tertiary
        ghost: "text-mist hover:text-cream hover:bg-white/5",
        // Aqua fill — for in-product / systems CTAs
        aqua: "bg-aqua/15 text-aqua-soft border border-aqua/30 hover:bg-aqua/25 hover:border-aqua/60 hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button };
