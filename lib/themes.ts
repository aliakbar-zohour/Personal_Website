export type ThemeId = "signal" | "ivory" | "ember" | "arctic" | "noir";

export type ThemeDefinition = {
  id: ThemeId;
  label: string;
  swatch: string;
  vars: Record<string, string>;
};

export const themes: ThemeDefinition[] = [
  {
    id: "signal",
    label: "Signal",
    swatch: "#d6ff4b",
    vars: {
      "--bg": "#080a0e",
      "--bg-elevated": "#0f131a",
      "--fg": "#ebe8e1",
      "--fg-muted": "#8b93a1",
      "--accent": "#d6ff4b",
      "--accent-soft": "rgba(214, 255, 75, 0.14)",
      "--line": "rgba(235, 232, 225, 0.1)",
      "--mist": "rgba(120, 150, 190, 0.12)",
      "--cursor-blend": "difference",
      "--atmosphere-1": "rgba(110, 140, 180, 0.18)",
      "--atmosphere-2": "rgba(214, 255, 75, 0.08)",
      "--atmosphere-3": "rgba(70, 90, 130, 0.16)",
      "--orb-a": "rgba(100, 130, 175, 0.28)",
      "--orb-b": "rgba(214, 255, 75, 0.1)",
      "--orb-c": "rgba(60, 80, 120, 0.22)",
      "--transition-panel": "#050608",
      "--nav-blur": "rgba(8, 10, 14, 0.72)",
      "--selection-fg": "#0a0c10",
      "--btn-on-accent": "#0a0c10",
    },
  },
  {
    id: "ivory",
    label: "Ivory",
    swatch: "#0d9488",
    vars: {
      "--bg": "#f3f1ec",
      "--bg-elevated": "#ebe7df",
      "--fg": "#171717",
      "--fg-muted": "#6b6b6b",
      "--accent": "#0d9488",
      "--accent-soft": "rgba(13, 148, 136, 0.12)",
      "--line": "rgba(23, 23, 23, 0.12)",
      "--mist": "rgba(13, 148, 136, 0.08)",
      "--cursor-blend": "normal",
      "--atmosphere-1": "rgba(13, 148, 136, 0.1)",
      "--atmosphere-2": "rgba(180, 160, 120, 0.12)",
      "--atmosphere-3": "rgba(100, 120, 140, 0.1)",
      "--orb-a": "rgba(13, 148, 136, 0.18)",
      "--orb-b": "rgba(200, 170, 110, 0.16)",
      "--orb-c": "rgba(90, 110, 140, 0.14)",
      "--transition-panel": "#e8e4dc",
      "--nav-blur": "rgba(243, 241, 236, 0.82)",
      "--selection-fg": "#f3f1ec",
      "--btn-on-accent": "#f3f1ec",
    },
  },
  {
    id: "ember",
    label: "Ember",
    swatch: "#ff6b3d",
    vars: {
      "--bg": "#100c0a",
      "--bg-elevated": "#1a1410",
      "--fg": "#f4ebe4",
      "--fg-muted": "#a08b7c",
      "--accent": "#ff6b3d",
      "--accent-soft": "rgba(255, 107, 61, 0.14)",
      "--line": "rgba(244, 235, 228, 0.1)",
      "--mist": "rgba(255, 107, 61, 0.1)",
      "--cursor-blend": "difference",
      "--atmosphere-1": "rgba(255, 107, 61, 0.14)",
      "--atmosphere-2": "rgba(180, 80, 40, 0.12)",
      "--atmosphere-3": "rgba(80, 50, 40, 0.2)",
      "--orb-a": "rgba(255, 107, 61, 0.22)",
      "--orb-b": "rgba(200, 90, 40, 0.14)",
      "--orb-c": "rgba(90, 45, 30, 0.28)",
      "--transition-panel": "#0a0706",
      "--nav-blur": "rgba(16, 12, 10, 0.78)",
      "--selection-fg": "#100c0a",
      "--btn-on-accent": "#100c0a",
    },
  },
  {
    id: "arctic",
    label: "Arctic",
    swatch: "#67e8f9",
    vars: {
      "--bg": "#071018",
      "--bg-elevated": "#0c1824",
      "--fg": "#e8f4f8",
      "--fg-muted": "#7a9aad",
      "--accent": "#67e8f9",
      "--accent-soft": "rgba(103, 232, 249, 0.14)",
      "--line": "rgba(232, 244, 248, 0.1)",
      "--mist": "rgba(103, 232, 249, 0.1)",
      "--cursor-blend": "difference",
      "--atmosphere-1": "rgba(103, 232, 249, 0.12)",
      "--atmosphere-2": "rgba(60, 120, 180, 0.14)",
      "--atmosphere-3": "rgba(30, 60, 100, 0.2)",
      "--orb-a": "rgba(103, 232, 249, 0.18)",
      "--orb-b": "rgba(80, 140, 200, 0.16)",
      "--orb-c": "rgba(40, 70, 120, 0.24)",
      "--transition-panel": "#040a10",
      "--nav-blur": "rgba(7, 16, 24, 0.78)",
      "--selection-fg": "#071018",
      "--btn-on-accent": "#071018",
    },
  },
  {
    id: "noir",
    label: "Noir",
    swatch: "#e11d48",
    vars: {
      "--bg": "#050505",
      "--bg-elevated": "#111111",
      "--fg": "#f5f5f5",
      "--fg-muted": "#888888",
      "--accent": "#e11d48",
      "--accent-soft": "rgba(225, 29, 72, 0.14)",
      "--line": "rgba(245, 245, 245, 0.1)",
      "--mist": "rgba(225, 29, 72, 0.1)",
      "--cursor-blend": "difference",
      "--atmosphere-1": "rgba(225, 29, 72, 0.12)",
      "--atmosphere-2": "rgba(80, 80, 80, 0.16)",
      "--atmosphere-3": "rgba(40, 20, 30, 0.22)",
      "--orb-a": "rgba(225, 29, 72, 0.2)",
      "--orb-b": "rgba(120, 120, 120, 0.12)",
      "--orb-c": "rgba(60, 20, 30, 0.28)",
      "--transition-panel": "#000000",
      "--nav-blur": "rgba(5, 5, 5, 0.82)",
      "--selection-fg": "#050505",
      "--btn-on-accent": "#ffffff",
    },
  },
];

export const DEFAULT_THEME: ThemeId = "signal";

export const greetings = [
  { lang: "English", text: "Hello" },
  { lang: "Persian", text: "سلام" },
  { lang: "Spanish", text: "Hola" },
  { lang: "French", text: "Bonjour" },
  { lang: "German", text: "Hallo" },
  { lang: "Japanese", text: "こんにちは" },
  { lang: "Chinese", text: "你好" },
  { lang: "Hindi", text: "नमस्ते" },
  { lang: "Arabic", text: "مرحبا" },
  { lang: "Portuguese", text: "Olá" },
] as const;

export const routeTitles: Record<string, string> = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

export function getRouteTitle(pathname: string) {
  return routeTitles[pathname] ?? "Aliakbar";
}
