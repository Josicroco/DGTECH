import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[600px] items-center justify-center overflow-hidden lg:h-[915px]">
      <Image
        src="/images/hero-bg.png"
        alt="Equipe DG Tech"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(20,17,0,0.58)]" />

      <div className="relative z-10 flex w-full max-w-[764px] flex-col items-center gap-[18px] px-6 text-center">
        <div className="flex w-full flex-col items-center gap-[14px]">
          <p className="text-[10px] font-semibold tracking-[1.4px] text-[#fffae6] uppercase">
            {"//Engenharia elétrica & automação"}
          </p>
          <h1 className="text-[36px] leading-[1.15] tracking-[-1px] text-white lg:text-[58px] lg:leading-[62.64px]">
            Engenharia elétrica que{" "}
            <span className="font-semibold text-[#ffd900]">
              sustenta grandes operações.
            </span>
          </h1>
          <p className="max-w-[552px] text-[16px] leading-[23px] text-white lg:text-[18px]">
            Desde 2017, a DG Tech projeta e executa infraestrutura elétrica,{" "}
            <span className="font-semibold">
              automação e segurança para os maiores sites corporativos e
              galpões logísticos e industriais.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[9px]">
          <a
            href="#sobre"
            className="flex h-[69px] w-[259px] items-center justify-center rounded-[10.469px] border border-[rgba(225,213,48,0.33)] bg-[#ffd900] text-[16px] font-semibold text-[#241e00] transition-opacity hover:opacity-90"
          >
            Conheça a DG Tech
          </a>
          <a
            href="#servicos"
            className="flex h-[69px] w-[171px] items-center justify-center gap-[11.633px] rounded-[10.469px] border border-[rgba(0,0,0,0.05)] bg-[#fffceb] text-[16px] font-semibold text-[#241e00] transition-opacity hover:opacity-90"
          >
            Saiba mais
            <Image
              src="/icons/arrow-up-right-white.svg"
              alt=""
              width={15}
              height={15}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
