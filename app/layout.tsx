import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { isPreviewDeployment, siteUrl } from "./site-config";
import ContactAction from "./contact-action";
import WhatsAppIcon from "./whatsapp-icon";
import "./globals.css";

const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": new URL("/#empresa", siteUrl).toString(),
      name: "Packlin S.A.",
      alternateName: "Packlin",
      url: siteUrl.toString(),
      logo: new URL("/logo.png", siteUrl).toString(),
      description:
        "Forjado y fundición de piezas de latón a medida para la industria en Argentina. Válvulas, conexiones GNC, sanitarios y cerrajería.",
      foundingDate: "2006",
      telephone: "+54-11-3310-1085",
      email: "packlinsa@gmail.com",
      image: new URL("/Fotos/LUC_9954.jpg", siteUrl).toString(),
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.4851,
        longitude: -58.6922,
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Leonardo Euler 2435",
        addressLocality: "Los Polvorines",
        addressRegion: "Buenos Aires",
        postalCode: "B1613",
        addressCountry: "AR",
      },
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "Service",
      name: "Fabricación de piezas de latón a medida",
      serviceType: "Forjado y fundición de piezas de latón",
      provider: {
        "@id": new URL("/#empresa", siteUrl).toString(),
      },
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    {
      "@type": "VideoObject",
      name: "Proceso de fabricación de piezas de latón en Packlin",
      description:
        "Video del proceso de colada de latón en la planta de Packlin, fabricante de piezas industriales a medida.",
      thumbnailUrl: new URL("/Fotos/LUC_9954.jpg", siteUrl).toString(),
      contentUrl: new URL("/video_horizontal.mp4", siteUrl).toString(),
      publisher: {
        "@id": new URL("/#empresa", siteUrl).toString(),
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ContactAction
          className="whatsapp-float"
          href="https://wa.me/541133101085?text=Hola%2C%20quisiera%20consultar%20por%20sus%20piezas%20de%20lat%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a Packlin por WhatsApp"
          title="Contactar por WhatsApp"
          contactMethod="whatsapp"
          placement="floating_button"
        >
          <WhatsAppIcon />
        </ContactAction>
        {googleTagManagerId ? (
          <>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
                height="0"
                width="0"
                title="Google Tag Manager"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
