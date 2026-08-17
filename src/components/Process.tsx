import Image from "next/image";

const STEPS = [
  { number: "01", label: "Entendendo a necessidade do cliente" },
  { number: "02", label: "Visita técnica" },
  { number: "03", label: "Estudo e planejamento" },
  { number: "04", label: "Projeto" },
  { number: "05", label: "Execução" },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-[68px]">
      <Image
        src="/images/process-bg.png"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(36,30,0,0.57)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 text-center lg:px-0">
        <p className="font-mono text-[13px] font-medium tracking-[1.4px] text-white uppercase">
          {"//trabalho"}
        </p>
        <h2 className="mt-[13px] text-[32px] text-white lg:text-[42px]">
          Como trabalhamos
        </h2>

        <div className="mt-[60px] grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-between">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center gap-[16px] lg:w-[220px]"
            >
              <span className="flex size-[47.4px] items-center justify-center rounded-full bg-[#ffd900] font-mono font-medium text-[17.8px] text-[#241e00]">
                {step.number}
              </span>
              <p className="text-[17.2px] leading-[25.8px] text-white">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
