import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// A standalone config for unit tests: just React + path aliases, without the
// TanStack Start / Nitro build plugins (which are only needed for the app build).
export default defineConfig({
  plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});
