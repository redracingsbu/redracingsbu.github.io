import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Team() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Meet the Team
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Our team roster and leadership information is coming soon. 
          Stay tuned to see the faces behind SBU Red Racing.
        </p>
        <div className="w-24 h-1 bg-red-500 rounded-full"></div>
      </main>

      <Footer />
    </div>
  );
}

export default Team;