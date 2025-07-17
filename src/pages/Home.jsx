import carLandscape from '../assets/carlandscape.webp';
import carPortrait from '../assets/carportrait.webp';

function Home() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-hidden py-5 lg:py-10 2xl:py-2">
      <img 
        src={carPortrait} 
        className="block lg:hidden max-w-full max-h-full object-contain rotate-180 select-none" 
        alt="Outline of a formula one car"
        draggable={false}
      />
      <img 
        src={carLandscape} 
        className="hidden lg:block max-w-full max-h-[70vh] 2xl:max-h-[85vh] object-contain select-none" 
        alt="Outline of a formula one car"
        draggable={false}
      />
    </div>
  );
}

export default Home;