import "./index.css";
import fImage from "../src/assets/dida/IMG-20240909-WA0057.jpg";
import fiveImage from "../src/assets/dida/IMG-20240909-WA0061.jpg";
import eImage from "../src/assets/dida/IMG-20240909-WA0064.jpg";
import elevenImage from "../src/assets/dida/WhatsApp Image 2024-09-13 at 23.57.35_2e11953e.jpg";
import twelveImage from "../src/assets/dida/WhatsApp Image 2024-09-16 at 15.47.55_de162763.jpg";
import bgsongs from "../src/assets/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video) (128 kbps).mp3";
import { useState, useRef } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // For controlling when music starts
  const [selectedImage, setSelectedImage] = useState(null); // For full-screen image
  const audioRef = useRef(null);

  // Start music on button click
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Unmute the audio
      audioRef.current.play(); // Play the audio
      setIsPlaying(true); // Hide the welcome screen
    }
  };

  // Handle image click to display full-screen
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Close the full-screen view
  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-[#F7EED3]">
        {/* Audio element */}
        <audio ref={audioRef} loop>
          <source src={bgsongs} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Conditional welcome screen */}
        {!isPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center">
              <h1 className="text-white text-4xl mb-4">
                Welcome to Mas Dida & Neng Syifa's Journey
              </h1>
              <button
                onClick={startMusic}
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg"
              >
                Start Music & Enter
              </button>
            </div>
          </div>
        )}

        {/* Main content */}
        <section
          className="hero h-screen bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage: `url(${fiveImage})`,
          }}
        >
          <div className="overlay bg-black bg-opacity-50 p-10 rounded-lg text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Mas Dida & Neng Syifa's Journey
            </h1>
            <p className="text-lg mb-6">
              Love isn't just about the moments we share, but the memories we
              create.
            </p>
            <a
              href="#story"
              className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg transition"
            >
              Read Our Story
            </a>
          </div>
        </section>

        <section id="story" className="story-section py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              It all began during our KKN days at Wargaluyu, where fate brought
              us together for the first time. What started as a simple
              introduction soon unfolded into something far more meaningful, as
              if the universe had already planned our paths to cross.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              One of our most cherished memories is the day we walked hand in
              hand to Arjasari Rock Hill. The gentle breeze, the stunning view,
              and the feeling of togetherness created an unforgettable moment
              that we immortalized with a picture, a symbol of the beginning of
              our beautiful journey together.
            </p>
          </div>
        </section>

        <section id="ldr" className="ldr-section py-8 ">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
              A Little Distance, A Lot of Love
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Since September 20, 2024, we've been living apart, but every day
              brings us closer in ways that really matter. This distance is just
              a chapter, and our story is about much more-love, trust, and the
              moments we share in our hearts.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              With every sunrise and every late-night chat, we hold onto the
              thought of January ∞ , 2025, when we'll be together again. These
              days apart are temporary, but what we have is forever.
            </p>
            <p className="text-lg font-bold text-pink-600 mt-6">
              ∞ days apart, but always side by side in spirit.
            </p>
          </div>
        </section>

        <section id="milestones" className="milestones-section py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
              Milestones
            </h2>
            <ul className="list-none text-center">
              <li className="text-lg mb-4">
                <strong>3 August 2024</strong> - First Meeting
              </li>
              <li className="text-lg mb-4">
                <strong>28 August 2024</strong> - First Vacation
              </li>
              {/* <li className="text-lg mb-4">
                <strong>20 September 2024</strong> – We began our long-distance
                chapter. Distance couldn’t stop us from feeling close every day.
              </li> */}
              {/* <li className="text-lg mb-4">
                <strong>SOON</strong> – The day we reunite after ∞ days apart.
                Finally, the distance ends, and we can hold each other close
                again.
              </li> */}
              <li className="text-lg mb-4">
                <strong>SOON</strong> - Anniversary Celebration
              </li>
            </ul>
          </div>
        </section>

        {/* Image gallery */}
        <div>
          <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex">
            <span className="self-center text-4xl font-bold text-center text-pink-600 mb-8">
              Welcome To Our Gallery
            </span>
          </h2>
        </div>
        <div className="p-2 font-serif grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4 overflow-hidden">
          <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex">
            <a href="https://www.instagram.com/syifazzaa/">
              <span className="self-center text-blue-700 underline">
                @syifaazzaaa
              </span>
            </a>
          </h2>

          <div className="h-15 text-lg font-bold text-slate-700 md:col-start-2 md:row-start-2 md:flex">
            <a href="https://www.instagram.com/didadejan3/">
              <span className="self-end text-blue-700 underline">
                @didadejan3
              </span>
            </a>
          </div>

          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div
              className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500"
              onClick={() => handleImageClick(fImage)}
            >
              <img src={fImage} alt="" />
            </div>
            <div className="absolute bottom-0 bg-opacity-75 bg-white p-1 text-center rounded-tr-lg">
              <p className="text-sm text-slate-600">Arjasari Rock Hill</p>
              <p className="text-xs text-slate-500">August 28, 2024</p>
            </div>
          </div>

          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-4 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div
              className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500"
              onClick={() => handleImageClick(eImage)}
            >
              <img src={eImage} alt="" />
            </div>
            <div className="absolute bottom-0 bg-opacity-75 bg-white p-1 text-center rounded-tr-lg">
              <p className="text-sm text-slate-600">Desa Wargaluyu</p>
              <p className="text-xs text-slate-500">August 30, 2024</p>
            </div>
          </div>
          {/* <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div
              className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500"
              onClick={() => handleImageClick(tenImage)}
            >
              <img src={tenImage} alt="" />
            </div>
            <div className="absolute bottom-0 bg-opacity-75 bg-white p-1 text-center rounded-tr-lg">
              <p className="text-sm text-slate-600">Dago Atas</p>
              <p className="text-xs text-slate-500">September 14, 2024</p>
            </div>
          </div> */}
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div
              className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500"
              onClick={() => handleImageClick(elevenImage)}
            >
              <img src={elevenImage} alt="" />
            </div>
            <div className="absolute bottom-0 bg-opacity-75 bg-white p-1 text-center rounded-tr-lg">
              <p className="text-sm text-slate-600">Opera Courtyard</p>
              <p className="text-xs text-slate-500">September 14, 2024</p>
            </div>
          </div>

          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div
              className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500"
              onClick={() => handleImageClick(twelveImage)}
            >
              <img src={twelveImage} alt="" />
            </div>
            <div className="absolute bottom-0 bg-opacity-75 bg-white p-1 text-center rounded-tr-lg">
              <p className="text-sm text-slate-600">Bandung</p>
              <p className="text-xs text-slate-500">September 16, 2024</p>
            </div>
          </div>
        </div>

        {/* Fullscreen image modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-full"
            />
          </div>
        )}

        <footer className="bg-gray-900 text-white py-6">
          <div className="text-center">
            <p>&copy; 2024 Mas Dida & Neng Syifa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
