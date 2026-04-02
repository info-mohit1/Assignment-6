const Stats = () => {
  const statItems = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "12M+", label: "Tasks Automated" }
  ];

  return (
    <section className="bg-[#020617] py-16">
      <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {statItems.map((stat, i) => (
              <div key={i} className="py-8 text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h2>
                <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;