import { useState, useEffect } from 'react';
import coilovers from '../assets/coilovers.webp';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

// Data for Schedule
const scheduleItems = [
  { title: 'General Technical Meetings', loc: 'TBD', date: 'TBD', time: 'TBD' },
  { title: 'Structural/Chassis System Meetings', loc: 'TBD', date: 'TBD', time: 'TBD' },
  { title: 'Powertrain System Meetings', loc: 'TBD', date: 'TBD', time: 'TBD' },
  { title: 'VIP Team Meetings', loc: 'TBD', date: 'TBD', time: 'TBD' },
];

// Data for Subsystems
const subsystems = [
  {
    title: 'Frame',
    desc: 'The frame team is responsible for the design, cutting, welding, and jigging of the space frame endoskeleton of the car, as well as manufacturing frame tabs for other subsystems to mount critical components.',
  },
  {
    title: 'Suspension',
    desc: 'The suspension team is responsible for the system of linkages, springs, and dampers that manage tire contact with the road, absorb bumps, and control body roll during racing maneuvers.',
  },
  {
    title: 'Corners',
    desc: 'The corners team is responsible for the full wheel assembly and braking system of the car: uprights, hubs, brakes, wheels, etc. that translates suspension movements into actual wheel travel and provides stopping power for the vehicle.',
  },
  {
    title: 'Ergonomics',
    desc: 'The ergonomics team is responsible for driver safety and interface packaging, ensuring the seat, pedals, steering wheel, and dashboard are designed for driver comfort and control.',
  },
  {
    title: 'Aerodynamics',
    desc: 'The aerodynamics team is responsible for the wings, undertray, and diffusers to manipulate airflow around the car in order to generate downforce for grip while reducing drag.',
  },
  {
    title: 'Engine, Intake & Exhaust',
    desc: "The engine, intake & exhaust team is responsible for the heart of the car's power, focusing on optimizing the internal combustion cycle through proper packaging and tuning to maximize horsepower and torque across the powerband.",
  },
  {
    title: 'Drivetrain',
    desc: 'The drivetrain team is responsible for the power transfer from the engine to the wheels via the chain, differentials, and half-shafts while also optimizing acceleration through gear ratio management.',
  },
  {
    title: 'Fuel and Cooling',
    desc: 'The fuel and cooling team is responsible for maintaining optimal engine temperatures and providing a safe, steady supply of fuel to the engine.',
  },
  {
    title: 'Electrical',
    desc: 'The electrical team is responsible for the wiring harness, power distribution, sensor integration, and data acquisition. We manage the engine control unit (ECU) and develop the telemetry systems that provide real-time data to the team.',
  },
  {
    title: 'Business & Marketing',
    desc: "The business & marketing team is responsible for securing sponsorships, promotional materials, maintaining the team's image and branding, as well as assisting the executive board with event planning.",
  },
];

function Join() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopBackgroundStyle = {
    backgroundImage: `url(${coilovers})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Adds a slight parallax feel
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-black"
      style={!isMobile ? desktopBackgroundStyle : {}}
    >
      <Header />
      
      {/* SECTION 1: Intro / Join Text */}
      <div className="pt-8 lg:pt-24 px-6 lg:px-12 max-w-2xl mx-auto lg:mx-0 lg:ml-12 p-6 rounded-lg space-y-8 bg-black/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-12 drop-shadow-lg">
          Join the Pack
        </h1>

        <div className="text-lg lg:text-xl text-white leading-relaxed space-y-6 drop-shadow-md">
          <p>
            Interested in joining the team? We welcome all students that have a
            passion for building race cars, or are automotive fans in general.
          </p>
          <p>
            Check out our Instagram page for general information about events.
          </p>
          <p>
            To stay 100% up to date with meeting times and team plans, join our Discord:
          </p>
        </div>

        <div className="pt-4">
          <a
            href="https://discord.gg/K2RYYcz5jA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-xl lg:text-2xl uppercase tracking-wide transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Discord
          </a>
        </div>
      </div>

      {/* SECTION 2: Spring 2025 Schedule */}
      {/* Used a separate container with solid background for readability over complex bg */}
      <div className="w-full py-30 px-6 lg:px-12 mt-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
          Spring 2025 Schedule
        </h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#C02820] p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:bg-[#D13028] transition-colors duration-300"
            >
              <h3 className="text-white font-bold text-xl lg:text-2xl mb-8 leading-tight">
                {item.title}
              </h3>
              <div className="text-white space-y-3 text-lg font-medium opacity-90">
                <p>Location: <span className="italic">{item.loc}</span></p>
                <p>Date: <span className="italic">{item.date}</span></p>
                <p>Time: <span className="italic">{item.time}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Subsystem Breakdown */}
      <div className="w-full pb-24 px-6 lg:px-12 pt-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
          Subsystem Breakdown
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {subsystems.map((sub, index) => (
            <div
              key={index}
              className="
                group relative border border-gray-600 rounded-3xl p-8 lg:p-10 
                bg-black transition-all duration-300 ease-in-out
                hover:scale-[1.02] hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]
                cursor-default
              "
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                {sub.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {sub.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Join;