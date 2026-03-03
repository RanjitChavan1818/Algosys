import React from "react";
import { useState } from "react";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
// import algorithm from "../../assets/img/queue.png"


export default function Queue() {
    const [queue, setQueue] = useState([]);
    const [newElement, setNewElement] = useState('');
    const [steps, setSteps] = useState([]);
    const [queueSize, setQueueSize] = useState(5); // Set an initial size for the queue
  
    const enqueue = () => {
      if (newElement && queue.length < queueSize) {
        setQueue((prevQueue) => [...prevQueue, newElement]);
        setSteps((prevSteps) => [
          ...prevSteps,
          `Enqueued element '${newElement}' into the queue.`,
        ]);
        setNewElement('');
      } else if (queue.length >= queueSize) {
        setSteps((prevSteps) => [...prevSteps, 'Queue is full. Cannot enqueue.']);
      }
    };
  
    const dequeue = () => {
      if (queue.length > 0) {
        const removedElement = queue[0];
        setQueue((prevQueue) => prevQueue.slice(1));
        setSteps((prevSteps) => [
          ...prevSteps,
          `Dequeued element '${removedElement}' from the queue.`,
        ]);
      } else {
        setSteps((prevSteps) => [...prevSteps, 'Queue is empty. Cannot dequeue.']);
      }
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
                  statDescripiron="Practical 3 - ADT using Stack & Queue"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/binarySearchTree">
                <CardStats
                  statSubtitle="Next"
                  statTitle="Visualization"
                  statDescripiron="Binary Search Tree & It's Traversal"
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
                    <h2 className="text-white text-xl font-semibold">Queue Implementation</h2>
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
                value={queueSize}
                onChange={(e) => setQueueSize(Number(e.target.value))}
                min="1"
                className="px-2 py-1 border rounded-lg"
              />
              <p className="mt-2">Queue Size: {queueSize}</p>
              <div className="space-x-2 gap-4">
                <input
                  type="text"
                  value={newElement}
                  onChange={(e) => setNewElement(e.target.value)}
                  placeholder="Enter element"
                  className="px-2 py-1 border rounded-lg"
                />
<div className="flex space-x-3 gap-4 mt-4">
  <button
    onClick={enqueue}
    className="bg-green-600 mr-3 text-blueGray-600 px-3 py-1 rounded-lg hover:bg-blue-600 gap-4"
    style={{backgroundColor:"lightgreen"}}
  >
    Enqueue
  </button>
  <button
    onClick={dequeue}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 gap-4"
  >
    Dequeue
  </button>
</div>
</div>
<div className="flex justify-center items-center space-x-2 mb-2 h-[50px] overflow-hidden">
                {queue.map((element, index) => (
                  <div
                    key={index}
                    className="bg-white mr-3 text-black px-4 py-2 rounded-md transition-transform duration-500"
                  >
                    {element}
                  </div>
                ))}
              </div>
              <p className="mt-2 gap-4">Queue Length: {queue.length}/{queueSize}</p>


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
            Status of Queue Implementation
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