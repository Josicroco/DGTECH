"use client";

import { useEffect, useRef, useState } from "react";

const BASE_DELAY_MS = 120;

const REVEAL_TRANSITION =
  "transition-[opacity,transform,background-color,border-color] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!scale-100 motion-reduce:!opacity-100";

export type RevealVariant = "up" | "card" | "card-active";

const VARIANT_HIDDEN: Record<RevealVariant, string> = {
  up: "translate-y-8 opacity-0",
  card: "translate-y-6 scale-[0.94] opacity-0",
  "card-active": "translate-y-6 scale-[0.94] opacity-0",
};

const VARIANT_VISIBLE: Record<RevealVariant, string> = {
  up: "translate-y-0 opacity-100",
  card: "translate-y-0 scale-100 opacity-100",
  "card-active": "translate-y-0 opacity-100",
};

const HIGHLIGHT_ON = "max-lg:scale-[1.03] max-lg:border-[rgba(153,130,0,0.32)] max-lg:bg-[#fff7cc]";
const HIGHLIGHT_OFF = "max-lg:scale-100";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0,
  variant: RevealVariant = "up",
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransitioning(true);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (variant !== "card-active") return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0, rootMargin: "-42% 0px -42% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [variant]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleTransitionEnd = () => setIsTransitioning(false);
    node.addEventListener("transitionend", handleTransitionEnd);
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  const highlightClass =
    variant === "card-active" ? (isActive ? HIGHLIGHT_ON : HIGHLIGHT_OFF) : "";

  return {
    ref,
    className: `${REVEAL_TRANSITION} ${
      isTransitioning ? "will-change-[opacity,transform]" : "will-change-auto"
    } ${isVisible ? VARIANT_VISIBLE[variant] : VARIANT_HIDDEN[variant]} ${highlightClass}`,
    style: {
      transitionDelay: isVisible ? `${BASE_DELAY_MS + delay}ms` : "0ms",
    },
  };
}
