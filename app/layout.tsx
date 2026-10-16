import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { isPreviewDeployment, siteUrl } from "./site-config";
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
  metadataBase: siteUrl,
  title: {
    default: "Packlin S.A. | Forjado y fundición de latón",
    template: "%s | Packlin S.A.",
  },
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Packlin S.A.",
    title: "Packlin S.A. | Forjado y fundición de latón",
    description:
      "Fabricación de piezas de latón a medida para empresas industriales argentinas, con matrices exclusivas y control de calidad.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packlin S.A. | Forjado y fundición de latón",
    description:
      "Fabricación de piezas de latón a medida para empresas industriales argentinas.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: !isPreviewDeployment,
    follow: !isPreviewDeployment,
    googleBot: {
      index: !isPreviewDeployment,
      follow: !isPreviewDeployment,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Packlin S.A.",
  url: siteUrl.toString(),
  logo: new URL("/logo.png", siteUrl).toString(),
  description:
    "Fabricación de piezas de latón a medida para empresas industriales argentinas.",
  foundingDate: "2006",
  telephone: "+54-11-3310-1085",
  email: "packlinsa@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leonardo Euler 2435",
    addressLocality: "Los Polvorines",
    addressRegion: "Buenos Aires",
    postalCode: "B1613",
    addressCountry: "AR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
