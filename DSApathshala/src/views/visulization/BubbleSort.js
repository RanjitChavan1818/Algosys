import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
import CardMCQ from "components/Cards/CardMCQ.js";
import Bubble from "assets/img/bubble_sort.jpeg"
// import algorithm from "../../assets/img/bubbleSort.png"


export default function BubbleSort() {
    const [numbers, setNumbers] = useState([]);
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [speed, setSpeed] = useState(500); // speed as a number
    const [isSorting, setIsSorting] = useState(false);
    const [currentStep, setCurrentStep] = useState(0); // Track the current step
    const [steps, setSteps] = useState([]); // Steps for visualization
  
    const renderArray = () => {
      return numbers.map((num, index) => (
        <div
          key={index}
          className="w-16 h-16 flex items-center justify-center m-2 border rounded-lg text-lg font-bold"
          style={{
            backgroundColor:
              index === j || index === j + 1
                ? "orange"
                : index >= numbers.length - i
                ? "lightblue"
                : "white",
          }}
        >
          {num}
        </div>
      ));
    };
  
    const createArray = (e) => {
      e.preventDefault();
      const input = document.getElementById("numberInput").value;
      const values = input
        .split(",")
        .map((num) => parseInt(num.trim()))
        .filter((num) => !isNaN(num));
      if (values.length > 0) {
        setNumbers(values);
        setSteps([]); // Reset steps when creating a new array
        setCurrentStep(0); // Reset current step when creating a new array
      }
    };
  
    const generateArray = () => {
      const randomArray = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100)
      );
      setNumbers(randomArray);
      setSteps([]); // Reset steps when generating a new array
      setCurrentStep(0); // Reset current step
    };
  
    const startSorting = async () => {
      setIsSorting(true); // Set sorting to true when starting
  
      let newNumbers = [...numbers];
      setSteps([]); // Reset steps before starting
  
      for (let outer = 0; outer < newNumbers.length - 1; outer++) {
        setCurrentStep(outer + 1); // Update current step number
  
        // Store steps for the current iteration
        let stepGroup = [];
  
        for (let inner = 0; inner < newNumbers.length - 1 - outer; inner++) {
          setI(outer);
          setJ(inner);
  
          stepGroup.push(`Comparing ${newNumbers[inner]} and ${newNumbers[inner + 1]}`);
          setSteps([...stepGroup]); // Display step dynamically for each comparison
  
          if (newNumbers[inner] > newNumbers[inner + 1]) {
            stepGroup.push(`Swapping ${newNumbers[inner]} and ${newNumbers[inner + 1]}`);
            [newNumbers[inner], newNumbers[inner + 1]] = [
              newNumbers[inner + 1],
              newNumbers[inner],
            ];
            setNumbers([...newNumbers]);
          }
  
          await new Promise((resolve) => setTimeout(resolve, speed)); // Wait for the defined speed between comparisons
        }
      }
  
      setIsSorting(false); // Sorting complete
    };
  
    const updateSpeed = (newSpeed) => {
      setSpeed(Number(newSpeed)); // Convert to number
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
                  statDescripiron="Practical 2 - Sorting Algorithms"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/selectionSort">
                <CardStats
                  statSubtitle="Next"
                  statTitle="Visualization"
                  statDescripiron="Selection Sort"
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
                    <h2 className="text-white text-xl font-semibold">Bubble Sort</h2>
                    <div className="my-4 flex items-center justify-start gap-4">
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                <div className="relative h-350-px">
                
                  {/* Visualization window */}
                  <input
          type="text"
          id="numberInput"
          placeholder="Enter numbers (comma-separated)"
          className="border rounded-lg px-4 py-2 mr-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={createArray}
          className=" text-white mr-3 px-4 py-2 rounded-lg hover:bg-purple-800"
          style={{backgroundColor:"orange"}}
        >
          Create Array
        </button>
        <button
          onClick={generateArray}
          className=" text-black mr-3 px-4 py-2 rounded-lg hover:bg-purple-800"
          style={{backgroundColor:"lightgreen"}}
        >
          Generate Array
        </button>
        <button
          onClick={startSorting}
          className={`${
            isSorting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-800"
          } text-black px-4 py-2  rounded-lg bg-blueGray-600`}
          disabled={isSorting}
        >
          Start
        </button>
        {/* Speed Meter */}
        <div className="mt-4 flex flex-col items-center">
        <label className="text-lg text-white">
          Speed: <span className="font-bold">{speed}ms</span>
        </label>
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => updateSpeed(e.target.value)}
          className="mt-2 w-64"
        />
      </div>
      {/* Array Visualization */}
      <div className="flex flex-wrap justify-center mt-8">{renderArray()}</div>



                 </div>
              </div>
            </div>
          </div>

          {/* Dynamic Steps Displaying */}
          <div className="w-full xl:w-4/12 px-4">
  <div
    className="relative flex flex-col break-words bg-white w-full shadow-lg rounded min-w-0 mb-6"
    style={{ height: "95%" }}
  >
    <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full max-w-full flex-grow flex-1">
          <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Performance
          </h6>
          <h2 className="text-blueGray-700 text-xl font-semibold">
            Status of Bubble Sort
          </h2>
        </div>
      </div>
    </div>
    <div className="p-4 flex-auto" style={{ overflowY: "auto", maxHeight: "calc(100% - 70px)" }}>
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

        {/* Rest part of code */}
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <span className="text-3xl m-2 font-bold">
            Algorithm
          </span>
          <img src={Bubble} alt="Algorithm Image" className="rounded-lg mt-2"/>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>

        {/* MCQ Section */}
        <div className="flex flex-wrap mt-4 px-4">
          <div className="w-full px-4">
            <CardMCQ category="bubble-sort" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center",marginTop:"10px" }}>
          <Link to="/admin/dashboard/bubbleSort-theory">
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
      </div>
    </>
  );
}