import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link, name, name1, name2, name3 }) => {
  return (
    <div className=" p-4 max-w-sm flex-1 ">
      <div
        className="hover:-mt-4 flex rounded-lg h-full p-8 flex-col shadow-lg bg-teal-300 transition-all duration-500 transform border-2 border-b "
        style={{backgroundColor:'white ',}} >
        <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  flex-shrink-0">

        <i class="fas fa-code"></i>
</div>

<h2  className=" text-blueGray-600 font-bold text-xl">{title}</h2>

        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p style={{ color: '#565f69 ' }}  className="leading-relaxed text-base text-blueGray-900 font-bold">
            {description}
          </p>
          <p style={{ color: '#77778f ' }}  className="mt-2 text-black">{name}</p>
          <p style={{ color: '#77778f ' }}  className="mt-2 text-black">{name1}</p>
          <p style={{ color: '#77778f ' }}  className="mt-2 text-black">{name2}</p>
          <p style={{ color: '#77778f ' }}  className="mt-2 text-black">{name3}</p>
          {link && link !== "#" ? (
            <Link
              to={link}
              className="mt-3 inline-flex items-center justify-center rounded-full text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none  mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"style={{width:'150px',marginLeft:'70px'}}
            >
              View More 
            </Link>
          ) : (
            <span className="mt-3 inline-flex items-center justify-center rounded-full text-white font-bold px-3 py-2 w-4 outline-none focus:outline-none  mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"style={{width:'150px',marginLeft:'70px'}}>
              View More 
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;