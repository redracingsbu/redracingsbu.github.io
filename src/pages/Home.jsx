import carLandscape from '../assets/carlandscape.webp';
import carPortrait from '../assets/carportrait.webp';

function Home() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-hidden py-5 lg:py-10">
      <img 
        src={carPortrait} 
        className="block lg:hidden max-w-full max-h-full object-contain rotate-180" 
        alt="Outline of a formula one car" 
      />
      <img 
        src={carLandscape} 
        className="hidden lg:block max-w-full max-h-[70vh] object-contain" 
        alt="Outline of a formula one car" 
      />
    </div>
  );
}

export default Home;