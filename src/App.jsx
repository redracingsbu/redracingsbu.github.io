import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Join from './pages/Join.jsx';
import Sponsors from './pages/Sponsors.jsx';
import CarModel from './components/CarModel.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    <div className="main min-h-screen flex flex-col w-full bg-white text-gray-900 dark:bg-[#191919] dark:text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/car" element={<CarModel />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <footer
        className="w-full text-center pb-2 font-normal text-gray-900 dark:text-white"
        style={{ fontFamily: '"Courier New", Courier, monospace'}}
      >
        Formula SAE at Stony Brook University
      </footer>
    </div>
  );
}

export default App;