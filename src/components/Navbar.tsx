"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const categories = ["Laptop", "Tablet", "Kiegészítő"];

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESC a záráshoz
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Kattintás kívülre zárja
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <nav className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400">
          Webshop
        </Link>

        {/* Desktop kategóriák */}
        <div className="hidden md:flex items-center gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="hover:underline text-lg"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Jobb oldal: kosár + hamburger */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-green-400 cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Link>

          {/* Hamburger (csak mobilon) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil menü panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden origin-top overflow-hidden transition-all duration-200 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-zinc-800 bg-zinc-900">
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="block rounded-md px-3 py-2 text-base hover:bg-zinc-800"
                onClick={() => setOpen(false)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
