import TestProductCard from "@/components/TestProductCard";
import { testProducts } from "@/data/testProduct";

export default function TestPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Product Card — Demo</h1>

      {/* Responsive: 1 / 2 / 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testProducts.map((p) => (
          <TestProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
