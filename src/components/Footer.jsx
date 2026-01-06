import discordIcon from '../assets/discord.svg';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';

function Footer() {
    return(
        <footer
            className="w-full text-center font-normal text-white z-49 relative mt-auto"
            style={{ fontFamily: '"Courier New", Courier, monospace'}}
        >
            <div className="flex justify-center space-x-6 mb-2">
                <a 
                    href="https://www.linkedin.com/company/redracingsbufsae/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a 
                    href="https://www.instagram.com/sburedracing/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                    <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
                </a>
                <a 
                    href="https://discord.gg/K2RYYcz5jA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                    <img src={discordIcon} alt="Discord" className="w-4 h-4" />
                </a>
            </div>
            <div>fsae.sbu@gmail.com</div>
        </footer>
    )
}

export default Footer