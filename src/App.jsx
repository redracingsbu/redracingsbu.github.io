import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Join = lazy(() => import('./pages/Join.jsx'));
const Sponsors = lazy(() => import('./pages/Sponsors.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));
const Competition = lazy(() => import('./pages/Competition.jsx'));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
  </div>
);

function App() {
  return (
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/fsae" element={<Competition />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
  );
}

export default App;