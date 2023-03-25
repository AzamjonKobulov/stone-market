import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import LogoMobile from '../assets/images/logo-mobile.svg';
import Instagram from '../assets/images/instagram.svg';
import Facebook from '../assets/images/facebook.svg';
import Twitter from '../assets/images/twitter.svg';

const links = [
  {
    id: 1,
    links: [
      { id: 1, label: 'Home', path: '/' },
      { id: 2, label: 'StoneIQ', path: 'stoneiqpage' },
      { id: 3, label: 'For Fabricators', path: 'forfabricatorspage' },
      { id: 4, label: 'Get Quote', path: 'getquotepage' },
    ],
  },
  {
    id: 2,
    links: [
      { id: 1, label: 'Contact', path: 'contactpage' },
      { id: 2, label: 'Terms & Conditions', path: 'termsconditions' },
      { id: 3, label: 'Privacy Policy', path: 'privacypolicy' },
    ],
  },
];

const Footer = () => {
  return (
    <div className="border-t border-brand-gray-100 shadow-2xl bg-white">
      <div className="max-w-base mx-auto p-10 lg:pt-[6.625rem] px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <img src={Logo} className="hidden md:block" alt="Logo" />
              <img src={LogoMobile} className="md:hidden" alt="Logo" />
            </div>
            <div className="flex items-center  space-x-2.5 md:space-x-5 mt-8 lg:mt-12">
              <a href="/" className="w-6 h-6 md:w-auto md:h-auto">
                <img src={Instagram} alt="" />
              </a>
              <a href="/" className="w-6 h-6 md:w-auto md:h-auto">
                <img src={Facebook} alt="" />
              </a>
              <a href="/" className="w-6 h-6 md:w-auto md:h-auto">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <p className="block md:hidden text-[0.625rem] font-medium text-brand-gray-700 mt-8">
              Slate Ventures LLC © 2023
            </p>
          </div>
          <div className="flex flex-col md:flex-row text-end md:text-start text-[#595959] md:space-x-[3.75rem] font-semibold text-xs md:text-xl">
            {links.map((link) => (
              <div
                className="flex flex-col space-y-2.5 md:space-y-4"
                key={link.id}
              >
                {link.links.map((link) => (
                  <NavLink
                    to={link.path}
                    key={link.id}
                    activeclassname="active"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="hidden md:block text-center font-medium text-brand-gray-700 mt-20 pb-5">
          Slate Ventures LLC © 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
