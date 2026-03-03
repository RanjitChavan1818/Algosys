import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import CardStats from "components/Cards/CardStats.js";

export default function Stack() {
  const [stack, setStack] = useState([]);
  const [stackSize, setStackSize] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [steps, setSteps] = useState([]);
  const [currentLogic, setCurrentLogic] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const elementHeight = 50;

  const pseudoCode = {
    push: [
      "1. Check if the stack is full.",
      "2. If full, display 'Stack Overflow'.",
      "3. Else, add the element to the top of the stack.",
      "4. Increment the current index.",
    ],
    pop: [
      "1. Check if the stack is empty.",
      "2. If empty, display 'Stack Underflow'.",
      "3. Else, remove the top element from the stack.",
      "4. Decrement the current index.",
    ],
  };

  const showToast = (message, type = "success") => {
    if (type === "success") toast.success(message);
    if (type === "error") toast.error(message);
  };

  const handleSetStackSize = () => {
    const sizeInput = document.getElementById("stack-size").value;
    const size = parseInt(sizeInput, 10);

    if (isNaN(size) || size <= 0) {
      showToast("Please enter a valid stack size!", "error");
      return;
    }

    setStackSize(size);
    setStack(Array(size).fill("")); // Initialize stack with empty values
    setCurrentIndex(0);
    setSteps((prevSteps) => [...prevSteps, `Stack size set to ${size}.`]);
    showToast("Stack size set!");
  };

  const handlePush = async () => {
    const value = document.getElementById("element-value").value;

    if (!value) {
      showToast("Please enter a value to push!", "error");
      return;
    }

    if (currentIndex >= stackSize) {
      setCurrentLogic(pseudoCode.push[1]);
      showToast("Stack Overflow!", "error");
      return;
    }

    setIsAnimating(true); // Start animation

    // Add value to stack with animation
    const newStack = [...stack];
    newStack[currentIndex] = value;
    setStack(newStack);
    setCurrentIndex(currentIndex + 1);
    setSteps((prevSteps) => [...prevSteps, `Pushed ${value} to stack.`]);
    setCurrentLogic(pseudoCode.push[3]);
    showToast(`Element ${value} pushed!`);

    // Reset animation state after the animation delay
    setTimeout(() => setIsAnimating(false), 500);

    document.getElementById("element-value").value = ""; // Clear input field
  };

  const handlePop = async () => {
    if (currentIndex === 0) {
      setCurrentLogic(pseudoCode.pop[1]);
      showToast("Stack Underflow!", "error");
      return;
    }

    setIsAnimating(true); // Start animation

    const newStack = [...stack];
    const poppedValue = newStack[currentIndex - 1];
    newStack[currentIndex - 1] = ""; // Remove top element
    setStack(newStack);
    setCurrentIndex(currentIndex - 1);
    setSteps((prevSteps) => [...prevSteps, `Popped ${poppedValue} from stack.`]);
    setCurrentLogic(pseudoCode.pop[3]);
    showToast(`Element ${poppedValue} popped!`);

    // Reset animation state after the animation delay
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <a
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/theory">
                <CardStats
                  statTitle="Theory"
                  statDescripiron="Practical 4 -  Stack "
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/queue">
                <CardStats
                  statSubtitle="Next"
                  statTitle="Visualization"
                  statDescripiron="Stack Implementation"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="Code Editor"
                  statDescripiron="Practice by writing the code!"
                  statIconName="fas fa-laptop-code"
                  statIconColor="bg-pink-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="MCQ's"
                  statDescripiron="Solve the MCQ!!"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 md:px-10 mx-auto w-full -m-24" style={{position:"relative",
        zIndex: 10,
      }}>
        <div className="flex mt-8 space-x-8">
          {/* Algorithm Section First */}
          <div className="w-1/3 p-8 bg-white shadow-lg" id="algorithm">
            <h2 className="text-2xl font-bold mb-4">Algorithm</h2>
            <div className="h-[calc(100vh-100px)] overflow-y-auto border-2 border-gray-300 rounded-md p-4 bg-white shadow-md">
              <h3 className="text-lg font-semibold mb-4">Stack Algorithm in DSA:</h3>
              <p className="text-gray-700 mb-4">
                A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.
                It has two primary operations:
              </p>
              <h3 className="text-lg font-semibold">Push Operation:</h3>
              <ul className="list-disc ml-4 text-gray-700">
                {pseudoCode.push.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mt-4">Pop Operation:</h3>
              <ul className="list-disc ml-4 text-gray-700">
                {pseudoCode.pop.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack Animation Section */}
          <div className="flex flex-col items-center w-1/3 p-8 bg-white shadow-lg" id="stack-animation">
            <h1 className="text-2xl font-bold mb-4">Dynamic Stack Animation</h1>
            <label htmlFor="stack-size" className="mr-2 font-medium">
                Set Stack Size:
            </label>
            <div className="mb-4 flex items-center">

            <input
                type="number"
                id="stack-size"
                placeholder="Enter stack size"
                className="border rounded-md px-2 py-1 mr-2"
            />
            <button
                onClick={handleSetStackSize}
                className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Set
            </button>
            </div>


            <div
              id="stack-container"
              className="relative border-2 border-gray-800 rounded-md bg-gray-200"
              style={{ 
                height: `${stackSize * elementHeight}px`, 
                width: "120px" }}
            >
              {stack.map((value, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-12 flex items-center justify-center border border-gray-400 rounded-md transition-all duration-500 ${
                    value ? "bg-blue-500 text-black" : "bg-gray-300 text-green-500"
                  }`}
                  style={{
                    bottom: `${index * elementHeight}px`,
                    opacity: isAnimating ? 0.5 : 1,
                    transform: isAnimating ? "scale(0.9)" : "scale(1)",
                  }}
                >
                  {value}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <input
                type="number"
                id="element-value"
                placeholder="Enter a number"
                className="border rounded-md px-2 py-1"
              />
            <div className="mt-0 flex space-x-10 gap-4">
            <button
                onClick={handlePush}
                className="mt-4 bg-blue-500 inline-flex items-center justify-center rounded-3xl text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 "
                disabled={isAnimating}
            >
                Push
            </button>
            <button
                onClick={handlePop}
                className="mt-4 ml-8 bg-blue-500 inline-flex items-center justify-center rounded-3xl text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 "style={{marginLeft:"30px"}}
                disabled={isAnimating}
            >
                Pop
            </button>
            </div>
            </div>
          </div>

          {/* Steps Tracker */}
          <div className="w-1/3 p-8 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Steps:</h2>
            <div className="h-[calc(100vh-100px)] overflow-y-auto border-2 border-gray-300 rounded-md p-4 bg-white shadow-md">
              {steps.length > 0 ? (
                steps.map((step, index) => (
                  <div key={index} className="text-gray-700 mb-2">
                    {index + 1}. {step}
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No steps to display.</div>
              )}
            </div>
          </div>
        </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
    </>
  );
}