import { useEffect, useState, useCallback } from "react";
import { Accessibility, X, Type, Contrast, Link2, MousePointer2, Eye, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type A11ySettings = {
  fontScale: number; // 1, 1.15, 1.3, 1.5
  contrast: "default" | "high" | "invert";
  highlightLinks: boolean;
  reduceMotion: boolean;
  dyslexiaFont: boolean;
  largeCursor: boolean;
};

const DEFAULTS: A11ySettings = {
  fontScale: 1,
  contrast: "default",
  highlightLinks: false,
  reduceMotion: false,
  dyslexiaFont: false,
  largeCursor: false,
};

const STORAGE_KEY = "a11y-settings-v1";

function loadSettings(): A11ySettings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function applySettings(s: A11ySettings) {
  const root = document.documentElement;
  root.style.fontSize = `${s.fontScale * 100}%`;
  root.classList.toggle("a11y-contrast-high", s.contrast === "high");
  root.classList.toggle("a11y-contrast-invert", s.contrast === "invert");
  root.classList.toggle("a11y-highlight-links", s.highlightLinks);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  root.classList.toggle("a11y-dyslexia", s.dyslexiaFont);
  root.classList.toggle("a11y-large-cursor", s.largeCursor);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS);

  useEffect(() => {
    const s = loadSettings();
    setSettings(s);
    applySettings(s);
  }, []);

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      applySettings(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = () => {
    applySettings(DEFAULTS);
    setSettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open accessibility menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 bottom-4 z-[9998] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-white/20 hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
      >
        <Accessibility className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed left-4 bottom-20 z-[9999] w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-border bg-background shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-foreground">Accessibility</h2>
            <button
              type="button"
              aria-label="Close accessibility menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-4 py-3 space-y-4">
            <section>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                <Type className="h-4 w-4" aria-hidden="true" /> Text size
              </div>
              <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Text size">
                {[
                  { label: "A", value: 1 },
                  { label: "A+", value: 1.15 },
                  { label: "A++", value: 1.3 },
                  { label: "A+++", value: 1.5 },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update({ fontScale: opt.value })}
                    aria-pressed={settings.fontScale === opt.value}
                    className={`rounded-md border px-2 py-1.5 text-sm font-medium transition-colors ${
                      settings.fontScale === opt.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                <Contrast className="h-4 w-4" aria-hidden="true" /> Contrast
              </div>
              <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Contrast mode">
                {[
                  { label: "Default", value: "default" as const },
                  { label: "High", value: "high" as const },
                  { label: "Invert", value: "invert" as const },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update({ contrast: opt.value })}
                    aria-pressed={settings.contrast === opt.value}
                    className={`rounded-md border px-2 py-1.5 text-sm font-medium transition-colors ${
                      settings.contrast === opt.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </section>

            <ToggleRow
              icon={<Link2 className="h-4 w-4" aria-hidden="true" />}
              label="Highlight links"
              checked={settings.highlightLinks}
              onChange={(v) => update({ highlightLinks: v })}
            />
            <ToggleRow
              icon={<Eye className="h-4 w-4" aria-hidden="true" />}
              label="Reduce motion"
              checked={settings.reduceMotion}
              onChange={(v) => update({ reduceMotion: v })}
            />
            <ToggleRow
              icon={<Type className="h-4 w-4" aria-hidden="true" />}
              label="Readable font"
              checked={settings.dyslexiaFont}
              onChange={(v) => update({ dyslexiaFont: v })}
            />
            <ToggleRow
              icon={<MousePointer2 className="h-4 w-4" aria-hidden="true" />}
              label="Large cursor"
              checked={settings.largeCursor}
              onChange={(v) => update({ largeCursor: v })}
            />

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={reset}
            >
              <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" /> Reset all
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-md border border-border bg-background px-3 py-2 hover:bg-muted">
      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
        {icon}
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-muted-foreground/40"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}
