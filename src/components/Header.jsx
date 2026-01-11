import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/header/redracing.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const DEFAULT_FILTER = 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)';
  const ACTIVE_FILTER = 'invert(1) brightness(2)';

  const NAV_ITEMS = [
    { to: '/', label: 'Home' },
    { to: '/team', label: 'Team' },
    { to: '/join', label: 'Join' },
    { to: '/carmeet', label: 'Car Meet' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/contact', label: 'Contact Us' },
    {
      href: 'https://www.gofundme.com/f/5nhhy-support-stony-brook-redracing-formula-sae',
      label: 'Donate',
    },
  ];

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    let classes = `
      relative font-semibold text-lg transition-all duration-300 whitespace-nowrap z-40
      active:scale-95 active:text-white
      after:content-[''] after:block after:absolute after:w-full after:h-0.5 after:bg-white
      after:transition-transform after:duration-300 after:bottom-[-6px] after:left-0
    `;
    return isActive 
      ? classes + " text-white after:scale-x-100" 
      : classes + " text-red-500 hover:text-white lg:hover:-translate-y-0.5 after:scale-x-0 hover:after:scale-x-100";
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-[100] bg-black py-3 lg:py-1">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 lg:py-4">
          
          {/* Logo Section */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex-shrink-0 text-4xl tracking-wide relative group transition-transform duration-300 lg:hover:-translate-y-0.5 z-40"
          >
            <img
              src={logoIcon}
              alt="Red Racing Logo"
              className="h-[18px] lg:h-6 transition-all duration-300 ease-in-out"
              style={{
                filter: DEFAULT_FILTER,
                transition: 'filter 300ms ease-in-out'
              }}
            />
            <style>{`
              .group:hover img {
                filter: ${ACTIVE_FILTER} !important;
              }
            `}</style>
            
            <div className="absolute -top-2 left-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
            <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-end gap-11 items-center ml-10 z-40 relative">
            {NAV_ITEMS.map((item) => 
              item.to ? (
                <Link key={item.label} to={item.to} className={getLinkClass(item.to)} onClick={handleNavClick}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} className={getLinkClass(item.href)} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{item.label}</a>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center z-[100] relative p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span className={`absolute w-full h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-2'}`} />
              <span className={`absolute w-full h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-[90] lg:hidden transition-transform duration-300 pt-24 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_ITEMS.map((item) => 
          item.to ? (
            <Link key={item.label} to={item.to} className={getLinkClass(item.to)} onClick={handleNavClick}>{item.label}</Link>
          ) : (
            <a key={item.label} href={item.href} className={getLinkClass(item.href)} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{item.label}</a>
          )
        )}
      </div>
    </>
  );
}

export default Header;