import type { Metadata } from "next";
import { WorkPageClient } from "@/components/work/WorkPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  routes,
  workCollectionJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description: routes[1].description,
  path: "/work",
  keywords: [
    "Aliakbar Zohour projects",
    "digital business builds",
    "Python Go TypeScript projects",
    "AI automation products",
  ],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          workCollectionJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />
      <WorkPageClient />
    </>
  );
}
