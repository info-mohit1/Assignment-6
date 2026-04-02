const CTA = () => {
  return (
    <section className="px-6 py-24 text-center text-white bg-gradient-to-r from-purple-700 to-pink-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl leading-tight">Ready To Transform Your Workflow?</h2>
        <p className="mb-10 text-lg text-purple-100 opacity-90">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-4 font-bold text-purple-700 bg-white rounded-full hover:shadow-2xl transition-all">
            Explore Products
          </button>
          <button className="px-10 py-4 font-bold border-2 border-white rounded-full hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>
        <p className="mt-8 text-xs text-purple-200">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTA;