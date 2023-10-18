import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    pageLoadTimeout: 5000,
    viewportWidth: 1080,
    viewportHeight: 1920,
  },
});
