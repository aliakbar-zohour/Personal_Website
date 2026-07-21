import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aliakbar Zohour for collaborations, product builds, and international opportunities.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
