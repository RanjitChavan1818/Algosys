import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats2() {
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
                href="#">
                <CardStats
                  statTitle="Upload Mcqs"
                  statDescripiron="Upload mcqs here"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="Upload Theory"
                  statDescripiron="Upload theory here"
                  statIconName="far fa-file"
                  statIconColor="bg-orange-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="Upload Details"
                  statDescripiron="Upload Student Details here"
                  statIconName="fas fa-laptop-code"
                  statIconColor="bg-pink-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="#">
                <CardStats
                  statTitle="Track Results"
                  statDescripiron="Track Student Results here"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-lightBlue-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}