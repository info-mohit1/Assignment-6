const Banner = () => {
  return (
    <div className="relative w-full bg-[#020617] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-16 max-w-[95%] mx-auto gap-10">
        
        {/* Left Side: Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="inline-block px-3 py-1 mb-6 text-[10px] font-medium text-[#d8b4fe] bg-[#581c87]/30 border border-[#a855f7]/20 rounded-full">
            🔥 New: AI-Powered Tools Available
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Supercharge Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#a855f7]">
              Digital Workflow
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-10">
            <button className="px-8 py-4 bg-[#a855f7] text-white rounded-full font-bold shadow-[0_10px_25px_rgba(168,85,247,0.3)] hover:bg-[#9333ea] transition-all text-sm active:scale-95">
              Explore Products
            </button>
            <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-800 transition-all flex items-center gap-2">
              <span className="text-xs">▶</span> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Featured Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Soft Glow behind image */}
            <div className="absolute -inset-10 bg-[#a855f7]/5 rounded-full blur-3xl"></div>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYAYMKRcgRqZHTa5oYUZi8a8MiOhCDdvhOVMMhoeo2f8D-ovMOBUf8qA359fpVUruS0sYjOoE6cPKfrxhE9SvksUKF7O-IWpbyuULi3X7ACcg-gQFR3pHLgMV0FY-071wWRJQEgozHXJr02Z6kRtVRxnVu3vIy6kF1D1q9aArO69cE8_dVcOaHkFvNnX1L/s590/banner.png" 
              alt="Digital Workflow Banner"
              className="relative z-10 w-full max-w-[580px] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transform hover:scale-[1.02] transition-duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;