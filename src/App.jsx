import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component Imports
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

 
function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  // --- Cart Logic ---

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning("Already added ⚠️");
      return;
    }

    setCart((prevCart) => [...prevCart, product]);
    toast.success("Added to cart ✅");
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.error("Removed from cart ❌");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout successful 🎉");
  };

 

  const renderActiveView = () => {
    if (activeTab === "products") {
      return <Products addToCart={handleAddToCart} cart={cart} />;
    }
    return (
      <Cart 
        cart={cart} 
        removeItem={handleRemoveItem} 
        clearCart={handleCheckout} 
      />
    );
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans antialiased">
      <Navbar cart={cart} />
      <Banner />
      <Stats />

      {/* --- View Toggle Section --- */}
      <section className="max-w-2xl pt-20 mx-auto text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Digital Marketplace
        </h2>
        <p className="mt-3 text-sm text-gray-400 md:text-base leading-relaxed">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex items-center p-1 mt-8 border border-gray-800 rounded-full bg-gray-900/40">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-8 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              activeTab === "products"
                ? "bg-[#7C3AED] text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              activeTab === "cart"
                ? "bg-[#7C3AED] text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </section>

      {/* --- Main Content Area --- */}
      <main className="pb-20">
        {renderActiveView()}
      </main>

      {/* --- Informational Sections --- */}
      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;