import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-6 lg:px-[174px] lg:pt-[56px]">
      <div className="flex w-full max-w-[1576px] items-center justify-between rounded-[12px] border border-[rgba(239,235,214,0.61)] bg-[rgba(255,255,255,0.86)] px-6 py-4 backdrop-blur-[6.45px] lg:px-8 lg:py-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="DG Tech"
            width={137}
            height={43}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[31px] font-nav lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-block font-medium text-[14px] text-[#3b3c35] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] hover:text-[#1c1c18]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#trabalhe-conosco"
            className="flex items-center gap-[10px] rounded-[9px] bg-[#ffd900] px-6 py-[12px] font-medium text-[14px] text-[#241e00] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
          >
            Trabalhe Conosco
            <Image
              src="/icons/arrow-up-right.svg"
              alt=""
              width={13}
              height={13}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
