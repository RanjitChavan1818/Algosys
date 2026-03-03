import React, { useState } from "react";
import axios from "axios";

const UploadMCQPage = () => {
  const [category, setCategory] = useState("linear-search");
  const [mcqs, setMcqs] = useState([{ question: "", options: { A: "", B: "", C: "", D: "" }, correct: "" }]);

  const handleInputChange = (index, field, value) => {
    const newMcqs = [...mcqs];
    if (field === "question") {
      newMcqs[index][field] = value;   
    } else if (field in newMcqs[index].options) {
      newMcqs[index].options[field] = value;
    } else {
      newMcqs[index][field] = value;
    }
    setMcqs(newMcqs);
  };

  const addNewMCQ = () => {
    setMcqs([...mcqs, { question: "", options: { A: "", B: "", C: "", D: "" }, correct: "" }]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/save_quiz/", { 
        questions: mcqs,
        category: category
      });
      alert(response.data.message);
      setMcqs([{ question: "", options: { A: "", B: "", C: "", D: "" }, correct: "" }]);
    } catch (error) {
      alert("Error uploading MCQs");
    }
  };

  return (
    <>
      <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-white justify-center border-0" style={{width:"100%"}}>
        <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Upload MCQs</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={addNewMCQ}
            >
              Add New MCQ
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {/* Category Selection */}
            <div className="relative w-full mb-6">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category"
              >
                Select Algorithm Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="linear-search">Linear Search</option>
                <option value="binary-search">Binary Search</option>
                <option value="bubble-sort">Bubble Sort</option>
              </select>
            </div>

            {mcqs.map((mcq, index) => (
              <div key={index} className="mb-6 p-4 bg-white">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={`question-${index}`}
                  >
                    Question
                  </label>
                  <input
                    id={`question-${index}`}
                    type="text"
                    placeholder="Enter Question"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={mcq.question}
                    onChange={(e) => handleInputChange(index, "question", e.target.value)}
                  />
                </div>

                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor={`option-${option}-${index}`}
                    >
                      Option {option}
                    </label>
                    <input
                      id={`option-${option}-${index}`}
                      type="text"
                      placeholder={`Enter Option ${option}`}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={mcq.options[option]}
                      onChange={(e) => handleInputChange(index, option, e.target.value)}
                    />
                  </div>
                ))}

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={`correct-${index}`}
                  >
                    Correct Option
                  </label>
                  <input
                    id={`correct-${index}`}
                    type="text"
                    placeholder="Enter Correct Option (A/B/C/D)"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={mcq.correct}
                    onChange={(e) => handleInputChange(index, "correct", e.target.value)}
                  />
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <button
                type="button"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadMCQPage