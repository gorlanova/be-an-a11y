// Global documentation : https://vitepress.dev/reference
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "✨ Be an a11y",
  description: "Demystifying the WCAG Guidelines",

  themeConfig: {
    nav: [
      { text: "Get started", link: "/01-get-started/01-introduction" },
      { text: "Guidelines", link: "/02-guidelines/01-wcag-guidelines" },
      { text: "Resources", link: "/03-resources/01-testing-your-interfaces" },
    ],

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
      copyright: `Copyright © ${new Date().getFullYear()} Nina Gautreau`,
    },
  },
});
