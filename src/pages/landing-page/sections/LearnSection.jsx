import Stone from '../../../assets/images/stone-bg-2.png';

const Learndiv = () => {
  return (
    <div className="flex items-center justify-between py-24 md:py-64 relative ">
      <div>
        <h2 className="text-22 sm:text-3xl md:text-40 text-brand-dark font-bold">
          Want to learn more about stone?
        </h2>
        <p className="max-w-[36.5625rem] sm:text-lg md:text-2xl font-medium text-brand-gray-600 mt-5 ">
          Visit our curated collection of stone resources, Stone IQ, to learn
          more about stone types, characteristics, use-cases, and more. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="w-full sm:w-auto py-2.5 px-5 sm:px-16 sm:py-3.5 mt-6 md:mt-12 lg:text-22 text-brand-weird-100 font-bold rounded-xl bg-white border shadow-base transition duration-200">
          Go to Stone IQ
        </button>
      </div>
      <div>
        <img
          src={Stone}
          className="absolute left-20 top-0 lg:-right-40 lg:-top-16 -z-10"
          alt="Stone"
        />
      </div>
    </div>
  );
};

export default Learndiv;
