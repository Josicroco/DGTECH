import Image from "next/image";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    icon: "/icons/value-honra.svg",
    title: "Honra",
    text: "Integridade, ética e respeito em cada decisão.",
  },
  {
    icon: "/icons/value-resiliencia.svg",
    title: "Resiliência",
    text: "Persistência e equilíbrio diante de cada desafio.",
  },
  {
    icon: "/icons/value-comprometimento.svg",
    title: "Comprometimento",
    text: "Dedicação e ética para cumprir o combinado e ir além.",
  },
  {
    icon: "/icons/value-teamwork.svg",
    title: "Teamwork",
    text: "União e cooperação como base de tudo que construímos.",
  },
  {
    icon: "/icons/value-excelencia.svg",
    title: "Excelência",
    text: "O padrão de qualidade que perseguimos em cada entrega.",
  },
];

export default function Values() {
  return (
    <section className="mx-auto w-full max-w-[1344px] px-6 py-16 lg:px-0 lg:py-[70px]">
      <div className="flex flex-col items-center text-center">
        <Reveal
          as="p"
          className="font-mono text-[13px] font-medium tracking-[1.4px] text-[#998200] uppercase"
        >
          {"//valores"}
        </Reveal>
        <Reveal
          as="h2"
          delay={130}
          className="mt-[16px] text-[32px] text-[#1c1c18] lg:text-[42px]"
        >
          Valores da DGTech
        </Reveal>
      </div>

      <div className="mt-[50px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map((value, index) => (
          <Reveal
            key={value.title}
            delay={index * 130}
            variant="card-active"
            className="flex flex-col items-start rounded-[12px] border border-[rgba(153,130,0,0.1)] bg-[rgba(255,255,255,0.95)] p-[32px] hover:scale-[1.04] lg:p-[48px]"
          >
            <div className="flex size-[45.7px] items-center justify-center rounded-[10.4px] bg-[#fff099]">
              <Image src={value.icon} alt="" width={23} height={23} />
            </div>
            <p className="mt-[15px] text-[17.7px] font-semibold text-[#1c1c18]">
              {value.title}
            </p>
            <p className="mt-[4px] text-[14.5px] leading-[22.5px] text-[#54564c]">
              {value.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
