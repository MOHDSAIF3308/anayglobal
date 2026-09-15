export const runtime = "edge";

type Payload = {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  message?: string;
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Invalid JSON." }, 400);
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const organization = String(body.organization || "").trim();
  const service = String(body.service || "").trim();
  const location = String(body.location || "").trim();

  if (name.length < 2) return json({ ok: false, error: "Please add your name." }, 400);
  if (!isEmail(email)) return json({ ok: false, error: "Please add a valid email." }, 400);
  if (phone.length < 8) return json({ ok: false, error: "Please add a phone number." }, 400);
  if (message.length < 10) {
    return json({ ok: false, error: "Please add a short brief (at least 10 characters)." }, 400);
  }

  const summary = [
    `Name: ${name}`,
    `Organisation: ${organization || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service || "—"}`,
    `Location: ${location || "—"}`,
    "",
    message,
  ].join("\n");

  const web3 = process.env.WEB3FORMS_ACCESS_KEY;
  const resend = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || "quotes@anayglobalservices.com";

  try {
    if (web3) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3,
          subject: `AGS quote request — ${name}`,
          from_name: "AGS website",
          name,
          email,
          phone,
          message: summary,
        }),
      });
      if (!res.ok) throw new Error("Web3Forms rejected the request.");
      return json({ ok: true, delivered: true, via: "web3forms" });
    }

    if (resend) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resend}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.QUOTE_FROM_EMAIL || "AGS Website <noreply@anayglobalservices.com>",
          to: [to],
          reply_to: email,
          subject: `AGS quote request — ${name}`,
          text: summary,
        }),
      });
      if (!res.ok) throw new Error("Resend rejected the request.");
      return json({ ok: true, delivered: true, via: "resend" });
    }
  } catch (err) {
    return json(
      {
        ok: false,
        error:
          err instanceof Error
            ? err.message
            : "The mail provider could not be reached. Please call the nearest office.",
      },
      502,
    );
  }

  // Valid request, no mail provider configured (local / first deploy).
  return json({ ok: true, delivered: false, via: "ack-only" });
}
