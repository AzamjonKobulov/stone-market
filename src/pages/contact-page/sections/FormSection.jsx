const Formdiv = () => {
  return (
    <div className="pt-12 md:pt-[5.625rem]">
      <div className="text-center text-brand-dark">
        <h2 className="text-26 md:text-50 font-bold leading-[1.9375rem] md:leading-[3.5rem] text-brand-gray-900 mb-6 md:mb-10">
          <span className="text-brand-weird-100">Contact us</span> <br />
          with any questions
        </h2>
        <p className="max-w-md md:max-w-2xl leading-5 md:leading-8 mx-auto md:text-22 text-brand-gray-900 mb-6 md:mb-20">
          Everything here is curated & written by
          <span className="italic">industry experts,</span> so you can get the
          <span className="md:font-bold"> right information</span> and make the
          <span className="md:font-bold"> best decisions.</span>
        </p>

        <p className="mb-20 max-w-md mx-auto md:max-w-2xl md:hidden text-brand-gray-900">
          Can't find what you're looking for? Feel free to reach out and ask an
          expert for help.
        </p>
      </div>
      <form
        action="#"
        className="text-left grid lg:grid-cols-2 gap-y-6 lg:gap-y-8 gap-x-8 text-brand-gray-500 border border-brand-gray-100 rounded-xl shadow-base py-5 lg:py-12 px-7 lg:px-11"
      >
        <label htmlFor="#" id="name" className="block">
          <span className="lg:text-2xl">Your Name</span>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full h-[3.25rem] md:h-[3.75rem] px-4 py-4 lg:py-5 mt-4 lg:px-7 border text-lg lg:text-26 border-brand-gray-100 outline-none rounded-15 placeholder:text-brand-weird-200 placeholder:text-lg placeholder:lg:text-26"
          />
        </label>

        <label htmlFor="#" id="name">
          <span className="lg:text-2xl">Email Address</span>
          <br />
          <input
            type="email"
            id="name"
            placeholder="hello@gmail.com"
            className="w-full h-[3.25rem] md:h-[3.75rem] px-4 py-4 lg:py-5 mt-4 lg:px-7 border text-lg lg:text-26 border-brand-gray-100 outline-none rounded-15 placeholder:text-lg placeholder:lg:text-26"
          />
        </label>

        <label htmlFor="#" id="subject" className="lg:col-span-2">
          <span className="lg:text-2xl">Subject</span> <br />
          <input
            type="text"
            id="subject"
            className="w-full h-[3.25rem] md:h-[3.75rem] px-4 py-4 lg:py-5 mt-4 md:px-7 text-lg lg:text-26 border border-brand-gray-100 outline-none rounded-15 placeholder:text-lg placeholder:lg:text-26"
          />
        </label>
        <label htmlFor="#" id="massage" className="lg:col-span-2">
          <span className="lg:text-2xl">Your Massage</span> <br />
          <textarea
            name="massage"
            id="massage"
            placeholder="Enter message here"
            className="w-full h-52 lg:h-64 px-4 py-4 lg:py-5 mt-4 md:px-7 text-lg lg:text-26 border border-brand-gray-100 outline-none rounded-15 placeholder:text-lg placeholder:lg:text-26"
          ></textarea>
        </label>

        <button
          type="submit"
          className="lg:col-span-2 w-full h-12 lg:h-16 flex justify-center items-center text-lg lg:text-28 text-white bg-brand-weird-100 rounded-15"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formdiv;
