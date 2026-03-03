import React from "react";
import { useState, useEffect } from "react";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
// import algorithm from "../../assets/img/selection.png"


export default function SelectionSort() {
    const [numbers, setNumbers] = useState([]);
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [minIndex, setMinIndex] = useState(0);
    const [speed, setSpeed] = useState(500);
    const [autoSorting, setAutoSorting] = useState(false);
    const [steps, setSteps] = useState([]);
  
    useEffect(() => {
      if (autoSorting && i < numbers.length - 1) {
        const timer = setTimeout(nextStep, speed);
        return () => clearTimeout(timer);
      }
    }, [i, j, autoSorting]);
  
    const renderArray = () => {
      return numbers.map((num, index) => (
        <div
          key={index}
          className={`w-16 h-16 flex items-center justify-center text-lg font-bold rounded-lg transition-transform duration-300 border-2 ${
            index === j || index === minIndex
              ? "bg-purple-500 transform scale-110"
              : index < i
              ? "bg-green-500"
              : "bg-purple-200"
          }`}
        >
          {num}
        </div>
      ));
    };
  
    const addNumbers = () => {
      const input = document.getElementById("numberInput");
      const values = input.value
        .split(",")
        .map((num) => parseInt(num.trim()))
        .filter((num) => !isNaN(num));
      if (values.length > 0) {
        setNumbers([...numbers, ...values]);
        input.value = "";
        resetSorting();
      }
    };
  
    const deleteNumber = () => {
      const updatedNumbers = [...numbers];
      updatedNumbers.pop();
      setNumbers(updatedNumbers);
      resetSorting();
    };
  
    const resetSorting = () => {
      setI(0);
      setJ(0);
      setMinIndex(0);
      setAutoSorting(false);
      setSteps([]);
      document.getElementById("message").textContent = "";
    };
  
    const resetArray = () => {
      setNumbers([]);
      resetSorting();
    };
  
    const nextStep = () => {
      if (i < numbers.length - 1) {
        let currentStep = `Comparing index ${j} (${numbers[j]}) with minIndex ${minIndex} (${numbers[minIndex]})`;
        if (j < numbers.length) {
          if (numbers[j] < numbers[minIndex]) {
            setMinIndex(j);
            currentStep += ` → New minIndex: ${j}`;
          }
          setSteps((prev) => [...prev, currentStep]);
          setJ(j + 1);
        } else {
          if (minIndex !== i) {
            const updatedNumbers = [...numbers];
            [updatedNumbers[i], updatedNumbers[minIndex]] = [
              updatedNumbers[minIndex],
              updatedNumbers[i],
            ];
            setNumbers(updatedNumbers);
          }
          setI(i + 1);
          setJ(i + 2);
          setMinIndex(i + 1);
        }
      } else {
        document.getElementById("message").textContent = "Sorting Complete!";
        setAutoSorting(false);
      }
    };
  
    const startAutoSort = () => {
      setAutoSorting(true);
    };
  
    const generateRandomArray = () => {
      const sizeInput = document.getElementById("sizeInput");
      const size = parseInt(sizeInput.value);
      if (isNaN(size) || size <= 0) {
        alert("Please enter a valid size!");
        return;
      }
      const randomNumbers = Array.from({ length: size }, () =>
        Math.floor(Math.random() * 100)
      );
      setNumbers(randomNumbers);
      resetSorting();
    };
  
    const algorithmSteps = [
      "for i = 0 to n-1:",
      "  minIndex = i",
      "  for j = i+1 to n:",
      "    if arr[j] < arr[minIndex]:",
      "      minIndex = j",
      "  Swap arr[i] and arr[minIndex]",
    ];    



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
                href="/admin/dashboard/stack">
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
                    <h2 className="text-white text-xl font-semibold">Selection Sort</h2>
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
            className="p-2 border rounded-md mr-3"
          />
          <button
            onClick={addNumbers}
            className="px-4 mr-3 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-700"
          >
            Add Numbers
          </button>
          <button
            onClick={startAutoSort}
            className="px-4 py-2 mr-3 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-700"
          >
            Auto Sort
          </button>
          <input
            type="number"
            id="sizeInput"
            placeholder="Enter Array Size"
            className="p-2 border rounded-md mr-3"
          />
          <button
            onClick={generateRandomArray}
            className="px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-700"
          >
            Generate Random Array
          </button>
          <div className="mt-4">
          <label htmlFor="speed" className="text-lg text-white font-medium">
            Speed: <span>{speed}ms</span>
          </label>
          <input
            type="range"
            id="speed"
            min="100"
            max="2000"
            value={speed}
            step="100"
            onChange={(e) => setSpeed(e.target.value)}
            className="w-32 ml-3"
          />
        </div>
          <div className="mt-5">
            <div className="flex justify-center flex-wrap gap-4mb-6 text-black">
              {renderArray()}
            </div>
            <div id="message" className="text-center text-black text-lg font-medium"></div>
          </div>



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
                        Status of Selection Sort
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

        </div>

        {/* Rest part of code */}
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <span className="text-3xl m-2 font-bold">
            Algorithm
          </span>
          {/* <img src={algorithm} alt="Algorithm Image" className="rounded-lg mt-2"/> */}
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}