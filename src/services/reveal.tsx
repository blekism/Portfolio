import { type ReactNode, type CSSProperties, createElement } from "react";
import { useReveal } from "../services/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
}) {
  const { ref, visible } = useReveal();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return createElement(
    as,
    { ref, style, className: `reveal ${visible ? "in" : ""} ${className}` },
    children,
  );
}
