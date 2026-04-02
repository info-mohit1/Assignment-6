const Banner = () => {
  return (
    <div className="relative w-full bg-[#020617] overflow-hidden">
      
      {/* Background Shadow Effect */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Main Container - এখানে px-4 ব্যবহার করে সাইডের গ্যাপ অনেক কমানো হয়েছে */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-10 max-w-[95%] mx-auto gap-6">

        {/* Left Side: Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="inline-block px-3 py-0.5 mb-3 text-[10px] font-medium text-purple-300 bg-purple-900/30 border border-purple-500/20 rounded-full">
            🔥 New: AI-Powered Tools Available
          </p>
          
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-6xl tracking-tight">
            Supercharge Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Digital Workflow
            </span>
          </h1>

          <p className="mt-3 text-gray-400 text-base leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <button className="px-8 py-3 text-white bg-[#a855f7] rounded-full hover:bg-[#9333ea] transition-all font-bold shadow-md active:scale-95 text-sm">
              Explore Products
            </button>

            <button className="px-8 py-3 text-gray-300 border border-gray-700 rounded-full hover:bg-gray-800/50 transition-all font-medium flex items-center gap-2 text-sm">
              <span>▶</span> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYAYMKRcgRqZHTa5oYUZi8a8MiOhCDdvhOVMMhoeo2f8D-ovMOBUf8qA359fpVUruS0sYjOoE6cPKfrxhE9SvksUKF7O-IWpbyuULi3X7ACcg-gQFR3pHLgMV0FY-071wWRJQEgozHXJr02Z6kRtVRxnVu3vIy6kF1D1q9aArO69cE8_dVcOaHkFvNnX1L/s590/banner.png" 
              alt="banner"
              className="relative z-10 shadow-2xl rounded-lg opacity-95 w-full max-w-[550px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;