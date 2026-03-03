import React from "react";

// components

export default function CardSocialTraffic() {
  const questions = [
    {
      question: "Find the sum of all numbers in a list.",
    },
    {
      question: "Create a list of squares for numbers from 1 to 5.",
    },
    {
      question: "Find the largest number in a list.",
    },
    {
      question: "Use a single-line if-else to check a condition.",
    },
  ];

  return (
    <>
      <div className="w-full lg:w-6/12 px-6"
      style={{width:"100%"}}>
        <h3 className="text-3xl font-bold text-blueGray-600 mb-6 text-center">FAQs</h3>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h4 className="text-2xl font-semibold text-blueGray-600 mb-6">
            Practice Questions
          </h4>
          <ul className="list-disc list-inside">
            {questions.map((item, index) => (
              <li key={index} className="text-blueGray-700 mb-2">
                {item.question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
