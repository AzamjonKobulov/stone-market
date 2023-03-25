import Kitchen from '../../../assets/images/hero-img.png';

const Carediv = () => {
  return (
    <div className="py-12 md:py-28 border-t border-[#E7E7E7]">
      <div className="grid lg:grid-cols-2 gap-7 md:gap-24">
        <div>
          <img src={Kitchen} alt="hero banner" className="w-full h-full" />
        </div>

        <div className="lg:mt-36">
          <h2 className="text-22 sm:text-3xl md:text-40 text-brand-dark font-bold mb-4 md:mb-6">
            How to care for your new stone countertops
          </h2>
          <p className="text-base md:text-2xl text-brand-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-full sm:w-auto py-2.5 px-5 sm:px-16 sm:py-3.5 mt-6 md:mt-12 lg:text-22 text-brand-weird-100 font-semibold rounded-xl bg-white border shadow-base transition duration-200">
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carediv;
