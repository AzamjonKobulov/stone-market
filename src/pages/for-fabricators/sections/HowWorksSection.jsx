import Img1 from '../../../assets/images/note.svg';
import Img2 from '../../../assets/images/message.svg';
import Img3 from '../../../assets/images/tick.svg';

const items = [
  {
    id: 1,
    img: Img1,
    alt_desc: 'icon',
    label: 'Download app & setup profile',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Img2,
    alt_desc: 'icon',
    label: 'Submit quotes',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Img3,
    alt_desc: 'icon',
    label: 'Schedule your job',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const HowWorksdiv = () => {
  return (
    <div className="pt-24 lg:pt-36">
      <h2 className="text-22 sm:text-3xl md:text-40 text-brand-dark font-bold">
        Here’s how it works
      </h2>
      <p className="max-w-[46.5625rem] sm:text-lg md:text-2xl font-medium text-brand-gray-600 mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-28 gap-12 lg:gap-20">
        {items.map((item) => (
          <div key={item.id}>
            <img
              className="w-[1.375rem] h-[1.5625rem] md:w-auto md:h-auto"
              src={item.img}
              alt={item.alt_desc}
            />
            <h4 className="text-lg md:text-26 mt-3.5 md:mt-6 font-bold text-brand-dark">
              {item.label}
            </h4>
            <p className="max-w-[18.75rem] sm:max-w-auto text-sm md:text-22 md:leading-7 font-medium text-brand-gray-600 mt-2 md:mt-4">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorksdiv;
