import { Resend } from "resend";
import { site } from "./site";

// Lazily construct the client so the app can still build / run locally
// even before RESEND_API_KEY is set (routes will return a clear error instead of crashing).
function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendNotificationEmail(params: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to your environment to enable email delivery (see SETUP_NOTES.md)."
    );
  }

  const from = process.env.EMAIL_FROM || `SBITS Website <notifications@${new URL(site.url).hostname}>`;
  const to = process.env.EMAIL_TO || site.email;

  return resend.emails.send({
    from,
    to,
    subject: params.subject,
    html: params.html,
    replyTo: params.replyTo,
  });
}

export function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
