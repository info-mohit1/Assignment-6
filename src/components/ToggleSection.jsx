const ToggleSection = ({ view, setView, cart = [] }) => {
  // Common styles for both buttons
  const baseBtnStyle = "px-8 py-2 rounded-full font-medium transition-all duration-300 active:scale-95";
  
  return (
    <nav className="flex justify-center gap-4 py-10 bg-[#020617]">
      {/* Products Button */}
      <button
        onClick={() => setView("products")}
        className={`${baseBtnStyle} ${
          view === "products"
            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
            : "bg-gray-800/50 text-gray-400 hover:text-white"
        }`}
      >
        Products
      </button>

      {/* Cart Button with Count Badge */}
      <button
        onClick={() => setView("cart")}
        className={`relative ${baseBtnStyle} ${
          view === "cart"
            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
            : "bg-gray-800/50 text-gray-400 hover:text-white"
        }`}
      >
        Cart

        {/* Dynamic Badge Section */}
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center bg-red-500 text-[10px] font-bold text-white rounded-full ring-2 ring-[#020617] animate-in zoom-in duration-300">
            {cart.length}
          </span>
        )}
      </button>
    </nav>
  );
};

export default ToggleSection;