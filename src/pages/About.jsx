import { useState, useEffect } from 'react';
import helmet from '../assets/helmet.webp';

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div 
            className="bg-black min-h-screen flex flex-col bg-no-repeat 
                       bg-contain bg-left-center 
                       lg:bg-cover lg:bg-center"
            style={!isMobile ? { backgroundImage: `url(${helmet})` } : {}}
        >
            
            <div className="flex-1 pt-8 lg:pt-24 px-6 lg:px-12 max-w-3xl lg:ml-12 p-6 space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-left">
                    About Us
                </h1>
                
                <div className="space-y-4 text-lg lg:text-xl text-white leading-relaxed">
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
            
        </div>
    );
}

export default About;