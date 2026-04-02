import { memo } from 'react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../utils/socialLinks.js';
import { trackEvent } from '../utils/analytics.js';

const Footer = memo(function Footer() {
    return (
        <footer
            className="rr-footer w-full text-center font-normal text-white z-49 relative mt-auto"
        >

            <div className="flex justify-center space-x-6 mb-2">
                {SOCIAL_LINKS.map(({ href, icon, alt }) => (
                    <a
                        key={alt}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rr-social-link"
                        aria-label={alt}
                        onClick={() => trackEvent(`social-${alt.toLowerCase()}`, `Social Link: ${alt}`)}
                    >
                        <img
                            src={icon}
                            alt={alt}
                            className="w-4 h-4"
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                ))}
            </div>
            <div className="mb-2">
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email ${CONTACT_EMAIL}`} onClick={() => trackEvent('email-footer', 'Email Footer Link')}>
                    {CONTACT_EMAIL}
                </a>
            </div>
        </footer>
    );
});

export default Footer;