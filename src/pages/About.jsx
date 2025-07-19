import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
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
            <Header />
            
            <div className="flex-1 pt-8 lg:pt-32 px-6 lg:px-12 max-w-4xl lg:ml-12 p-6 rounded-lg space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-left">
                    About Us
                </h1>
                
                <div className="space-y-8 text-lg lg:text-xl text-gray-300 leading-relaxed">
                    <p>
                        Formed in Spring 2025, RedRacing is Stony Brook University's official Formula SAE club and Formula 
                        racing fan club. Our mission is to unite students who are passionate about vehicle engineering, 
                        motorsports, and hands-on innovation through both collaborative design work and racing culture.
                    </p>
                    
                    <p>
                        While we are a formally recognized club, we are still in the early stages of securing CEAS approval and 
                        funding to build our first car. We're actively working through administrative, technical, and financial 
                        hurdles to turn this vision into reality — and we welcome all the support we can get.
                    </p>
                    
                    <p>
                        Whether you're a student, racing fan, alumni, or potential sponsor, we'd love to have you be part of our 
                        journey.
                    </p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default About;