const Steps = () => {
  const steps = [
    {
      id: "01",
      icon: "fa-rocket",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    },
    {
      id: "02",
      icon: "fa-box-open",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      id: "03",
      icon: "fa-user",
      title: "Scale Up",
      description: "Grow your business with our professional suite of assets."
    }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 md:px-12 py-20 text-center">
      {/* Title Section */}
      <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
        Get Started In 3 Steps
      </h2>
      <p className="mt-2 mb-12 text-sm text-gray-400 md:text-base max-w-md mx-auto">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="relative bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
          >
            <span className="absolute px-3 py-1 text-xs font-bold bg-purple-600 rounded-full top-4 right-4 shadow-lg">
              {step.id}
            </span>

            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-purple-400 bg-purple-900/40 rounded-full group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${step.icon}`}></i>
            </div>

            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;