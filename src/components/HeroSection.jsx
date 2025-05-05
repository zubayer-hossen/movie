const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 text-center overflow-hidden">
      {/* Decorative Blurred Circles */}
      <div className="absolute top-[-80px] left-[-80px] w-60 h-60 bg-pink-400 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-purple-400 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md animate-fade-in">
          🎬 Welcome to <span className="text-yellow-300">Borbaad</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          A special cinematic experience by <span className="font-semibold text-white underline">Zubayer Hossen</span> — crafted with love for my beloved friends.
        </p>
        <a
          href="#unlock"
          className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md"
        >
          🔓 Unlock Movie Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
