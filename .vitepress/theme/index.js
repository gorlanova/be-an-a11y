// Preserve the order of the imports (otherwise you will have theme issues)
import DefaultTheme from "vitepress/theme"; // 1
import "./custom.css"; // 2
import "@owlabio/minuit/css"; // 3
import { library } from "@fortawesome/fontawesome-svg-core"; // 4
import * as icons from "../icons"; // 5

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // Only use the plugin on the client side
        // Only use the plugin on the client side
    if (!import.meta.env.SSR) {
      library.add(icons);
      const { minuit } = await import("@owlabio/minuit");

      app.use(minuit);
    }
  },
};
