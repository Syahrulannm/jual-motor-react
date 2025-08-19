// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className=" bg-teal-50 dark:bg-slate-800 rounded-lg shadow-lg  hover:shadow-orange-500/30  transition-smooth">
      <div className="block overflow-hidden rounded-t-lg h-46">
        <img className="w-full object-cover object-center h-50 hover:scale-110 transition-smooth" src={product.image} alt={product.name} />
        <div className="hover:bg-transparent transition-smooth bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-red-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">Ready</div>
        </a>
      </div>
      {/* <img src={product.image} alt={product.name} className="rounded-t-lg mb-4 w-full object-cover transition-smooth hover:scale-105" /> */}
      <div className="group py-4 px-6">
        <h2 className="text-lg text-gray-700 dark:text-gray-100 font-bold">{product.name}</h2>
        <p className="text-sm text-gray-400 dark:text-gray-200">{product.category}</p>
        <p className="text-xl font-bold text-orange-600">{product.price}</p>
        <a
          href="https://wa.me/088225316312?text=Saya%20tertarik%20dengan%20CFMoto%20MT450%2C%20apakah%20masih%20ada%3F"
          target="_blank"
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-smooth group-hover:scale-105"
        >
          Beli via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
