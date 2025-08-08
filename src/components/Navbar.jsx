import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 ">
      <nav className="bg-teal-50 dark:bg-teal-900 shadow-md p-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">JualMotor</div>
          {/* <!-- Tombol hamburger --> */}
          <button id="toggleBtn" className=" md:hidden text-gray-800 dark:text-orange-400 hover:bg-orange-50 transition text-sm sm:text-base">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          {/* <!-- Dekstop Menu --> */}
          <ul id="menu" className="hidden md:flex space-x-6 text-gray-700 dark:text-white font-semibold transition-smooth">
            <li>
              <a href="#beranda" className="hover:text-orange-500">
                Beranda
              </a>
            </li>
            <li>
              <a href="#kategori" className="hover:text-orange-500">
                Kategori
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-orange-500">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Menu di HP --> */}
        <ul id="mobileMenu" className="md:hidden hidden mt-4 space-y-2 text-gray-700 dark:text-white font-semibold transition-smooth">
          <li>
            <a href="#beranda" className="hover:text-orange-500">
              Beranda
            </a>
          </li>
          <li>
            <a href="#kategori" className="hover:text-orange-500">
              Kategori
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-orange-500">
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
