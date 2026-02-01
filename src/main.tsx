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
const hasPrerenderedContent = root.innerHTML.trim().length > 0 && !root.innerHTML.includes("<!--app-html-->");

if (import.meta.env.PROD && hasPrerenderedContent) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

// Remove splash overlay after React mounts
// Uses requestAnimationFrame to ensure at least one paint frame with React content
requestAnimationFrame(() => {
  const splash = document.getElementById("app-splash");
  if (splash) {
    splash.style.opacity = "0";
    setTimeout(() => splash.remove(), 300);
  }
});
