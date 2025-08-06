"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const categories = ["Laptop", "Tablet", "Kiegészítő"];

export default function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Bal oldal - logó */}
        <Link href="/" className="text-2xl font-bold text-green-400">
          Webshop
        </Link>

        {/* Közép - kategóriák */}
        <div className="flex gap-6">
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

        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 hover:text-green-400 cursor-pointer" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
