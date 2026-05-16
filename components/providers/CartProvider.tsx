"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CartLine = {
  slug: string;
  name: string;
  priceCents: number;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  itemCount: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);

  const value: CartState = {
    lines,
    isOpen,
    itemCount,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((o) => !o),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
