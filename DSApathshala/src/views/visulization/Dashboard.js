import React from "react";
import { useState } from "react";

// components
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar"
import Card from "../card.js"
export default function LinearSearch() {
  
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
                  statDescripiron="Explore our praticals"
                  statIconName="far fa-file"
                  statIconColor="bg-red-500"
                  
                />
              </a>
              <a 
                className="w-full lg:w-6/12 xl:w-3/12 px-4"
                href="/admin/dashboard/binarySearch">
                <CardStats
                  statSubtitle="Explore"
                  statTitle="Visualization"
                  statDescripiron="Check our Visualization"
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

      
      {/* Main part*/}
      <div className="p-4 md:px-10 mx-auto w-full -m-24 "style={{marginTop:'-130px'}}>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 xl:mb-0 px-4">

            {/* Praticals Cards */}
          <div className="flex flex-wrap justify-around mt-10">
            <Card
              title="Lab 1"
              name=" 1.Linear Search  "
              
              
              description="Implementation of Linear Search."
              
              link="/admin/dashboard/theory"
              
            />
            <Card
              title="Lab 2"
              name="1.Binary Search"
              name1=""
              name2=""
              
              description="Implementation of Binary Search."
              link="#"
            />
            <Card
              title="Lab 3"
              name="1.Bubble Sort"
              name1=""
              description="Implementation of Bubble Sort ."
              link="#"
            />
          </div>
          {/* Another Cards Section */}
          <div className="flex flex-wrap justify-around mt-10">
            <Card
              title="Lab 4"
              description="Implementation of Stack."
              name="1.Stack"
              name1=""
              link="#"
            />
            <Card
              title="Lab 5"
              description="Implementation of Queue"
              name="Queue"
              link="#"
            />
            <Card
              title="Lab 6"
              description="Implementation of Singly Linked List."
              name="Singly Linked List"
              link="#"
            />
          </div>
          {/* Another Cards Section */}
          <div className="flex flex-wrap justify-around mt-10">
            <Card
              title="Lab 7"
              description="Implementation of Doubly Linked List"
              name="Doubly Linked List"
              link="#"
            />
            <Card
              title="Lab 8"
              description="Implementation of Priority Queue"
              name="Priority Queue"
              link="#"
            />
            <Card
              title="Lab 9"
              description="Implementation of Insertion Sort."
              name="1.Insertion Sort"
              name1=""
              link="#"
            />
          </div>
          {/* Another Cards Section */}
          <div className="flex flex-wrap justify-around mt-10">
            <Card
              title="Lab 10"
              description="Implementaion of Selection Sort"
              name="Selection Sort"
              link="#"
            />
            <Card
              title="Lab 11"
              description="Implementation of Circular Linked List"
              name="Circular Linked List"
              link="#"
            />
            <Card
              title="Lab12"
              description="Implementation of Binary Search Tree "
              name="Binary Search Tree"
              link="#"
            />
          </div>
          

          </div>
        </div>
      </div>

    </>
  );
}