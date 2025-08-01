import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';
import logoIcon from '../assets/redracing.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const [sponsorDropdownOpen, setSponsorDropdownOpen] = useState(false);
  const location = useLocation();

  const dropdownWrapRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setSponsorDropdownOpen(false);
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

  useEffect(() => {
    function handleDocClick(e) {
      if (
        sponsorDropdownOpen &&
        dropdownWrapRef.current &&
        !dropdownWrapRef.current.contains(e.target)
      ) {
        setSponsorDropdownOpen(false);
      }
    }
    if (sponsorDropdownOpen) {
      window.addEventListener('mousedown', handleDocClick);
    }
    return () => window.removeEventListener('mousedown', handleDocClick);
  }, [sponsorDropdownOpen]);

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
    z-40
  `;

  const getLogoFilter = () => {
    if (logoClicked) {
      return 'invert(1) brightness(2)';
    }
    return 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)';
  };

  const sponsorDropdownDesktop = (
    <div
      className="relative z-50 flex flex-col items-center min-w-[120px]"
      ref={dropdownWrapRef}
      onMouseEnter={() => setSponsorDropdownOpen(true)}
      onMouseLeave={() => setSponsorDropdownOpen(false)}
      onFocus={() => setSponsorDropdownOpen(true)}
      onBlur={() => setSponsorDropdownOpen(false)}
      tabIndex={0}
    >
      <Link
        to="/sponsors"
        className={`
          ${linkClass}
          flex items-center justify-center gap-1 w-full relative z-40 text-lg min-w-30 ml-2
          ${sponsorDropdownOpen ? 'text-white' : 'text-red-500'}
        `}
        aria-haspopup="true"
        aria-expanded={sponsorDropdownOpen}
      >
        <span className="inline-flex items-center relative">
          Sponsors
          <svg
            className={`ml-1 transition-transform duration-400 mt-1 ${sponsorDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            strokeWidth={1}
            height="2em"
            width="2em"
          >
            <path d="M7 8l3 3 3-3" />
          </svg>
        </span>
      </Link>
      <div
        className={`absolute left-1/2 top-full min-w-[175px] bg-black rounded-lg shadow-[0_6px_32px_rgba(0,0,0,0.4)] z-50 flex flex-col p-0 pt-1 -translate-x-1/2 mt-1 ${sponsorDropdownOpen ? 'flex' : 'hidden'}`}
      >
        <Link
          to="/tiers"
          className={`${linkClass} text-base whitespace-nowrap w-full text-center flex items-center justify-center min-h-9 px-3`}
        >
          Sponsorship Tiers
        </Link>
      </div>
    </div>
  );

  const navLinksDesktop = (
    <>
      <Link to="/about" className={linkClass}>
        About
      </Link>
      <Link to="/join" className={linkClass}>
        Join
      </Link>
      {sponsorDropdownDesktop}
      <Link to="/fsae" className={linkClass}>
        Formula SAE
      </Link>
      <Link to="/contact" className={linkClass}>
        Contact Us
      </Link>
    </>
  );

  const navLinksMobile = (
    <>
      <Link to="/about" className={linkClass}>
        About
      </Link>
      <Link to="/join" className={linkClass}>
        Join
      </Link>
      <Link to="/sponsors" className={linkClass}>
        Sponsors
      </Link>
      <Link to="/tiers" className={linkClass}>
        Sponsorship Tiers
      </Link>
      <Link to="/fsae" className={linkClass}>
        Formula SAE
      </Link>
      <Link to="/contact" className={linkClass}>
        Contact Us
      </Link>
    </>
  );

  return (
    <>
      <header className="relative mt-8 lg:mt-6 z-[100]">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 lg:py-4">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex-shrink-0 text-4xl font-[custom-font-family] tracking-wide text-center relative group transition-transform duration-300 lg:hover:translate-x-0.5 lg:hover:-translate-y-0.5 z-40"
          >
            <img
              src={logoIcon}
              alt="Red Racing Logo"
              className="h-[18px] lg:h-8 transition-all duration-300 ease-in-out"
              style={{
                filter: getLogoFilter(),
                transition: 'filter 300ms ease-in-out',
              }}
              onMouseEnter={(e) => {
                if (!logoClicked) {
                  e.target.style.filter = 'invert(1) brightness(2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!logoClicked) {
                  e.target.style.filter =
                    'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)';
                }
              }}
            />
            <div className="absolute -top-2 left-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
            <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
          </Link>
          <nav className="hidden lg:flex flex-1 justify-end gap-14 items-center ml-10 z-40 relative">
            {navLinksDesktop}
          </nav>
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
                  filter:
                    'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(7538%) hue-rotate(4deg) brightness(89%) contrast(119%)',
                }}
              />
            </span>
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-[90] lg:hidden transform transition-transform duration-300 ease-in-out pt-[120px] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinksMobile}
      </div>
    </>
  );
}

export default Header;