import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import logoPacklin from "./logoPacklin.jpg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ejemplo.com"),
  title: "Packlin | Forjado y fundición de piezas de latón",
  description:
    "Fabricación de piezas de latón a medida para empresas industriales argentinas, con matrices exclusivas, control de calidad y entregas ágiles.",
  keywords: [
    "forjado",
    "fundición de latón",
    "forjado de latón",
    "piezas de latón",
    "Packlin",
    "fabricación industrial",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: logoPacklin.src,
    shortcut: logoPacklin.src,
    apple: logoPacklin.src,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
