import React, { useState, useEffect, useContext } from "react";
import useTopArtistsAndTracks from "../../hooks/useTopArtistsAndTracks";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Content from "./Content";
import Timerange from "./Timerange";

const DashboardContainer = () => {
  const [timerange, setTimerange] = useState("short_term");
  const [type, setType] = useState("artists");

  const data = useTopArtistsAndTracks(type, timerange);
  console.log(state);

  return (
    <Dashboard>
      <Navbar type={type} setType={setType} />
      {data.loading === true ? "SPINNER" : <Content items={data} />}
      <Timerange timerange={timerange} setTimerange={setTimerange} />
    </Dashboard>
  );
};

export default DashboardContainer;
