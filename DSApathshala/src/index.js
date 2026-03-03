import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin2 from "layouts/Admin2.js"
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Register from 'views/auth/Register';
import Login from 'views/auth/Login';
import LinearBinarySearch from "components/practicals/LinearBinarySearch";
import Editor from "views/Editor.js"

// Theory Pages
import BinarySearchTheory from "views/Theory/Binary_Thoery"

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Updateprofile from "views/UpdateProfile.js";
import Index from "views/Index.js";
import BubbleSort from "views/BubbleSort";
import ProfileCard from "views/card";

//demo page
import BinarySearchVisualization from "views/visulization/File.js"

ReactDOM.render(

    <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin2" component={Admin2} />
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />

      {/* add routes without layouts */}
      <Route path="/linear" component={LinearBinarySearch}/>
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/update-profile" component={Updateprofile}/>
      <Route path="/" exact component={Index} />
      <Route path="/editor" exact component={Editor} />
      <Route path="/register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/bubbleSort" exact component={BubbleSort} />
      <Route path="/card" exact component={ProfileCard} />
      
      {/*  Theory Pages*/}
      <Route path="/binary-theory" component={ BinarySearchTheory}/>
      <Route path="/file" exact component={BinarySearchVisualization} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>, 
  document.getElementById("root")
  
);
