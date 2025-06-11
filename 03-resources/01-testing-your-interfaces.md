# Testing your Interfaces

Implementing the WCAG guidelines is only the first step in making your web pages accessible. You also need to test your interfaces to ensure they meet the standards and provide a good user experience.

Testing tools can help you identify issues in your web pages, but they are not a substitute for manual testing. You should always test your interfaces manually, and use your brain to determine if the issues reported by the tools are relevant to your website, or to detect issues that the tools may not catch.

In his [Case Study](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/), Manuel Matuzović created a website that passes all automated tests, but is still completely inaccessible. Real humans are an essential part of web accessibility.

## Axe DevTools

[Axe DevTools](https://docs.deque.com/devtools-for-web/4/en/devtools-extension) is a browser extension to audit web pages and access a detailed report on issues and bad practices. You can download it for [Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) and [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn).

Once installed, you can open the Axe DevTools panel in your browser's developer tools. Click the three dots menu in the top right corner and open the settings.

Make sure the "Best practices" option is enabled, and select the standards you want to test against (recommended: WCAG 2.2 AA).

When you are ready, click the "Full Page Scan" button to run the test on the current page. Axe DevTools will analyze the page and provide a report of accessibility issues, including their severity and suggestions for fixing them. When expanding an issue, you can choose to highlight the element causing the issue on the page, which can help you identify and fix it.

I recommend using Axe DevTools first, to tackle the most critical issues, and then using other tools to get a more comprehensive report. This will make the process less overwhelming and help you focus on the most important issues first.

## ARC Toolkit

[ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit) is another browser extension to test web pages for accessibility issues and get advanced reports. It is available for [Chrome](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/arc-toolkit).

Once installed, you can open the ARC Toolkit panel in your browser's developer tools. Click the "Settings" button on the right side, next to "Highlight" and "Other tools" buttons.

Make sure everything is checked, and select the standards you want to test against (recommended: WCAG 2.2).

When you are ready, click the "Run tests" button to run the test on the current page. ARC Toolkit will analyze the page and provide a report of accessibility issues, including their severity and suggestions for fixing them. When expanding an issue, all elements causing the issue will be highlighted on the page, which can help you identify and fix them.

Be careful, as ARC Toolkit is very sensitive and may report things in the "Alerts" category that are not actual issues in your case. Read the documentation for an issue you are not sure about, and decide if it is relevant to your website.

## Polypane

[Polypane](https://polypane.app) is a browser designed for responsive and accessible web development. It includes built-in accessibility testing tools that can help you identify issues in your website.

It is a paid tool, coming with a free trial of 14 days. I am not affiliated with Polypane, but I thought it was worth mentioning as I use it regularly and think it can make your life easier. It provides features like:

- Responsive design testing with multiple viewports and devices
- Accessibility testing
- Display modes simulation
- Social media cards and metadata preview
- Layout and CSS debugging tools

If you do not have access to Polypane, no worries! You can still use the browser's developer tools and system settings to test your web pages.

## Manual testing

### Display modes

Use your browser's developer tools or system settings to test different display modes:

- Light and dark mode
- Zoom (at least 200%)
- Text size and spacing (at least 150% text size)
- Preferences for reduced motion effects
- Vision deficiencies (e.g. color blindness simulation)

### Screen readers

Use a screen reader to test how assistive technologies interpret your website. Be careful, not all of them are created equal, and some may not support all features of your website. A good idea would be to check what devices your audience is using to select what screen reader to test with:

- [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows)
- [VoiceOver](https://developer.apple.com/documentation/accessibility/voiceover/) (macOS, iOS)
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) (Android)

### Keyboard navigation

Test your website using only the keyboard to ensure that all interactive elements are accessible, presented in a logical order, and display a focus indicator. You should also make sure that the focus is never trapped in an interactive element, and that the user can navigate through the whole page.

## AI Tools

AI can be a great help in developing your websites, but you should *always* check the code it generates, and test it for accessibility. AI tools have been trained on real-world data, which means they ingested flaws, and may generate code that is not accessible or does not follow best practices.