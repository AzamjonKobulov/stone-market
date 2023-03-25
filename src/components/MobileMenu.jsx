import { Link } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';

const links = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'StoneIQ', path: '/stoneiqpage' },
  { id: 3, label: 'For Fabricators', path: 'forfabricatorspage' },
  { id: 4, label: 'Contact', path: '/contactpage' },
];

const MobileMenu = ({ onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 bg-brand-dark">
      <div className="flex items-center justify-between p-6">
        <p className="text-[1.0625rem] text-white font-alata">
          Stone <br /> Market
        </p>
        <button onClick={() => onOpen(false)}>
          <FaRegWindowClose className="text-3xl text-white" />
        </button>
      </div>
      <ul className="text-xl text-center text-white space-y-5 mt-10">
        {links.map((link) => (
          <li key={link.id}>
            <Link onClick={() => onOpen(false)} to={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
        <button className="w-4/5 py-2.5 px-5 lg:px-12 lg:py-3.5 lg:text-22 rounded-xl border-2 border-brand-weird-100 lg:rounded-15 bg-brand-weird-100 text-white shadow-base lg:hover:bg-opacity-90 transition duration-200 focus:bg-white focus:text-brand-dark">
          Get Qoute
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
