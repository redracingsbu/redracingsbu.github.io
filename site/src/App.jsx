import Logo from './Logo.jsx'
import Discord from './Discord.jsx'
import Instagram from './Instagram.jsx'
import LinkedIn from './LinkedIn.jsx'
import './App.css'
import carImage from './assets/car.jpg'; 
import Menu from './Menu.jsx'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="main">
      <header className="siteHeader">
        <Logo className="logo"/>
        <button
            className="menuToggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu/>
        </button>
      </header>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <a>Home</a>
        <a>About</a>
        <a>Join</a>
        <a>Sponsors</a>
        <a>Formula SAE</a>
        <a href="mailto:fsae.sbu@gmail.com">Contact Us</a>
        <div className="socialLinks">
          <a><LinkedIn className="externalLogos"/></a>
          <a><Instagram className="externalLogos"/></a>
          <a><Discord className="externalLogos"/></a>
        </div>
      </div>
      <div className="carContainer">
        <img src={carImage} className="carImg" alt="Outline of a formula one car"/>
      </div>
        <footer>
            Formula SAE at Stony Brook University
        </footer>
      </div>
    </>
  )
}

export default App
