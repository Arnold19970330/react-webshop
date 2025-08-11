"use client";

import { useState } from "react";
import type { TestProduct } from "@/types/TestProduct";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function TestProductCard({ product }: { product: TestProduct }) {
  const { addToCart } = useCart();
  const [variant, setVariant] = useState(product.variants?.[0]?.value ?? "");
  const out = !product.inStock;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm transition hover:shadow-lg flex flex-col">
      {/* Image */}
      <div className="w-full aspect-[4/3] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>

      {/* Content: make it a column and let it grow */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-xl font-bold text-green-600">
            {new Intl.NumberFormat("en-US").format(product.price)} Ft
          </span>
          {!out ? (
            <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">
              In stock
            </span>
          ) : (
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-600">
              Out of stock
            </span>
          )}
        </div>

        {/* Variant slot with consistent height */}
        <div className="min-h-10 flex items-center">
          {product.variants?.length ? (
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {product.variants.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          ) : (
            <span className="text-sm text-gray-500">No variants</span>
          )}
        </div>

        {/* CTA pinned to bottom */}
        <button
          onClick={() => addToCart(product)}
          disabled={out}
          className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-white transition
            ${out ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 cursor-pointer hover:bg-green-700"}`}
          aria-disabled={out}
        >
          <ShoppingCart className="w-4 h-4" />
          {out ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
