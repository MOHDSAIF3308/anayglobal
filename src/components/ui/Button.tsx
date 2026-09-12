import { cn } from "@/lib/utils";

type Variant = "gold" | "espresso" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-espresso hover:bg-champagne",
  espresso: "bg-espresso text-cream hover:bg-brown",
  outline:
    "border border-espresso/25 bg-transparent text-espresso hover:border-gold hover:text-brown",
  outlineLight:
    "border border-cream/40 bg-transparent text-cream hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-espresso hover:text-caramel",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function buttonClassName({
  variant = "gold",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant = "gold",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props} />
  );
}
