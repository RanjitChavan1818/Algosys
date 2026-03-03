import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import main from "../assets/img/home.png"
import new1 from "../assets/img/visualization ss.jpg";
import reactImage from '../assets/img/react.jpg'; 
import vueImage from '../assets/img/vue.jpg';
import angularImage from '../assets/img/angular.jpg';
import new2 from "../assets/img/visualization ss.jpg";
import new3 from "../assets/img/aboutUs.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import bootstrapImage from '../assets/img/bootstrap.jpg';

// import Team from "./Team"

import personOneImage from "../assets/img/team-1-800x800.jpg"
import personTwoImage from "../assets/img/team-2-800x800.jpg"
import personThreeImage from "../assets/img/team-3-800x800.jpg"
import personFourImage from "../assets/img/team-4-470x470.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import sorting from "../assets/img/sortingwbg.jpg";
import searching from "../assets/img/searching.png";
import dynamic from "../assets/img/dynamic.png";
import L1 from "../assets/img/L1.png";
import L2 from "../assets/img/L2.png";
// import G2 from "../assets/img/G2.png"

import datas from "../assets/img/ds-main2.png"
import C from "../assets/img/C.png"
import Cpp from "../assets/img/c-plus.png"
import py from "../assets/img/python.png"
import java from "../assets/img/java.png"
import other from "../assets/img/other.png"
import js from "../assets/img/Js.png"
import VideoComponent from "../assets/videos/selectionsort.mp4"
import mainimg from "../assets/img/landing-main1.png"

export default function Index() {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20px",
  };

  
  const ref = useRef(null);
  const [faqIndex, setFaqIndex] = React.useState(null);

  const toggleAnswer = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const isInView = useInView(ref, { once: true });
  return (
    <>
      <IndexNavbar fixed />              
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        {/* Text Section */}
          <div className="pt-32 sm:pt-0">
            <motion.div
            className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
            > 
            <h2 className="font-semibold text-4xl text-blueGray-600">
            Algosys: Turning Complexity into Simplicity.
            </h2>
            </motion.div>
            <motion.div
            className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 mt-4"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: 0.5 }}
            >
           <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
               AlgoSys is a center point for students to understand difficult data structure algorithms with easy visualization and practical understanding. Whether you're just starting or looking to refine your skills, we are here to help you every step of the way.
             </p>
            </motion.div>
            <motion.div
            className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 mt-12"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: 1 }} // Delay increased here
            >
            <div className="mt-12">
              <a
                href="/auth/register"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                rel="noreferrer"
              >
                Get started
              </a>
              <a
                href="https://github.com/hackBreakers7/DSApathshala/"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
                rel="noreferrer"
              >
                Github Star
              </a>
             </div>
            </motion.div>   
          </div>
        <motion.img
        className="absolute top-4 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0  "style={{width:'50%'}}
        src={mainimg}
        alt="..."
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      />
      </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100" id="aboutUs">
      <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current "
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto "style={{marginTop:'-280px'}}>
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
    <img
      alt="..."
      src={datas}
      className="w-full h-auto object-cover align-middle rounded-t-lg"
    />
    <blockquote className="relative p-8 mb-4">
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 583 95"
        className="absolute left-0 w-full block h-95-px -top-94-px"
      >
        <polygon
          points="-30,95 583,95 583,65"
          className="text-lightBlue-500 fill-current"
        ></polygon>
      </svg>
      <h4 className="text-xl font-bold text-white">
        Unlocking the Potential of Data Structures in Programming
      </h4>
      <p className="text-md font-light mt-2 text-white">
        Data structures are key in computer science, organizing data for efficient access and modification. From arrays to trees and hash tables, choosing the right structure boosts performance and simplifies problem-solving.
      </p>
    </blockquote>
  </div>
</div>


            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap ">
              <h3 className="text-3xl  font-semibold leading-normal ml-16"style={{marginLeft:'40px'}}>
      Essential Coding Concepts
</h3>
                <div className="w-full md:w-6/12 px-4 ">
                  <div className="relative flex flex-col mt-4">
                    
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Data structure: Searching & Sorting
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Easily search and organize your data with efficient searching and sorting functionalities. Quickly find what you need and arrange information the way you prefer.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-laptop-code"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Compitative Programming
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Competitive programming sharpens problem-solving with efficient algorithms, fostering logic and code optimization.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-project-diagram"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Dynamic Programming</h6>
                      <p className="mb-4 text-blueGray-500">
                   
Dynamic Programming optimizes problem-solving by breaking down complex problems into simpler subproblems, storing intermediate results to avoid redundant calculations.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-flask"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Labs
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Our project offers interactive labs designed to enhance practical learning, allowing users to experiment with algorithms and coding techniques through visualization..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

<div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Student Manangement
              </h3>

              

              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                It enables seamless tracking of student progress through detailed analytics and visual reports, providing insights into course completion, lab performance, and overall achievements.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              The system allows for easy updating of student profiles, management of student lists, and the provision of feedback on assignments and submissions.  it ensures that both students and educators stay informed and on track, fostering a more organized and productive learning environment.              </p>
              
              
            </div>

            
             
                
            <div className="w-full md:w-4/12 mr-auto px-4 pt-24 md:pt-0 relative">
  {/* First Image */}
  <img
  alt="..."
  className="w-[500px] h-10px max-w-full rounded-lg shadow-xl "
  style={{
    transform: "rotate(0deg)",
    left: "-250px",
    bottom:"200px",
    height:"250px",
  }}
  src={L2}
/>


  {/* Second Image (Overflowing Bottom Right) */}
  <img
    alt="..."
    className="absolute rounded-lg shadow-lg  md:w-/12"
    style={{
      transform:"rotate(10deg)",
      bottom: "-250px",
      right: "-90px",
      height:"250px",
      
    }}
    src={L1} // Replace with your second image variable
  />
</div>
              
          </div>
</div>


        



        
      </section>
      <section className="block relative z-1  bg-blueGray-100" >
      <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
              <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8">
              <img
                alt="Svelte"
                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white cursor-pointer"
                src={C}
             />
              <p className="text-lg text-white mt-4 font-semibold">C Programming</p>
           </div>

           <div className="bg-pink-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <img
              alt="Java"
              className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 
                        bg-white cursor-pointer"
              src={java}
            />

            <p className="text-lg text-white mt-4 font-semibold">
              Java
            </p>
          </div>
  


         <div className="bg-purple-500 shadow-lg rounded-lg text-center p-8 mt-8">
          <img
            alt="NextJS"
            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white cursor-pointer"
            src= {py}
       
          />
          <p className="text-lg text-white mt-4 font-semibold">Python</p>
        </div>
</div>

                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  
                    <div className="bg-purple-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src= {js}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                   
                   
      
                    <div className="bg-pink-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src= {Cpp}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                       C++
                      </p>
                    </div>
                  
                   
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src= {other}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                    Other
                      </p>
                    </div>
                 
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-black-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
    <i className="fas fa-code text-3xl text-blue-600"></i>
     
  </div>
  
  <h3 className="text-3xl mb-2 font-semibold leading-normal">
    Code Editors
  </h3>
  
  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
  We are providing access to various code editors to help students practice DSA (Data Structures and Algorithms) after learning the theoretical concepts and visualizations. These code editors offer an interactive environment where students can implement and test their problem-solving skills by coding directly, allowing for hands-on learning and better understanding.
  </p>
  
   
  <Link
  to="/editor"
  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
>
  View all{" "}
  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
</Link>

   
</div>

          </div>
      </section>


      <section className="block relative z-1  bg-blueGray-100" >
              <div className="container mx-auto px-1 pb-32 pt-48 bg-blueGray-100">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-25 mb-6 shadow-lg rounded-full bg-blueGray-100">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                Visualize Data Structures
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Welcome to a revolutionary way of understanding data structures through interactive visualizations. Whether it’s Linked Lists, Stacks, Queues, or complex Graphs and Trees, our platform brings these concepts to life with animations and step-by-step demonstrations. From traversing a tree to sorting a list, experience data structures with a dynamic, visual approach that makes learning intuitive, engaging, and fun.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                              <video
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                autoPlay
                muted
                loop
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}

                  >
                    <source src={VideoComponent} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </div>
          </div>
        </div>
      </section>



{/* Card Slider Section
<section className="py-20 bg-blueGray-100">
  <div className="container mx-auto">
      
    <Team />
  </div>
</section> */}

<section className="py-10 bg-blueGray-600 overflow-hidden">
  <div className="container mx-auto">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      
      {/* Left Section: Send Message Form */}
      <div className="w-full lg:w-6/12 px-6 md:px-4">
        <h3 className="text-3xl font-bold text-white mb-6 text-center"></h3>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">Want to work with us?</h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Complete this form and we will get back to you in 24 hours.
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="full-name">
                Full Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Full Name"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                rows="4"
                cols="80"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Type a message..."
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
 
 {/* Right Section: FAQ */}
<div className="w-full lg:w-6/12 px-6 max-w-3xl">
  <h3 className="text-3xl font-bold text-white mb-6 text-center"></h3>
  <div className="bg-blueGray-200 shadow-lg rounded-lg p-8 ">
    <h4 className="text-2xl font-semibold text-blueGray-600 mb-14">
      Frequently Asked Questions
    </h4>
    {[
      {
        question: "What is AlgoSys?",
        answer:
          "AlgoSys is a comprehensive learning platform that combines theory, practicals, visualizations, and MCQs to help students master Data Structures and Algorithms (DSA).",
        index: 1,
      },
      {
        question: "What kind of learning materials are provided?",
        answer:
          "We provide detailed theory, interactive visualizations, coding exercises, and multiple-choice questions (MCQs) tailored to help students effectively learn and practice DSA concepts.",
        index: 2,
      },
      {
        question: "How does visualization help in learning DSA?",
        answer:
          "Visualizations make complex DSA concepts easy to understand by providing intuitive and interactive graphical representations of algorithms and data structures.",
        index: 3,
      },
      {
        question: "Is AlgoSys suitable for beginners?",
        answer:
          "Yes, AlgoSys is designed for learners at all levels, including beginners. It provides step-by-step explanations, visual aids, and practice problems to build a strong foundation in DSA.",
        index: 4,
      },
      {
        question: "Can I track my progress on AlgoSys?",
        answer:
          "Absolutely! AlgoSys includes features to monitor your learning progress, practice history, and performance in quizzes and assignments.",
        index: 5,
      },
      {
        question: "What Features does Algosys offer?",
        answer:
          "Absolutely! AlgoSys includes features to monitor your learning progress, practice history, and performance in quizzes and assignments.",
        index: 6,
      },
    ].map((item) => (
      <div key={item.index} className="mb-0"> {/* Removed margin between items */}
        {/* Question Section with Toggle */}
        <div
          className="cursor-pointer py-2"
          onClick={() => toggleAnswer(item.index)}
        >
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold text-blueGray-600">
              {item.question}
            </h5>
            {/* Dropdown toggle with + or - */}
            <span className="text-black-500 p-3 text-center inline-flex items-center justify-center">
              {faqIndex === item.index ? "▲" : "▼"}
            </span>
          </div>
        </div>

        {/* Dropdown Answer Section with constant container height */}
        <div
          className={`pl-4 pt-2 text-blueGray-500 text-sm leading-relaxed transition-all duration-300`}
          style={{
            maxHeight: faqIndex === item.index ? "1000px" : "0", // Expand only the clicked answer
            overflow: faqIndex === item.index ? "visible" : "hidden", // Control visibility
            transition: "max-height 0.3s ease-in-out", // Smooth transition for max-height change
          }}
        >
          {faqIndex === item.index && item.answer}
        </div>
      </div>
    ))}
  </div>
</div>

 

    </div>
  </div>
  <div className="flex flex-wrap items-center md:justify-between justify-center mt-8">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-200 font-semibold">
                <p className="font-light" style={{fontSize:"20px"}}>
                </p>
              </div>
            </div>
          </div>
</section>
    </>
  )
}