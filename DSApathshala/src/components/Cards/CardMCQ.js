import React, { useState, useEffect } from "react";
import axios from "axios";

const CardMCQ = ({ category }) => {
  const [mcqs, setMcqs] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMCQs();
  }, [category]);

  const fetchMCQs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/get_quiz/", {
        params: { category: category }
      });
      setMcqs(response.data.questions);
      setUserAnswers({});
      setSubmitted(false);
      setScore(0);
    } catch (error) {
      console.error("Error fetching MCQs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption
    });
  };

  const handleSubmit = async () => {
    // Calculate score
    let correctCount = 0;
    mcqs.forEach((mcq) => {
      if (userAnswers[mcq.id] === mcq.correctOption) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / mcqs.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);

    // Optionally submit to backend
    try {
      // This would be used for user submission tracking
      // await axios.post("http://127.0.0.1:8000/api/submit_quiz/", {
      //   responses: Object.entries(userAnswers).map(([questionId, answer]) => ({
      //     questionId,
      //     answer
      //   })),
      //   score: calculatedScore
      // }, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('access_token')}`
      //   }
      // });
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  if (loading) {
    return (
      <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
          <h6 className="text-blueGray-700 text-xl font-bold">MCQs</h6>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <p className="text-center text-blueGray-600">Loading MCQs...</p>
        </div>
      </div>
    );
  }

  if (!mcqs || mcqs.length === 0) {
    return (
      <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
          <h6 className="text-blueGray-700 text-xl font-bold">MCQs</h6>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <p className="text-center text-blueGray-600">No MCQs available for this topic yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
        <h6 className="text-blueGray-700 text-xl font-bold">Practice MCQs</h6>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded">
            <p className="text-green-700 font-bold text-lg">
              Score: {score}% ({Object.values(userAnswers).filter((answer, idx) => answer === mcqs[idx]?.correctOption).length}/{mcqs.length} correct)
            </p>
          </div>
        )}

        {mcqs.map((mcq, index) => (
          <div key={mcq.id} className="mb-8 p-4 bg-blueGray-50 rounded border border-blueGray-200">
            <h3 className="text-lg font-semibold mb-4">
              Question {index + 1}: {mcq.question}
            </h3>

            <div className="space-y-3">
              {["A", "B", "C", "D"].map((option) => {
                const isSelected = userAnswers[mcq.id] === option;
                const isCorrect = option === mcq.correctOption;
                const showCorrect = submitted && isCorrect;
                const showIncorrect = submitted && isSelected && !isCorrect;

                let optionClass = "border-blueGray-300";
                if (showCorrect) {
                  optionClass = "border-green-500 bg-green-100";
                } else if (showIncorrect) {
                  optionClass = "border-red-500 bg-red-100";
                } else if (isSelected) {
                  optionClass = "border-lightBlue-500 bg-lightBlue-50";
                }

                return (
                  <label
                    key={option}
                    className={`flex items-center p-3 border-2 rounded cursor-pointer transition ${optionClass} ${
                      submitted ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${mcq.id}`}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(mcq.id, option)}
                      disabled={submitted}
                      className="mr-3"
                    />
                    <span className="font-medium">
                      {option}. {mcq.options[option]}
                    </span>
                    {showCorrect && <span className="ml-auto text-green-600 font-bold">✓</span>}
                    {showIncorrect && <span className="ml-auto text-red-600 font-bold">✗</span>}
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex gap-4 justify-center mt-8">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-lightBlue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="bg-lightBlue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMCQ;
