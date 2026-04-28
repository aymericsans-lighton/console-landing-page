export default function Home() {
    return (
        <main className="flex flex-1 items-center justify-center">
            <div className="flex max-w-xl flex-col items-center gap-4 px-6 text-center">
                <p className="text-sm font-medium text-tertiary">Console landing page</p>
                <h1 className="text-display-md font-semibold text-primary">
                    Ready to build with Untitled UI.
                </h1>
                <p className="text-md text-tertiary">
                    The project is wired up with Next.js, Tailwind v4, and the Untitled UI design tokens.
                    Pull components in via the Untitled UI MCP and designs via the Figma MCP.
                </p>
            </div>
        </main>
    );
}
