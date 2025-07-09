import './header.css';
import Menu from './Menu.jsx';
import Logo from './Logo.jsx'

function Header({ onMenuToggle }) {
  return (
    <header className="siteHeader">
      <Logo className="logo" />
      <button
        className="menuToggle"
        aria-label="Toggle menu"
        onClick={onMenuToggle}
      >
        <Menu />
      </button>
    </header>
  );
}

export default Header;
