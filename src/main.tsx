import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// If there's pre-rendered markup in #root, hydrate it.
// Otherwise do normal client render.
const hasPrerenderedContent = root.innerHTML.trim().length > 0;

if (import.meta.env.PROD && hasPrerenderedContent) {
  hydrateRoot(root, app, {
    // optional but very useful: surface hydration issues instead of "mystery flashes"
    onRecoverableError: (err) => console.warn("[hydrate recoverable]", err),
  });
} else {
  createRoot(root).render(app);
}

// Remove splash overlay (fine to keep)
requestAnimationFrame(() => {
  const splash = document.getElementById("app-splash");
  if (splash) {
    splash.style.opacity = "0";
    setTimeout(() => splash.remove(), 300);
  }
});
