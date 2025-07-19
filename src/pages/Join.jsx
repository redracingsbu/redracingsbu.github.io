import { useState, useEffect } from 'react';
import coilovers from '../assets/coilovers.webp';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'

function Join() {
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

    const desktopBackgroundStyle = {
        backgroundImage: `url(${coilovers})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div
            className="min-h-screen flex flex-col bg-black"
            style={!isMobile ? desktopBackgroundStyle : {}}
        >
            <Header />
            <div className="flex-1 pt-8 lg:pt-32 px-6 lg:px-12 max-w-4xl mx-auto lg:mx-0 lg:ml-12 p-6 rounded-lg space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12">
                    Join
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Interested in helping us build the car? Want to join our F1 watch parties and 
                    race-themed events? Everyone is welcome here, regardless of major or study. To learn 
                    more, click the button below to join our discord!
                </p>
                
                <div className="pt-4">
                    <a 
                        href="https://discord.gg/K2RYYcz5jA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 text-xl lg:text-2xl uppercase tracking-wide transition-colors duration-200"
                    >
                        Put Me In Coach
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Join;