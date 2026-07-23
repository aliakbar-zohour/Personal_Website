import type { Metadata } from "next";
import { NotFoundClient } from "@/components/ui/NotFoundClient";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Aliakbar Zohour's portfolio.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
