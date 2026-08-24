"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PORTFOLIO_IMAGES = Array.from({ length: 14 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/images/portfolio/portfolio-${number}.jpg`,
    alt: `Obra executada pela DG Tech ${number}`,
  };
});

export const OPEN_PORTFOLIO_EVENT = "open-portfolio";

export default function PortfolioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const openGallery = () => setIsOpen(true);
    window.addEventListener(OPEN_PORTFOLIO_EVENT, openGallery);
    return () => window.removeEventListener(OPEN_PORTFOLIO_EVENT, openGallery);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeIndex !== null) {
          setActiveIndex(null);
        } else {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1c1c18]/80 px-4 py-6 backdrop-blur-sm sm:px-6 lg:py-16"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[1200px] rounded-[16px] bg-[#fdfcf6] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[13px] font-semibold tracking-[1.4px] text-[#998200] uppercase">
              {"//Portfólio"}
            </p>
            <h2 className="mt-[10px] text-[28px] tracking-[-0.6px] text-[#1c1c18] lg:text-[36px]">
              Obras e projetos executados
            </h2>
          </div>
          <button
            type="button"
            aria-label="Fechar portfólio"
            onClick={() => setIsOpen(false)}
            className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-black/8 bg-white text-[#1c1c18] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08]"
          >
            <span className="text-[20px] leading-none">×</span>
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {PORTFOLIO_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-[12px] bg-black/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 px-4 py-10"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 flex size-[40px] items-center justify-center rounded-[10px] border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08]"
          >
            <span className="text-[20px] leading-none">×</span>
          </button>

          {activeIndex > 0 && (
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((current) => (current !== null ? current - 1 : current));
              }}
              className="absolute left-4 flex size-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] sm:left-8"
            >
              <span className="text-[20px] leading-none">‹</span>
            </button>
          )}

          {activeIndex < PORTFOLIO_IMAGES.length - 1 && (
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((current) => (current !== null ? current + 1 : current));
              }}
              className="absolute right-4 flex size-[44px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] sm:right-8"
            >
              <span className="text-[20px] leading-none">›</span>
            </button>
          )}

          <div
            className="relative h-[80vh] w-full max-w-[900px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={PORTFOLIO_IMAGES[activeIndex].src}
              alt={PORTFOLIO_IMAGES[activeIndex].alt}
              fill
              className="object-contain"
              sizes="900px"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
