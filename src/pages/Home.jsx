import carLandscape from '../assets/carlandscape.webp';
import carPortrait from '../assets/carportrait.webp';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <div 
      className="bg-black min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${carPortrait})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style jsx>{`
        @media (min-width: 768px) {
          div {
            background-image: url(${carLandscape}) !important;
          }
        }
      `}</style>
      
      <Header />
      <Footer />
    </div>
  );
}

export default Home;