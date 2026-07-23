export type Locale = "en" | "fa";

export type ProjectCopy = {
  title: string;
  category: string;
  summary: string;
};

export type ExperienceCopy = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Dictionary = {
  meta: {
    /** Shown on the language transition when switching TO this locale */
    languageName: string;
    /** Compact navbar trigger label (the language you can switch to) */
    triggerLabel: string;
    switchAria: string;
    skipToContent: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
    cta: string;
    primaryAria: string;
    openMenu: string;
    closeMenu: string;
  };
  site: {
    role: string;
    location: string;
    tagline: string;
    name: string;
    firstName: string;
    lastName: string;
  };
  hero: {
    viewWork: string;
    contact: string;
    scroll: string;
  };
  aboutPreview: {
    eyebrow: string;
    headline: string;
    intro: string;
    more: string;
  };
  stats: {
    years: string;
    yearsValue: string;
    repos: string;
    reposValue: string;
    focus: string;
    focusValue: string;
    based: string;
    basedValue: string;
  };
  selectedWork: {
    eyebrow: string;
    headline: string;
    all: string;
    view: string;
  };
  ctaBand: {
    headline: string;
    button: string;
  };
  footer: {
    lead: string;
    leadAccent: string;
    start: string;
  };
  work: {
    eyebrow: string;
    headline: string;
    body: string;
    view: string;
    open: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    intro: string;
    body: [string, string, string];
    currently: string;
    experience: string;
    capabilities: string;
  };
  experience: ExperienceCopy[];
  contact: {
    eyebrow: string;
    headline: string;
    body: string;
    email: string;
    social: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    mailSubject: string;
    mailName: string;
    mailEmail: string;
  };
  common: {
    theme: string;
    changeTheme: string;
    backToTop: string;
    top: string;
    view: string;
    home: string;
    notFoundEyebrow: string;
    notFoundTitle: string;
    notFoundBody: string;
    notFoundCta: string;
  };
  routes: {
    home: string;
    work: string;
    about: string;
    contact: string;
  };
  projects: Record<string, ProjectCopy>;
};
