import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import Editor from "@monaco-editor/react";
import {Link} from "react-router-dom";

// components
import EditorNavbar from "components/Navbars/EditorNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import CardStats from "components/Cards/CardStats.js";

export default function CodeEditorPage() {

  // ✅ language state (MUST be inside component)
  const [language, setLanguage] = useState("cpp");

  const [code, setCode] = useState(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  // ---------------- PDF ----------------
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Your Code:", 10, 10);
    doc.text(code, 10, 20);
    doc.save("code.pdf");
  };

  // ---------------- RUN CODE ----------------
  const runCode = async () => {
    setOutput("Running...");
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/run-code/",
        {
          code,
          input: input || "",
          language   // ✅ important
        }
      );
      
      // Check if output contains EOFError and provide helpful message
      let outputText = res.data.output || "";
      if (outputText.includes("EOFError") || outputText.includes("EOF when reading a line")) {
        outputText = "⚠️ Error: Your code requires input but none was provided.\n\n" +
                     "Please enter input in the 'Enter Input' field below.\n\n" +
                     "Example: If your code has input(), enter values (one per line):\n" +
                     "5\n10\n\n" +
                     "Original error:\n" + outputText;
      }
      
      setOutput(outputText);
    } catch (error) {
      setOutput(`❌ Error: ${error.response?.data?.output || error.message || "Failed to run code. Please check your connection."}`);
    }
  };

  // ---------------- DEFAULT CODE SWITCH ----------------
  const handleLanguageChange = (lang) => {
    setLanguage(lang);

    if (lang === "python") {
      setCode(`# Python Hello World Example
print("Hello, World!")

# If you need input, use the input field below
# Example with input:
# a = int(input())
# b = int(input())
# print(f"Sum: {a + b}")`);
    } else if (lang === "c") {
      setCode(`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`);
    } else {
      setCode(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`);
    }
  };

  return (
    <>
      <Sidebar />

      <div className="relative md:ml-64">
        <EditorNavbar />

        {/* HEADER */}
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">

              <a className="w-full lg:w-6/12 xl:w-3/12 px-4" href="/admin/dashboard/theory">
                <CardStats
                  statTitle="Theory"
                  statDescripiron="Explore our practicals"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                />
              </a>

              <a className="w-full lg:w-6/12 xl:w-3/12 px-4" href="/admin/dashboard/linearSearch">
                <CardStats
                  statSubtitle="Explore"
                  statTitle="Visualization"
                  statDescripiron="Check visualization"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </a>

              <a className="w-full lg:w-6/12 xl:w-3/12 px-4" href="/editor">
                <CardStats
                  statTitle="Code Editor"
                  statDescripiron="Practice by writing code"
                  statIconName="fas fa-laptop-code"
                  statIconColor="bg-pink-500"
                />
              </a>

              <a className="w-full lg:w-6/12 xl:w-3/12 px-4" href="#">
                <CardStats
                  statTitle="MCQ's"
                  statDescripiron="Solve MCQs"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </a>

            </div>
          </div>
        </div>

        {/* EDITOR SECTION */}
  
        <div className="p-4 md:px-10 mx-auto w-full -m-24">

                <div className="px-4 mb-4 z-50 relative">
  <label className="font-bold mr-3 text-blueGray-700">
    Select Language:
  </label>

  <select
    value={language}
    onChange={(e) => handleLanguageChange(e.target.value)}
    className="p-2 border rounded bg-white shadow"
  >
    <option value="cpp">C++</option>
    <option value="c">C</option>
    <option value="python">Python</option>
  </select>
</div>


          <div className="flex flex-wrap">

            {/* CODE EDITOR */}
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <div className="shadow-lg rounded overflow-hidden">

                <Editor
                  height="520px"
                  language={
                    language === "python"
                      ? "python"
                      : "cpp"
                  }
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value)}
                  options={{
                    fontSize: 15,
                    minimap: { enabled: false },
                    automaticLayout: true,
                    wordWrap: "on",
                    scrollBeyondLastLine: false
                  }}
                />

              </div>
            </div>

            {/* OUTPUT */}
            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col bg-white shadow-lg rounded h-full">

                <div className="px-4 py-3">
                  <h6 className="uppercase text-blueGray-400 text-xs font-semibold">
                    Performance
                  </h6>
                  <h2 className="text-blueGray-700 text-xl font-semibold">
                    Output
                  </h2>
                </div>

                <div className="p-4 flex-auto bg-black text-green-400 rounded text-sm whitespace-pre-wrap">
                  {output || "Run your program to see output"}
                </div>

              </div>

              <div className="flex flex-row">
                <button
                  onClick={runCode}
                  className="mt-4 mr-4 p-3 text-white rounded"
                  style={{ backgroundColor: "#64748B" }}
                >
                  ▶ Run Code
                </button>

                <button
                  onClick={downloadPDF}
                  className="mt-4 p-3 rounded bg-white text-blueGray-700"
                >
                  ⬇ Download PDF
                </button>
              </div>
            </div>

          </div>

          {/* INPUT */}
          <div className="flex flex-wrap pl-4 mt-16">
            <div className="flex flex-col ml-10">
              <label className="text-blueGray-600 font-extrabold">
                Enter Input: <span className="text-sm font-normal text-gray-500">(Enter values one per line if your code uses input())</span>
              </label>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-2 border rounded"
                rows="3"
                style={{ width: "250%" }}
                placeholder=""
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center",marginTop:"10px" }}>
          <Link to="/admin/dashboard/linearSearch">
              <button
                className="bg-blue-500 inline-flex items-center justify-center text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                style={{ width: '120px',marginLeft:"15px" }}
              >
                Back
              </button>
            </Link>
  
            <Link to="/admin/dashboard/solvemcq">
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
