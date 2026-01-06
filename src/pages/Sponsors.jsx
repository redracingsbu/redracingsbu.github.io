import SolidWorksLogo from '../assets/SolidWorks_Logo.svg';
import AnsysLogo from '../assets/ansyssvg.svg'
import KenestoLogo from '../assets/kenestosvg.svg'
import RapidharnessLogo from '../assets/RapidHarness.png'
import CoLabLogo from '../assets/CoLab_White_logo.svg'
import AltiumLogo from '../assets/Altium_Limited_logo.svg'
import AceControlsLogo from '../assets/Ace_Controls_logo.svg'
import SiemensLogo from '../assets/Siemens.svg';
import KISSsoftLogo from '../assets/KISSsoft.svg';
import HumaneticsLogo from '../assets/Humanetics.png';
import SensataLogo from '../assets/Sensata.png';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function Sponsors() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />
            
            <div className="flex flex-1 items-start justify-center">
                <div className="pt-8 lg:pt-24 px-6 lg:px-12 max-w-6xl p-6 rounded-lg space-y-8 w-full">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-center">
                        Thank you to our Partners!
                    </h1>
                    <div className="space-y-8 text-lg lg:text-xl text-white leading-relaxed text-left">
                        <p>
                            Your partnership will directly contribute to the design, fabrication, and testing of Stony Brook University's first ever FSAE car – a milestone achievement for both our team and the institution. 
                        </p>
                        <p>
                            Every contribution plays a crucial role in bringing this dream to life and laying the foundation for our team’s long-term success. 
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-12 justify-center items-center w-full">
                    {/* Reusable style for consistency */}
                    {(() => {
                        const buttonStyle = "inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-10 text-xl lg:text-xl uppercase tracking-wider transition-colors duration-200 text-center min-w-[280px]";
                        
                        return (
                        <>
                            <a 
                            href="https://drive.google.com/file/d/1CzhU9inERFuv8213MBwJBIHz5_ktmapx/view" 
                            className={buttonStyle}
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Sponsor Brochure
                            </a>

                            <Link
                            to="/contact" 
                            className={buttonStyle}
                            >
                            Become a Sponsor
                            </Link>

                            <a 
                            href="https://www.gofundme.com/f/5nhhy-support-stony-brook-redracing-formula-sae" 
                            className={buttonStyle}
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Donate to the Team
                            </a>
                        </>
                        );
                    })()}
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center justify-center pointer-events-none space-y-4 pointer-events-auto mt-24 lg:mt-[10vh]">
                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Platinum
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pt-12 lg:pt-6 pb-12 lg:pb-16 px-6">
                    <img 
                        src={AnsysLogo} 
                        alt="Ansys Logo" 
                        className="w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain" 
                    />
                    <img 
                        src={KenestoLogo} 
                        alt="Kenesto Logo" 
                        className="w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain" 
                    />
                    <img 
                        src={SolidWorksLogo} 
                        alt="SolidWorks Logo" 
                        className="h-15 lg:h-16 xl:h-24"
                        />
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pb-12 px-6">
                    <img
                        src={SiemensLogo} 
                        alt="Siemens Logo" 
                        className="w-80 lg:w-90 xl:w-120" 
                    />
                </div>

                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Gold
                </div>
                <div className="p-6 pb-24 px-6">
                    <img 
                        src={KISSsoftLogo} 
                        alt="KISSsoft Logo" 
                        className="h-16 lg:h-18 xl:h-24"
                    />
                </div>
                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Silver
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pt-12 lg:pt-6 pb-24 px-6">
                    <img 
                        src={HumaneticsLogo} 
                        alt="Humanetics Logo" 
                        className="h-12 lg:h-14 xl:h-16 w-auto max-w-xs lg:max-w-sm"
                    />
                    <img 
                        src={AltiumLogo} 
                        alt="Altium Logo" 
                        className="h-12 lg:h-14 xl:h-16 w-auto max-w-xs lg:max-w-sm"
                    />
                    <img 
                        src={RapidharnessLogo} 
                        alt="RapidHarness Logo" 
                        className="h-12 lg:h-16 xl:h-20"
                    />
                </div>
                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Bronze
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pt-12 lg:pt-6 pb-12 lg:pb-32 px-6">
                    <img 
                        src={SensataLogo} 
                        alt="Sensata Logo" 
                        className="h-20 lg:h-30 xl:h-40 w-auto max-w-xs lg:max-w-sm"
                    />
                    <img 
                        src={AceControlsLogo} 
                        alt="Ace Controls Logo" 
                        className="h-20 lg:h-24 xl:h-30 w-auto max-w-xs lg:max-w-sm"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Sponsors;