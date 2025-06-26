// Global documentation : https://vitepress.dev/reference
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "✨ Be an a11y",
  description: "Demystifying the WCAG Guidelines - A guide to web accessibility",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/accessibility-dark.svg" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/accessibility-light.svg", media: "(prefers-color-scheme: dark)" }],
    ["link", { rel: "canonical", href: "https://be-an-a11y.netlify.app" }],
    ["meta", { name: "color-scheme", content: "light dark" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "theme-color", content: "#000000", media: "(prefers-color-scheme: dark)" }],
    ["meta", { name: "author", content: "Nina G." }],
    ["meta", { name: "keywords", content: "accessibility, a11y, wcag, web development, web design" }],
    ["meta", { name: "application-name", content: "Be an A11y" }],
    // og tags
    ["meta", { property: "og:title", content: "✨ Be an a11y" }],
    ["meta", { property: "og:description", content: "Demystifying the WCAG Guidelines - A guide to web accessibility" }],
    ["meta", { property: "og:image", content: "https://be-an-a11y.netlify.app/card.png" }],
    ["meta", { property: "og:image:alt", content: "Web Accessibility logo" }],
    ["meta", { property: "og:url", content: "https://be-an-a11y.netlify.app" }],
    ["meta", { property: "og:type", content: "website" }],
    // twitter tags
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "✨ Be an a11y" }],
    ["meta", { name: "twitter:description", content: "Demystifying the WCAG Guidelines - A guide to web accessibility" }],
    ["meta", { name: "twitter:image", content: "https://be-an-a11y.netlify.app/card.png" }],
    ["meta", { name: "twitter:image:alt", content: "Web Accessibility logo" }],
  ],

  themeConfig: {
    nav: [
      { text: "Get started", link: "/01-get-started/01-introduction" },
      { text: "Guidelines", link: "/02-guidelines/01-wcag-guidelines" },
      { text: "Resources", link: "/03-resources/01-testing-your-interfaces" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/gorlanova/be-an-a11y" }],

    sidebar: [
      {
        text: "Get started",
        items: [
          { text: "Introduction", link: "/01-get-started/01-introduction" },
          { text: "WCAG Structure", link: "/01-get-started/02-wcag-structure" },
          { text: "Be an a11y Structure", link: "/01-get-started/03-be-an-a11y-structure" },
        ],
      },
      {
        text: "Guidelines",
        items: [
          { text: "WCAG Guidelines", link: "/02-guidelines/01-wcag-guidelines" },
          { text: "Checklist - Design", link: "/02-guidelines/02-checklist-design" },
          { text: "Checklist - Content", link: "/02-guidelines/03-checklist-content" },
          { text: "Checklist - Code", link: "/02-guidelines/04-checklist-code" },
        ],
      },
      {
        text: "Resources",
        items: [
          { text: "Testing your Interfaces", link: "/03-resources/01-testing-your-interfaces" },
          { text: "The Extra Steps", link: "/03-resources/02-the-extra-steps" },
          { text: "Useful Links", link: "/03-resources/03-useful-links" },
        ],
      },
    ],

    outline: {
      level: [2, 4],
    },

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License",
    },
  },
});
