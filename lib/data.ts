export const site = {
  name: "Aliakbar Zohour",
  shortName: "AZ",
  title: "Aliakbar Zohour — Digital Business Builder",
  description:
    "Aliakbar Zohour — a one-person army who turns ideas into fully digital, professional, coded, and automated businesses. Python, Go, TypeScript, AI, and design — building revenue systems for people and brands.",
  location: "Tehran · Available worldwide",
  email: "hello@aliakbarzohour.com",
  role: "Digital Business Builder · One-Person Army",
  tagline:
    "I take an idea and turn it into a fully digital, coded, and automated business.",
  socials: [
    { label: "GitHub", href: "https://github.com/aliakbar-zohour" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aliakbarzohour" },
    { label: "Telegram", href: "https://t.me/aliakbarzohour20" },
    { label: "Medium", href: "https://medium.com/@aliakbarzohour" },
    { label: "X", href: "https://twitter.com/aliakbar_zohour" },
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const skills = [
  "Python",
  "Go",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AI & Automation",
  "Design Systems",
  "Product Design",
  "DevOps",
  "Docker",
] as const;

export const experience = [
  {
    role: "Co-Founder",
    company: "Vitoria",
    period: "Aug 2024 — Present",
    description:
      "Building digital businesses end to end — from idea and product architecture to coded systems, automation, and revenue-ready launches.",
  },
  {
    role: "Front-End Developer",
    company: "Sourena Games Studio",
    period: "Apr 2024 — Jul 2024",
    description:
      "Shipped product interfaces for a multi-market game studio and publisher spanning Iran, Turkey, Poland, and the US.",
  },
  {
    role: "Front-End Engineer",
    company: "Tik School",
    period: "Earlier",
    description:
      "Built interactive learning interfaces and frontend systems for education products.",
  },
] as const;

export const projects = [
  {
    slug: "personal-website",
    title: "Personal Website",
    year: "2026",
    category: "Website",
    summary:
      "An international portfolio experience with cinematic motion, theme systems, and Awwwards-level interaction craft.",
    stack: ["Next.js", "GSAP", "Framer Motion", "TypeScript"],
    href: "https://github.com/aliakbar-zohour/Personal_Website",
    accent: "#7dffb3",
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    year: "2023",
    category: "Product",
    summary:
      "Describe a scene — generate imagery. A focused creative interface for prompt-driven visual exploration.",
    stack: ["JavaScript", "CSS", "AI APIs"],
    href: "https://github.com/aliakbar-zohour/simple-ai-image-generator",
    accent: "#ffd56a",
  },
  {
    slug: "nextjs-uikit",
    title: "Next.js UI Kit",
    year: "2025",
    category: "Design System",
    summary:
      "A modular UI kit built with Next.js for shipping consistent product interfaces faster.",
    stack: ["Next.js", "TypeScript", "CSS"],
    href: "https://github.com/aliakbar-zohour/nextJs-UIKIT",
    accent: "#8eb6ff",
  },
  {
    slug: "form-builder",
    title: "Form Builder",
    year: "2025",
    category: "Product",
    summary:
      "A custom form builder for composing dynamic forms with a clean Next.js architecture.",
    stack: ["Next.js", "TypeScript", "React"],
    href: "https://github.com/aliakbar-zohour/nextJs-formBuilder",
    accent: "#ff8e7a",
  },
  {
    slug: "tgju-scraper",
    title: "TGJU Price Scraper",
    year: "2025",
    category: "Full Stack",
    summary:
      "A React + motion interface for live market price data scraped from TGJU.",
    stack: ["React", "Tailwind", "Framer Motion"],
    href: "https://github.com/aliakbar-zohour/react-TGU-price-scraper",
    accent: "#f0a86a",
  },
  {
    slug: "go-store-api",
    title: "Go Store API",
    year: "2025",
    category: "Systems",
    summary:
      "A store-focused backend API written in Go for clean commerce workflows.",
    stack: ["Go", "API", "Backend"],
    href: "https://github.com/aliakbar-zohour/go-store-api",
    accent: "#67e8f9",
  },
] as const;

export const about = {
  intro:
    "I’m no longer just a developer. I’m a one-person army — someone who takes an idea and turns it into a fully digital, professional, coded, and automated business.",
  body: [
    "I launch and build businesses for people: product, systems, design, automation, and the code that makes revenue possible. From first concept to a working digital company.",
    "My stack centers on Python, Go, JavaScript, and TypeScript — plus the ecosystems around them. I work with AI daily, and I use design services to shape products that feel intentional, not improvised.",
    "Today I’m co-founder at Vitoria, collaborating with founders and teams worldwide to turn ambitious ideas into businesses that run, sell, and scale.",
  ],
  stats: [
    { label: "Years building", value: "6+" },
    { label: "Public repos", value: "59+" },
    { label: "Focus", value: "Businesses" },
    { label: "Based in", value: "Tehran" },
  ],
} as const;
