import HeroSection from "../components/HeroSection";
import AboutZubayer from "../components/AboutZubayer";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const secretKey = "zubu2025";
    
    // Check if the code matches the secret key
    if (code.trim() === secretKey) {
      navigate("/movie");
    } else {
      setError("❌ Wrong secret code. Ask Zubayer for the correct code.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* About Zubayer */}
      <AboutZubayer />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">💬 What My Friends Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Inspirational!", "Best web ever!", "We love Zubayer’s work!"].map((quote, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-lg italic">"{quote}"</p>
              <p className="mt-4 font-bold text-purple-600">— Friend {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Secret Code Section */}
      <section className="bg-white py-16 text-center" id="unlock">
        <h2 className="text-3xl font-bold mb-6">🎬 Unlock Borbaad Movie</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="password"
            placeholder="Enter Secret Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="px-4 py-2 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-72"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Unlock Movie
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
