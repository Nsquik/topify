import React from "react";
import Dashboard from "./NewDashboard";

import Header from "./Header/HeaderContainer";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

// I should probably use nested routes here. :)

const DashboardContainer = () => {
  return (
    <Dashboard>
      <Header />
      <div className="body">
        <Sidebar />
        <Content />
      </div>
    </Dashboard>
  );
};

export default DashboardContainer;
