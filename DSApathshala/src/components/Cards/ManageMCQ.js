import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageMCQ = () => {
  const [category, setCategory] = useState("linear-search");
  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    question: "",
    options: { A: "", B: "", C: "", D: "" },
    correct: "",
    category: ""
  });

  // Fetch MCQs by category
  const fetchMCQs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/get_quiz/", {
        params: { category: category }
      });
      console.log("Fetched MCQs:", response.data.questions);
      setMcqs(response.data.questions || []);
    } catch (error) {
      console.error("Error fetching MCQs:", error);
      alert("Error fetching MCQs: " + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMCQs();
  }, [category]);

  // Start editing
  const handleEdit = (mcq) => {
    setEditingId(mcq.id);
    setEditForm({
      question: mcq.question,
      options: mcq.options,
      correct: mcq.correctOption,
      category: mcq.category
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({
      question: "",
      options: { A: "", B: "", C: "", D: "" },
      correct: "",
      category: ""
    });
  };

  // Update MCQ
  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/update_quiz/${id}/`,
        {
          question: editForm.question,
          options: editForm.options,
          correct: editForm.correct,
          category: editForm.category
        }
      );
      alert(response.data.message);
      setEditingId(null);
      fetchMCQs();
    } catch (error) {
      console.error("Error updating MCQ:", error);
      alert("Error updating MCQ");
    }
  };

  // Delete MCQ
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this MCQ?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete_quiz/${id}/`
      );
      alert(response.data.message);
      fetchMCQs();
    } catch (error) {
      console.error("Error deleting MCQ:", error);
      alert("Error deleting MCQ");
    }
  };

  return (
    <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
        <div className="text-center flex justify-between items-center">
          <h6 className="text-blueGray-700 text-xl font-bold">Manage MCQs</h6>
          <button
            onClick={fetchMCQs}
            className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          >
            <i className="fas fa-sync mr-2"></i>
            Refresh
          </button>
        </div>
      </div>

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
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

        {loading ? (
          <div className="text-center py-4">
            <p className="text-blueGray-500">Loading MCQs...</p>
          </div>
        ) : mcqs.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-blueGray-500">No MCQs found for this category.</p>
            <p className="text-blueGray-400 text-sm mt-2">
              Click "Upload MCQs" tab to add new questions.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mb-4 text-blueGray-600">
              <p className="font-semibold">Total MCQs: {mcqs.length}</p>
            </div>
            {mcqs.map((mcq, index) => (
              <div
                key={mcq.id}
                className="border border-blueGray-200 rounded-lg p-6 bg-blueGray-50"
              >
                {editingId === mcq.id ? (
                  // Edit Mode
                  <div>
                    <div className="mb-4">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Question {index + 1}
                      </label>
                      <input
                        type="text"
                        value={editForm.question}
                        onChange={(e) =>
                          setEditForm({ ...editForm, question: e.target.value })
                        }
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      />
                    </div>

                    {["A", "B", "C", "D"].map((option) => (
                      <div key={option} className="mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Option {option}
                        </label>
                        <input
                          type="text"
                          value={editForm.options[option]}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              options: {
                                ...editForm.options,
                                [option]: e.target.value
                              }
                            })
                          }
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        />
                      </div>
                    ))}

                    <div className="mb-4">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Correct Option
                      </label>
                      <select
                        value={editForm.correct}
                        onChange={(e) =>
                          setEditForm({ ...editForm, correct: e.target.value })
                        }
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      >
                        <option value="">Select Correct Option</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleUpdate(mcq.id)}
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      >
                        <i className="fas fa-save mr-2"></i>
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      >
                        <i className="fas fa-times mr-2"></i>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-blueGray-700">
                        Question {index + 1} (ID: {mcq.id})
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(mcq)}
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-edit mr-1"></i>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(mcq.id)}
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-trash mr-1"></i>
                          Delete
                        </button>
                      </div>
                    </div>

                    <p className="text-base mb-4 text-blueGray-600 font-medium">{mcq.question || "No question text"}</p>

                    <div className="space-y-2">
                      {["A", "B", "C", "D"].map((option) => (
                        <div
                          key={option}
                          className={`p-3 rounded ${
                            mcq.correctOption === option
                              ? "bg-green-100 border-2 border-green-500"
                              : "bg-white border border-blueGray-200"
                          }`}
                        >
                          <span className="font-bold mr-2">{option}.</span>
                          {mcq.options?.[option] || "No option text"}
                          {mcq.correctOption === option && (
                            <span className="ml-2 text-green-600 font-bold">
                              ✓ Correct Answer
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex gap-4 text-sm text-blueGray-500">
                      <div>
                        <span className="font-semibold">Category:</span>{" "}
                        <span className="inline-block bg-lightBlue-100 text-lightBlue-800 px-2 py-1 rounded">
                          {mcq.category}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold">Correct Option:</span>{" "}
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded font-bold">
                          {mcq.correctOption || "Not set"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMCQ;
