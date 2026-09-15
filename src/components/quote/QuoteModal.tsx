"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useQuote } from "./QuoteContext";
import { QuoteForm } from "./QuoteForm";

export function QuoteModal() {
  const { open, closeQuote } = useQuote();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuote();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeQuote]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close quote form"
        className="absolute inset-0 bg-espresso-dark/70"
        onClick={closeQuote}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative z-10 max-h-[92svh] w-full overflow-y-auto bg-cream shadow-lift sm:max-w-2xl sm:rounded-sm"
      >
        <div className="flex items-start justify-between border-b border-taupe px-6 py-5 sm:px-8">
          <div>
            <p className="kicker">Request a quote</p>
            <h2
              id="quote-title"
              className="mt-1 font-display text-3xl text-espresso"
            >
              Tell us what you need built on.
            </h2>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            className="rounded-sm p-2 text-stone hover:bg-taupe hover:text-espresso"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <QuoteForm compact />
        </div>
      </div>
    </div>
  );
}
