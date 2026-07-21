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
    { label: "GitHub", href: "https://github.com/aliakbarzohour" },
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
    slug: "realtime-chat",
    title: "RealTime Chat App",
    year: "2023",
    category: "Full Stack",
    summary:
      "A responsive real-time messaging experience built with JavaScript and PHP — designed for clarity, speed, and presence.",
    stack: ["JavaScript", "PHP", "WebSockets", "CSS"],
    href: "https://github.com/aliakbarzohour/RealTime-Chat-App",
    accent: "#7dffb3",
  },
  {
    slug: "shadow-generator",
    title: "Shadow Generator",
    year: "2022",
    category: "Creative Tool",
    summary:
      "A visual CSS shadow studio with live preview and one-click clipboard export for designers and developers.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/aliakbarzohour/Shadow-Generator",
    accent: "#8eb6ff",
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    year: "2023",
    category: "Product",
    summary:
      "Describe a scene — generate imagery. A focused creative interface for prompt-driven visual exploration.",
    stack: ["JavaScript", "CSS", "AI APIs"],
    href: "https://github.com/aliakbarzohour/ai-image-generator",
    accent: "#ffd56a",
  },
  {
    slug: "mask-cursor",
    title: "Mask Cursor Effect",
    year: "2024",
    category: "Interaction",
    summary:
      "A cinematic cursor-mask interaction experiment built with Next.js and Framer Motion.",
    stack: ["Next.js", "Framer Motion", "CSS"],
    href: "https://github.com/aliakbarzohour/Mask-Cursor-Effect",
    accent: "#ff8e7a",
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio",
    year: "2023",
    category: "Website",
    summary:
      "An earlier personal portfolio exploring responsive layouts, state management, and polished UI systems.",
    stack: ["React", "Bootstrap", "JavaScript"],
    href: "https://github.com/aliakbarzohour/React-Portfolio",
    accent: "#f0a86a",
  },
  {
    slug: "php-auth",
    title: "PHP Authentication",
    year: "2023",
    category: "Systems",
    summary:
      "A clean authentication environment with username, email, and password validation against a database.",
    stack: ["PHP", "JavaScript", "HTML"],
    href: "https://github.com/aliakbarzohour/PHP-Authentication",
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
