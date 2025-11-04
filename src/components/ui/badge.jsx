import { cn } from "@/lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-semibold",
    outline: "border border-border/80 text-foreground px-3 py-1 rounded-full text-xs font-medium",
    success: "bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold",
    warning: "bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold",
    accent: "bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold",
  };

  return <span className={cn(variants[variant] ?? variants.default, className)} {...props} />;
}

export { Badge };
