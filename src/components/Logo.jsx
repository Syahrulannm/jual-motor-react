export default function Logo() {
  const logoBrands = [
    { id: 1, name: "Honda", image: "/logo/honda-logo.png" },
    { id: 2, name: "Yamaha", image: "/logo/yamaha-logo.png" },
    { id: 3, name: "Suzuki", image: "/logo/suzuki-logo.png" },
    { id: 4, name: "Kawasaki", image: "/logo/kawasaki.png" },
    { id: 5, name: "Harley", image: "/logo/harley-logo.png" },
    { id: 6, name: "Vespa", image: "/logo/vespa-logo.png" },
  ];
  return (
    <section className="transition-smooth">
      <div className="py-6 px-6 flex-1 flex-col sm:flex-row justify-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {logoBrands.map((brand) => (
          <div key={brand.id} className="bg-slate-50 dark:bg-gray-900 p-4 rounded-lg text-center transition-smooth group">
            <a href={`#produk-${brand.name.toLowerCase()}`} className="transition-smooth">
              <img src={brand.image} alt={brand.name} className={`mx-auto mb-2 group-hover:scale-110 transition-smooth ${brand.name === "Vespa" ? "w-24" : "h-10"}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
