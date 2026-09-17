import { z } from "zod";

// Shared "honeypot" field: a hidden input real users never fill in.
// If it arrives non-empty, we silently accept and drop the submission (basic bot filter,
// no external service required). Layer Cloudflare Turnstile on top later — see SETUP_NOTES.md.
const honeypot = z.string().max(0).optional().or(z.literal(""));

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Please add a short subject.").max(150),
  message: z.string().trim().min(10, "Please add a few more details (10+ characters).").max(4000),
  company_website: honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  company: z.string().trim().min(2, "Please enter your company name.").max(150),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  service: z.string().trim().min(2, "Please select a service."),
  budget: z.string().trim().min(1, "Please select a budget range."),
  timeline: z.string().trim().min(1, "Please select a timeline."),
  details: z.string().trim().min(20, "Please tell us a bit more (20+ characters).").max(4000),
  company_website: honeypot,
});

export type QuoteInput = z.infer<typeof quoteSchema>;
