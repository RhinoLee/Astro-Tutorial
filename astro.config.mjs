import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://loquacious-muffin-c12e3d.netlify.app",
  integrations: [preact()]
});