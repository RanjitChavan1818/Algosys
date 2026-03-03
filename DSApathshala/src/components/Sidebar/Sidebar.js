import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
  const [isDropdownVisible4, setIsDropdownVisible4] = useState(false);
  const [isDropdownVisible5, setIsDropdownVisible5] = useState(false);
  const [isDropdownVisible6, setIsDropdownVisible6] = useState(false);
  const [isDropdownVisible7, setIsDropdownVisible7] = useState(false);
  const [isDropdownVisible8, setIsDropdownVisible8] = useState(false);
  const [isDropdownVisible9, setIsDropdownVisible9] = useState(false);
  const [isDropdownVisible10, setIsDropdownVisible10] = useState(false);
  const [isDropdownVisible11, setIsDropdownVisible11] = useState(false);
  const [isDropdownVisible12, setIsDropdownVisible12] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
  };
  const toggleDropdown3 = () => {
    setIsDropdownVisible3(!isDropdownVisible3);
  };
  const toggleDropdown4 = () => {
    setIsDropdownVisible4(!isDropdownVisible4);
  };
  const toggleDropdown5 = () => {
    setIsDropdownVisible5(!isDropdownVisible5);
  };
  const toggleDropdown6 = () => {
    setIsDropdownVisible6(!isDropdownVisible6);
  };
  const toggleDropdown7 = () => {
    setIsDropdownVisible7(!isDropdownVisible7);
  };
  const toggleDropdown8 = () => {
    setIsDropdownVisible8(!isDropdownVisible8);
  };
  const toggleDropdown9 = () => {
    setIsDropdownVisible9(!isDropdownVisible9);
  };
  const toggleDropdown10 = () => {
    setIsDropdownVisible10(!isDropdownVisible10);
  };
  const toggleDropdown11 = () => {
    setIsDropdownVisible11(!isDropdownVisible11);
  };
  const toggleDropdown12 = () => {
    setIsDropdownVisible12(!isDropdownVisible12);
  };

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <a
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap  uppercase font-bold p-4 px-0 text-2xl"
            href=""
          >
            Algosys
          </a>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>

          {/* Collapse */}
          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>



            {/* Sidebar Menu */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none" style={{ marginTop: "-40px" }}>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase mt-8 py-3 font-bold block bg-black" +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                Home
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="md:min-w-full bg-black" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/* Practical 1 with Dropdown */}
  
              <li className="items-center">
              <div
                className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
                  window.location.href.indexOf("/admin/dashboard") !== -1
                    ? "text-blueGray-600"
                    : "text-blueGray-600"
                }`}
                onClick={toggleDropdown1}
              >
                <i
                  className={`fas fa-chalkboard-teacher mr-2 text-sm ${
                    window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-blueGray-600 opacity-75"
                      : "text-blueGray-300"
                  }`}
                ></i>
                Lab 1
                <span
                  className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
                  style={{ transition: "transform 0.2s" }}
                ></span>
              </div>    
                {isDropdownVisible1 && (
                  <ul className="ml-4" style={{ marginLeft: "18px" }}>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/linearSearch"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/linear-search-mcq"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
                    </li>
                  </ul>
                )}
              </li>
            


              {/* Practical 2 with Dropdown */}
              <li className="items-center">
              <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown2}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 2
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

                {isDropdownVisible2 && (
                  <ul className="ml-4" style={{ marginLeft: "18px" }}>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/binary-theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          
          Theory
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/binarySearch"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
                    </li>
                    <li>
                    <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/binary-search-mcq"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
                    </li>
                  </ul>
                )}
              </li>
            



            {/* Dashboard with Dropdown */}
            <li className="items-center">
            <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown3}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 3
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible3 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/bubbleSort-theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/bubbleSort"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/bubble-sort-mcq"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
  
</ul>



              )}
            </li>
            {/* Dashboard with Dropdown */}
            <li className="items-center">
            <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown4}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
   Lab 4
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible4 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/stack"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>
                        {/* Dashboard with Dropdown */}
                        <li className="items-center">
                        <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown5}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 5
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible5 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>
              )}
            </li>

            {/* Dashboard with Dropdown */}
            <li className="items-center">
            <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown6}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 6
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible6 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor 
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>

        {/* Dashboard with Dropdown */}
        <li className="items-center">
        <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown7}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 7
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible7 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>
                    {/* Dashboard with Dropdown */}
                    <li className="items-center">
                    <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown8}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 8
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible8 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>
                    {/* Dashboard with Dropdown */}
                    <li className="items-center">
                    <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown9}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 9
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible9 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>
                    {/* Dashboard with Dropdown */}
                    <li className="items-center">
                    <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown10}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  Lab 10
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible10 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>

                    {/* Dashboard with Dropdown */}
                    <li className="items-center">
                    <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown11}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
  lab 11
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible11 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
 <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/binarySearchTree"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>

                                {/* Dashboard with Dropdown */}
                                <li className="items-center">
                                <div
  className={`flex items-center cursor-pointer text-xs uppercase py-3 font-bold block ${
    window.location.href.indexOf("/admin/dashboard") !== -1
      ? "text-blueGray-600"
      : "text-blueGray-600"
  }`}
  onClick={toggleDropdown12}
>
  <i
    className={`fas fa-chalkboard-teacher mr-2 text-sm ${
      window.location.href.indexOf("/admin/dashboard") !== -1
        ? "text-blueGray-600 opacity-75"
        : "text-blueGray-300"
    }`}
  ></i>
 Lab  12
  <span
    className={`ml-2 fas fa-chevron-${isDropdownVisible1 ? "up" : "down"}`}
    style={{ transition: "transform 0.2s" }}
  ></span>
</div>

              {isDropdownVisible12 && (
                <ul className="ml-4" style={{ marginLeft: '18px' }}>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/admin/dashboard/theory"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Theory
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Visualization
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/editor"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          Code Editor
        </a>
  </li>
  <li>
  <a
          className="py-2 px-4 block text-sm text-gray-600 rounded transition duration-300 ease-in-out ml-2"
          href="/practical1"
          style={{
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E293B";  // Blue on hover
            e.target.style.color = "white";  // Text color white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";  // Reset background to white
            e.target.style.color = "gray";  // Reset text color
          }}
        >
          MCQ's
        </a>
  </li>
</ul>



              )}
            </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />


          </div>
        </div>
      </nav>
    </>
  );
}