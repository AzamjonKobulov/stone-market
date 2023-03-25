// Hero div Images
import Kitchen from '../../../assets/images/hero-img.png';

const Herodiv = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-7 lg:gap-12 pt-7 sm:pt-14 lg:pt-36">
      <div>
        <h1 className="text-26 sm:text-4xl lg:text-50 font-bold lg:leading-[3.5rem]">
          Get a quote for your <br />
          <span className="text-brand-weird-200">home remodel</span> in <br />
          seconds
        </h1>
        <p className="max-w-[34.6875rem] mt-5 md:mt-7 md:text-2xl font-medium text-brand-gray-600">
          We vet & partner with trusted fabricators across the country with the
          goal of simplifying your remodel. Find, manage, and transact with
          Stone Market.
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-10 lg:mt-20 gap-3.5">
          <button className="w-full sm:w-auto py-2.5 px-5 sm:px-16 sm:py-3.5 lg:text-22 rounded-xl border-2 border-brand-weird-100 lg:rounded-15 bg-brand-weird-100 text-white shadow-base lg:hover:bg-opacity-90 transition duration-200 focus:bg-white focus:text-brand-dark">
            Get Qoute
          </button>
          <button className="w-full sm:w-auto py-2.5 px-5 sm:px-16 sm:py-3.5 lg:text-22 font-bold rounded-xl border shadow-base lg:hover:bg-gray-100 transition duration-200">
            Learn More
          </button>
        </div>
        <p className="text-xs md:text-lg font-semibold text-brand-gray-300 mt-4 md:mt-7">
          Currently serving Phoenix, Arizona
        </p>
      </div>
      <div>
        <img className="w-full h-full" src={Kitchen} alt="Kitchen" />
      </div>
    </div>
  );
};

export default Herodiv;
