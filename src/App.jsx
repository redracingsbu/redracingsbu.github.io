import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Existing pages
const Home = lazy(() => import('./pages/Home.jsx'));
const Join = lazy(() => import('./pages/Join.jsx'));
const Sponsors = lazy(() => import('./pages/Sponsors.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const CarMeet = lazy(() => import('./pages/CarMeet.jsx'));

const PageLoader = () => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Routes matching Header */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="/carmeet" element={<CarMeet />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
