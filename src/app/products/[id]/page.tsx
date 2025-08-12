// src/app/products/[id]/page.tsx

import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ // <-- ITT AZ "async" KULCSSZÓ
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded mb-4"
        loading="lazy"
      />

      <p className="text-xl text-green-600 font-semibold mb-2">
        {new Intl.NumberFormat("hu-HU").format(product.price)} Ft
      </p>

      {product.description && (
        <p className="text-gray-700 mb-4">{product.description}</p>
      )}

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Kosárba
      </button>
    </div>
  );
}