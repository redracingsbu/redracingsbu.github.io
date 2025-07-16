import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../icons/Menu.jsx';
import Logo from '../icons/Logo.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const linkClass = `
    relative text-red-500 hover:text-white font-semibold text-lg
    transition-transform duration-300 hover:-translate-y-0.5
    after:content-[''] after:block after:absolute after:w-full after:h-0.5
    after:bg-white after:scale-x-0 hover:after:scale-x-100
    after:transition-transform after:duration-300 after:bottom-[-6px] after:left-0
  `;

  const navLinks = (
    <>
      <Link to="/about" className={linkClass}>About</Link>
      <Link to="/join" className={linkClass}>Join</Link>
      <Link to="/sponsors" className={linkClass}>Sponsors</Link>
      <a href="https://www.fsaeonline.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
        Formula SAE
      </a>
      <Link to="/contact" className={linkClass}>Contact Us</Link>
    </>
  );

  return (
    <>
      <header className="relative mt-4 lg:mt-6 overflow-x-hidden">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 lg:py-4">
          <Link to="/" className="flex-shrink-0 text-4xl font-[custom-font-family] tracking-wide text-center relative group transition-transform duration-300 lg:hover:translate-x-0.5 lg:hover:-translate-y-0.5">
            <Logo className="h-4.5 lg:h-8 text-red-500 lg:group-hover:text-white transition-colors duration-300" />
            {/* Top-left underline with padding */}
            <div className="absolute -top-2 left-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
            {/* Bottom-right underline with padding */}
            <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
          </Link>
          <button
            type="button"
            className="flex-1 flex justify-end lg:hidden z-50 relative"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-8 h-8 flex items-center justify-center group">
              <Menu className="h-8 text-red-500 lg:group-hover:text-white transition-colors duration-300" />
            </span>
          </button>
          <nav className="hidden lg:flex flex-1 justify-end gap-14 items-center ml-10">
            {navLinks}
          </nav>
        </div>
      </header>
      
      <div className={`fixed inset-0 bg-[#1a1a1a] flex flex-col items-center justify-center gap-8 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks}
      </div>
    </>
  );
}

export default Header;