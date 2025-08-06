"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Termékek</h1>
      {filteredProducts.length === 0 ? (
        <p>Nincs találat ebben a kategóriában: <strong>{category}</strong></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
