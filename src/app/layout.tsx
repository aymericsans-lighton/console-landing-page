import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Console — LightOn",
    description:
        "The retrieval engine for the AI agent era. Parsing, extraction, retrieval with citations.",
};

// Inlined in <head> so the saved theme is applied before paint — avoids the
// FOUC where dark-mode users briefly see the light theme on hydration.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark-mode');
  } catch (_) {}
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            // The theme-init script below mutates <html>.classList before React
            // hydrates, so React's classList check would otherwise warn.
            suppressHydrationWarning
            className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body className="flex min-h-full flex-col bg-primary text-primary">{children}</body>
        </html>
    );
}
