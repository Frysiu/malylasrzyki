import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/galeria", prerender: { enabled: true } },
      { path: "/lokalizacja", prerender: { enabled: true } },
    ],
  },
});
