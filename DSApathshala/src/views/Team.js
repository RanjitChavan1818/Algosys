import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import mayuri from "../assets/img/mayuri.jpg"
import priti from "../assets/img/priti.jpg"
// import shital from "../assets/img/shital.jpg"
import ranjit from "../assets/img/ranjit.jpg"
import yash from "../assets/img/yash.jpg"
import vaibhav from "../assets/img/vaibhav.jpg"
import sumit from "../assets/img/sumit.jpg"


const AnimatedCards = () => {

  const settings = {
    dots: true,              // Display navigation dots
    infinite: true,          // Infinite loop
    speed: 500,              // Transition speed in milliseconds
    slidesToShow: 3,         // Number of cards to show at a time
    slidesToScroll: 1,       // Number of cards to scroll per navigation
    autoplay: true,          // Enable auto-slide
    autoplaySpeed: 3000,     // Auto-slide duration
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
    const data = [
      {
        name: "Mayuri K",
        role: "FullStack Developer",
        image:
          mayuri,
      },
      {
        name: "Ranjit C",
        role: "FullStack Developer",
        image:
          ranjit,
      },
      {
        name: "Priti C",
        role: "FullStack Developer",
        image:
          priti,
      },
      {
        name: "Sumit S",
        role: "FullStack Developer",
        image:
          sumit,
      },
      {
        name: "Vaibhav S",
        role: "FullStack Developer",
        image:
          vaibhav,
      },
      {
        name: "Shital C",
        role: "FullStack Developer",
        // image:
        //   shital,
      },
      {
        name: "Yash M",
        role: "FullStack Developer",
        image:
          yash,
      },
    ];
  
    return (
      <div className="flex flex-col justify-center items-center min-h-screen  px-4 py-4">
        <h3 className="text-3xl font-semibold text-center mb-8 font-roboto">
        Our Team 
        </h3>
        <div className="bg-blueGray-600 mb-4" style={{width:"70px", height:"5px", borderRadius:"5px"}}></div>
      <div className="w-full max-w-screen-lg flex justify-center items-center ">
        {/* React Slick Slider */}
        <Slider {...settings} className=""
        style={{width:"90%"}}>
          {data.map((person, index) => (
            <div key={index} className="px-3">
              <div
                className="relative mt-3 mb-3 bg-white text-center group hover:bg-white transition-colors duration-500"
                style={{borderRadius:"5%"}}
              >
                {/* Content */}
                <div className="relative z-10 p-4">
                  {/* Image */}
                  <div
                    className="mx-auto mb-2 mt-2 rounded-full overflow-hidden border-4"
                    style={{ width: "65%" }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <h5 className="text-xl font-semibold text-blueGray-600 group-hover:text-white transition-colors duration-500">
                    {person.name}
                  </h5>
                  <p className="text-blueGray-600 group-hover:text-white transition-colors duration-500">
                    {person.role}
                  </p>

                  {/* Social Links */}
                  <ul className="flex justify-center space-x-3 mt-4">
                    <li>
                      <a
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-blueGray-600"
                      >
                        <i className="fab fa-linkedin" style={{fontSize:"25px"}}></i>
                      </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-blueGray-600 hover:bg-black"
                        
                      >
                        <i className="fab fa-instagram" style={{fontSize:"25px"}}></i>
                      </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-blueGray-600"
                      >
                        <i className="fab fa-github" style={{fontSize:"25px"}}></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    );
  };

  export default AnimatedCards;