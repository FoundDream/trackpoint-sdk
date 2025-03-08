import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['@trackpoint-sdk/core'],
  },
  resolve: {
    preserveSymlinks: true
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages\//]
    }
  }
});
