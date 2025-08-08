import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import FilterBar from "./FilterBar";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(""); // default: semua brand
  // Ambil semua brand unik dari produk
  const brands = [...new Set(products.map((p) => p.brand))];
  // Filter berdasarkan search dan selected brand
  const filteredProducts = products.filter((p) => {
    const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchBrand && matchSearch;
  });
  const groupedProducts = brands.map((brand) => ({
    brand,
    items: filteredProducts.filter((p) => p.brand === brand),
  }));

  return (
    <main id="kategori" className="scroll-mt-20 px-4 py-8 max-w-6xl mx-auto transition-smooth">
      <h1 className="text-3xl font-bold mb-6">Daftar Motor Tersedia</h1>

      {/* ✅ Gunakan komponen FilterBar */}
      <FilterBar searchTerm={searchTerm} onSearchChange={setSearchTerm} selectedBrand={selectedBrand} onBrandChange={setSelectedBrand} brands={brands} />

      {/* 🧩 Jika semua hasil kosong */}
      {groupedProducts.every(({ items }) => items.length === 0) ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <img src="/img/no-result.svg" alt="Tidak ditemukan" className="w-40 mx-auto mb-4" />
          <p className="font-semibold">Produk tidak ditemukan.</p>
        </div>
      ) : (
        // Render per brand jika ada hasil
        groupedProducts.map(({ brand, items }) =>
          items.length > 0 ? (
            <section key={brand} id={`produk-${brand.toLowerCase()}`} className="mb-12">
              <h2 data-aos="fade-up" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {brand}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ) : null
        )
      )}
    </main>
  );
}
