import Image from "next/image";
import { Send01 } from "@untitledui/icons";

const features = [
    {
        endpoint: "/parse",
        title: "Production OCR",
        description: "Turn any document into structured data your agents can actually use.",
    },
    {
        endpoint: "/extract",
        title: "Structured fields",
        description: "Pull the fields you need, in the shape your application expects.",
    },
    {
        endpoint: "/search",
        title: "Retrieval with citations",
        description:
            "Grounded search. Every answer ships with the exact passage that supports it.",
    },
];

export default function Home() {
    return (
        <>
            <section className="relative isolate flex flex-1 flex-col items-center overflow-hidden bg-primary pt-16">
                {/* Faint grid background pattern */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--color-border-tertiary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-tertiary)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]"
                />

                {/* 3D architecture background image (right side, desktop only) */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 right-0 -z-10 hidden h-full w-[56%] max-w-[900px] lg:block"
                >
                    <Image
                        src="/3D-Architecture.png"
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 56vw, 0px"
                        className="object-cover object-left-top"
                    />
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center gap-16 px-8">
                    {/* Hero copy + form */}
                    <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-center">
                        <div className="flex w-full flex-col gap-6 lg:max-w-[58%]">
                            {/* Coming soon badge */}
                            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-secondary bg-secondary py-1 pr-3 pl-2.5">
                                <span aria-hidden className="relative flex size-2 items-center justify-center">
                                    <span className="size-1.5 rounded-full bg-brand-solid" />
                                </span>
                                <span className="text-sm font-medium text-secondary">
                                    COMING SOON
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="font-display text-display-xl font-normal tracking-tight text-primary sm:text-display-2xl">
                                The retrieval engine
                                <br />
                                <span className="bg-gradient-to-r from-[#5ca8fe] via-[#1b42b2] via-[24.519%] to-[#3685fb] to-[96.635%] bg-clip-text text-transparent">
                                    for the AI agent era.
                                </span>
                            </h1>

                            {/* Sub-copy */}
                            <p className="max-w-2xl text-display-xs text-tertiary">
                                Parsing, extraction, retrieval with citations. The API that connects
                                your agents to all of your organization&apos;s data.
                            </p>

                            {/* Waitlist form */}
                            <form
                                className="flex w-full max-w-[31rem] items-start gap-3 pt-1"
                                action="#"
                                aria-label="Join waitlist"
                            >
                                <label className="flex flex-1 flex-col gap-1.5">
                                    <span className="sr-only">Email address</span>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Type your email to join waitlist"
                                        className="w-full rounded-md border border-primary bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs outline-none placeholder:text-placeholder focus:border-brand focus:ring-2 focus:ring-brand/30"
                                    />
                                </label>
                                <button
                                    type="submit"
                                    aria-label="Join waitlist"
                                    className="relative flex shrink-0 items-center justify-center rounded-md border-2 border-white/12 bg-brand-solid p-3 text-white shadow-xs-skeuomorphic transition-colors hover:bg-brand-solid_hover focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
                                >
                                    <Send01 className="size-5" />
                                </button>
                            </form>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-6 font-mono text-[13px] leading-[30px] tracking-wide text-tertiary uppercase">
                                <span>Built in Paris</span>
                                <span>Free tier at launch</span>
                            </div>
                        </div>

                        {/* Right column reserved for the 3D illustration; keeps the layout balanced on desktop */}
                        <div aria-hidden className="hidden h-[480px] flex-1 lg:block" />
                    </div>

                    {/* Endpoint cards */}
                    <div className="grid w-full max-w-[60rem] grid-cols-1 gap-3 rounded-md shadow-xl md:grid-cols-3">
                        {features.map((feature) => (
                            <article
                                key={feature.endpoint}
                                className="flex flex-col gap-4 rounded-md border border-secondary bg-primary py-5 pr-6 pl-5 md:pr-10"
                            >
                                <h3 className="font-display text-display-sm font-normal text-primary">
                                    {feature.endpoint}
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-primary">{feature.title}</p>
                                    <p className="text-xs text-tertiary">{feature.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Code snippet */}
                    <div className="w-full max-w-[51.25rem] rounded-xl shadow-2xl">
                        <div className="overflow-hidden rounded-xl border border-[#22262f] bg-[#0c0e12]">
                            <pre className="overflow-x-auto rounded-t-xl border-b border-[#22262f] bg-[#13161b] p-5 font-mono text-sm leading-5">
                                <code className="text-[#84caff]">
                                    <span className="text-[#94979c]"># Your first call</span>
                                    {"\n\n"}
                                    <span className="text-[#cecfd2]">
                                        curl -X POST https://api.lighton.ai/api/v3/search{" "}
                                    </span>
                                    <span className="text-[#f7f7f7]">\</span>
                                    {"\n  "}
                                    <span className="text-[#f7f7f7]">-H</span>
                                    {' "Authorization: Bearer $PARADIGM_API_KEY" '}
                                    <span className="text-[#f7f7f7]">\</span>
                                    {"\n  "}
                                    <span className="text-[#f7f7f7]">-H</span>
                                    {' "Content-Type: application/json" '}
                                    <span className="text-[#f7f7f7]">\</span>
                                    {"\n  "}
                                    <span className="text-[#f7f7f7]">-d</span>
                                    {" '{"}
                                    {"\n    "}
                                    {'"query": "What is the vacation policy at LightOn?",'}
                                    {"\n    "}
                                    {'"top_k": 10,'}
                                    {"\n    "}
                                    {'"workspace_id": ["42"]'}
                                    {"\n  "}
                                    {"}'"}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="h-6" aria-hidden />
                </div>
            </section>

            <footer className="bg-secondary py-5">
                <div className="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-4 px-8 sm:flex-row">
                    <Image
                        src="/Logo Console.svg"
                        alt="LightOn Console"
                        width={90}
                        height={24}
                        priority
                    />
                    <p className="text-xs text-quaternary sm:text-right">
                        © 2026 LightOn, Inc. Built in France · Hosted in Europe · SOC 2 · GDPR
                    </p>
                </div>
            </footer>
        </>
    );
}
