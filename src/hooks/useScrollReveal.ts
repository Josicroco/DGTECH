"use client";

import { useEffect, useRef, useState } from "react";

const BASE_DELAY_MS = 120;

const REVEAL_TRANSITION =
  "transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0,
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
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
    const node = ref.current;
    if (!node) return;

    const handleTransitionEnd = () => setIsTransitioning(false);
    node.addEventListener("transitionend", handleTransitionEnd);
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  return {
    ref,
    className: `${REVEAL_TRANSITION} ${
      isTransitioning ? "will-change-[opacity,transform]" : "will-change-auto"
    } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
    style: {
      transitionDelay: isVisible ? `${BASE_DELAY_MS + delay}ms` : "0ms",
    },
  };
}
