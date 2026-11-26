import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "finicglobalsolutions@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const source = typeof body?.source === "string" ? body.source.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT;
    const smtpUser = process.env.SMTP_USER || toEmail;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    // 1. Primary: Direct SMTP delivery via Nodemailer (Gmail App Password or custom SMTP)
    if (smtpPass) {
      const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
      const smtpPort = Number(process.env.SMTP_PORT || 465);

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const subject = `New Website Inquiry from ${name} — Finic Global Solutions`;
      const plainText = [
        "New Contact Form Inquiry — Finic Global Solutions",
        "--------------------------------------------------",
        `Name: ${name}`,
        `Email: ${email}`,
        `How they heard about us: ${source || "Not specified"}`,
        "",
        "Message / Project Details:",
        message,
      ].join("\n");

      const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: #102b68; color: #ffffff; padding: 24px 28px;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Inquiry</h2>
            <p style="margin: 6px 0 0; font-size: 13px; color: #cbd5e1;">Finic Global Solutions — www.finicglobal.com</p>
          </div>
          <div style="padding: 24px 28px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 160px; font-weight: 600;">Full Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Work Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Referral Source:</td>
                <td style="padding: 8px 0; color: #0f172a;">${escapeHtml(source || "Not specified")}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; margin-bottom: 8px;">Message / Project Details</div>
              <div style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1e293b;">${escapeHtml(message)}</div>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Finic Global Solutions Website" <${smtpUser}>`,
        to: toEmail,
        replyTo: email,
        subject,
        text: plainText,
        html: htmlBody,
      });

      return NextResponse.json({ success: true, provider: "smtp" });
    }

    // 2. Fallback: FormSubmit.co AJAX forwarding to finicglobalsolutions@gmail.com
    const origin = request.headers.get("origin") || "https://www.finicglobal.com";
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/contact`,
        },
        body: JSON.stringify({
          name,
          email,
          source: source || "Not specified",
          message,
          _subject: `New Website Inquiry from ${name} — Finic Global Solutions`,
          _replyto: email,
          _template: "table",
        }),
      }
    );

    const formSubmitData = await formSubmitRes.json().catch(() => null);
    if (!formSubmitRes.ok || formSubmitData?.success === "false") {
      console.error("FormSubmit error:", formSubmitData);
      return NextResponse.json(
        {
          error:
            "Unable to deliver your message right now. Please email finicglobalsolutions@gmail.com directly or try again shortly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, provider: "formsubmit" });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your inquiry. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

