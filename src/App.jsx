import './App.css'
import MenuBar from './components/MenuBar.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Join from './pages/Join.jsx';
import Sponsors from './pages/Sponsors.jsx';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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
