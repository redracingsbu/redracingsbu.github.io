import { memo, useCallback, useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/header/redracing.svg';
import { trackEvent } from '../utils/analytics.js';

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

const LINK_BASE_CLASS = `
  relative font-semibold text-lg transition-all duration-300 whitespace-nowrap z-40
  active:scale-95 active:text-white
  after:content-[''] after:block after:absolute after:w-full after:h-0.5 after:bg-white
  after:transition-transform after:duration-300 after:bottom-[-6px] after:left-0
`;

const Header = memo(function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    if (menuOpen) window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    } else if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const handleNavClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback((e) => {
    if (location.pathname === '/') e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? LINK_BASE_CLASS + " text-white after:scale-x-100" 
      : LINK_BASE_CLASS + " text-red-500 hover:text-white lg:hover:-translate-y-0.5 after:scale-x-0 hover:after:scale-x-100";
  };

  const renderNavItem = (item, index, { isMobile }) => {
    const mobileProps = isMobile
      ? {
          tabIndex: menuOpen ? undefined : -1,
          ref: index === 0 ? firstMobileLinkRef : null,
        }
      : {};

    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className={getLinkClass(item.to)}
          onClick={() => {
            handleNavClick();
            trackEvent(`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`, `Nav: ${item.label}`);
          }}
          aria-current={location.pathname === item.to ? 'page' : undefined}
          {...mobileProps}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        className={getLinkClass(item.href)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          setMenuOpen(false);
          trackEvent(`ext-${item.label.toLowerCase().replace(/\s+/g, '-')}`, `External: ${item.label}`);
        }}
        {...mobileProps}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-[100] bg-black py-3 lg:py-1">
        <div className="flex items-center justify-between w-full px-6 lg:px-12 lg:py-4">
          
          {/* Logo Section */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="rr-header-logo flex-shrink-0 text-4xl tracking-wide relative group transition-transform duration-300 lg:hover:-translate-y-0.5 z-40"
          >
            <img
              src={logoIcon}
              alt="Red Racing Logo"
              decoding="async"
              className="rr-header-logo-img h-[18px] lg:h-6 transition-all duration-300 ease-in-out"
            />
            
            <div className="absolute -top-2 left-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
            <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-white lg:group-hover:w-1/4 transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-end gap-11 items-center ml-10 z-40 relative">
            {NAV_ITEMS.map((item, index) => renderNavItem(item, index, { isMobile: false }))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center z-[100] relative p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            ref={menuButtonRef}
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
      <nav
        id="mobile-menu"
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-[90] lg:hidden transition-transform duration-300 pt-24 ${menuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map((item, index) => renderNavItem(item, index, { isMobile: true }))}
      </nav>

    </>
  );
});

export default Header;