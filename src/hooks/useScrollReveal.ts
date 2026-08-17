"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_TRANSITION =
  "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0,
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `${REVEAL_TRANSITION} ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
    style: { transitionDelay: isVisible ? `${delay}ms` : "0ms" },
  };
}
