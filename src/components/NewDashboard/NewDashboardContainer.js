import React, { useContext } from "react";
import Dashboard from "./NewDashboard";

import Header from "./Header/HeaderContainer";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

import SpotifyDataContext from "../../context/SpotifyDataContext";

const DashboardContainer = () => {
  const { state } = useContext(SpotifyDataContext);

  return (
    <Dashboard>
      <Header />
      <div className="body">
        <Sidebar />

        {/* This KEY seems like a hack. However i didn't manage to find another way.*/}
        <Content type={state.type} timeperiod={state.timeperiod} key={state.type} />
      </div>
    </Dashboard>
  );
};

export default DashboardContainer;
