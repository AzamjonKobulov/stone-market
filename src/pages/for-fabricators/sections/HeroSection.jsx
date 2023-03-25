// Hero div Images
import Kitchen from '../../../assets/images/hero-img.png';
import AppStore from '../../../assets/images/app-store.png';
import GooglePlay from '../../../assets/images/google-play.png';

const Herodiv = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-7 lg:gap-12 pt-7 sm:pt-14 lg:pt-36">
      <div>
        <h1 className="text-26 sm:text-4xl lg:text-50 font-bold lg:leading-[3.5rem]">
          <span className="text-brand-weird-200">Stone fabrication leads</span>{' '}
          <br />
          in seconds
        </h1>
        <p className="max-w-[34.6875rem] mt-5 md:mt-7 md:text-2xl font-medium text-brand-gray-600">
          We vet & partner with trusted fabricators across the country with the
          goal of simplifying your remodel. Find, manage, and transact with
          Stone Market.
        </p>
        <div className="flex items-center mt-6 sm:mt-10 lg:mt-14 gap-3.5">
          <a href="/">
            <img src={AppStore} alt="AppStore" />
          </a>
          <a href="/">
            <img src={GooglePlay} alt="GooglePlay" />
          </a>
        </div>
        <p className="text-xs md:text-lg font-semibold text-brand-gray-300 mt-0">
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
