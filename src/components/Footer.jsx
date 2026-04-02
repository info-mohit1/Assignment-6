const Footer = () => {
  const sections = [
    { title: "Product", items: ["Features", "Pricing", "Templates", "Integrations"] },
    { title: "Company", items: ["About", "Blog", "Careers", "Press"] },
    { title: "Resources", items: ["Documentation", "Help Center", "Community", "Contact"] }
  ];

  return (
    <footer className="bg-[#0F172A] text-gray-400 px-8 py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-white">DigiTools</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {sections.map((sec) => (
          <div key={sec.title}>
            <h3 className="mb-4 text-white font-bold uppercase text-xs tracking-widest">{sec.title}</h3>
            <ul className="space-y-3 text-sm">
              {sec.items.map((item) => (
                <li key={item} className="hover:text-purple-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 mt-16 border-t border-gray-800 text-xs">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;