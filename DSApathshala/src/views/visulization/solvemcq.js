import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats";

const SolveQuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false); // Controls score display
  const [errorMessage, setErrorMessage] = useState(""); // For error display

  // Retrieve the JWT token from localStorage
  const token = localStorage.getItem("access_token");

  // Fetch quiz questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get_quiz/", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach JWT token here
          },
        });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        alert("Error fetching quiz questions. Please try again later.");
      }
    };
    fetchQuestions();
  }, [token]);

  // Handle option selection
  const handleOptionChange = (questionId, option) => {
    setResponses({ ...responses, [questionId]: option });
  };

  // Submit quiz
  const handleSubmit = async () => {
    let totalScore = 0;

    // Calculate score
    questions.forEach((q) => {
        if (responses[q.id] && responses[q.id] === q.correctOption) {
            totalScore++;
        }
        
    });

    // Prepare payload
    const payload = {
      userId: 1, // Replace with actual user ID if dynamic
      responses: Object.keys(responses).map((id) => ({
        questionId: parseInt(id),
        answer: responses[id],
      })),
      score: totalScore,
    };

    console.log("Payload being sent:", payload); // Debugging payload before sending

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/submit_quiz/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach JWT token here
            "Content-Type": "application/json",
          },
        }
      );

      // Update the score and display it
      setScore(totalScore);
      setShowScore(true);
      setErrorMessage(""); // Clear previous errors
      alert(response.data.message || "Quiz submitted successfully!"); // Backend message
    } catch (error) {
      // Handle errors and log response
      console.error("Error submitting quiz:", error);
      if (error.response) {
        console.error("Server Error Response:", error.response.data);
        setErrorMessage(
          error.response.data.error || "Failed to submit quiz. Try again."
        );
      } else {
        setErrorMessage("Network error or server not responding.");
      }
    }
  };

  return (
    <>
      <Sidebar />
      <HeaderStats />
      <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-white justify-center border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Solve Quiz</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {questions.map((q) => (
              <div key={q.id} className="mb-6 p-4 bg-white shadow rounded-lg">
                <div className="relative w-full mb-3">
                  <h2 className="text-blueGray-600 text-lg font-semibold mb-2">
                    {q.question}
                  </h2>
                </div>

                {Object.keys(q.options).map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center mb-2 text-blueGray-600 text-sm font-normal"
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      onChange={() => handleOptionChange(q.id, opt)}
                      className="mr-2"
                    />
                    {q.options[opt]}
                  </label>
                ))}
              </div>
            ))}

            <div className="text-center mt-6">
              <button
                type="button"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={handleSubmit}
              >
                Submit Quiz
              </button>
            </div>
          </form>

          {/* Display the score after submission */}
          {showScore && (
            <div className="text-center mt-4">
              <p className="text-lg font-bold text-blueGray-700">
                Your Score: {score}
              </p>
            </div>
          )}

          {/* Display error message if any */}
          {errorMessage && (
            <div className="text-center mt-4 text-red-500">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SolveQuizPage;
