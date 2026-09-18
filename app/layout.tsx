import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Metal Industrial | Forjado, estampado y mecanizado",
  description:
    "Fabricación industrial de piezas metálicas para sectores automotriz, transporte, agro y petrolero. Consultá soluciones a medida para tu industria.",
  keywords: [
    "forjado",
    "estampado",
    "mecanizado",
    "piezas metálicas",
    "industria",
    "fabricación industrial",
  ],
  alternates: {
    canonical: "/",
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
