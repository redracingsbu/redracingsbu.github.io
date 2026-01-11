import PageLayout from '../components/PageLayout.jsx';
import CarMeetMain from '../assets/carmeet/2025CarMeetMain.webp';

function CarMeet() {
  return (
    <PageLayout
      wrapperClassName="rr-page"
      mainClassName="flex-1 flex flex-col"
    >
      {/* CHANGED: Added -mt-24 lg:-mt-32 to pull the image up */}
      <div className="relative w-full h-[60vh] lg:h-[75vh] -mt-24 lg:-mt-24">
        <img 
          src={CarMeetMain} 
          alt="Campus Car Meet Group Photo" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex justify-center pt-30">
          <h1 className="rr-h1 tracking-wide px-4 drop-shadow-lg text-center">
            Campus Car Meet
          </h1>
        </div>
      </div>

      <div className="bg-black text-white w-full py-8 px-6 flex flex-col items-center text-center space-y-12">
        
        <p className="max-w-6xl text-lg lg:text-xl leading-relaxed text-white">
          We host an on-campus car meet every semester as a way for students, local car enthusiasts, 
          and other colleges to connect through our shared love for cars. If you have a cool ride 
          that you want to show off, or if you just want to chill with us and check out cool cars, 
          feel free to stop by!
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold">
          Spring Meet Location & Date: <span className="underline decoration-2 underline-offset-4">TBD</span>
        </h2>
        
      </div>
    </PageLayout>
  );
}

export default CarMeet;