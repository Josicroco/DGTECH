import { OPEN_PORTFOLIO_EVENT } from "@/components/PortfolioModal";

/**
 * Tratamento único dos links de menu (cabeçalho e rodapé).
 *
 * "Portfólio" abre a sobreposição em vez de navegar, e "Home" sobe ao topo sem
 * recarregar nem trocar o URL. As âncoras de seção seguem o comportamento
 * nativo do navegador.
 */
export function handleNavLinkClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (href === "#portfolio") {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent(OPEN_PORTFOLIO_EVENT));
    return;
  }
  if (href === "/") {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0 });
  }
}
