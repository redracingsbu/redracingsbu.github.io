import SolidWorksLogo from '../assets/sponsors/SolidWorksLogo.svg';
import AnsysLogo from '../assets/sponsors/AnsysLogo.svg';
import KenestoLogo from '../assets/sponsors/KenestoLogo.svg';
import RapidharnessLogo from '../assets/sponsors/RapidHarnessLogo.webp';
import AltiumLogo from '../assets/sponsors/AltiumLogo.svg';
import AceControlsLogo from '../assets/sponsors/AceLogo.svg';
import SiemensLogo from '../assets/sponsors/SiemensLogo.svg';
import KISSsoftLogo from '../assets/sponsors/KISSsoftLogo.svg';
import HumaneticsLogo from '../assets/sponsors/HumaneticsLogo.webp';
import SensataLogo from '../assets/sponsors/SensataLogo.webp';
import GeneHaasLogo from '../assets/sponsors/GeneHaasLogo.webp'
import HexagonLogo from '../assets/sponsors/HexagonLogo.svg';
import MilltronicsLogo from '../assets/sponsors/MilltronicsLogo.png';
import PageLayout from '../components/PageLayout.jsx';
import { Link } from 'react-router-dom';

const BUTTON_CLASS_NAME =
  'rr-btn-primary rr-btn-lg w-full whitespace-nowrap px-4 flex items-center justify-center';

const TIER_ROW_CLASS_NAME =
  'flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8 xl:space-x-16 px-6';

const sponsorCtas = [
  {
    key: 'brochure',
    type: 'external',
    href: 'https://drive.google.com/file/d/1CzhU9inERFuv8213MBwJBIHz5_ktmapx/view',
    label: 'Sponsor Brochure',
  },
  {
    key: 'become',
    type: 'internal',
    to: '/contact',
    label: 'Become a Sponsor',
  },
  {
    key: 'donate',
    type: 'external',
    href: 'https://www.gofundme.com/f/5nhhy-support-stony-brook-redracing-formula-sae',
    label: 'Donate to the Team',
  },
];

const sponsorTiers = [
  {
    key: 'platinum',
    title: 'Platinum',
    rows: [
      [
        {
          src: AnsysLogo,
          alt: 'Ansys Logo',
          className:
            'w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain',
        },
        {
          src: KenestoLogo,
          alt: 'Kenesto Logo',
          className:
            'w-4/5 lg:w-1/4 xl:w-2/5 max-w-xs xl:max-w-sm max-h-48 object-contain',
        },
        {
          src: SolidWorksLogo,
          alt: 'SolidWorks Logo',
          className: 'h-15 lg:h-16 xl:h-24',
        },
      ],
      [
        {
          src: SiemensLogo,
          alt: 'Siemens Logo',
          className: 'w-80 lg:w-90 xl:w-120',
        },
        {
          src: AltiumLogo,
          alt: 'Altium Logo',
          className: 'h-12 lg:h-14 xl:h-16 w-auto max-w-xs lg:max-w-sm',
        },
      ],
    ],
  },
  {
    key: 'gold',
    title: 'Gold',
    rows: [
      [
        {
          src: KISSsoftLogo,
          alt: 'KISSsoft Logo',
          className: 'h-16 lg:h-18 xl:h-24',
        },
      ],
    ],
  },
  {
    key: 'silver',
    title: 'Silver',
    rows: [
      [
        {
          src: HumaneticsLogo,
          alt: 'Humanetics Logo',
          className: 'h-12 lg:h-14 xl:h-16 w-auto max-w-xs lg:max-w-sm',
        },
        {
          src: GeneHaasLogo,
          alt: 'Gene Haas Foundation Logo',
          className: 'h-16 lg:h-24 xl:h-32',
        },
        {
          src: RapidharnessLogo,
          alt: 'RapidHarness Logo',
          className: 'h-12 lg:h-16 xl:h-20',
        },
      ],
      [
        {
          src: HexagonLogo,
          alt: 'Hexagon Logo',
          className: 'h-16 lg:h-20 xl:h-28 w-auto max-w-xs lg:max-w-sm',
        },
        {
          src: MilltronicsLogo,
          alt: 'Milltronics Logo',
          className: 'h-12 lg:h-14 xl:h-16 w-auto max-w-xs lg:max-w-sm',
        },
      ],
    ],
  },
  {
    key: 'bronze',
    title: 'Bronze',
    rows: [
      [
        {
          src: SensataLogo,
          alt: 'Sensata Logo',
          className: 'h-20 lg:h-30 xl:h-40 w-auto max-w-xs lg:max-w-sm',
        },
        {
          src: AceControlsLogo,
          alt: 'Ace Controls Logo',
          className: 'h-20 lg:h-24 xl:h-30 w-auto max-w-xs lg:max-w-sm',
        },
      ],
    ],
  },
];

const renderCta = ({ key, type, to, href, label }) =>
  type === 'internal' ? (
    <Link key={key} to={to} className={BUTTON_CLASS_NAME} data-goatcounter-click={`sponsor-cta-${key}`}>
      {label}
    </Link>
  ) : (
    <a
      key={key}
      href={href}
      className={BUTTON_CLASS_NAME}
      target="_blank"
      rel="noopener noreferrer"
      data-goatcounter-click={`sponsor-cta-${key}`}
    >
      {label}
    </a>
  );

const renderTier = ({ key, title, rows }) => (
  <section key={key} aria-labelledby={`tier-${key}`}>
    <div className="bg-zinc-700 w-screen text-center py-3 bg-gray text-white text-3xl lg:text-5xl font-bold">
      <h2 id={`tier-${key}`}>{title}</h2>
    </div>

    <div className="space-y-12 py-12">
      {rows.map((row, rowIndex) => (
        <div key={`${key}-row-${rowIndex}`} className={TIER_ROW_CLASS_NAME}>
          {row.map((logo) => (
            <img
              key={`${key}-${logo.alt}`}
              src={logo.src}
              alt={logo.alt}
              className={logo.className}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      ))}
    </div>
  </section>
);

function Sponsors() {
  return (
    <PageLayout
      wrapperClassName="rr-page"
      mainClassName="flex flex-1 flex-col"
      mainProps={{ id: 'main-content' }}
    >
      <div className="flex flex-1 items-start justify-center">
        <div className="rr-page-pad max-w-5xl p-6 rounded-lg space-y-8 w-full">
          <h1 className="rr-h1 mb-12 text-center">
            Thank you to our Partners!
          </h1>

          <div className="space-y-8 rr-body text-left">
            <p>
              Your partnership will directly contribute to the design, fabrication,
              and testing of Stony Brook University's first ever FSAE car – a
              milestone achievement for both our team and the institution.
            </p>
            <p>
              Every contribution plays a crucial role in bringing this dream to
              life and laying the foundation for our team’s long-term success.
            </p>
          </div>

          <nav
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 pt-12 w-full"
            aria-label="Sponsor actions"
          >
            {sponsorCtas.map(renderCta)}
          </nav>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mt-24 lg:mt-[10vh]">
        {sponsorTiers.map(renderTier)}
      </div>
    </PageLayout>
  );
}

export default Sponsors;
