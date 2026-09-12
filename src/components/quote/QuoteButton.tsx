"use client";

import { useQuote } from "./QuoteContext";

export function QuoteButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openQuote } = useQuote();
  return (
    <button type="button" onClick={openQuote} className={className}>
      {children}
    </button>
  );
}
