export default function Cta() {
  return (
    <section id="kontak" className="text-center bg-orange-600 py-12 px-6 transition-smooth">
      <div className="group">
        <h2 data-aos="zoom-in" data-aos-delay="50" className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100 mb-2">
          Siap Dapat Motor Impianmu?
        </h2>
        <p data-aos="fade-up" className="text-base md:text-lg text-white dark:text-gray-100 mb-4">
          Hubungi kami sekarang untuk konsultasi & info stok.
        </p>
        <a
          data-aos="zoom-in"
          data-aos-delay="100"
          href="https://wa.me/6281234567890"
          target="_blank"
          className="inline-block bg-white text-lg md:text-xl text-orange-600 font-semibold px-4 py-3 rounded-lg hover:bg-orange-100 transition-smooth group-hover:scale-105"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </section>
  );
}
