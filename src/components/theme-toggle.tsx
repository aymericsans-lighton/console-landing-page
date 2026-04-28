"use client";

import { useEffect, useState } from "react";
import { Moon01, Sun } from "@untitledui/icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTheme(document.documentElement.classList.contains("dark-mode") ? "dark" : "light");
        setMounted(true);
    }, []);

    function toggle() {
        const next: Theme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark-mode", next === "dark");
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* storage may be unavailable (private mode, etc.) */
        }
        setTheme(next);
    }

    const Icon = theme === "dark" ? Sun : Moon01;
    const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            onClick={toggle}
            className="inline-flex size-9 items-center justify-center rounded-md border border-secondary bg-primary text-tertiary shadow-xs transition-colors hover:bg-primary_hover hover:text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
        >
            {/* Render a placeholder before hydration to avoid icon flash */}
            <Icon aria-hidden className="size-4" style={{ visibility: mounted ? "visible" : "hidden" }} />
        </button>
    );
}
