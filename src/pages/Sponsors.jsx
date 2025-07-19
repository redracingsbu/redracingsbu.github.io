import SolidWorks_Logo from '../assets/SolidWorks_Logo.svg';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Sponsors() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />
            
            <div className="flex-1 pt-8 lg:pt-32 px-6 lg:px-12 max-w-4xl lg:ml-12 p-6 rounded-lg space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-left">
                    Sponsors
                </h1>
            </div>
            
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center justify-center space-y-4 pointer-events-auto px-6 lg:px-0">
                    <img 
                        src={SolidWorks_Logo} 
                        alt="SolidWorks Logo" 
                        className="h-20 w-auto"
                    />
                    <p className="text-lg lg:text-4xl text-white py-6 text-center">James</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Sponsors;