import Discord from '../icons/Discord.jsx';
import Instagram from '../icons/Instagram.jsx';
import LinkedIn from '../icons/LinkedIn.jsx';
import './menubar.css';
import { Link } from 'react-router-dom';

function MenuBar({ menuOpen }) {
    return (
        <>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/join'>Join</Link>
                <Link to='/sponsors'>Sponsors</Link>
                <a href="https://www.fsaeonline.com/" target="_blank" rel="noopener noreferrer">Formula SAE</a>
                <a href="mailto:fsae.sbu@gmail.com">Contact Us</a>
                <div className="socialLinks">
                    <a href='' target="_blank" rel="noopener noreferrer"><LinkedIn className="externalLogos"/></a>
                    <a href='' target="_blank" rel="noopener noreferrer"><Instagram className="externalLogos"/></a>
                    <a href='' target="_blank" rel="noopener noreferrer"><Discord className="externalLogos"/></a>
                </div>
            </div>
        </>
    );
}

export default MenuBar;
