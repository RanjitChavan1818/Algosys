import React, { useState } from "react";
import axios from "axios";

const UploadStudentDetails = () => {
  const [formData, setFormData] = useState({
    roll_no: "",
    name: "",
    performance: "",
    mcqs: "",
    attendance: "",
    practical_no: "",
    batch: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/upload-details/", formData);
      setResponseMessage(response.data);
    } catch (error) {
      if (error.response) {
        setResponseMessage(error.response.data);
      } else {
        setResponseMessage({ success: false, error: "An error occurred." });
      }
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Upload Student Details</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            {[
              { label: "Roll Number", name: "roll_no", type: "text", placeholder: "Enter Roll Number" },
              { label: "Name", name: "name", type: "text", placeholder: "Enter Student Name" },
              { label: "Performance (out of 4)", name: "performance", type: "number", step: "0.01", placeholder: "Enter Performance" },
              { label: "MCqs (out of 4)", name: "performance", type: "number", step: "0.01", placeholder: "Enter Performance" },
              { label: "Attendence (out of 2)", name: "mcqs", type: "number", step: "0.01", placeholder: "Enter MCQs Score" },
              { label: "total (out of 10)", name: "attendance", type: "number", step: "0.01", placeholder: "Enter Attendance" },
              { label: "Practicals No.", name: "practical_no", type: "number", placeholder: "Enter Practical Number" },
              { label: "Batch", name: "batch", type: "text", placeholder: "Enter Batch" },
            ].map(({ label, name, type, step, placeholder }, index) => (
              <div key={index} className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor={name}>
                  {label}
                </label>
                <input
                  id={name}
                  type={type}
                  step={step}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  required
                />
              </div>
            ))}

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
              >
                Submit
              </button>
            </div>
          </form>

          {responseMessage && (
            <div
              className={`mt-4 p-4 rounded-lg text-center ${
                responseMessage.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {responseMessage.success ? (
                <>
                  {responseMessage.message}
                  <br />
                  {/* Total Score: {responseMessage.total_score} */}
                </>
              ) : (
                responseMessage.error
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadStudentDetails;