// src/data/products.ts
import type { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 399999,
    image: "/laptop.webp",
    description: "Lorem inpsum",
    category: "Laptop",
  },
  {
    id: 2,
    name: "Tablet Pro",
    price: 249999,
    image: "/tablet.webp",
    description: "Lorem inpsum",
    category: "Tablet",
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 8999,
    image: "/accessory.jpg",
    description: "Lorem inpsum",
    category: "Kiegészítő",
  },
   {
    id: 4,
    name: "Gaming Laptop Asus TUF 17",
    price: 600542,
    image: "/asus-gaming-laptop-tuf17.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but",
    category: "Laptop",
  },
];
