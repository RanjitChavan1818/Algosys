import React from "react";
import { Link } from "react-router-dom";
import CardMCQ from "components/Cards/CardMCQ.js";
import CardStats from "components/Cards/CardStats.js";

export default function LinearSearchMCQ() {
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
                  statDescripiron="Practical 1 - Linear Search"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/linearSearch">
                <CardStats
                  statTitle="Visualization"
                  statDescripiron="Linear Search"
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
                href="/admin/dashboard/linear-search-mcq">
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

      {/* Main Content */}
      <div className="p-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-2xl text-blueGray-700">
                      Linear Search - Multiple Choice Questions
                    </h3>
                    <p className="text-sm text-blueGray-500 mt-2">
                      Test your knowledge about Linear Search algorithm
                    </p>
                  </div>
                </div>
              </div>
              
              {/* MCQ Section */}
              <div className="block w-full overflow-x-auto p-4">
                <CardMCQ category="linear-search" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              <Link to="/admin/dashboard/theory">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to Theory
                </button>
              </Link>
              <Link to="/admin/dashboard/binary-search-mcq">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                  Next: Binary Search MCQ
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
