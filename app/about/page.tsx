import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/AboutPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  aboutProfileJsonLd,
  breadcrumbJsonLd,
  createPageMetadata,
  routes,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: routes[2].description,
  path: "/about",
  type: "profile",
  keywords: [
    "about Aliakbar Zohour",
    "Vitoria co-founder",
    "digital business builder Tehran",
    "biography",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutProfileJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutPageClient />
    </>
  );
}
