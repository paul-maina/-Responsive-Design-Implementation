import React from 'react';

function About() {
  const FindCoverage = () => {};

  return (
    <div className="About max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="About_container flex flex-col lg:flex-row justify-center items-center gap-6">
        
        <div className="About_content mt-5 text-center lg:text-left">
          <h5 className="About_title font-normal text-xs px-2 pb-3">How It Works</h5>
          <h1 className="font-extrabold text-green-700 text-3xl sm:text-3xl px-2 mb-2">
            Your Path to Smarter Coverage
          </h1>
          
          <p className="px-4 sm:px-6  text-teal-900">
            Telix simplifies insurance in 3 easy steps:
            <ul className="list-disc list-inside mx-6 text-left mt-2">
              <li>Get a Quote</li>
              <li>Customize Your Coverage</li>
              <li>Drive Confidently</li>
            </ul>
          </p>
          
                <button onClick={FindCoverage}className="mx-5 block bg-sky-500 rounded-full px-2 ring hover:bg-violet-200 cursor-pointer">
                    Insurance Package
                </button>
        </div>

        <div className="ImageSection w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
          <img
            src="https://i.ibb.co/0dxPZwX/insurance-coverage.png"
            alt="insurance-coverage"
            className="rounded-4xl mt-5 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
