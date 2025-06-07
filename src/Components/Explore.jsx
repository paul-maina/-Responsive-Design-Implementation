function Explore() {
  const Explore = () => {
  };

  return (
    <div className="Explore max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h5 className="Explore_title m-auto font-normal text-xs text-center mb-3">
        EXPLORE & LEARN
      </h5>

      <div className="Explore_Container">
        <h1 className="font-extrabold text-green-700 text-3xl sm:text-4xl text-center">
          What you need to know
        </h1>
        <p className=" text-teal-900 text-center m-auto p-2 text-sm sm:text-base">
          Here are a few things that you need to know and understand when you are looking to buy an insurance policy.
          Always practice them as they will help to understand the product you are purchasing to ensure that you get 
          the best value for money and a product that fully caters for your insurance needs, making changes to your 
          needs, and how to report a claim.
        </p>
      </div>

      <div className="Explore_content mt-5 flex flex-col md:flex-row max-w-4xl mx-auto gap-5">
        <div className="Explore_content1 bg-gray-200 p-5 rounded-3xl flex-1">
          <h2 className="font-bold text-green-700 text-xl p-2">Insurance Guides</h2>
          <p className="py-2  text-teal-900">
            Car insurance involves understanding policies, deductibles, claims, and factors that affect your rates.
            Knowing the difference between comprehensive and collision coverage helps you choose the right protection.
          </p>
          <button onClick={Explore}
          className="relative mt-3 m-auto block bg-amber-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">
            Explore
          </button>
        </div>

        <div className="Explore_content2 bg-gray-200 p-5 rounded-3xl flex-1">
          <h2 className="font-bold  text-green-700 text-xl p-2">Videos & Visuals</h2>
          <p className="py-2  text-teal-900">
            Videos to simplify topics like claim processing and offer quick tips for saving on insurance premiums.
          </p>
          <button onClick={Explore}
          className="relative mt-3 m-auto block bg-pink-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">
            Explore
          </button>
        </div>

        <div className="Explore_content3 bg-gray-200 p-5 rounded-3xl flex-1">
          <h2 className="font-bold text-green-700 text-xl p-2">Tools & Calculators</h2>
          <p className="py-2  text-teal-900">
            Use helpful tools like a Car Insurance Quote Calculator,
            Coverage Checker, and Monthly Premium Estimator to find the right plan and cost for your needs.
          </p>
          <button onClick={Explore}
          className="relative mt-3 m-auto block bg-sky-400 rounded-full px-2 hover:bg-violet-200 cursor-pointer">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
