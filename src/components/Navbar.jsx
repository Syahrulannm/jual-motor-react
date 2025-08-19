import { useState, useRef } from "react";
import { faBars, faHome, faListSquares, faPhoneSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const touchStartX = useRef(null);

  //Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  //Swipe close
  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (diffX > 50) {
      // Swipe ke kiri lebih dari 50px -> tutup sidebar
      setOpen(false);
      touchStartX.current = null;
    }
  };

  return (
    <header className="sticky top-0 z-50 ">
      <nav className="flex items-center justify-between bg-gradient-orange shadow-md p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
        <div className=" text-2xl font-bold text-gray-100">JayaMotor</div>
        <div className="max-w-6xl  flex justify-between items-center">
          {/* <!-- Dekstop Menu --> */}
          <ul id="menu" className="hidden md:flex space-x-6 text-white font-semibold transition-smooth">
            <li>
              <a href="#beranda" className="hover:text-orange-300">
                Beranda
              </a>
            </li>
            <li>
              <a href="#kategori" className="hover:text-orange-300">
                Kategori
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-orange-300">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <button onClick={() => setOpen(true)} className="md:hidden hover:bg-orange-300 text-white p-2 rounded-md aspect-square font-medium transition">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
      </nav>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setOpen(false)}></div>}

      {/* Menu Mobile */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-orange px-2 py-4 gap-10 rounded-2xl shadow-lg z-50 transform transition-smooth ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-gray-100  px-4 py-2 border-b transition-all mb-6">
          <h2 className="text-lg font-bold dark:text-gray-200">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5  hover:scale-105 hover:text-gray-300" />
          </button>
        </div>

        <div className="flex flex-col flex-1 gap-3 px-4">
          <a href="#beranda" onClick={() => setOpen(false)} className="hover:text-orange-300 flex items-center gap-2 py-2 hover:bg-opacity-25 rounded-2xl transition-smooth">
            <FontAwesomeIcon icon={faHome} className="h-5 w-5" /> Beranda
          </a>
          <a onClick={() => setOpen(false)} href="#kategori" className="hover:text-orange-300 flex items-center gap-2 py-2 hover:bg-opacity-25 rounded-2xl transition-smooth ">
            <FontAwesomeIcon icon={faListSquares} className="h-5 w-5" /> Kategori
          </a>
          <a onClick={() => setOpen(false)} href="#kontak" className="hover:text-orange-300 flex items-center gap-2 py-2 hover:bg-opacity-25 rounded-2xl transition-smooth ">
            <FontAwesomeIcon icon={faPhoneSquare} className="h-5 w-5" /> Kontak
          </a>
          {/* <!-- Menu di HP --> */}
        </div>
      </div>
    </header>
  );
}
