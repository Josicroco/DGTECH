import Image from "next/image";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: "/icons/service-eletrica.svg",
    title: "Elétrica",
    text: "Projeto e execução de instalações elétricas corporativas, comerciais e industriais.",
  },
  {
    icon: "/icons/service-cabeamento.svg",
    title: "Cabeamento estruturado",
    text: "Certificação com Furukawa, Commscope e Nexans.",
  },
  {
    icon: "/icons/service-automacao.svg",
    title: "Automação",
    text: "Soluções certificadas com Legrand.",
  },
  {
    icon: "/icons/service-hidraulica.svg",
    title: "Hidráulica",
    text: "Projetos e execução hidráulica para empreendimentos corporativos e industriais.",
  },
  {
    icon: "/icons/service-cftv.svg",
    title: "CFTV e controle de acesso",
    text: "Sistemas com Control iD, Dahua, HID e Intelbras.",
  },
  {
    icon: "/icons/service-incendio-deteccao.svg",
    title: "Detecção de incêndio",
    text: "Homologação com Bosch, Honeywell, Simplex, Siemens, Protec, AS Cael, Intelbras e Werin.",
  },
  {
    icon: "/icons/service-projetos.svg",
    title: "Projetos técnicos",
    text: "Desenvolvimento de projetos técnicos completos para instalações de grande porte.",
  },
  {
    icon: "/icons/service-incendio-combate.svg",
    title: "Combate a incêndio",
    text: "Sistemas de combate a incêndio executados por parceiros que compartilham os mesmos valores de compromisso e qualidade da DG Tech.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-0 lg:py-[100px]"
    >
      <Reveal
        as="p"
        className="font-mono text-[13px] font-medium tracking-[1.4px] text-[#998200] uppercase"
      >
        Serviços
      </Reveal>
      <Reveal
        as="h2"
        delay={130}
        className="mt-[16px] text-[32px] tracking-[-0.6px] text-[#1c1c18] lg:text-[42px]"
      >
        Áreas de atuação
      </Reveal>

      <div className="mt-[45px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.title}
            delay={(index % 4) * 130}
            className="rounded-[12px] border-[0.96px] border-[#f0ecd6] bg-white p-[27px]"
          >
            <div className="flex size-[44.2px] items-center justify-center rounded-[10.6px] bg-[#fff7cc]">
              <Image src={service.icon} alt="" width={21} height={21} />
            </div>
            <p className="mt-[13px] text-[17.3px] font-semibold text-[#1c1c18]">
              {service.title}
            </p>
            <p className="mt-[12px] text-[13.9px] leading-[21.6px] text-[#54564c]">
              {service.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
