"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "children">;

export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const reveal = useScrollReveal<HTMLElement>(delay);
  const componentProps: Record<string, unknown> = {
    ...rest,
    ref: reveal.ref,
    className: `${reveal.className} ${className}`.trim(),
    style: reveal.style,
  };

  return <Component {...componentProps}>{children}</Component>;
}
