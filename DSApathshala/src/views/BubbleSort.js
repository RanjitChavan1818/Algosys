import React, { useState } from "react";
import {Link} from "react-router-dom";

const BubbleSort = () => {
  const [numbers, setNumbers] = useState([]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [speed, setSpeed] = useState(500);
  const [isSorting, setIsSorting] = useState(false);
  const [message, setMessage] = useState("");

  const renderArray = () => {
    return numbers.map((num, index) => (
      <div
      key={index}
      className={`w-16 h-16 flex items-center justify-center m-2 border rounded-lg text-lg font-bold`}
      style={{
        backgroundColor: index === j || index === j + 1 
          ? "orange" 
          : index >= numbers.length - i 
            ? "lightblue" 
            : "white"
      }}
    >
        {num}
      </div>
    ))
  }

  const addNumbers = (e) => {
    e.preventDefault();
    const input = document.getElementById("numberInput").value;
    const values = input
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));
    if (values.length > 0) {
      setNumbers((prev) => [...prev, ...values]);
      setMessage("");
      document.getElementById("numberInput").value = "";
    }
  };

  const deleteNumber = () => {
    setNumbers((prev) => prev.slice(0, -1));
  };

  const resetArray = () => {
    setNumbers([]);
    setI(0);
    setJ(0);
    setIsSorting(false);
    setMessage("");
  };

  const autoSort = async () => {
    setIsSorting(true);
    let newNumbers = [...numbers]; // Clone the array to avoid mutating the state directly

    for (let outer = 0; outer < newNumbers.length - 1; outer++) {
      for (let inner = 0; inner < newNumbers.length - 1 - outer; inner++) {
        setI(outer);
        setJ(inner);

        // Compare and swap if necessary
        if (newNumbers[inner] > newNumbers[inner + 1]) {
          [newNumbers[inner], newNumbers[inner + 1]] = [
            newNumbers[inner + 1],
            newNumbers[inner],
          ];
          setNumbers([...newNumbers]); // Update state to re-render
          await new Promise((resolve) => setTimeout(resolve, speed)); // Pause for animation
        }
      }
    }

    setIsSorting(false);
    setMessage("Sorting Complete!");
  };

  const updateSpeed = (value) => {
    setSpeed(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="w-full bg-purple-700 text-black sticky top-0 shadow-md">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">DSAPathshala</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type Something"
              className="rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-6 text-purple-700">
        Bubble Sort Visualizer
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <input
          type="text"
          id="numberInput"
          placeholder="Enter numbers (comma-separated)"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={addNumbers}
          className="bg-purple-600 text-black px-4 py-2 rounded-lg hover:bg-purple-800"
        >
          Add Numbers
        </button>
        <button
          onClick={deleteNumber}
          className="bg-purple-600 text-black px-4 py-2 rounded-lg hover:bg-purple-800"
        >
          Delete Last
        </button>
        <button
          onClick={resetArray}
          className="bg-purple-600 text-black px-4 py-2 rounded-lg hover:bg-purple-800"
        >
          Reset
        </button>
        <button
          onClick={autoSort}
          className={`${
            isSorting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-800"
          } text-black px-4 py-2 rounded-lg`}
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Auto Sort"}
        </button>
      </div>

      {/* Speed Control */}
    <div className="mt-4 flex flex-col items-center">
        <label className="text-lg">
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

      {/* Message */}
      {message && (
        <div className="mt-4 text-green-500 text-lg font-bold">{message}</div>
      )}
      
    </div>
    
  );
};

export default BubbleSort;
