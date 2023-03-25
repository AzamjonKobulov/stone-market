import Img from '../../../assets/images/card-img.svg';

const data = [
  {
    id: 1,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 2,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 3,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 4,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 5,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 6,
    img: Img,
    label: 'The difference between quartz and porcelain',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

const Cardsdiv = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 md:gap-y-14 px-7 sm:px-0">
        {data.map((d) => (
          <div key={d.id} className="shadow-base rounded-15">
            <div className="h-36 md:h-60 rounded-t-15 overflow-hidden">
              <img src={d.img} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="py-6 px-5 md:py-10 md:px-9">
              <h3 className="font-semibold text-lg md:text-2xl lg:text-26 mb-3 md:mb-4 text-brand-dark">
                {d.label}
              </h3>
              <p className="font-medium text-sm leading-[1.625rem] md:text-lg lg:text-22 text-brand-gray-600">
                {d.text}
              </p>
            </div>
          </div>
        ))}
        <button className="w-full sm:w-auto py-2.5 px-5 sm:px-16 sm:py-3.5 mt-6 sm:hidden text-brand-weird-100 font-semibold rounded-xl bg-white border shadow-base transition duration-200">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cardsdiv;
