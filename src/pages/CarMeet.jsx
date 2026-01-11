import PageLayout from '../components/PageLayout.jsx';
import { Link } from 'react-router-dom';

function CarMeet() {
  return (
    <PageLayout
      wrapperClassName="rr-page"
      mainClassName="flex-1 flex flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
        SBU Car Meet
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-12">
        Details for our upcoming car meets and community events will be posted here.
        Check back later for dates and registration info!
      </p>
      
      <Link 
        to="/contact" 
        className="rr-btn-primary rr-btn-md"
      >
        Contact Us for Info
      </Link>
    </PageLayout>
  );
}

export default CarMeet;