const AboutZubayer = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 text-purple-700">Meet Zubayer Hossen</h2>

      <div className="flex flex-col items-center">
        {/* Replace 'your-photo.jpg' with your actual uploaded image */}
        <img
          src="https://pbs.twimg.com/profile_images/1307212077887488001/3_ZSk9Zn_400x400.jpg"
          alt="Zubayer Hossen"
          className="w-48 h-48 rounded-full border-4 border-purple-400 shadow-xl transform hover:rotate-6 hover:scale-105 transition-all duration-500 animate-pulse"
        />
        <p className="mt-6 max-w-2xl text-lg text-gray-700 leading-relaxed">
          Hi! I'm <span className="font-bold text-pink-500">Zubayer Hossen</span> — a passionate web developer and cinema enthusiast.
          I created this website for my dear friends to experience the magic of <strong className="text-purple-600">Borbaad</strong> movie.
          Scroll down, enjoy the gallery, and unlock the movie with your secret code. 🎬
        </p>
      </div>
    </section>
  );
};

export default AboutZubayer;
