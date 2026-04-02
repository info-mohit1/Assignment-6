import { useState } from "react";

const Navbar = ({ cart = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white bg-gray-900 shadow-md">

    
      <div className="flex items-center justify-between px-6 py-4">

  
        <h1 className="text-2xl font-bold text-purple-500">
          Digi<span className="text-white">Tools</span>
        </h1>

        {/*  Menu Section (Desktop) */}
        <div className="hidden gap-6 font-medium text-gray-300 md:flex">
          <a href="#" className="hover:text-white">Products</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Testimonials</a>
          <a href="#" className="hover:text-white">FAQ</a>
        </div>


        <div className="flex items-center gap-4">

          {/* Cart Icon Section (⭐) */}
          <div className="relative text-xl cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          </div>

       
          <div className="items-center hidden gap-3 md:flex">
            <button className="text-gray-300 hover:text-white">
              Login
            </button>
            <button className="px-4 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700">
              Get Started
            </button>
          </div>

          {/* Hamburger Icon For Mobile  */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/*  Menu Section (Mobile) */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 pb-4 text-gray-300 md:hidden">

          <a href="#" className="hover:text-white">Products</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Testimonials</a>
          <a href="#" className="hover:text-white">FAQ</a>

          <hr className="border-gray-700" />

          <button className="text-left hover:text-white">Login</button>
          <button className="px-4 py-2 text-white bg-purple-600 rounded-full w-fit hover:bg-purple-700">
            Get Started
          </button>

        </div>
      )}

    </div>
  );
};

export default Navbar;