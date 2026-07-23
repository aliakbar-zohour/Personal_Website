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
    "Digital Business Builder",
    "One-Person Army",
    "Business Engineer",
    "Python Developer",
    "Golang Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "AI Automation",
    "Product Builder",
    "Startup Builder",
    "Full Stack Developer",
    "Web Developer Tehran",
    "Vitoria Co-Founder",
    "Digital Business",
    "Automated Business Systems",
    "Design Services",
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
    title: "Work — Digital Businesses & Products by Aliakbar Zohour",
    description:
      "Selected builds by Aliakbar Zohour: digital products, APIs, AI tools, and systems that turn ideas into working businesses — Python, Go, TypeScript, and more.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Aliakbar Zohour — Digital Business Builder",
    description:
      "Learn about Aliakbar Zohour: a one-person army who builds fully digital, coded, and automated businesses. Python, Go, TypeScript, AI, and design — available worldwide.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact",
    title: "Contact Aliakbar Zohour — Build Your Digital Business",
    description:
      "Contact Aliakbar Zohour to turn your idea into a digital business. Collaborations, product launches, and automated systems — reach via email, Telegram, or LinkedIn.",
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
          alt: `${site.name} — Digital Business Builder`,
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
    jobTitle: "Digital Business Builder",
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
    name: `${site.name} — Digital Business Building`,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "End-to-end digital business building: product, code, AI automation, and design — turning ideas into professional revenue systems for founders and brands.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: "Worldwide",
    availableLanguage: ["English", "Persian"],
    serviceType: [
      "Digital Business Building",
      "Product Development",
      "AI Automation",
      "Full Stack Development",
      "Design Systems",
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
          text: "Aliakbar Zohour is a digital business builder and co-founder at Vitoria — a one-person army who turns ideas into fully digital, coded, and automated businesses. He works with Python, Go, JavaScript, TypeScript, AI, and design. Based in Tehran, available worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Aliakbar Zohour work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Aliakbar works with ${skills.slice(0, 8).join(", ")}, and more across product, automation, and digital business systems.`,
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
          text: "Yes. Aliakbar collaborates with founders and teams worldwide to launch digital businesses — from idea to coded, automated, revenue-ready systems.",
        },
      },
    ],
  };
}
