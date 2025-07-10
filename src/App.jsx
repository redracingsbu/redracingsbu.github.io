import './App.css'
import MenuBar from './components/MenuBar.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Join from './pages/Join.jsx';
import Sponsors from './pages/Sponsors.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
      <div className="main">
        <Header onMenuToggle={handleMenuToggle} />
        <MenuBar menuOpen={menuOpen}/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/sponsors' element={<Sponsors/>} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>

        <footer>
            Formula SAE at Stony Brook University
        </footer>
      </div>
  )
}

export default App