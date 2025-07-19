import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';
import logoIcon from '../assets/redracing.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => {
      setLogoClicked(false);
    }, 200);
  };

  const linkClass = `
    relative text-red-500 hover:text-white font-semibold text-lg
    transition-transform duration-300 hover:-translate-y-0.5
    after:content-[''] after:block after:absolute after:w-full after:h-0.5
    after:bg-white after:scale-x-0 hover:after:scale-x-100
    after:transition-transform after:duration-300 after:bottom-[-6px] after:left-0
    z-40 relative
  `;

  const navLinks = (
    <>
      <Link to="/about" className={linkClass}>About</Link>
      <Link to="/join" className={linkClass}>Join</Link>
      <Link to="/sponsors" className={linkClass}>Sponsors</Link>
      <Link to="/fsae" className={linkClass}>Formula SAE</Link>
      <Link to="/contact" className={linkClass}>Contact Us</Link>
    </>
  );

  // Logo filter logic
  const getLogoFilter = () => {
    if (logoClicked) {
      return 'invert(1) brightness(2)';
    }
    return 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)';
  };

  return (
    <>
      <header className="relative mt-8 lg:mt-6 overflow-x-hidden z-[100]">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 lg:py-4">
          <Link 
            to="/" 
            className="flex-shrink-0 text-4xl font-[custom-font-family] tracking-wide text-center relative group transition-transform duration-300 lg:hover:translate-x-0.5 lg:hover:-translate-y-0.5 z-40"
            onClick={handleLogoClick}
          >
            <img 
              src={logoIcon} 
              alt="Red Racing Logo" 
              className="h-4.5 lg:h-8 transition-all duration-300 ease-in-out"
              style={{
                filter: getLogoFilter(),
                transition: 'filter 300ms ease-in-out'
              }}
              onMouseEnter={(e) => {
                if (!logoClicked) {
                  e.target.style.filter = 'invert(1) brightness(2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!logoClicked) {
                  e.target.style.filter = 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)';
                }
              }}
            />
            <div className="absolute -top-2 left-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
            <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
          </Link>
          
          <nav className="hidden lg:flex flex-1 justify-end gap-14 items-center ml-10 z-40 relative">
            {navLinks}
          </nav>

          {/* Mobile menu button - stays visible */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center z-[100] relative"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-8 h-8 flex items-center justify-center group">
              <img 
                src={menuIcon} 
                alt="Menu" 
                className="h-8 text-red-500 transition-colors duration-300" 
                style={{
                  filter: 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)'
                }}
              />
            </span>
          </button>
        </div>
      </header>
      
      {/* Mobile menu overlay - positioned to not cover the button area */}
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-[90] lg:hidden transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ paddingTop: '120px' }}>
        {navLinks}
      </div>
    </>
  );
}

export default Header;