import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ToggleContext";

export default function Hero() {
  const { isDark, toggleTheme } = useTheme();
  const slides = [
    {
      id: 1,
      image: "img/honda-vario.png",
      alt: "Honda Vario 160",
    },
    {
      id: 2,
      image: "img/kawasaki-ninja.png",
      alt: "Yamaha NMAX",
    },
    {
      id: 3,
      image: "img/yamaha-nmax.png",
      alt: "Suzuki GSX R150",
    },
  ];
  return (
    <section id="beranda" className="py-20 px-6 scroll-mt-20 transition-smooth">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* <!-- Konten Kiri --> */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 id="judul" data-aos="fade-up" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Produk{" "}
            <span className="text-orange-600 dark:text-orange-500 group">
              Unggulan <FontAwesomeIcon icon={faMotorcycle} className="hover:-rotate-12 transition-smooth group-hover:translate-x-3" />
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0">
            Dapatkan motor pilihan dengan harga terbaik. Promo terbatas!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#search" data-aos="zoom-in" data-aos-delay="150" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md transition text-sm sm:text-base">
              <FontAwesomeIcon icon={faSearch} /> Lihat Motor
            </a>
            <button
              onClick={toggleTheme}
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-orange-600 px-6 py-3 border border-orange-600 dark:border-orange-400 dark:text-orange-400 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition text-sm sm:text-base"
            >
              {" "}
              {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>

        {/* <!-- Slider kanan --> */}
        <div className="w-full md:w-1/2">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false }} loop={true} className="rounded-xl overflow-hidden">
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.image} alt={slide.alt} className="w-full object-cover object-center" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
