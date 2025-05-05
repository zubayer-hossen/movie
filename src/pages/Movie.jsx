const Movie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-300 mb-12 animate-fade-in">
        🎥 Borbaad Movie Screening Room
      </h1>

      {/* Part 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-pink-400 text-center">📽️ Borbaad - Part 1</h2>
        <div className="relative overflow-hidden rounded-xl shadow-lg max-w-4xl mx-auto border-4 border-purple-700">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/40 to-black/60 z-10 pointer-events-none"></div>
          <iframe
            className="w-full aspect-video z-0 relative"
            src="https://geo.dailymotion.com/player.html?video=x9iw0sq&mute=0&controls=1&fullscreen=1"
            title="Borbaad Part 1"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Part 2 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 text-center">🎞️ Borbaad - Part 2</h2>
        <div className="relative overflow-hidden rounded-xl shadow-lg max-w-4xl mx-auto border-4 border-pink-600">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-900/40 to-black/60 z-10 pointer-events-none"></div>
          <iframe
            className="w-full aspect-video z-0 relative"
            src="https://geo.dailymotion.com/player.html?video=x9ix7ni&mute=0&controls=1&fullscreen=1"
            title="Borbaad Part 2"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <p className="text-sm text-gray-400 mt-12 text-center italic">Made with ❤️ by Zubayer for his beloved friends.</p>
    </div>
  );
};

export default Movie;
