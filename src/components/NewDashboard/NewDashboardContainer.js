import React, { useContext } from "react";
import Dashboard from "./NewDashboard";

import Header from "./Header/HeaderContainer";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import TimerangeBar from "./TimerangeBar/TimerangeBar";
import ContentWrapper from "./Content/ContentWrapper/ContentWrapper";

import SpotifyDataContext from "../../context/SpotifyDataContext";
import MobileSidebar from "./Content/MobileSidebar/MobileSidebar";

import useWindowSize from "../../hooks/useWindowSize";

const DashboardContainer = () => {
  const { state } = useContext(SpotifyDataContext);
  const windowWidth = useWindowSize();

  return (
    <Dashboard>
      <Header />
      <div className="body" id="body">
        {windowWidth.width > 900 ? <Sidebar /> : null}

        <ContentWrapper>
          <TimerangeBar></TimerangeBar>
          {windowWidth.width < 900 ? <MobileSidebar /> : null}

          {/* This KEY seems like a hack. However i didn't manage to find another way.*/}
          <Content type={state.type} timeperiod={state.timeperiod} key={state.type} />
        </ContentWrapper>
      </div>
    </Dashboard>
  );
};

export default DashboardContainer;
