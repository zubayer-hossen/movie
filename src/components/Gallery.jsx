const Gallery = () => {
  const images = [
    '/images/borbad1.jpg',
    '/images/.jpg',
    '/images/.jpg',
    '/images/.jpg',
    '/images/.jpg'
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 to-pink-100">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Borbaad ${idx + 1}`} className="rounded-lg shadow-lg hover:scale-105 transition duration-300" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
