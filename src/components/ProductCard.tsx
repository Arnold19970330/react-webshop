"use client";

import React from "react";
import type { Product } from "@/types/Product";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-lg flex flex-col">
      <Link
        href={`/products/${product.id}`}
        className="block hover:shadow-xl transition-shadow"
      >
        <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain p-4"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold hover:text-green-600 text-gray-800 mb-1">
            {product.name}
          </h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            {product.price.toLocaleString("hu-HU")} Ft
          </span>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 cursor-pointer flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            <ShoppingCart size={20} />
            Kosárba
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
