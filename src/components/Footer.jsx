import discordIcon from '../assets/footer/discord.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import linkedinIcon from '../assets/footer/linkedin.svg';

function Footer() {
    const socialLinks = [
        {
            href: 'https://www.linkedin.com/company/redracingsbufsae/',
            icon: linkedinIcon,
            alt: 'LinkedIn',
        },
        {
            href: 'https://www.instagram.com/sburedracing/',
            icon: instagramIcon,
            alt: 'Instagram',
        },
        {
            href: 'https://discord.gg/K2RYYcz5jA',
            icon: discordIcon,
            alt: 'Discord',
        },
    ];

    const footerStyle = { fontFamily: '"Courier New", Courier, monospace' };

    return (
        <footer
            className="w-full text-center font-normal text-white z-49 relative mt-auto"
            style={footerStyle}
        >
            <div className="flex justify-center space-x-6 mb-2">
                {socialLinks.map(({ href, icon, alt }) => (
                    <a
                        key={alt}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rr-social-link"
                    >
                        <img src={icon} alt={alt} className="w-4 h-4" />
                    </a>
                ))}
            </div>
            <div className="mb-2">fsae.sbu@gmail.com</div>
        </footer>
    );
}

export default Footer;