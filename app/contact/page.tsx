import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  createPageMetadata,
  routes,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: routes[3].description,
  path: "/contact",
  keywords: [
    "contact Aliakbar Zohour",
    "hire Aliakbar Zohour",
    "Telegram aliakbarzohour20",
    "frontend freelance",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageClient />
    </>
  );
}
