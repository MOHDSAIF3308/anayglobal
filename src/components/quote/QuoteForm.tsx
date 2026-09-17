"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-taupe bg-cream px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  compact = false,
  onSuccess,
}: {
  compact?: boolean;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") || "").length > 0) {
      setStatus("success");
      onSuccess?.();
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          organization: data.get("organization"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          location: data.get("location"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Could not send the request.");
      }
      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-cream-dark p-8 text-center">
        <p className="kicker">Received</p>
        <h3 className="mt-3 font-display text-3xl text-espresso">
          We have the brief.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          A technical lead will respond from the relevant office — usually within
          one working day. If the matter is urgent, call the office nearest the
          site.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
        />
      </label>
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Organisation
        <input
          name="organization"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Company or authority"
        />
      </label>
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="you@organisation.in"
        />
      </label>
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Phone
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          className={fieldClass}
          placeholder="+91"
        />
      </label>
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Service of interest
        <select name="service" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a pillar
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Integrated / not sure">Integrated / not sure</option>
        </select>
      </label>
      <label className="block text-xs font-semibold tracking-wide text-espresso">
        Site / office location
        <input
          name="location"
          className={fieldClass}
          placeholder="District, highway package, plant…"
        />
      </label>
      <label
        className={cn(
          "block text-xs font-semibold tracking-wide text-espresso sm:col-span-2",
        )}
      >
        Brief
        <textarea
          required
          name="message"
          rows={compact ? 4 : 6}
          className={cn(fieldClass, "resize-y")}
          placeholder="What needs testing, surveying, inspection or design — and by when."
        />
      </label>
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <input tabIndex={-1} autoComplete="off" name="company_website" />
      </div>
      {status === "error" ? (
        <p className="sm:col-span-2 text-sm text-caramel" role="alert">
          {message}
        </p>
      ) : null}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={status === "submitting"} size="lg">
          {status === "submitting" ? "Sending…" : "Submit request"}
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          No marketing list. The request goes to the ACE technical desk and, if
          configured, onward by email via a Cloudflare Worker.
        </p>
      </div>
    </form>
  );
}
