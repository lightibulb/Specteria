export const SITE = {
  name: "Specteria",
  title: "Specteria — Audio Portfolio",
  description: "A professional audio-focused portfolio.",
  url: import.meta.env.PUBLIC_SITE_URL ?? "https://specteria.example",
  locale: "en",
} as const;

export type SiteConfig = typeof SITE;
