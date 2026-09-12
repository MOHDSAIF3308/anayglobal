"use client";

import { QuoteProvider } from "@/components/quote/QuoteContext";
import { QuoteModal } from "@/components/quote/QuoteModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QuoteProvider>
      {children}
      <QuoteModal />
    </QuoteProvider>
  );
}
