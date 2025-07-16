import SolidWorks_Logo from '../icons/SolidWorks_Logo.svg';

function Sponsors() {
    return (
        <div className="flex-1 bg-white py-8 lg:py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-black-900 mb-12">
                    Sponsors
                </h1>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-[30vh] space-y-4 w-full">
                <img 
                    src={SolidWorks_Logo} 
                    alt="SolidWorks Logo" 
                    className="h-20 w-auto"
                />
                <p className="text-lg lg:text-xl text-black-700">james</p>
            </div>
        </div>
    );
}

export default Sponsors;
