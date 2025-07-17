import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import CarModel from './components/CarModel.jsx';

// Keep lazy loading for other pages
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Join = lazy(() => import('./pages/Join.jsx'));
const Sponsors = lazy(() => import('./pages/Sponsors.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));

const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center py-80">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
  </div>
);

function App() {
  return (
    <div className="main min-h-screen flex flex-col w-full bg-white text-gray-900 dark:bg-[#191919] dark:text-white">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/car" element={<CarModel />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <footer
        className="w-full text-center pb-2 font-normal text-gray-900 dark:text-white z-49 relative"
        style={{ fontFamily: '"Courier New", Courier, monospace'}}
      >
        Formula SAE at Stony Brook University
      </footer>
    </div>
  );
}

export default App;