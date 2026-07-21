import type { Metadata } from "next";
import { WorkPageClient } from "@/components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Aliakbar Zohour — realtime apps, creative tools, and interaction experiments.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
