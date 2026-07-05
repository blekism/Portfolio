import { useReveal, useCountUp } from "../services/use-reveal";

export function CountStat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { ref, visible } = useReveal(0.4);
  const n = useCountUp(value, 1800, visible);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-display text-4xl md:text-5xl font-semibold text-gradient-pink tabular-nums">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
