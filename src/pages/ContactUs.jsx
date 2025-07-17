import discordIcon from '../assets/discord.svg';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import ContactForm from '../components/ContactForm.jsx';

function ContactUs() {
    return (
        <div className="flex-1 bg-white dark:bg-[#191919] pt-8 lg:pt-32 px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                    <h1 className="text-5xl lg:text-6xl font-bold text-black-900 dark:text-white mb-12">
                        Contact Us
                    </h1>
                    
                    <div className="space-y-8 text-lg lg:text-xl text-black-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            Have any questions? Just want to reach out? Shoot our team an email!
                        </p>
                        
                        <p>
                            Alternatively, dm us on instagram or linkedin, or send a message in our discord server.
                        </p>
                        
                        <div className="pt-8">
                            <p className="text-2xl lg:text-3xl font-mono text-black-800 dark:text-gray-200 mb-8">
                                fsae.sbu@gmail.com
                            </p>
                            
                            <div className="flex space-x-12">
                                <a 
                                    href="https://www.linkedin.com/company/redracingsbufsae/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
                                >
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                                </a>
                                <a 
                                    href="" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
                                >
                                    <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a 
                                    href="https://discord.gg/K2RYYcz5jA" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
                                >
                                    <img src={discordIcon} alt="Discord" className="w-8 h-8" />
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
    );
}

export default ContactUs;
