import type { Page } from "@safidea_/engine";

export const home: Page = {
  name: "Home",
  path: "/",
  body: [
    {
      component: "Container",
      center: true,
      children: [
        {
          component: "Markdown",
          content: `# Hello, I'm Thomas JEANNEAU, an entrepreneur.`,
          className: "pt-4",
        },
      ],
    },
  ],
};
