"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PORTFOLIO_WORKS } from "@/data/portfolio";

export const OPEN_PORTFOLIO_EVENT = "open-portfolio";

export default function PortfolioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeWorkSlug, setActiveWorkSlug] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeWork = PORTFOLIO_WORKS.find((work) => work.slug === activeWorkSlug) ?? null;
  const photos = activeWork?.photos ?? [];

  const closeAll = useCallback(() => {
    setIsOpen(false);
    setActiveWorkSlug(null);
    setActiveIndex(null);
  }, []);

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
        } else if (activeWorkSlug !== null) {
          setActiveWorkSlug(null);
        } else {
          setIsOpen(false);
        }
        return;
      }
      if (activeIndex === null) return;
      if (event.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
      if (event.key === "ArrowRight" && activeIndex < photos.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeIndex, activeWorkSlug, photos.length]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1c1c18]/80 px-4 py-6 backdrop-blur-sm sm:px-6 lg:py-16"
      onClick={closeAll}
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
              {activeWork ? activeWork.name : "Obras e projetos executados"}
            </h2>
            {activeWork && (
              <button
                type="button"
                onClick={() => setActiveWorkSlug(null)}
                className="mt-4 inline-flex items-center gap-2 font-mono text-[12px] font-semibold tracking-[1.2px] text-[#1c1c18]/60 uppercase transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#998200]"
              >
                <span className="text-[16px] leading-none">‹</span>
                Todas as obras
              </button>
            )}
          </div>
          <button
            type="button"
            aria-label="Fechar portfólio"
            onClick={closeAll}
            className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-black/8 bg-white text-[#1c1c18] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08]"
          >
            <span className="text-[20px] leading-none">×</span>
          </button>
        </div>

        {activeWork ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <button
                key={`${activeWork.slug}-${photo.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[3/4] overflow-hidden rounded-[12px] bg-black/5"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_WORKS.map((work) => (
              <button
                key={work.slug}
                type="button"
                onClick={() => setActiveWorkSlug(work.slug)}
                className="group overflow-hidden rounded-[14px] border border-black/8 bg-white text-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[4px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <Image
                    src={work.photos[0].src}
                    alt={`Capa da obra ${work.name}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-[18px] tracking-[-0.3px] text-[#1c1c18]">{work.name}</p>
                    <p className="mt-1 font-mono text-[12px] tracking-[1.2px] text-[#1c1c18]/50 uppercase">
                      {work.photos.length} {work.photos.length === 1 ? "foto" : "fotos"}
                    </p>
                  </div>
                  <span className="text-[20px] leading-none text-[#998200] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]">
                    ›
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {activeWork && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-2 sm:px-4 sm:py-10"
          onClick={() => setActiveIndex(null)}
        >
          <p className="pointer-events-none absolute top-6 left-4 z-30 font-mono text-[12px] tracking-[1.2px] text-white/70 uppercase sm:left-6">
            {activeWork.name} · {activeIndex + 1}/{photos.length}
          </p>

          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 z-30 flex size-[44px] items-center justify-center rounded-[10px] border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] sm:top-6 sm:right-6"
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
              className="absolute left-2 z-30 flex size-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] sm:left-8"
            >
              <span className="text-[20px] leading-none">‹</span>
            </button>
          )}

          {activeIndex < photos.length - 1 && (
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((current) => (current !== null ? current + 1 : current));
              }}
              className="absolute right-2 z-30 flex size-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] sm:right-8"
            >
              <span className="text-[20px] leading-none">›</span>
            </button>
          )}

          <div
            className="relative z-0 h-[100dvh] w-screen sm:h-[85vh] sm:w-full sm:max-w-[900px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
