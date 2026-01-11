import discordIcon from '../assets/footer/discord.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import linkedinIcon from '../assets/footer/linkedin.svg';
import ContactForm from '../components/ContactForm.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function ContactUs() {
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

    const headerClassName = "rr-h1 mb-8";
    const paragraphClassName = "rr-body";
    const emailClassName = "text-2xl lg:text-5xl font-mono text-gray-200 mb-6";

    return (
        <div className="rr-page">
            <Header />

            <div className="flex-1 flex items-start rr-page-pad">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
                    <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-12">
                        <h1 className={headerClassName}>
                            Contact Us
                        </h1>

                        <div className="space-y-6 text-center lg:text-left">
                            <p className={paragraphClassName}>
                                Have any questions? Just want to reach out? Shoot our team an email!
                            </p>

                            <p className={paragraphClassName}>
                                Alternatively, dm us on instagram or linkedin, or send a message in our discord server.
                            </p>

                            <div className="pt-6">
                                <p className={emailClassName}>
                                    <a href="mailto:fsae.sbu@gmail.com">fsae.sbu@gmail.com</a>
                                </p>

                                {/* CHANGED: Added justify-center for mobile, lg:justify-start for desktop */}
                                <div className="flex justify-center lg:justify-start space-x-24 py-8">
                                    {socialLinks.map(({ href, icon, alt }) => (
                                        <a
                                            key={alt}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rr-social-link"
                                        >
                                            <img src={icon} alt={alt} className="w-10 h-10" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="max-w-3xl lg:mx-0 lg:mr-12">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactUs;