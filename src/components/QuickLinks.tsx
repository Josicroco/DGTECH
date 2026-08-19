import Image from "next/image";
import Reveal from "@/components/Reveal";

const CARDS = [
  {
    title: "Sobre",
    description:
      "Fundada em 2017, referência técnica com certificação junto aos melhores fabricantes.",
    descWidth: "lg:w-[237px]",
    cta: "Conheça nossa história",
    href: "#sobre",
    ctaColor: "text-[#877516]",
  },
  {
    title: "Serviços",
    description:
      "Projetos técnicos, instalações elétricas, cabeamento estruturado, detecção de incêndio, automação, CFTV e controle de acesso.",
    descWidth: "lg:w-[380px]",
    cta: "Ver áreas de atuação",
    href: "#servicos",
    ctaColor: "text-[#998200]",
  },
  {
    title: "Trabalhe Conosco",
    description:
      "Estamos construindo a empresa de engenharia mais desejada para se trabalhar no Brasil.",
    descWidth: "lg:w-[286px]",
    cta: "Quero fazer parte do time",
    href: "#trabalhe-conosco",
    ctaColor: "text-[#998200]",
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-10 mx-auto mt-6 w-full max-w-[1280px] px-6 lg:-mt-[73px] lg:px-0">
      <div className="grid gap-10 rounded-[12px] border border-black/8 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-between lg:gap-0 lg:px-[90px] lg:py-[45px]">
        {CARDS.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 130}
            className="flex w-full flex-col items-start lg:w-[320px]"
          >
            <div className="flex w-full flex-col items-start gap-[22px]">
              <div className="flex flex-col items-start gap-[16px]">
                <div className="flex size-[48px] items-center justify-center rounded-[12px] bg-[#fff7cc]">
                  <Image
                    src="/icons/card-doc.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
                <p className="text-[21px] font-semibold text-[#1c1c18]">
                  {card.title}
                </p>
              </div>
              <p
                className={`${card.descWidth} w-full text-[15px] leading-[23px] text-[#54564c] lg:shrink-0`}
              >
                {card.description}
              </p>
            </div>
            <a
              href={card.href}
              className={`mt-[41px] text-[14px] font-bold ${card.ctaColor} transition-opacity hover:opacity-70`}
            >
              {card.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
