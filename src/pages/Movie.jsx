const Movie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-300 mb-12 animate-fade-in">
        🎥 Borbaad Movie Screening Room
      </h1>

     {/* Part 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-pink-400 text-center">📽️ Borbaad - Part 1</h2>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
  <iframe src="https://geo.dailymotion.com/player.html?video=x9iylha"
    style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden; border:none;"
    allowfullscreen
    title="Dailymotion Video Player"
    allow="web-share">
  </iframe>
</div>
      </section>

      {/* Part 2 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 text-center">🎞️ Borbaad - Part 2</h2>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
  <iframe src="https://geo.dailymotion.com/player.html?video=x9ip47q"
    style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden; border:none;"
    allowfullscreen
    title="Dailymotion Video Player"
    allow="web-share">
  </iframe>
</div>
      </section>

      <p className="text-sm text-gray-400 mt-12 text-center italic">Made with ❤️ by Zubayer for his beloved friends.</p>
    </div>
  );
};

export default Movie;
