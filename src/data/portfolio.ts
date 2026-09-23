export type PortfolioPhoto = {
  src: string;
  alt: string;
};

export type PortfolioWork = {
  slug: string;
  name: string;
  photos: PortfolioPhoto[];
};

/**
 * Cada obra corresponde a uma pasta em /public/images/portfolio/<slug>.
 * A primeira foto de `files` é a capa exibida no card da obra, por isso a
 * ordem aqui nem sempre é a numérica dos arquivos.
 */
const WORKS: { slug: string; name: string; files: string[] }[] = [
  {
    slug: "black-wall",
    name: "Black Wall",
    files: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "bmg",
    name: "BMG",
    files: ["01.jpg", "02.jpg", "04.jpg", "03.jpg"],
  },
  {
    slug: "cj-101-102",
    name: "Cj. 101 e 102",
    files: [
      "10.jpg",
      "09.jpg",
      "04.jpg",
      "06.jpg",
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "05.jpg",
      "07.jpg",
      "12.jpg",
      "08.jpg",
      "11.jpg",
      "13.jpg",
    ],
  },
  {
    slug: "easynvest",
    name: "Easynvest",
    files: ["03.jpg", "04.jpg", "01.jpg", "02.jpg"],
  },
  {
    slug: "pick-pay",
    name: "Pick Pay",
    files: ["01.jpg", "03.jpg", "02.jpg"],
  },
  {
    slug: "totvs",
    name: "TOTVS",
    files: ["05.jpg", "03.jpg", "01.jpg", "02.jpg", "04.jpg", "06.jpg"],
  },
  {
    slug: "unesp-informov",
    name: "Unesp Informov",
    files: ["02.jpg", "03.jpg", "01.jpg"],
  },
  {
    slug: "xp-informov",
    name: "XP Informov",
    files: ["01.jpg", "02.jpg", "04.jpg", "03.jpg"],
  },
  {
    slug: "xvc4",
    name: "XVC4",
    files: ["06.jpg", "03.jpg", "04.jpg", "01.jpg", "02.jpg", "05.jpg"],
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = WORKS.map(({ slug, name, files }) => ({
  slug,
  name,
  photos: files.map((file, index) => ({
    src: `/images/portfolio/${slug}/${file}`,
    alt: `${name} — foto ${index + 1} da obra executada pela DG Tech`,
  })),
}));
