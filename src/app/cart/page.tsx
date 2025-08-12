"use client";

import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-[70vh] p-6">
      {cartItems.length === 0 ? (
        <div className="flex flex-col gap-1 items-center">
          <p className="text-center text-xl mt-20 text-gray-700 dark:text-white">
            A kosár üres.
          </p>
          <Link
            href="/"
            className="text-green-400 underline flex gap-1 items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Vissza a főoldalra
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.variant ?? "default"}`}
                className="flex justify-between items-center bg-zinc-800 text-white p-4 rounded-lg shadow relative"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded shadow"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    {item.variant && (
                      <p className="text-sm text-blue-400 mb-1">
                        {item.variant}
                      </p>
                    )}

                    <p className="text-sm text-gray-400 mb-1">
                      {item.description}
                    </p>
                    <p className="text-green-500 font-semibold">
                      {item.price.toLocaleString()} Ft × {item.quantity}
                    </p>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id, item.variant)}>
                  <X className="w-6 h-6 text-pink-500 hover:text-pink-300 transition" />
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-10 flex justify-between items-center px-2 md:px-6">
            <p className="text-xl text-gray-800 dark:text-white font-medium">
              Termékek ára összesen:
            </p>
            <p className="text-green-500 text-2xl font-bold">
              {totalPrice.toLocaleString()} Ft
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-4 px-2 md:px-6">
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
            >
              Kosár ürítése
            </button>
            <Link href="/">
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
                Vásárlás folytatása
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
