import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

export default function VerifyOPT(){
  const [username, setUsername] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory(); // Use useHistory hook for navigation
  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    // Clear messages before making the request
    setMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/VerifyOTP/",
        { username, otp_code: otpCode },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setMessage(response.data.message);
        setTimeout(() => {
          history.push("/auth/login")
        }, 1000);
      } else {
        setErrorMessage("Unexpected response. Please try again.");
      }
    } catch (err) {
      console.error("API Error: ", err);
      if (err.response?.data?.error) {
        setErrorMessage(err.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full mt-16">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">Verify OTP</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Enter your OTP to proceed</small>
              </div>
              <form onSubmit={handleVerifyOTP}>
                {/* Username Input */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                {/* OTP Input */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="otp"
                  >
                    OTP Code
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter OTP"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    required
                  />
                </div>

                {/* Display Success/Error Message */}
                {message && (
                  <div className="text-green-500 text-center mb-3">
                    <small>{message}</small>
                  </div>
                )}
                {errorMessage && (
                  <div className="text-red-500 text-center mb-3">
                    <small>{errorMessage}</small>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    style={{ backgroundColor: "#0EA5E9" }}
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};