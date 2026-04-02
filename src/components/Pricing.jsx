const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", color: "bg-[#0F172A]", btn: "bg-purple-600" },
    { name: "Pro", price: "29", color: "bg-purple-600", btn: "bg-white text-black" },
    { name: "Enterprise", price: "99", color: "bg-[#0F172A]", btn: "bg-purple-600" }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 py-24 text-center max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`${plan.color} p-8 rounded-2xl border border-gray-800 hover:scale-105 transition-transform duration-300`}>
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-sm font-normal opacity-70">/mo</span></p>
            <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.btn} hover:opacity-90`}>
              {plan.name === "Pro" ? "Start Pro Trial" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;