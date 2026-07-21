import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { SelectedWork } from "@/components/home/SelectedWork";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, routes } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: routes[0].title,
  description: routes[0].description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Aliakbar Zohour portfolio",
    "hire frontend developer",
    "React portfolio",
    "Next.js portfolio",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <Hero />
      <Marquee />
      <SelectedWork />
      <AboutPreview />
      <CtaBand />
    </>
  );
}
