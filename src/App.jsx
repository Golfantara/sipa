import "./index.css";
import fImage from "../src/assets/dida/IMG-20240909-WA0057.jpg";
import sImage from "../src/assets/dida/IMG-20240909-WA0058.jpg";
import tImage from "../src/assets/dida/IMG-20240909-WA0059.jpg";
import fourImage from "../src/assets/dida/IMG-20240909-WA0060.jpg";
import fiveImage from "../src/assets/dida/IMG-20240909-WA0061.jpg";
import sixImage from "../src/assets/dida/IMG-20240909-WA0062.jpg";
import sevenImage from "../src/assets/dida/IMG-20240909-WA0063.jpg";
import eImage from "../src/assets/dida/IMG-20240909-WA0064.jpg";
import nImage from "../src/assets/dida/IMG-20240909-WA0065.jpg";

function App() {
  return (
    <>
      <div>
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

        <section id="story" className="story-section py-16 bg-white">
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

        <section id="milestones" className="milestones-section py-16 bg-white">
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
              <li className="text-lg mb-4">
                <strong>SOON</strong> - Anniversary Celebration
              </li>
            </ul>
          </div>
        </section>

        <div>
          <h2 className="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex">
            <span className="self-center">Welcome To Our Gallery</span>
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
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={fImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={sevenImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={sixImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={sImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={tImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-2 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={sevenImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-4 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={eImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={fourImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={fiveImage} alt="" />
            </div>
          </div>
          <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[3/4] xl:aspect-[3/4] md:col-start-3 overflow-hidden group relative hover:scale-95 transitio duration-500">
            <div className="image-container w-full h-full absolute bg-cover group-hover:scale-125 transition-all group-hover:rotate-12 duration-500">
              <img src={nImage} alt="" />
            </div>
          </div>
        </div>
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
