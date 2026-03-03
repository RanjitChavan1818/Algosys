import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import SolveQuizPage from "views/visulization/solvemcq.js"

// views
import DashBoard from "views/visulization/Dashboard.js"

//theory
import Theory from "views/Theory/Theory.js";
import BinarySearchTheory from "views/Theory/Binary_Thoery";
import BubbleSort_Theory from "views/Theory/BubbleSort_Theory";

// visualization 
import BinarySearchTree from "views/visulization/BinarySearchTree"
import Stack from "views/visulization/Stack.js"
import LinearSearch from "views/visulization/LinearSearch.js"
import BinarySearch from "views/visulization/BinarySearch.js"
import Queue from "views/visulization/Queue.js"
import BubbleSort from "views/visulization/BubbleSort.js"
import SelectionSort from "views/visulization/SelectionSort.js"

// MCQ Pages
import LinearSearchMCQ from "views/MCQ/LinearSearchMCQ.js"
import BinarySearchMCQ from "views/MCQ/BinarySearchMCQ.js"
import BubbleSortMCQ from "views/MCQ/BubbleSortMCQ.js"


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
          <Switch>
            <Route path="/admin/dashboard/theory" exact component={Theory} />
            <Route path="/admin/dashboard/binary-theory" exact component={BinarySearchTheory} />
            <Route path="/admin/dashboard/bubbleSort-theory" exact component={BubbleSort_Theory}/>
            <Route path="/admin/dashboard/selectionSort" exact component={SelectionSort} />
            <Route path="/admin/dashboard/linearSearch" exact component={LinearSearch} />
            <Route path="/admin/dashboard/binarySearch" exact component={BinarySearch} />
            <Route path="/admin/dashboard/binarySearchTree" exact component={BinarySearchTree} />
            <Route path="/admin/dashboard/bubbleSort" exact component={BubbleSort} />
            <Route path="/admin/dashboard/stack" exact component={Stack} />
            <Route path="/admin/dashboard/queue" exact component={Queue} />
            <Route path="/admin/dashboard/solvemcq" exact component={SolveQuizPage}/>
            
            {/* MCQ Routes */}
            <Route path="/admin/dashboard/linear-search-mcq" exact component={LinearSearchMCQ} />
            <Route path="/admin/dashboard/binary-search-mcq" exact component={BinarySearchMCQ} />
            <Route path="/admin/dashboard/bubble-sort-mcq" exact component={BubbleSortMCQ} />
            
            <Route path="/admin/dashboard" exact component={DashBoard} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
      </div>
    </>
  );
}
