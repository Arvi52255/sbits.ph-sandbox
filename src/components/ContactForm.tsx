"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactInput } from "@/lib/validations";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
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
      <div className="rounded-lg border border-circuit/30 bg-circuit/10 p-6">
        <p className="font-display text-lg font-semibold text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-slate-600">
          Thanks for reaching out. Our team replies within one business day.
        </p>
        <button
          className="focus-ring mt-4 text-sm font-medium text-signal"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users via CSS, left in the tab order for none. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input className={inputClass} placeholder="Juan Dela Cruz" {...register("name")} />
        </Field>
        <Field label="Email address" error={errors.email?.message}>
          <input className={inputClass} type="email" placeholder="you@company.com" {...register("email")} />
        </Field>
      </div>

      <Field label="Phone number (optional)" error={errors.phone?.message}>
        <input className={inputClass} placeholder="+63 9XX XXX XXXX" {...register("phone")} />
      </Field>

      <Field label="Subject" error={errors.subject?.message}>
        <input className={inputClass} placeholder="What's this about?" {...register("subject")} />
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea className={inputClass} rows={5} placeholder="Tell us a bit more…" {...register("message")} />
      </Field>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send message"}
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
