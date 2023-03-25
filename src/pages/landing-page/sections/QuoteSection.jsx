import Stone from '../../../assets/images/stone-bg-1.png';

const types = [
  { id: 1, label: 'Kitchen countertops' },
  { id: 2, label: 'Bathroom countertops' },
  { id: 3, label: 'Wall applications' },
  { id: 4, label: 'Outdoor BBQ' },
  { id: 5, label: 'Other' },
];

const Quotediv = () => {
  return (
    <div className="pt-28 lg:pt-44 relative">
      <img
        src={Stone}
        className="absolute left-1/2 min-h-[1800px] -bottom-[35.625rem] lg:-bottom-[680px] -translate-x-1/2 -z-10"
        alt="Stone"
      />
      <div className="bg-white border border-brand-gray-100 rounded-xl p-5 md:p-10 shadow-base">
        <h1 className="text-26 text-brand-weird-100 text-center sm:text-4xl lg:text-50 font-bold lg:leading-[3.5rem]">
          Get a Quote
        </h1>
        <p className="max-w-lg md:max-w-[44.375rem] mx-auto text-sm sm:text-base md:text-22 md:leading-7 text-center font-medium text-brand-gray-600 mt-2 md:mt-7">
          This is where the magic happens. Go ahead and submit a quote request,
          then watch as we send quotes over to you. Time to get excited about
          that new remodel! 🎉
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between text-center md:text-start mt-7 md:mt-[3.375rem]">
          <div>
            <h4 className="md:text-2xl font-semibold text-brand-gray-500">
              What type of project is this?
            </h4>
            <p className="text-xs md:text-lg font-medium text-brand-gray-200">
              Tip: Rates are usually cheaper with multiple projects
            </p>
          </div>
          <p className="text-15 md:text-2xl text-brand-gray-200">1/4</p>
        </div>
        <form className="grid lg:grid-cols-2 gap-x-4 gap-y-3.5 mt-6 md:mt-8">
          {types.map((type) => (
            <div
              key={type.id}
              className="flex items-center space-x-4 border border-brand-gray-100 rounded-xl md:rounded-15 md:text-26 font-medium text-brand-gray-300 p-1.5 md:p-3"
            >
              <div className="w-7 h-7 md:w-[2.25rem] md:h-[2.25rem] flex items-center p-[0.1875rem] md:p-[0.3125rem] shrink-0 border border-brand-gray-100 rounded-[0.625rem] md:rounded-xl">
                <input
                  className="hidden"
                  type="checkbox"
                  name="checkbox"
                  id={`check${type.id}`}
                />
                <label
                  className="cursor-pointer w-full h-full rounded-lg"
                  htmlFor={`check${type.id}`}
                ></label>
              </div>
              <p>{type.label}</p>
            </div>
          ))}
        </form>
        <button
          type="submit"
          className="w-full py-3 lg:py-4 bg-brand-weird-100 text-white text-lg md:text-28 rounded-xl md:rounded-15 mt-5 md:mt-16"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quotediv;
