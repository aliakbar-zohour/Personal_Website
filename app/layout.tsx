import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Outfit, Syne } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import { PageTransition } from "@/components/providers/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data";
import {
  createPageMetadata,
  faqJsonLd,
  personJsonLd,
  professionalServiceJsonLd,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakhFaNum-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-ExtraBlack.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});

const base = createPageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  classification: "Digital Business Builder / Personal Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "IR-07",
    "geo.placename": "Tehran",
    "og:email": site.email,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080a0e" },
    { media: "(prefers-color-scheme: light)", color: "#080a0e" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-locale="en"
      className={`${outfit.variable} ${syne.variable} ${instrument.variable} ${yekanBakh.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("az-locale");if(l==="fa"){var r=document.documentElement;r.lang="fa";r.dir="rtl";r.dataset.locale="fa";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="site-shell min-h-full font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--btn-on-accent)]"
        >
          Skip to content
        </a>
        <JsonLd
          data={[
            personJsonLd(),
            websiteJsonLd(),
            professionalServiceJsonLd(),
            faqJsonLd(),
          ]}
        />
        <Providers>
          <Navigation />
          <PageTransition>
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
