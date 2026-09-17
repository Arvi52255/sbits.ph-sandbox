import { NextRequest, NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validations";
import { sendNotificationEmail, escapeHtml } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendNotificationEmail({
      subject: `[Website] New quote request from ${data.company}`,
      replyTo: data.email,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <p><strong>Budget range:</strong> ${escapeHtml(data.budget)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
        <p><strong>Project details:</strong></p>
        <p>${escapeHtml(data.details).replace(/\n/g, "<br/>")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("quote route error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
