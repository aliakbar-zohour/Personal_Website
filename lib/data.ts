export const site = {
  name: "Aliakbar Zohour",
  shortName: "AZ",
  title: "Aliakbar Zohour — Frontend Engineer & Co-Founder",
  description:
    "International portfolio of Aliakbar Zohour — frontend engineer, co-founder at Vitoria, crafting cinematic product experiences with React, Next.js, and motion.",
  location: "Tehran · Available worldwide",
  email: "hello@aliakbarzohour.com",
  role: "Frontend Engineer · Co-Founder",
  tagline: "Crafting cinematic digital experiences for ambitious brands.",
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
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "GSAP",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
  "DevOps",
  "Linux",
  "Docker",
  "Design Systems",
] as const;

export const experience = [
  {
    role: "Co-Founder",
    company: "Vitoria",
    period: "Aug 2024 — Present",
    description:
      "Building a software development company focused on product craft, engineering quality, and modern web experiences.",
  },
  {
    role: "Front-End Developer",
    company: "Sourena Games Studio",
    period: "Apr 2024 — Jul 2024",
    description:
      "Shipped frontend experiences for a multi-market game studio and publisher spanning Iran, Turkey, Poland, and the US.",
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
    "I started programming in 2019 and have spent the years since deep in frontend craft — building interfaces that feel intentional, animated, and production-ready.",
  body: [
    "I’m proficient in React and Angular, fluent across modern JavaScript ecosystems, and equally comfortable in Linux and DevOps environments. I love Apple as a product philosophy — and Linux as a daily engineering reality.",
    "Beyond shipping products, I teach through writing and video: 140+ Persian articles, 14+ English pieces on Medium, plus content on YouTube and Aparat. Sharing knowledge is part of how I stay sharp.",
    "Today I’m co-founder at Vitoria, collaborating with teams worldwide to turn ambitious product ideas into refined digital experiences.",
  ],
  stats: [
    { label: "Years building", value: "6+" },
    { label: "Public repos", value: "59+" },
    { label: "Focus", value: "Frontend" },
    { label: "Based in", value: "Tehran" },
  ],
} as const;
