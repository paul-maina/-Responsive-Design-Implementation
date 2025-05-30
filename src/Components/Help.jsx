import { useState } from 'react';

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
    <div className="Help">
      <h5 className="Help_title">NEED HELP?</h5>
      <div className="Help_Container">
        <div className="Help_content">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about car insurance, coverage options, claims,
            and how Telix Insurance supports you on the road.
          </p>
        </div>

        <div className="Help_content1">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`quiz-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="quiz-question">
                {item.question}
                <span className="arrow">{openIndex === index ? '+' : '+'}</span>
              </div>
              {openIndex === index && <p className="quiz-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
