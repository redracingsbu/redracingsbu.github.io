import discordIcon from '../assets/discord.svg';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import ContactForm from '../components/ContactForm.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function ContactUs() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 flex items-start pt-8 lg:pt-32 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
                    <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                            Contact Us
                        </h1>
                        
                        <div className="space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
                            <p>
                                Have any questions? Just want to reach out? Shoot our team an email!
                            </p>
                            
                            <p>
                                Alternatively, dm us on instagram or linkedin, or send a message in our discord server.
                            </p>
                            
                            <div className="pt-6">
                                <p className="text-2xl lg:text-6xl font-mono text-gray-200 mb-6">
                                    fsae.sbu@gmail.com
                                </p>
                                
                                <div className="flex space-x-24 py-8">
                                    <a 
                                        href="https://www.linkedin.com/company/redracingsbufsae/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                                    >
                                        <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/sburedracing/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                                    >
                                        <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
                                    </a>
                                    <a 
                                        href="https://discord.gg/K2RYYcz5jA" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                                    >
                                        <img src={discordIcon} alt="Discord" className="w-10 h-10" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl lg:mx-0 lg:mr-12">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactUs;