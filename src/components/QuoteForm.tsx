"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteInput } from "@/lib/validations";
import { budgetRanges, quoteServiceOptions, timelines } from "@/lib/site";
import { Button } from "./Button";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) });

  async function onSubmit(data: QuoteInput) {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-circuit/30 bg-circuit/10 p-8">
        <p className="font-display text-xl font-semibold text-ink">Request received.</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          A member of our team will review your project and get back to you within one business day
          with next steps or clarifying questions.
        </p>
        <button className="focus-ring mt-4 text-sm font-medium text-signal" onClick={() => setStatus("idle")}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_q">Leave this field empty</label>
        <input id="company_website_q" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input className={inputClass} placeholder="Juan Dela Cruz" {...register("name")} />
        </Field>
        <Field label="Company name" error={errors.company?.message}>
          <input className={inputClass} placeholder="Your company Inc." {...register("company")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" error={errors.email?.message}>
          <input className={inputClass} type="email" placeholder="you@company.com" {...register("email")} />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input className={inputClass} placeholder="+63 9XX XXX XXXX" {...register("phone")} />
        </Field>
      </div>

      <Field label="Which service do you need?" error={errors.service?.message}>
        <select className={inputClass} defaultValue="" {...register("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {quoteServiceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Estimated budget" error={errors.budget?.message}>
          <select className={inputClass} defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" error={errors.timeline?.message}>
          <select className={inputClass} defaultValue="" {...register("timeline")}>
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" error={errors.details?.message}>
        <textarea
          className={inputClass}
          rows={6}
          placeholder="What are you trying to solve? Current setup, number of users/branches, pain points…"
          {...register("details")}
        />
      </Field>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting…" : "Request my quote"}
      </Button>
    </form>
  );
}

const inputClass =
  "focus-ring w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
