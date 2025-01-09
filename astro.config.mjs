// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: [
        "./src/tailwind.css",
        "@fontsource-variable/jetbrains-mono/index.css",
        "@fontsource-variable/montserrat/index.css",
      ],
      title: "Custom Cards",
      social: {
        github: "https://github.com/yumikodev/custom-cards",
        discord: "https://discord.gg/YqUkagNPaw",
      },
      editLink: {
        baseUrl: "https://github.com/yumikodev/custom-cards-web/edit/main/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Guías",
          items: [
            {
              slug: "guides/getting-started",
            },
            {
              slug: "guides/setup",
            },
          ],
        },
        {
          label: "Referencia",
          items: [
            { slug: "reference/api-access" },
            { slug: "reference/api" },
            { slug: "reference/variants" },
          ],
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
