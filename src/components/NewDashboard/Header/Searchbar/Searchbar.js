import React, { useState } from "react";
// import Icon from "../../../../icon/Icon";

import SearchbarResult from "../SearchbarResult/SearchbarResult";

import "./Searchbar.scss";
// import UnderWork from "../../Sidebar/Tags/UnderWork";

import SearchBar from "@opuscapita/react-searchbar";

const Searchbar = () => {
  const [query, setQuery] = useState(null);
  console.log(query);

  return (
    <div className="searchbar">
      {/* <UnderWork /> */}
      <SearchBar
        isDynamic={true}
        onSearch={(keyword) => setQuery(keyword)}
        inputClassName="searchbar__input"
        isTooltipEnabled={false}
        translations={{ tooltip: "", searchPlaceHolder: "Search for track..." }}
      />

      {query ? <SearchbarResult query={query} /> : null}

      {/* <input type="text" className="searchbar__input" placeholder="UNDER WORK!" />

      <div className="searchbar__icon">
        <Icon name="search" width="4rem" height="4rem" fill="#fff" />
      </div> */}
    </div>
  );
};

export default Searchbar;
