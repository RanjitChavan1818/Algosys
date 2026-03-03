import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
import CardMCQ from "components/Cards/CardMCQ.js";
import practical2 from "../../assets/img/practical2.png";


export default function BinarySearch() {
  const [steps, setSteps] = useState([]); // This state will hold the steps
  const [array, setArray] = useState([]);
  const [highlightedIndexes, setHighlightedIndexes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("");

  const animationSpeed = 1000; // Fixed slow speed (1000ms)

  // Function to start binary search
  const startBinarySearch = () => {
    const target = parseInt(searchValue);
    if (isNaN(target)) {
      setResult("Please enter a valid number to search.");
      return;
    }
  
    if (array.length === 0) {
      setResult("Array is empty. Generate the array first.");
      return;
    }
  
    // Sort the array first
    const sortedArray = [...array].sort((a, b) => a - b);
    setArray(sortedArray); // Update the array state with sorted array
  
    setSteps([]); // Clear previous steps
    let low = 0;
    let high = sortedArray.length - 1;
    let found = false;
  
    const stepsDuringSearch = [];
  
    const interval = setInterval(() => {
      if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        stepsDuringSearch.push(`Step: Check mid=${mid}, value=${sortedArray[mid]}`);
        setHighlightedIndexes([mid]);
  
        if (sortedArray[mid] === target) {
          found = true;
          setResult(`Target ${target} found at index ${mid}`);
          stepsDuringSearch.push(`Target ${target} found at index ${mid}`);
          clearInterval(interval);
        } else if (sortedArray[mid] > target) {
          high = mid - 1;
          stepsDuringSearch.push(`Target is less than ${sortedArray[mid]}, search left.`);
        } else {
          low = mid + 1;
          stepsDuringSearch.push(`Target is greater than ${sortedArray[mid]}, search right.`);
        }
  
        setSteps([...stepsDuringSearch]); // Update steps dynamically
      } else {
        if (!found) setResult(`Target ${target} not found.`);
        clearInterval(interval);
      }
    }, animationSpeed);
  };
  
  // Function to generate a random array
  const generateArray = () => {
    const size = parseInt(document.getElementById("arraySizeInput").value);
    if (isNaN(size) || size < 1) {
      setResult("Please enter a valid size.");
      return;
    }
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setSteps([]); // Clear previous steps
    setResult(""); // Clear previous result
    setHighlightedIndexes([]); // Clear highlights
  };

  // Function to clear the array and reset state
  const clearList = () => {
    setArray([]);
    setSteps([]);
    setResult("");
    setHighlightedIndexes([]);
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
                href="/admin/dashboard/bubbleSort">
                <CardStats
                  statSubtitle="Next"
                  statTitle="Visualization"
                  statDescripiron="Bubble Sort"
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
                href="#">
                <CardStats
                  statTitle="MCQ's"
                  statDescripiron="Solve the MCQ !!"
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
                    <h2 className="text-white text-xl font-semibold">Binary Search</h2>
                    <div className="my-4 flex items-center justify-start gap-4">
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">
                
                  {/* Visualization window */}
                    <input
                      type="number"
                      id="arraySizeInput"
                      placeholder="Array size"
                      min="1"
                      className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <button onClick={generateArray} className="px-6 ml-3 mr-3 py-2 bg-orange-500 text-black rounded-md">
                      Generate Array
                    </button>
                    <button onClick={clearList} className="px-6 py-2 bg-red-500 text-black rounded-md">
                      Clear List
                    </button>
                    <div className="flex mt-3">
                        <input
                          type="text"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          placeholder="Enter number to search"
                          className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                          onClick={startBinarySearch}
                          className="px-6 py-2 ml-3 bg-orange-500 text-black rounded-md"
                        >
                          Search
                        </button>
                    </div>
                    <div id="array-container" className="flex flex-wrap justify-center gap-4 mb-6">
                    {array.map((value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          id={`element-${index}`}
                          className={`w-16 h-16 mt-5 mr-3 flex items-center justify-center text-xl font-bold border-2 border-gray-600 rounded-md transition-all duration-300 ${
                            highlightedIndexes.includes(index) ? "bg-purple-500 text-white" : "bg-white"
                          }`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-white">{index}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xl font-semibold text-white">{result}</div>

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
                      Status of Binary Search
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">

                    {/* Performance Window */}
                    <ul className="text-lg">
                        {steps.map((step, index) => (
                        <li key={index} className="mb-2">
                            {step}
                        </li>
                        ))}
                    </ul>

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
          <img src={practical2} alt="Algorithm Image" className="rounded-lg mt-2"/>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>

        {/* MCQ Section */}
        <div className="flex flex-wrap mt-4 px-4">
          <div className="w-full px-4">
            <CardMCQ category="binary-search" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center",marginTop:"10px" }}>
          <Link to="/admin/dashboard/binary-theory">
              <button
                className="bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px',marginLeft:"20px" }}
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