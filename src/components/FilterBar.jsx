// src/components/FilterBar.jsx
export default function FilterBar({ searchTerm, onSearchChange, selectedBrand, onBrandChange, brands }) {
  return (
    <div id="search" className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-center">
      {/* 🔍 Input Search */}
      <input
        type="text"
        placeholder="Cari motor..."
        className="w-full sm:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* 🏷️ Dropdown Brand */}
      <select value={selectedBrand} onChange={(e) => onBrandChange(e.target.value)} className="w-full sm:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <option value="">Semua Brand</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
