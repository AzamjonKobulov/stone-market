import React from 'react';

const Helpdiv = () => {
  return (
    <div className="py-12 md:py-24 font-lato">
      <div className="text-center">
        <h2 className="text-26 md:text-50 font-bold leading-[1.9375rem] md:leading-[3.5rem] text-brand-gray-900 mb-6 md:mb-10">
          <span className="text-brand-weird-100">StoneIQ™</span>
          <br />
          <span className="italic">is here to help</span>
        </h2>
        <p className="max-w-md md:max-w-2xl leading-5 md:leading-8 mx-auto text-base md:text-22 text-brand-gray-900 mb-6">
          Everything here is curated & written by
          <span className="italic">industry experts,</span> so you can get the
          <span className="md:font-bold">right information</span> and make the
          <span className="md:font-bold">best decisions.</span>
        </p>

        <p className="max-w-md md:max-w-2xl leading-5 md:leading-8 mx-auto text-base md:text-22 text-brand-gray-900">
          Can't find what you're looking for? Feel free to reach out and ask an
          expert for help.
        </p>
      </div>
    </div>
  );
};

export default Helpdiv;
