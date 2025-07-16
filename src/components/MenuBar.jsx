// import './menubar.css';
import { Link } from 'react-router-dom';

function MenuBar({ menuOpen }) {
    return (
        <>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <Link to='/about'>About</Link>
                <Link to='/join'>Join</Link>
                <Link to='/sponsors'>Sponsors</Link>
                <a href="https://www.fsaeonline.com/" target="_blank" rel="noopener noreferrer">Formula SAE</a>
                <a href="mailto:fsae.sbu@gmail.com">Contact Us</a>
            </div>
        </>
    );
}

export default MenuBar;
