import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Only hydrate if there's pre-rendered content AND the route is safe to hydrate.
// Some routes (like /blog, /contact) render dynamic content and can cause hydration mismatches.
const pathname = typeof window !== "undefined" ? window.location.pathname : "";
const forceClientRender = pathname.startsWith("/blog") || pathname.startsWith("/contact");

const hasPrerenderedContent =
  root.innerHTML.trim().length > 0 && !root.innerHTML.includes("<!--app-html-->");

const shouldHydrate =
  import.meta.env.PROD && hasPrerenderedContent && !forceClientRender;

if (shouldHydrate) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}


