import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

const normalizePath = (pathname: string) => {
  if (!pathname) return "/";
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const currentPath = normalizePath(window.location.pathname);
const prerenderedPath = normalizePath(root.dataset.prerenderPath || "");
const hasMatchingPrerender = Boolean(prerenderedPath) && prerenderedPath === currentPath;

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

if (!hasMatchingPrerender && hasPrerenderedContent) {
  root.innerHTML = "";
}

if (import.meta.env.PROD && hasPrerenderedContent && hasMatchingPrerender) {
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
