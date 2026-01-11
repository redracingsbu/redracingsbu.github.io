import ContactForm from '../components/ContactForm.jsx';
import PageLayout from '../components/PageLayout.jsx';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../utils/socialLinks.js';

function ContactUs() {
    const headerClassName = "rr-h1 mb-8";
    const paragraphClassName = "rr-body";
    const emailClassName = "text-2xl lg:text-5xl font-mono text-gray-200 mb-6";

    return (
        <PageLayout wrapperClassName="rr-page" mainClassName="flex-1 flex items-start rr-page-pad">
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
                                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                            </p>

                            <div className="flex justify-center lg:justify-start space-x-24 py-8">
                                {SOCIAL_LINKS.map(({ href, icon, alt }) => (
                                    <a
                                        key={alt}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rr-social-link"
                                        aria-label={alt}
                                    >
                                        <img
                                            src={icon}
                                            alt={alt}
                                            className="w-10 h-10"
                                            loading="lazy"
                                            decoding="async"
                                        />
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
        </PageLayout>
    );
}

export default ContactUs;