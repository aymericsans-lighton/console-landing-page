"use client";

import { type FormEvent, useState } from "react";
import { AlertCircle, CheckCircle, Loading01, Send01 } from "@untitledui/icons";

const HUBSPOT_PORTAL_ID = "143641506";
const HUBSPOT_FORM_ID = "cd729346-7c21-46cc-85e7-5296b3f42ec2";
// EU data center — matches the `js-eu1.hsforms.net` script in the original embed.
const HUBSPOT_ENDPOINT = `https://api-eu1.hubapi.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "submitting") return;

        setStatus("submitting");
        setErrorMessage(null);

        try {
            const response = await fetch(HUBSPOT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fields: [{ objectTypeId: "0-1", name: "email", value: email }],
                    context: {
                        pageUri: window.location.href,
                        pageName: document.title,
                    },
                }),
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => null);
                throw new Error(
                    payload?.message ?? `Submission failed (status ${response.status}).`,
                );
            }

            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Something went wrong. Please try again.",
            );
        }
    }

    const isSubmitting = status === "submitting";

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[31rem] flex-col gap-2 pt-1"
            aria-label="Join the LightOn Console waitlist"
            noValidate
        >
            <div className="flex w-full items-start gap-3">
                <label className="flex flex-1 flex-col gap-1.5">
                    <span className="sr-only">Email address</span>
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        disabled={isSubmitting || status === "success"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Type your email to join waitlist"
                        className="w-full rounded-md border border-primary bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs outline-none placeholder:text-placeholder focus:border-brand focus:ring-2 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-70"
                    />
                </label>
                <button
                    type="submit"
                    aria-label="Join waitlist"
                    disabled={isSubmitting || status === "success"}
                    className="relative flex shrink-0 items-center justify-center rounded-md border-2 border-white/12 bg-brand-solid p-3 text-white shadow-xs-skeuomorphic transition-colors hover:bg-brand-solid_hover focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-80"
                >
                    {isSubmitting ? (
                        <Loading01 aria-hidden className="size-5 animate-spin" />
                    ) : (
                        <Send01 aria-hidden className="size-5" />
                    )}
                </button>
            </div>

            {status === "success" && (
                <p
                    role="status"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-success-primary"
                >
                    <CheckCircle aria-hidden className="size-4" />
                    You&apos;re on the list — we&apos;ll be in touch.
                </p>
            )}

            {status === "error" && errorMessage && (
                <p
                    role="alert"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-error-primary"
                >
                    <AlertCircle aria-hidden className="size-4" />
                    {errorMessage}
                </p>
            )}
        </form>
    );
}
