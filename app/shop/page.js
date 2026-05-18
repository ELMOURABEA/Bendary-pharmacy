"use client";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const [filter, setFilter] = useState({ category: "", price: "" });

  const products = [
    {
      id: 1,
      name: "Panadol",
      price: 50,
      category: "Medicines",
      company: "GSK",
      image: "/categories/medicines.jpg",
    },
    {
      id: 2,
      name: "Vitamin C",
      price: 120,
      category: "Vitamins",
      company: "PharmaCo",
      image: "/categories/vitamins.jpg",
    },
    {
      id: 3,
      name: "Skin Cream",
      price: 200,
      category: "Skincare",
      company: "DermaCare",
      image: "/categories/skincare.jpg",
    },
  ];

  const filtered = products.filter(
    (p) =>
      (filter.category ? p.category === filter.category : true) &&
      (filter.price ? p.price <= parseInt(filter.price) : true)
  );

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shop Products</h1>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6 bg-white p-4 rounded-lg shadow">
        <select
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Medicines">Medicines</option>
          <option value="Vitamins">Vitamins</option>
          <option value="Skincare">Skincare</option>
        </select>
        <select
          onChange={(e) => setFilter({ ...filter, price: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All Prices</option>
          <option value="100">Under 100 EGP</option>
          <option value="200">Under 200 EGP</option>
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found.</p>
        </div>
      )}
    </main>
  );
}
