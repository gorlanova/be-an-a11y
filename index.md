---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Be an a11y
  text: Demystifying the WCAG content
  tagline: A guide to web accessibility

  image:
    light: /accessibility-light.svg
    dark: /accessibility-dark.svg

  actions:
    - theme: brand
      text: Get started
      link: /01-get-started/01-introduction
    - theme: alt
      text: Guidelines
      link: /02-guidelines/01-wcag-content

features:
  - icon: 💡
    title: Clear language
    details: Human-friendly explanations of the WCAG content
  - icon: 🧬
    title: Checklists
    details: Actionable steps to make your content accessible
  - icon: ⚡️
    title: Examples
    details: Real-world examples of the good, the bad, and the ugly
  - icon: 🛠️
    title: Resources
    details: Links and tools to help you become a better a11y
---

<style>
.VPImage.image-src {
  filter: drop-shadow(-3rem -3rem 3rem #47caffa6) drop-shadow(3rem 3rem 3rem #bd34fea6) saturate(1.2);
}

.VPHero .VPButton {
  border: 0;
  padding-block: 1px !important;
}

.VPHero .VPButton.brand {
  background: var(--vp-home-hero-name-background);
  transition: filter 0.3s ease-in-out;
}

.VPHero .VPButton.brand:hover {
  filter: brightness(0.9);
}
</style>
