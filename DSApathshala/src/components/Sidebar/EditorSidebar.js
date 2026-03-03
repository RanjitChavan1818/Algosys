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
                  Languages
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="md:min-w-full bg-black" />
            <div className="space-y-4 w-full">
    {["JavaScript",
      "C",
      "Python",
      "Java",
      "C++",
      "Ruby",
      "PHP",
      "Swift",
      "Go",
      "Kotlin",
      "Rust",
      "R",
      "Perl",
      "Dart",
      "TypeScript",
      "Scala",].map((language, index) => (
      <div
        key={index}
        className="text-gray-700 text-lg font-medium p-2 hover:bg-blue-500 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
      >
        {language}
      </div>
    ))}
  </div>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />


          </div>
        </div>
      </nav>
    </>
  );
}