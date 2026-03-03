import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/AdminSidebar.js";
import HeaderStats2 from "components/Headers/HeaderStats2.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats2 />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin2/dashboard" exact component={Dashboard} />
            <Route path="/admin2/maps" exact component={Maps} />
            <Route path="/admin2/settings" exact component={Settings} />
            <Route path="/admin2/tables" exact component={Tables} />
            <Redirect from="/admin2" to="/admin2/dashboard" />
            
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}