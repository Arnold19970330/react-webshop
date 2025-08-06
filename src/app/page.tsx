// src/app/page.tsx
"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="relative bg-black text-white h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/hero-img.webp"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Üdvözöl a Webshop!</h1>
        <p className="text-lg md:text-2xl">Minőségi elektronikai eszközök, kiváló árakon</p>
      </div>
    </div>
  );
}

