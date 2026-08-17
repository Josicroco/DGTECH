import type { Metadata } from "next";
import { Albert_Sans, Plus_Jakarta_Sans, Kode_Mono, Manrope } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const kodeMono = Kode_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DG Tech | Engenharia elétrica & automação",
  description:
    "Desde 2017, a DG Tech projeta e executa infraestrutura elétrica, automação e segurança para os maiores sites corporativos e galpões logísticos e industriais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${albertSans.variable} ${plusJakartaSans.variable} ${kodeMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
