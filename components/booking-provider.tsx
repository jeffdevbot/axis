"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { BookingModal } from "./booking-modal";

type Ctx = { open: () => void; close: () => void };
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);
  return (
    <BookingCtx.Provider value={value}>
      {children}
      <BookingModal open={isOpen} onClose={close} />
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
