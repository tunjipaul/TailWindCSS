function Hero() {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop the Best Products Online
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Explore top-quality products at unbeatable prices.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-gray-900 transition cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://i.pinimg.com/736x/02/60/55/026055156aba3fa47ac5baf0fcc34d88.jpg"
            alt="Hero"
            className="w-full rounded-lg shadow-lg h-128 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
