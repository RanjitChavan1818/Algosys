import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
import CardMCQ from "components/Cards/CardMCQ.js";
import algorithm from "../../assets/img/practical1.jpeg"


export default function LinearSearch() {
    const [array, setArray] = useState([]); // Array to visualize
    const [arrayInput, setArrayInput] = useState(""); // Input for array
    const [searchInput, setSearchInput] = useState(""); // Input for search element
    const [result, setResult] = useState(""); // Search result message
    const [speed, setSpeed] = useState(1000); // Speed for animation
    const [pointerIndex, setPointerIndex] = useState(-1); // Pointer position
    const [isSearching, setIsSearching] = useState(false); // Animation control
    const [history, setHistory] = useState([]); // History of steps for the search
    const [currentStep, setCurrentStep] = useState(""); // Track current step for card update
  
    const visualizeArray = () => {
      if (!arrayInput) {
        alert("Please enter an array.");
        return;
      }
      const newArray = arrayInput.split(",").map(Number);
      setArray(newArray);
      setResult("");
      setPointerIndex(-1); // Reset pointer
      setHistory([]); // Clear history
      setCurrentStep(""); // Clear current step in the card
    };
  
    const clearArray = () => {
      setArray([]);
      setArrayInput("");
      setSearchInput("");
      setResult("");
      setPointerIndex(-1);
      setIsSearching(false);
      setHistory([]); // Clear history
      setCurrentStep(""); // Clear the card
    };
  
    const startSearch = () => {
      if (!searchInput) {
        alert("Please enter a number to search.");
        return;
      }
  
      let i = 0;
      setPointerIndex(-1);
      setResult("");
      setIsSearching(true);
      setHistory([]); // Clear history before starting the new search
      setCurrentStep("Starting search...");
  
      const searchStep = () => {
        setPointerIndex(i); // Move pointer to current index
        const stepMessage = `Checking index ${i}: ${array[i]}`
        setHistory((prevHistory) => [
          ...prevHistory,
          { step: stepMessage, index: i, value: array[i] },
        ]);
        setCurrentStep(stepMessage); // Update current step on the card
  
        setTimeout(() => {
          if (array[i] === parseInt(searchInput)) {
            setResult(`Element ${searchInput} found at index ${i}.`)
            setIsSearching(false);
            setPointerIndex(-1); // Hide pointer
            setHistory((prevHistory) => [
              ...prevHistory,
              { step: `Element ${searchInput} found at index ${i}.`, index: i, value: array[i] },
            ]);
          } else {
            if (i < array.length - 1) {
              i++;
              searchStep();
            } else {
              setResult(`Element ${searchInput} not found.`);
              setIsSearching(false);
              setPointerIndex(-1);
              setHistory((prevHistory) => [
                ...prevHistory,
                { step: `Element ${searchInput} not found., index: -1, value: null `},
              ]);
            }
          }
        }, speed);
      };
  
      searchStep();
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
                  statDescripiron="Practical 1 - Linear and Binary Search"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                  
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/binarySearch">
                <CardStats
                  statSubtitle="Next"
                  statTitle="Visualization"
                  statDescripiron="Binary Search"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/editor">
                <CardStats
                  statTitle="Code Editor"
                  statDescripiron="Practice by writing the code!"
                  statIconName="fas fa-laptop-code"
                  statIconColor="bg-pink-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/solvemcq">
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

      
      {/* Visualization part*/}
      <div className="p-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">

            {/* Visualization Buttons*/}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
              <div className="rounded-t px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                      Visualization
                    </h6>
                    <h2 className="text-white text-xl font-semibold">Linear Search</h2>
                    <div className="my-4 flex items-center justify-start gap-4">
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">
                
                  {/* Visualization window */}
                  <div className="mb-3">
                    <input
                        type="text"
                        placeholder="e.g., 10, 20, 30, 40"
                        className="border rounded px-4 py-2 mr-3"
                        value={arrayInput}
                        onChange={(e) => setArrayInput(e.target.value)}
                    />
                    <button
                        onClick={visualizeArray}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-3"
                    >
                        Visualize
                    </button>
                    <button
                        onClick={clearArray}
                        className="bg-blueGray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Clear
                    </button>
                  </div>
                  <div>
                    <input
                        type="number"
                        placeholder="Element to search"
                        className="border rounded px-4 py-2"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                    onClick={startSearch}
                    className={`text-white px-4 py-2 rounded ml-3 bg-blueGray-600 ${
                        array.length === 0 || isSearching
                        ? "cursor-not-allowed"
                        : "hover:bg-green-700"
                    }`}
                    disabled={array.length === 0 || isSearching}
                    >
                    Search
                    </button>
                  </div>
                  {/* Elements Animation */}
                  <div className="relative flex flex-row justify-center items-center gap-4 w-full md:w-2/3">
                    {array.map((value, index) => (
                      <div key={index} className="flex flex-col items-center relative">
                        {/* Array Element Box */}
                        <div className="mt-3 relative flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-lg font-bold rounded-lg border-2 border-blue-800 mr-3">
                            {value}
                        </div>
                        <span className="text-sm font-bold text-black">{index}</span>
                      
                        {/* Circle Below the Index */}
                        {pointerIndex === index && (
                        <div
                          className="absolute w-8 h-8 bg-red-600 border-2 border-red-600 rounded-full"
                          style={{
                            top: "80%", // Place the circle below the element box
                            left: "50%", // Center horizontally
                            transform: "translateX(-50%)", // Adjust horizontally
                            transitionDuration: `${speed}ms`,
                            }}
                            >
                          </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {result && <p className="text-xl mt-6 font-bold text-white">{result}</p>}
                    
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Steps Displaying */}
          <div className="w-full xl:w-4/12 px-4">
            <div className="relative flex flex-col break-words bg-white w-full  shadow-lg rounded  min-w-0 mb-6" style={{height:"95%"}}>
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                      Performance
                    </h6>
                    <h2 className="text-blueGray-700 text-xl font-semibold">
                      Status of Linear Search
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">

                    {/* Performance Window */}
                    <div className="text-lg text-blueGray-600 p-3">
                      {history.length > 0 ? (
                        <ul className="list-disc pl-5">
                          {history.map((step, index) => (
                            <li key={index}>
                              {step.step} {step.index !== -1 && ` | Value: ${step.value}`}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "No steps yet."
                      )}
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest part of code */}
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <span className="text-3xl m-2 font-bold">
            Algorithm
          </span>
          <img src={algorithm} alt="Algorithm Image" className="rounded-lg mt-2"/>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>

        {/* MCQ Section */}
        <div className="flex flex-wrap mt-4 px-4">
          <div className="w-full px-4">
            <CardMCQ category="linear-search" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center",marginTop:"10px" }}>
          <Link to="/admin/dashboard/Theory">
              <button
                className="bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px',marginLeft:"15px" }}
              >
                Back
              </button>
            </Link>
  
            <Link to="/editor">
              <button
                className="mr-4 bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px', marginLeft: '1020px' }}
              >
                Next
              </button>
            </Link>

         

          </div>
      </div>
    </>
  );
}