import PageLayout from '../components/PageLayout.jsx';
import IvanYu from '../assets/team/IvanYu.webp';
import DanielZou from '../assets/team/DanielZou.webp';
import PrestonYeung from '../assets/team/PrestonYeung.webp';
import DeleLin from '../assets/team/DeleLin.webp';
import AnthonyAlters from '../assets/team/AnthonyAlters.webp';
import KaziAbthahi from '../assets/team/KaziAbthahi.webp';
import MathewRoshan from '../assets/team/MathewRoshan.webp';
import AntonYanaky from '../assets/team/AntonYanaky.webp';
import OwenChen from '../assets/team/OwenChen.webp';
import VamsiSri from '../assets/team/VamsiSri.webp';
import SyedTahsin from '../assets/team/SyedTahsin.webp';
import YukiLin from '../assets/team/YukiLin.webp';
import ManhaiLiu from '../assets/team/ManhaiLiu.webp';
import SMRaham from '../assets/team/SMRaham.webp';

const placeholderImage = SyedTahsin;

const TEAM_LEADS = [
  { name: "Ivan Yu", role: "President\nCo-Chassis Director", major: "Mechanical Engineering", image: IvanYu },
  { name: "Daniel Zou", role: "Vice President\nCo-Chassis Director", major: "Mechanical Engineering", image: DanielZou }
];

const LEADERSHIP = [
  { name: "Preston Yeung", role: "Secretary &\nAerodynamics Lead", major: "Mechanical Engineering", image: PrestonYeung },
  { name: "Vamsi Sri", role: "Treasurer", major: "Computer Engineering", image: VamsiSri },
  { name: "Anthony Alters", role: "Powertrain Director", major: "Mechanical Engineering", image: AnthonyAlters },
  { name: "Yuki Lin", role: "Chassis / VD Director", major: "Mechanical Engineering", image: YukiLin },
  { name: "Dele Lin", role: "Frame Lead", major: "Mechanical Engineering", image: DeleLin },
  { name: "Manhai Liu", role: "Suspension Lead", major: "Mechanical Engineering", image: ManhaiLiu },
  { name: "Lawrence Chan", role: "Corners Lead", major: "Mechanical Engineering", image: placeholderImage },
  { name: "Aaron Coyne", role: "Steering Lead", major: "Mechanical Engineering", image: placeholderImage },
  { name: "David De La Lera", role: "Ergonomics Lead", major: "Mechanical Engineering", image: placeholderImage },
  { name: "Justin Semet", role: "Composites Lead", major: "Mechanical Engineering", image: placeholderImage },
  { name: "Syed Tahsin", role: "Engine Lead", major: "Mechanical Engineering", image: SyedTahsin },
  { name: "Kazi Abthahi", role: "Drivetrain Lead", major: "Mechanical Engineering", image: KaziAbthahi },
  { name: "Mathew Roshan", role: "Fuel & Oil Lead", major: "Chemical Engineering", image: MathewRoshan },
  { name: "Anni Ni", role: "Cooling Lead", major: "Mechanical Engineering", image: placeholderImage },
  { name: "Owen Chen", role: "Electrical Lead", major: "Electrical Engineering", image: OwenChen },
  { name: "SM Rahman", role: "Business & Marketing Lead", major: "Information Systems +\nBusiness & Econ", image: SMRaham },
  { name: "Anton Yanaky", role: "Software Lead", major: "Computer Science", image: AntonYanaky },
  { name: "Erin Kim", role: "Graphic Designer", major: "Mechanical Engineering", image: placeholderImage },
];

const MemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center space-y-4 w-full sm:w-[350px] shrink-0 select-none">
    
    <div className="w-full aspect-square max-w-[350px] overflow-hidden relative">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover object-center pointer-events-none select-none"
        onContextMenu={(e) => e.preventDefault()}
        
        loading="lazy"
        decoding="async"
      />
      
      <div 
        className="absolute inset-0 z-10" 
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>

    <div className="space-y-2">
      <h3 className="text-3xl font-bold text-white tracking-wide">
        {member.name}
      </h3>
      <p className="text-lg text-gray-200 whitespace-pre-line leading-tight">
        {member.role}
      </p>
      {member.major && (
        <p className="text-red-500 italic tracking-wide whitespace-pre-line">
          {member.major}
        </p>
      )}
    </div>
  </div>
);

function Team() {
  return (
    <PageLayout wrapperClassName="rr-page">
      <div className="flex flex-col items-center w-full max-w-[1400px] mx-auto px-6 py-12 lg:py-24 space-y-24">
        <section className="w-full flex flex-col items-center space-y-16">
          <h1 className="rr-h1 text-center">Team Leads</h1>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-32 w-full max-w-5xl">
            {TEAM_LEADS.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="w-full">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-20 lg:gap-y-24 w-full">
            {LEADERSHIP.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default Team;
