import type { TestProduct } from "@/types/TestProduct";

export const testProducts: TestProduct[] = [
  {
    id: 1,
    name: "Gaming Laptop 15”",
    image: "/laptop.webp",
    price: 399999,
    inStock: true,
    variants: [
      { label: "Color: Silver", value: "silver" },
      { label: "Color: Black", value: "black" },
    ],
  },
  {
    id: 2,
    name: "Tablet Pro 11",
    image: "/tablet.webp",
    price: 249999,
    inStock: false, // out of stock example
    variants: [{ label: "Storage: 128 GB", value: "128" }],
  },
  {
    id: 3,
    name: "USB‑C Hub",
    image: "/accessory.jpg",
    price: 8999,
    inStock: true,
  },
];
