import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Careers() {
  return (
    <section
      id="trabalhe-conosco"
      className="mx-auto w-full max-w-[1280px] px-6 py-10 lg:px-0"
    >
      <div className="grid gap-10 overflow-hidden rounded-[12px] bg-[#ffd900] p-8 lg:grid-cols-2 lg:gap-0 lg:p-[78px_83px_78px_109px]">
        <div className="flex flex-col justify-center">
          <Reveal
            as="p"
            className="font-mono text-[12px] font-medium tracking-[1.4px] text-[#241e00] uppercase"
          >
            {"//Trabalhe Conosco"}
          </Reveal>
          <Reveal
            as="h2"
            delay={130}
            className="mt-[26px] text-[32px] tracking-[-0.6px] text-[#241e00] lg:text-[42px]"
          >
            Nosso time
          </Reveal>
          <Reveal
            delay={260}
            className="mt-[26px] flex flex-col gap-[28px] text-[16px] leading-[28px] text-[#241e00] lg:text-[18px]"
          >
            <p>
              A DG Tech é feita de gente que decidiu não seguir o padrão.
              Aqui, honra, resiliência, comprometimento e excelência
              sustentam o trabalho em equipe, e o trabalho em equipe sustenta
              a excelência que buscamos em cada projeto.
            </p>
            <p>
              Estamos construindo o futuro da empresa de engenharia mais
              desejada para se trabalhar no Brasil. Se você se identifica com
              esse propósito, seu lugar pode ser aqui.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={130}
          className="mx-auto w-full max-w-[460px] rounded-[20px] bg-white p-6"
        >
          <div className="relative flex flex-col items-center">
            <div className="relative h-[195px] w-full overflow-hidden rounded-[14px]">
              <Image
                src="/images/careers-photo.png"
                alt="Time DG Tech"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
            <Image
              src="/icons/dots.svg"
              alt=""
              width={21}
              height={3}
              className="mt-3"
            />
          </div>
          <p className="mt-[22px] text-[20px] text-[#1c1c18]">
            Trabalhe Conosco
          </p>
          <p className="mt-[10px] text-[14.5px] leading-[23.2px] text-[#54564c]">
            A DG Tech está sempre em busca de profissionais técnicos que
            valorizam precisão, responsabilidade e trabalho bem feito.
          </p>
          <a
            href="mailto:contato@dgtech.com.br"
            className="mt-[18px] flex items-center justify-center gap-[5px] rounded-[10px] bg-[#ffd900] py-[18px] text-[15.5px] font-medium text-[#241e00] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          >
            Enviar currículo
            <Image
              src="/icons/arrow-up-right-dark.svg"
              alt=""
              width={13}
              height={13}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
