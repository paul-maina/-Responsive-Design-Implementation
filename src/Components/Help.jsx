import { useState } from "react";

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What types of car insurance coverage are available?",
      answer:
        "Liability, collision, comprehensive, uninsured/underinsured motorist, and personal injury protection are the most common types.",
    },
    {
      question: "What coverage is required by law?",
      answer:
        "Requirements vary by state, but most require at least liability insurance for bodily injury and property damage.",
    },
    {
      question: "Can I lower my premium?",
      answer:
        "Yes. Safe driving, bundling policies, higher deductibles, and good credit can help reduce your premium.",
    },
    {
      question: "Can I switch my insurance provider anytime?",
      answer:
        "Yes, but make sure there’s no lapse in coverage and that you aren’t charged cancellation fees.",
    },
    {
      question: "What should I do after a car accident?",
      answer:
        "Ensure safety, call emergency services if needed, document the scene, exchange information, and file a claim with Telix.",
    },
  ];

  return (
    
    <div className="max-w-3xl m-auto p-6 md:p-12">
        
      <h5 className="font-normal text-xs mb-3 uppercase tracking-wide">
        NEED HELP?
      </h5>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="flex-1">
          <h1 className="text-3xl md:text-3xl font-extrabold text-green-700 mb-4 leading-tight">
            Frequently
            <br />
            Asked Questions
          </h1>
          <p className="text-sm md:text-base text-teal-900 max-w-md leading-relaxed mb-10">
            Find answers to common questions about car insurance, coverage options, claims,
            and how Telix Insurance supports you on the road.
          </p>

          
          <div>
            
            <img src="Needhelp.png" alt="Needhelp" className="w-auto h-60 rounded-4xl flex items-center justify-center"/>
          </div>
        </div>

       
        <div className="flex-1 space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer transition-all duration-300 ${
                openIndex === index ? "ring-2 ring-teal-300" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center text-teal-900 font-medium text-sm md:text-base">
                <span>{item.question}</span>
                <span
                  className={`text-xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </div>
   
  );
}

export default Help;
