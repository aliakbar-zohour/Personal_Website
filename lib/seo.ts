import type { Metadata } from "next";
import { site, skills, projects, experience } from "@/lib/data";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://aliakbarzohour.vercel.app";

export const seo = {
  url: SITE_URL,
  name: site.name,
  title: site.title,
  description: site.description,
  locale: "en_US",
  language: "en",
  twitterHandle: "@aliakbar_zohour",
  email: site.email,
  keywords: [
    "Aliakbar Zohour",
    "Ali Akbar Zohour",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Angular Developer",
    "GSAP",
    "Framer Motion",
    "Web Developer Tehran",
    "Vitoria Co-Founder",
    "International Portfolio",
    "UI Engineer",
    "Creative Developer",
    "DevOps",
    "Linux",
    ...skills,
  ],
} as const;

export const routes = [
  {
    path: "/",
    title: site.title,
    description: site.description,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/work",
    title: "Work — Selected Projects by Aliakbar Zohour",
    description:
      "Explore selected projects by Aliakbar Zohour: realtime apps, creative CSS tools, AI experiments, and interaction design with React, Next.js, and motion.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Aliakbar Zohour — Frontend Engineer & Co-Founder",
    description:
      "Learn about Aliakbar Zohour: frontend engineer, co-founder at Vitoria, content creator, React & Angular specialist with DevOps experience — available worldwide.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact",
    title: "Contact Aliakbar Zohour — Hire & Collaborate",
    description:
      "Contact Aliakbar Zohour for freelance collaborations, product partnerships, and international frontend opportunities. Reach via email, Telegram, or LinkedIn.",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
] as const;

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "profile";
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const mergedKeywords = [...new Set([...seo.keywords, ...keywords])];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: seo.locale,
      type,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — Frontend Engineer & Co-Founder`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: seo.twitterHandle,
      site: seo.twitterHandle,
      images: ["/twitter-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: site.name,
    alternateName: ["Ali Akbar Zohour", "علی اکبر ظهور", "aliakbar-zohour", "aliakbarzohour"],
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    email: site.email,
    jobTitle: "Frontend Engineer & Co-Founder",
    description: site.description,
    worksFor: {
      "@type": "Organization",
      name: "Vitoria",
      url: "https://www.linkedin.com/company/vitoria-group",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    knowsAbout: [...skills],
    sameAs: site.socials.map((s) => s.href),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Islamic Azad University",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${site.name} — Frontend Engineering`,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Frontend engineering, product UI, motion design, and web development services for international brands and startups.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: "Worldwide",
    availableLanguage: ["English", "Persian"],
    serviceType: [
      "Frontend Development",
      "React Development",
      "Next.js Development",
      "UI Engineering",
      "Motion Design",
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function workCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/work#collection`,
    url: `${SITE_URL}/work`,
    name: "Selected Work — Aliakbar Zohour",
    description: routes[1].description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: project.href,
          dateCreated: project.year,
          keywords: project.stack.join(", "),
          author: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  };
}

export function aboutProfileJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: routes[2].title,
    description: routes[2].description,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    about: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      jobTitle: experience[0]?.role,
      worksFor: {
        "@type": "Organization",
        name: experience[0]?.company,
      },
    },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contact`,
    url: `${SITE_URL}/contact`,
    name: routes[3].title,
    description: routes[3].description,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    significantLink: [
      `mailto:${site.email}`,
      ...site.socials.map((s) => s.href),
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Aliakbar Zohour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aliakbar Zohour is a frontend engineer and co-founder at Vitoria, specializing in React, Next.js, Angular, GSAP, and cinematic digital product experiences. He is based in Tehran and available worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Aliakbar Zohour work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Aliakbar works with ${skills.slice(0, 8).join(", ")}, and more across frontend, motion, and DevOps.`,
        },
      },
      {
        "@type": "Question",
        name: "How can I hire or contact Aliakbar Zohour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can contact Aliakbar via email at ${site.email}, Telegram at https://t.me/aliakbarzohour20, or through the contact form at ${SITE_URL}/contact.`,
        },
      },
      {
        "@type": "Question",
        name: "Is Aliakbar Zohour available for international projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Aliakbar collaborates with teams worldwide on frontend engineering, product UI, and motion-rich web experiences.",
        },
      },
    ],
  };
}
