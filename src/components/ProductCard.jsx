const ProductCard = ({ product, addToCart, cart = [] }) => {
  const isAdded = cart.some(item => item.id === product.id);
  const { name, description, price, period, tagType, icon, features } = product;

  return (
    <div className="flex flex-col bg-[#0F172A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-500 group">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 text-[10px] font-bold text-white bg-blue-600 uppercase tracking-widest rounded">
          {tagType}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white flex items-center gap-3">
        <span className="text-2xl">{icon}</span> {name}
      </h3>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-4 flex items-baseline gap-1 font-semibold text-blue-400">
        <span className="text-2xl">${price}</span>
        <span className="text-xs opacity-70">/ {period}</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-gray-300">
        {features?.map((feat, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-blue-500">✔</span> {feat}
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        disabled={isAdded}
        className={`mt-8 w-full py-3 rounded-xl font-bold transition-all duration-300 ${
          isAdded
            ? "bg-green-600/20 text-green-400 cursor-not-allowed border border-green-600/30"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20 active:scale-95"
        }`}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;