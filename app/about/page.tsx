import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Aliakbar Zohour — frontend engineer, co-founder at Vitoria, content creator, and builder of cinematic digital experiences.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
