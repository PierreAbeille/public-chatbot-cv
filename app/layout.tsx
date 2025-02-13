import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre Abeille - Développeur web fullstack freelance à Toulouse",
  description:
    "Développeur web fullstack freelance à Toulouse, expert en Angular, React et Node.js. Besoin d'un site performant ou d'une app moderne ? Discutons ensemble !",
  applicationName: "Pierre Abeille - Développeur web fullstack freelance",
  authors: [{ name: "Pierre Abeille", url: "https://www.pierreabeille.fr" }],
  alternates: { canonical: "https://www.pierreabeille.fr" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>

        </section>
        {children}
      </body>
    </html>
  );
}
