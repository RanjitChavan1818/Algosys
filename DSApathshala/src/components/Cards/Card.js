import React from "react";
import practical from "assets/img/S2.jpeg"
const Card = ({ title, description, link, name, name1, name2, name3 }) => {
  return (
    <div className=" p-4 max-w-sm flex-1 ">
      <div
        className="hover:-mt-4 flex rounded-lg h-full p-8 flex-col shadow-lg bg-teal-300 transition-all duration-500 transform border-2 border-b "
        style={{backgroundColor:'#1E293B ',}} >
        <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  flex-shrink-0">
  <img
    src={practical}
    alt="Icon"
    className=" h-10 object-contain"style={{width:'1150px'}}
  />
</div>

<h2 style={{ color: '#ffffff ' }} className="font-bold text-xl">{title}</h2>

        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p style={{ color: '#ffffff ' }}  className="leading-relaxed text-base text-blueGray-900 font-bold">
            {description}
          </p>
          <p style={{ color: '#ffffff ' }}  className="mt-2 text-black">{name}</p>
          <p style={{ color: '#ffffff ' }}  className="mt-2 text-black">{name1}</p>
          <p style={{ color: '#ffffff ' }}  className="mt-2 text-black">{name2}</p>
          <p style={{ color: '#ffffff ' }}  className="mt-2 text-black">{name3}</p>
          <a
            href={link}
            className="mt-3 text-blueGray-600 hover:text-blue-400 inline-flex items-center"
          >
<button type="button" class="flex py-1 px-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View More 
  
          <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-6 ml-2 text-blue-900"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;