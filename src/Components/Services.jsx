function Services() {
  const LearnMore = () => {};

  return (
    <div className="Services mt-10 px-4 sm:px-6 lg:px-8">
      <h5 className="Services_title font-normal text-xs text-center mb-3">
        SERVICES
      </h5>

      <div className="Services_content1 text-center max-w-3xl mx-auto">
        <h1 className="font-extrabold text-green-700 text-3xl sm:text-3xl">
          Insurance Packages <br /> That Fit Your Life
        </h1>
        <p className=" text-teal-900 mt-2 text-sm sm:text-base px-2">
          Explore a variety of car insurance plans designed to match your
          <br className="hidden sm:inline" />
          driving habits and lifestyle.
        </p>
      </div>

      <div className="Services_container flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto mt-6">
        <div className="Services_content2 bg-blue-200 p-5 rounded-3xl flex-1">
          <h1 className="font-bold text-teal-900 text-lg sm:text-xl p-2">
            How Premiums Are Calculated
          </h1>
          <p className=" text-teal-900 p-2 text-sm sm:text-base">
            Your age, gender, location and driving history of the car together
            with its make/model among others determine the coverage charges.
          </p>
          <button
            onClick={LearnMore}
            className="mt-3 mx-auto block rounded-full px-2 ring hover:bg-violet-200 cursor-pointer transition"
          >
            Learn More
          </button>
        </div>

        <div className="Services_content3 bg-gray-200 p-5 rounded-3xl flex-1">
          <h1 className="font-bold text-teal-900 text-lg sm:text-xl p-2">
            Choosing the Right Coverage
          </h1>
          <p className=" text-teal-900 p-2 text-sm sm:text-base">
            Do I need full coverage or just liability? Can I afford a higher
            deductible for a lower premium and is the car new or valuable
            enough to justify comprehensive? Are some of the things to consider.
          </p>
          <button
            onClick={LearnMore}
            className="mt-3 mx-auto block rounded-full px-2 ring hover:bg-violet-200 cursor-pointer transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="Services_content4 bg-gray-200 max-w-4xl p-5 mx-auto mt-6 mb-8 rounded-3xl">
        <h1 className="font-bold text-teal-900 text-lg sm:text-xl p-2">
          Optional Coverage
        </h1>
        <ul className="list-decimal list-inside p-2 text-sm sm:text-base">
          <li>Roadside assistance</li>
          <li>Rental car reimbursement</li>
          <li>Gap insurance (if you owe more than the car is worth)</li>
          <li>Custom parts/equipment coverage</li>
        </ul>
        <button
          onClick={LearnMore}
          className="mt-3 mx-auto block bg-violet-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Services;
