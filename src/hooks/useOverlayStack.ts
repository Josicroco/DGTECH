"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Lógica única de abrir/fechar sobreposições (modais, lightboxes, galerias).
 *
 * Cada nível aberto vira uma entrada no histórico com o mesmo URL, então o
 * botão "voltar" do navegador fecha um nível por vez em vez de sair da página.
 * Fechar nunca navega, nunca recarrega e nunca altera o URL: a posição de
 * rolagem e o foco são restaurados exatamente como estavam antes de abrir.
 */

const HISTORY_KEY = "dgOverlayDepth";

type BodyLock = {
  position: string;
  top: string;
  left: string;
  right: string;
  width: string;
};

let lockCount = 0;
let lockedScrollY = 0;
let previousBodyStyle: BodyLock | null = null;
let previousHtmlOverflowY = "";

/**
 * Trava a rolagem do fundo preservando a posição: o body vira `fixed` com
 * `top` negativo igual ao scrollY, técnica que funciona também no iOS, onde
 * `overflow: hidden` no body perde a posição e joga a página para o topo.
 */
function lockBodyScroll() {
  if (lockCount++ > 0) return;

  const html = document.documentElement;
  const body = document.body;

  lockedScrollY = window.scrollY;
  previousBodyStyle = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
  };
  previousHtmlOverflowY = html.style.overflowY;

  // Com o body fixo o documento encolhe e a barra de rolagem some; forçá-la a
  // continuar reservada evita qualquer deslocamento horizontal do conteúdo.
  if (window.innerWidth > html.clientWidth) {
    html.style.overflowY = "scroll";
  }

  body.style.position = "fixed";
  body.style.top = `-${lockedScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
}

function unlockBodyScroll() {
  if (lockCount === 0) return;
  if (--lockCount > 0) return;

  const html = document.documentElement;
  const body = document.body;

  if (previousBodyStyle) {
    body.style.position = previousBodyStyle.position;
    body.style.top = previousBodyStyle.top;
    body.style.left = previousBodyStyle.left;
    body.style.right = previousBodyStyle.right;
    body.style.width = previousBodyStyle.width;
    previousBodyStyle = null;
  }
  html.style.overflowY = previousHtmlOverflowY;

  // Restauração instantânea, sem animação, mesmo que algo ative scroll suave.
  const previousScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, lockedScrollY);
  html.style.scrollBehavior = previousScrollBehavior;
}

function readDepth(state: unknown): number {
  if (typeof state !== "object" || state === null) return 0;
  const depth = (state as Record<string, unknown>)[HISTORY_KEY];
  return typeof depth === "number" ? depth : 0;
}

export function useOverlayStack<T>() {
  const [stack, setStack] = useState<T[]>([]);
  // Profundidade já renderizada, para os manipuladores lerem sem depender de
  // `stack` e sem recriar as funções a cada nível aberto.
  const depthRef = useRef(0);

  const isOpen = stack.length > 0;

  useEffect(() => {
    depthRef.current = stack.length;
  }, [stack.length]);

  const applyDepth = useCallback((depth: number) => {
    depthRef.current = depth;
    setStack((current) =>
      current.length === depth ? current : current.slice(0, depth),
    );
  }, []);

  /** Abre mais um nível e registra uma entrada de histórico no mesmo URL. */
  const push = useCallback((item: T) => {
    const depth = depthRef.current + 1;
    depthRef.current = depth;
    window.history.pushState(
      { ...window.history.state, [HISTORY_KEY]: depth },
      "",
    );
    setStack((current) => [...current, item]);
  }, []);

  /** Troca o nível atual sem criar entrada nova (ex.: setas do lightbox). */
  const replaceTop = useCallback((item: T) => {
    setStack((current) =>
      current.length === 0 ? current : [...current.slice(0, -1), item],
    );
  }, []);

  /**
   * Fecha até a profundidade pedida (0 = fecha tudo). Atualiza a interface na
   * hora e desfaz as entradas de histórico correspondentes, sem navegar.
   */
  const close = useCallback(
    (depth = 0) => {
      const current = depthRef.current;
      if (depth >= current) return;
      applyDepth(depth);
      window.history.go(depth - current);
    },
    [applyDepth],
  );

  // Uma entrada de histórico anterior (recarga, bfcache) não deve reabrir nada.
  useEffect(() => {
    const state = window.history.state;
    if (readDepth(state) === 0) return;
    const rest = { ...(state as Record<string, unknown>) };
    delete rest[HISTORY_KEY];
    window.history.replaceState(rest, "");
  }, []);

  // O estado do histórico é a fonte da verdade: vale para o "voltar" do
  // navegador e para os fechamentos disparados por `close`.
  useEffect(() => {
    const onPopState = (event: PopStateEvent) => applyDepth(readDepth(event.state));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [applyDepth]);

  // ESC fecha um nível, igual ao X e ao clique fora.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close(depthRef.current - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Trava a rolagem e devolve o foco ao elemento que abriu a sobreposição.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
      opener?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  return { stack, isOpen, push, replaceTop, close };
}
