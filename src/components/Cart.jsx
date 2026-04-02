const Cart = ({ cart, removeItem, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-8 py-10 bg-[#020617] min-h-[60vh] max-w-4xl mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-white flex items-center gap-3">
        🛒 Workspace Cart <span className="text-purple-500 text-lg">({cart.length})</span>
      </h2>

      {cart.length === 0 ? (
        <div className="py-20 text-center border-2 border-dashed border-gray-800 rounded-3xl">
          <p className="text-gray-500 text-lg">Your workspace is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-[#0F172A] p-5 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{item.name}</h3>
                  <p className="text-purple-400 font-medium">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="px-4 py-2 text-sm font-bold text-red-400 bg-red-400/10 rounded-lg hover:bg-red-500 hover:text-white transition-all"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-10 p-6 bg-gray-900 rounded-2xl border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-lg">Total Amount:</span>
              <span className="text-3xl font-bold text-white">${total}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Confirm Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;