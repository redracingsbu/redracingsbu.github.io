import { useCallback, useMemo, useRef } from 'react';
import carLandscape from '../assets/home/carlandscape.webp';
import carPortrait from '../assets/home/carportrait.webp';
import PageLayout from '../components/PageLayout.jsx';
import missionPicture from '../assets/home/homepagetent.webp';
import helmetImage from '../assets/home/helmet.webp';

import { useScrollOpacity } from '../hooks/useScrollOpacity.js';

function Home() {
  const missionRef = useRef(null);

  // Scroll listener to calculate opacity based on scroll position
  const scrollOpacity = useScrollOpacity({ fadeDistanceRatio: 0.6 });

  const parallaxStyle = useMemo(() => ({
    '--rr-home-bg-mobile': `url(${carPortrait})`,
    '--rr-home-bg-desktop': `url(${carLandscape})`,
    opacity: scrollOpacity,
  }), [scrollOpacity]);

  const heroOpacityStyle = useMemo(() => ({ opacity: scrollOpacity }), [scrollOpacity]);

  const scrollToMission = useCallback(() => {
    if (missionRef.current) {
      const elementPosition = missionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerWidth < 768 ? 40 : 0; 
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <PageLayout
      wrapperClassName="min-h-screen flex flex-col relative"
      mainClassName="flex-1 relative w-full z-10"
      beforeMain={(
        <div 
          className="rr-home-parallax fixed top-0 left-0 w-full h-screen z-0 bg-black"
          style={parallaxStyle}
        />
      )}
      footerWrapperClassName="bg-black relative z-10"
    >
      
      {/* Transparent Window / Hero Section */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col relative pointer-events-none">
        <div 
          className="flex-grow flex items-end justify-center pb-20 pointer-events-auto transition-opacity duration-300 ease-out"
          style={heroOpacityStyle}
        >
          <button 
            onClick={scrollToMission}
            className="flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-110 focus:outline-none"
            aria-label="Scroll down"
          >
            {/* Double V Arrow */}
            <svg 
              className="w-10 h-10 text-white rr-home-arrow drop-shadow-lg" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg 
              className="w-10 h-10 text-white rr-home-arrow rr-home-arrow-delay -mt-6 drop-shadow-lg" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mission Section */}
      <section 
        ref={missionRef} 
        className="bg-black text-white relative z-10 w-full shadow-[0_-50px_100px_rgba(0,0,0,1)]"
      >
        <div className="flex items-start rr-page-pad pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 w-full max-w-[1400px] mx-auto">
            
            <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-12 w-full">
              <img 
                src={missionPicture}
                alt="Red Racing Team" 
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />

            </div>

            <div className="max-w-3xl lg:mx-0 lg:mr-12 flex flex-col justify-center">
              <h1 className="rr-h1 mb-8">
                Our Mission
              </h1>
              
              <div className="space-y-6 rr-body">
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
      
      {/* About Section */}
      <div className="bg-black w-full mb-2 relative z-10">
        <div className="flex-1 flex flex-col lg:flex-row">
          
          <div className="rr-page-pad max-w-2xl 2xl:max-w-3xl lg:ml-12 p-6">
            <h1 className="rr-h1 mb-12 text-left">
              About Us
            </h1>
            
            <div className="space-y-4 rr-body">
              <p>
                RedRacing is Stony Brook's First Formula SAE team, founded in 2025 in a dorm room by a group of new 
                engineering students who shared a love for Formula 1 and high-performance vehicles.
              </p>
              
              <p>
                After joining the existing Baja SAE team, we realized two things: we wanted to pursue the technical 
                challenge of a true formula-style car, and we wanted to build a team where students could learn 
                hands-on from day one.
              </p>
              
              <p>
                What started as a few freshmen with an idea has evolved into a cross-disciplinary organization of 
                over 30 mechanical, electrical, computer, software, physics, chemistry, and business students 
                united around one goal: design, build, and compete with a Formula SAE vehicle on the international stage.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:pr-12 flex justify-center lg:mt-24">
            <img 
              src={helmetImage} 
              alt="Red Racing Helmet" 
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />

          </div>

        </div>
      </div>

    </PageLayout>
  );
}

export default Home;