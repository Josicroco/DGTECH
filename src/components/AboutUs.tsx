import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="sobre"
      className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-0 lg:py-[100px]"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[86px]">
        <div className="flex flex-col items-start">
          <p className="font-mono text-[13px] font-semibold tracking-[1.4px] text-[#998200] uppercase">
            {"//Sobre"}
          </p>
          <h2 className="mt-[18px] text-[32px] tracking-[-0.6px] text-[#1c1c18] lg:text-[42px]">
            Quem somos
          </h2>
          <div className="mt-[24px] flex flex-col gap-[23px] text-[16px] leading-[23px] text-[#3b3c35] lg:text-[18px]">
            <p>
              Fundada em 2017, a DG Tech desenvolve e executa projetos
              técnicos de instalações elétricas, automação, cabeamento
              estruturado, sistemas de segurança e detecção de incêndio, com
              atuação também na implantação desses sistemas em grandes sites
              do mercado corporativo, comercial e industrial.
            </p>
            <p>
              Nossa equipe técnica é formada por profissionais com mais de{" "}
              <span className="font-semibold">
                15 anos de experiência no mercado
              </span>
              , com registro comprovado no CREA e vasto acervo técnico.
              Trabalhamos com certificação e homologação junto aos melhores
              fabricantes do Brasil e do mundo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[13px]">
          <div className="flex gap-[12px]">
            <div className="relative h-[170px] w-[70.8%] overflow-hidden rounded-[14px] sm:h-[225px]">
              <Image
                src="/images/quemsomos-1.png"
                alt="Equipe DG Tech em treinamento técnico"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 450px, 60vw"
              />
              <div className="absolute bottom-[10px] left-[10px] flex items-center gap-2 rounded-[8px] border border-[rgba(216,210,166,0.44)] bg-white px-3 py-2">
                <span className="size-[7px] rounded-[4px] bg-[#ffe866]" />
                <p className="text-[9px] text-[#54564c] uppercase">
                  <span className="font-bold">+10 anos</span> de experiência
                  técnica no mercado
                </p>
              </div>
            </div>
            <div className="relative h-[170px] w-[29.2%] overflow-hidden rounded-[14px] sm:h-[225px]">
              <Image
                src="/images/quemsomos-2.png"
                alt="Equipe DG Tech"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 175px, 25vw"
              />
            </div>
          </div>
          <div className="flex gap-[13px]">
            <div className="relative h-[170px] w-1/2 overflow-hidden rounded-[14px] sm:h-[225px]">
              <Image
                src="/images/quemsomos-3.png"
                alt="Vista aérea de site corporativo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 315px, 50vw"
              />
            </div>
            <div className="relative h-[170px] w-1/2 overflow-hidden rounded-[14px] sm:h-[225px]">
              <Image
                src="/images/quemsomos-4.png"
                alt="Técnico DG Tech em campo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 305px, 50vw"
              />
              <div className="absolute bottom-[10px] left-[10px] flex items-center gap-2 rounded-[8px] border border-[rgba(216,210,166,0.44)] bg-white px-3 py-2">
                <span className="size-[7px] rounded-[4px] bg-[#ffe866]" />
                <p className="text-[9px] text-[#54564c] uppercase">
                  <span className="font-bold">2027 -</span> ano de fundação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
