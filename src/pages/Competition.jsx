import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RedRacingLogo from '../assets/redracingfsaelogo.svg';
import SAEInternationalLogo from '../assets/SAEInternationalLogo.svg';


function Competition() {
    return (
        <div className='bg-black min-h-screen flex flex-col'>
            <Header />


            <div className="flex-1 pt-8 lg:pt-32 px-6 lg:px-12 max-w-4xl lg:ml-12 space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                    The Competition
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                    Formula SAE is a global engineering competition where university teams design, build, and race small, formula-style cars from the ground up. Teams are judged not only on speed and handling, but also on design, innovation, and efficiency — simulating a real-world electric vehicle startup in a competitive motorsports environment.
                </p>
                
                <div>
                    <a 
                        href="https://www.fsaeonline.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 text-xl lg:text-2xl uppercase tracking-wide transition-colors duration-200"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Logos Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-16 pt-12 lg:pt-6 pb-12 lg:pb-32">
                <img 
                    src={RedRacingLogo} 
                    alt="Red Racing Logo" 
                    className="w-4/5 lg:w-2/5 max-h-48 object-contain" 
                />
                <img 
                    src={SAEInternationalLogo} 
                    alt="SAE International Logo" 
                    className="w-4/5 lg:w-2/5 max-h-48 object-contain" 
                />
            </div>
            
            <Footer />
        </div>
    );
}


export default Competition;