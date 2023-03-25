import Logo from '../assets/images/logo.svg';
import LogoMobile from '../assets/images/logo-mobile.svg';
import { ReactComponent as Menu } from '../assets/images/menu.svg';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'StoneIQ', path: '/stoneiqpage' },
  { id: 3, label: 'For Fabricators', path: 'forfabricatorspage' },
  { id: 4, label: 'Contact', path: '/contactpage' },
];

const Navbar = ({ onOpen }) => {
  return (
    <nav className="text-brand-dark border-b border-brand-gray-100 border-opacity-50 shadow-base">
      <div className="max-w-base mx-auto flex items-center justify-between py-6 lg:py-16 px-6">
        <div>
          <img src={Logo} className="hidden md:block" alt="Logo" />
          <img src={LogoMobile} className="md:hidden" alt="Logo" />
        </div>
        <div className="flex items-center space-x-16">
          <div className="hidden lg:flex items-center space-x-8 text-xl font-semibold">
            {links.map((link) => (
              <NavLink activeclassname="active" to={link.path} key={link.id}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-5">
            <button className="py-2.5 px-5 lg:px-12 lg:py-3.5 lg:text-22 rounded-xl border-2 border-brand-weird-100 lg:rounded-15 bg-brand-weird-100 text-white shadow-base lg:hover:bg-opacity-90 transition duration-200 focus:bg-white focus:text-brand-dark">
              Get Qoute
            </button>
            <button onClick={() => onOpen(true)}>
              <Menu className="lg:hidden" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
