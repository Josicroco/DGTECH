import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Trabalhe Conosco", href: "#trabalhe-conosco" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#241e00]">
      <div className="mx-auto w-full max-w-[1290px] px-6 py-16 lg:px-0 lg:py-[69px]">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          <Image
            src="/images/logo-white.svg"
            alt="DG Tech"
            width={137}
            height={43}
          />

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-[76px]">
            <div className="flex flex-col items-start gap-[12px] text-[14px] text-[#d8d2a6]">
              <p className="font-semibold">Menu Rápido</p>
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start gap-[12px] text-[14px] text-[#d8d2a6]">
              <p className="font-semibold">Contato</p>
              <div className="flex items-center gap-[12px]">
                <Image src="/icons/phone.svg" alt="" width={19} height={19} />
                <p>(11) 2950-6731</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="flex size-[19px] items-center justify-center rounded-full border-[0.6px] border-[rgba(15,23,42,0.07)] bg-[#463b05]">
                  <Image src="/icons/mail.svg" alt="" width={10} height={10} />
                </span>
                <p>contato@dgprojetos.com</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[12px] text-[14px] text-[#d8d2a6]">
              <p className="font-semibold">Endereço</p>
              <div className="flex items-start gap-[12px]">
                <span className="mt-[2px] flex size-[19px] shrink-0 items-center justify-center rounded-full border-[0.6px] border-[rgba(15,23,42,0.07)] bg-[#463b05]">
                  <Image src="/icons/pin.svg" alt="" width={10} height={10} />
                </span>
                <p className="max-w-[163px] leading-[23px]">
                  R. Vicente Leporace, 525 · Campo Belo, São Paulo - SP ·
                  04619-031
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[#463b05] pt-8 text-[13px] text-[#8a7f4d] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DG Tech. Todos os direitos reservados.</p>
          <p>R. Vicente Leporace, 525 · Campo Belo, São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}
