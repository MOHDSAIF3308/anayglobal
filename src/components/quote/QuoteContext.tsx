"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type QuoteContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openQuote: () => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ open, setOpen, openQuote, closeQuote }),
    [open, openQuote, closeQuote],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
