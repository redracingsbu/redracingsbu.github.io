import SolidWorksLogo from '../assets/SolidWorks_Logo.svg';
import AnsysLogo from '../assets/ansyssvg.svg'
import KenestoLogo from '../assets/kenestosvg.svg'
import ViGradeLogo from '../assets/Vi-grade_Logo.png'
import HumaneticsLogo from '../assets/Humanetics_Logo.png'
import RapidharnessLogo from '../assets/rapidharness_logo_large.webp'
import CoLabLogo from '../assets/CoLab_White_logo.svg'
import AltiumLogo from '../assets/Altium_Limited_logo.svg'
import AceControlsLogo from '../assets/Ace_Controls_logo.svg'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Sponsors() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />
            
            <div className="flex flex-1 items-start justify-center">
                <div className="pt-8 lg:pt-32 px-6 lg:px-12 max-w-6xl p-6 rounded-lg space-y-8 w-full">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-center">
                        Thank you to our Partners!
                    </h1>
                    <div className="space-y-8 text-lg lg:text-xl text-white leading-relaxed text-left">
                        <p>
                            RedRacing is a newly formed FSAE team driven by a passionate group of student engineers. With minimal funding and limited resources provided from our university, we rely heavily on external support to bring our vision to life.
                        </p>
                        <p>
                            Your partnership will directly contribute to the design, fabrication, and testing of Stony Brook University's first ever FSAE car – a milestone achievement for both our team and the institution.
                        </p>
                        <p>
                            Every contribution, whether financial, material, or technical, plays a crucial role in bringing this dream to life and laying the foundation for our team's long-term success.
                        </p>
                    </div>
                    <div className="pt-4">
                        <a 
                            href="/contact" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 text-xl lg:text-2xl uppercase tracking-wide transition-colors duration-200"
                        >
                            Become a Sponsor
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pointer-events-none space-y-4 pointer-events-auto mt-24 lg:mt-[30vh]">
                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Platinum
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pt-12 lg:pt-6 pb-12 lg:pb-32 px-6">
                    <img 
                        src={AnsysLogo} 
                        alt="Red Racing Logo" 
                        className="w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain" 
                    />
                    <img 
                        src={KenestoLogo} 
                        alt="SAE International Logo" 
                        className="w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain" 
                    />
                    <img 
                        src={ViGradeLogo} 
                        alt="SAE International Logo" 
                        className="w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain" 
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pb-12 lg:pb-32 px-6">
                    <img 
                        src={HumaneticsLogo} 
                        alt="Red Racing Logo" 
                        className="w-4/5 lg:w-1/3 xl:w-2/5 max-w-sm xl:max-w-md max-h-48 object-contain" 
                    />
                    <img 
                        src={RapidharnessLogo} 
                        alt="SAE International Logo" 
                        className="w-4/5 lg:w-1/3 xl:w-2/5 max-w-sm xl:max-w-md max-h-48 object-contain" 
                    />
                </div>

                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Silver
                </div>
                <div className="p-6 pb-24 px-6">
                    <img 
                        src={SolidWorksLogo} 
                        alt="SolidWorks Logo" 
                        className="h-15 lg:h-20 xl:h-30 w-auto max-w-xs lg:max-w-sm xl:max-w-md"
                    />
                </div>
                <div className="bg-zinc-700 w-full text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
                    Bronze
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 pt-12 lg:pt-6 pb-12 lg:pb-32 px-6">
                    <img 
                        src={CoLabLogo} 
                        alt="SolidWorks Logo" 
                        className="h-20 lg:h-24 xl:h-30 w-auto max-w-xs lg:max-w-sm"
                    />
                    <img 
                        src={AltiumLogo} 
                        alt="SolidWorks Logo" 
                        className="h-20 lg:h-24 xl:h-30 w-auto max-w-xs lg:max-w-sm"
                    />
                    <img 
                        src={AceControlsLogo} 
                        alt="SolidWorks Logo" 
                        className="h-20 lg:h-24 xl:h-30 w-auto max-w-xs lg:max-w-sm"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Sponsors;