import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    question: "Do you provide hosting services? Does that charge an extra amount?",
    answer:
      "Cube InfoTech is a website design firm in Toronto that also provides hosting services. Whether your target audience is in Canada, USA or in any other country, our servers are available for all location with good speed. We provide ongoing maintenance and technical support for cloud servers.",
  },
  {
    question: "I am planning to take my business online. Is website all that I want?",
    answer:
      "Cube InfoTech is a website design firm in Toronto that also provides hosting services. Whether your target audience is in Canada, USA or in any other country, our servers are available for all location with good speed. We provide ongoing maintenance and technical support for cloud servers.",
  },
  {
    question: "I’ve heard a lot about WordPress, is it good for my website?",
  },
  {
    question:
      "If you design a website for me, will it be responsive? What is a responsive website by the way?",
  },
  {
    question: "How much does it cost to have a website of my own?",
  },
  {
    question: "Do I need to pay extra if I want my website to be SEO friendly?",
  },
  {
    question: "I know basics of web designing. I’d like to know what tools you use.",
  },
  {
    question:
      "If I share my competitor’s website, can you make a website like that or if possible better than that?",
  },
  {
    question: "What if I am not satisfied by the website you have created for me?",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-10 sm:py-14"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-900"
      >
        Frequently Ask Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
              activeIndex === index ? "border-l-4 border-green-600" : "border-l-4 border-transparent"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-start space-x-4">
              <div className="pt-1">
                {activeIndex === index ? (
                  <Minus className="text-green-600" size={20} />
                ) : (
                  <Plus className="text-red-500" size={20} />
                )}
              </div>
              <div>
                <h3 className={`font-semibold text-sm sm:text-base ${
                  activeIndex === index ? "text-green-600" : "text-gray-800"
                }`}>{item.question}</h3>
                {activeIndex === index && item.answer && (
                  <p className="text-sm sm:text-[15px] text-gray-700 mt-2 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
