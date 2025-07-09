import './App.css'
import carImage from './assets/car.jpg'; 
import Menu from './Menu.jsx'
import MenuBar from './MenuBar.jsx';
import Header from './Header.jsx';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="main">
        <Header onMenuToggle={handleMenuToggle} />

        <MenuBar menuOpen={menuOpen}/>

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
