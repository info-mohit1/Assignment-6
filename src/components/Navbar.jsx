import { useState } from "react";

const Navbar = ({ cart = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav className="text-white bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-purple-500">
          Digi<span className="text-white">Tools</span>
        </h1>

        <div className="hidden gap-6 font-medium text-gray-300 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative text-xl cursor-pointer hover:opacity-80 transition-opacity">
            🛒
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              {cart.length}
            </span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <button className="text-gray-300 hover:text-white transition-colors">Login</button>
            <button className="px-5 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all shadow-lg font-medium">
              Get Started
            </button>
          </div>

          <button className="text-2xl md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-6 px-6 pb-6 text-gray-300 md:hidden animate-in slide-in-from-top">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white">{link}</a>
          ))}
          <hr className="border-gray-700" />
          <button className="text-left hover:text-white">Login</button>
          <button className="px-4 py-2 text-white bg-purple-600 rounded-full w-full hover:bg-purple-700">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;