import './header.css';
import Menu from '../icons/Menu.jsx';
import Logo from '../icons/Logo.jsx'

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
