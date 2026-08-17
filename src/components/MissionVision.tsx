import Reveal from "@/components/Reveal";

const CARDS = [
  {
    number: "01",
    title: "Missão",
    bg: "bg-[#fff8d1]",
    text: "Aqui na DG Tech, a gente transforma pessoas para transformar resultados. Quando você olha para uma instalação nossa, você vê engenharia feita com responsabilidade, com técnica e com paixão em cada detalhe. E sente, no aperto de mão e no serviço entregue, que aqui ninguém se contenta em atender o esperado — a gente existe para superar. Porque quando a pessoa cresce, a obra dura. E o que a gente constrói, constrói para durar.",
  },
  {
    number: "02",
    title: "Visão",
    bg: "bg-[#fff099]",
    text: "Ser a empresa de engenharia de instalações mais admirada do Brasil, e a mais desejada para se trabalhar, com as pessoas felizes, crescendo de verdade e alcançando seu máximo potencial. Nos mercados corporativo e de galpões, não vamos seguir o padrão: vamos ser o padrão que o setor inteiro vai querer seguir. Esse futuro já começou!",
  },
];

export default function MissionVision() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-10 lg:px-0">
      <div className="grid overflow-hidden rounded-[25px] border border-black/[0.04] sm:grid-cols-2">
        {CARDS.map((card, index) => (
          <Reveal
            key={card.number}
            delay={index * 90}
            className={`${card.bg} px-6 py-10 lg:px-[49px] lg:py-[49px]`}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-[29px] items-center justify-center rounded-[8px] bg-[#ffd900] px-[13px] font-manrope text-[14px] font-extrabold tracking-[1px] text-[#1c1c18]">
                {card.number}
              </span>
              <h3 className="text-[20px] font-semibold text-[#241e00]">
                {card.title}
              </h3>
            </div>
            <p className="mt-[26px] text-[16px] leading-[28px] text-[#241e00]">
              {card.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
