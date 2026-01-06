import { useRef } from 'react';
import carLandscape from '../assets/carlandscape.webp';
import carPortrait from '../assets/carportrait.webp';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import missionPicture from '../assets/homepagetent.webp';
import About from './About.jsx';

function Home() {
  const missionRef = useRef(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Global Fixed Header (Kept fixed as requested previously) */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black">
        <Header />
      </div>

      {/* 2. Fixed Parallax Background */}
      <div 
        className="fixed top-0 left-0 w-full h-screen -z-10 bg-black"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${carPortrait})`,
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .fixed {
              background-image: url(${carLandscape}) !important;
            }
          }
          /* Custom Animation Definition */
          @keyframes arrowFloat {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(10px); opacity: 1; }
          }
          .animate-arrow {
            animation: arrowFloat 4s infinite ease-in-out;
          }
          .animate-arrow-delay {
            animation: arrowFloat 4s infinite ease-in-out;
            animation-delay: 0.2s; /* Slight delay for the second arrow */
          }
        `}</style>
      </div>

      {/* 3. Main Scrollable Container */}
      <div className="relative w-full">
        
        {/* Transparent Window (Initial View) */}
        <div className="min-h-screen flex flex-col relative pointer-events-none">
          {/* Arrow Container at Bottom */}
          <div className="flex-grow flex items-end justify-center pb-12 pointer-events-auto">
            <button 
              onClick={scrollToMission}
              className="flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-110 focus:outline-none"
              aria-label="Scroll down"
            >
              {/* Double V Arrow */}
              <svg 
                className="w-10 h-10 text-white animate-arrow drop-shadow-lg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <svg 
                className="w-10 h-10 text-white animate-arrow-delay -mt-6 drop-shadow-lg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Section (Styled exactly like ContactUs) */}
        {/* We use bg-black to cover the parallax image when scrolling */}
        <section 
          ref={missionRef} 
          className="bg-black text-white relative z-10 w-full"
        >
          {/* Match top level padding from ContactUs: pt-8 lg:pt-24 px-6 lg:px-12 */}
          <div className="flex items-start pt-8 lg:pt-24 px-6 lg:px-12 pb-24">
            
            {/* Match Grid Layout: grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 w-full max-w-[1400px] mx-auto">
              
              {/* Left Column: Image (Matches Layout) */}
              <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12 w-full">
                 <img 
                    src={missionPicture}
                    alt="Red Racing Team" 
                    className="w-full h-auto object-cover"
                  />
              </div>

              {/* Right Column: Text Content */}
              <div className="max-w-4xl lg:mx-0 lg:mr-12 flex flex-col justify-center">
                {/* Match Header Size: text-4xl lg:text-6xl */}
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                  Our Mission
                </h1>
                
                <div className="space-y-6 text-lg lg:text-xl text-white leading-relaxed">
                  <p>
                    RedRacing at Stony Brook University aims to prepare undergraduate 
                    and graduate students with an opportunity to engage in a range of 
                    engineering disciplines, challenging them through real-world 
                    applications in the field of automotive design.
                  </p>
                  <p>
                    We are striving to build Stony Brook's first ever Formula SAE 
                    internal-combustion race car and represent at FSAE Michigan. 
                    Together we will foster engineering excellence and build a 
                    lasting program for years to come.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <About />

        {/* Footer */}
        <div className="bg-black relative z-10">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default Home;