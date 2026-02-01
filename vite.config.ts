import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { beasties } from "vite-plugin-beasties";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Generate source maps for production debugging and Lighthouse insights
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-dom") || id.includes("react")) return "react-vendor";
          if (id.includes("react-router")) return "router";
          if (id.includes("@tanstack")) return "tanstack";
          if (id.includes("@radix-ui")) return "radix-ui";
          if (id.includes("framer-motion")) return "framer-motion";
          if (id.includes("recharts")) return "charts";
          return "vendor";
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    beasties({
      options: {
        preload: 'swap',
        pruneSource: false,
        inlineThreshold: 0,
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
  },
  define: {
    // Provide a mock for localStorage during SSR
    ...(mode === 'production' ? {} : {}),
  },
}));
