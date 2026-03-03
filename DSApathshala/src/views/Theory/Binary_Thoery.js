import React from "react";
import { Link } from "react-router-dom";
import { defaultTheoryData, imageMap } from "data/theoryData";
import { loadTheoryData } from "utils/theoryStorage";

// components
import CardStats from "components/Cards/CardStats.js";
import Footer from "components/Footers/Footer.js";


export default function Binary_Theory() {
  const data = loadTheoryData(defaultTheoryData);
  const theory = data.find((item) => item.key === "binary-search") || defaultTheoryData[1];
  const imageSrc = theory.imageDataUrl || imageMap[theory.imageKey];

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
                  statDescripiron="Practical 2 - Binary Search"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/linearSearch">
                <CardStats
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

      
      <header className="bg-blue-600 text-black py-4">
        <h1 className="text-center text-3xl font-bold">
          {theory.title}
        </h1>
      </header>

      {/* Main Content with Borders on All Four Sides */}
      <main className="container mx-auto px-12 py-8 flex-grow">
        <div className="border-8 border-gray-800 p-8 rounded-lg bg-white shadow-lg w-11/12 mx-auto">

          {/* Section for Aim */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Aim</h2>
            <div className="border-t-2 border-black mb-2"></div>
            <div className="border-t-2 border-black mb-2"></div>
            <p className="text-lg leading-relaxed mb-4">
              {theory.aim}
            </p>
          </section>

          {/* Section for Theory */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Theory</h2>
            {theory.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            
            <h4 className="text-lg font-semibold mb-2">Algorithm:</h4>
            <div className={theory.imageContainerClassName || "mt-4 flex justify-center"}>
              <img
                src={imageSrc}
                alt={theory.imageAlt}
                className={theory.imageClassName || "border border-gray-300 shadow-lg"}
                style={theory.imageStyle || { maxHeight: "800px", maxWidth: "100%", height: "auto", width: "auto", objectFit: "contain" }} 
              />
            </div>
          </section>
          <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/admin/dashboard">
              <button
                className="bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px' }}
              >
                Back
              </button>
            </Link>
  
            <Link to="/admin/dashboard/binarySearch">
              <button
                className="mr-4 bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px', marginLeft: '880px' }}
              >
                Next
              </button>
            </Link>

         

          </div>
          
        </div>
      </main>
    </>
  );
}