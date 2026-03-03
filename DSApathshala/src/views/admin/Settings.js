import React, { useState } from "react";

// components
import CardSettings from "components/Cards/CardSettings.js";
import ManageMCQ from "components/Cards/ManageMCQ.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <>
      {/* Tab Navigation - Outside the white container */}
      <div className=" px-4 mb-4 ml-4" style={{ marginTop: '-80px', position: 'relative', zIndex: 5}}>
        <div className="bg-white rounded-lg shadow-xl border-2 border-lightBlue-300 p-2">
          <nav className="flex gap-2">
            <button
              onClick={() => setActiveTab("upload")}
              className={`flex-1 py-3 px-4 text-sm font-bold transition-all duration-150 rounded-lg ${
                activeTab === "upload"
                  ? "bg-lightBlue-500 text-white"
                  : "bg-white text-blueGray-700 hover:bg-blueGray-100"
              }`}
            >
              <i className="fas fa-upload mr-2"></i>
              Upload MCQs
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`flex-1 py-3 px-4 text-sm font-bold transition-all duration-150 rounded-lg border-black ${
                activeTab === "manage"
                  ? "bg-lightBlue-500 text-white"
                  : "bg-white text-blueGray-700 hover:bg-blueGray-100"
              }`}
            >
              <i className="fas fa-list mr-2"></i>
              View & Manage MCQs
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {activeTab === "upload" ? <CardSettings /> : <ManageMCQ />}
        </div>
      </div>
    </>
  );
}