import React from "react";
import "./ContentList.scss";

const ContentList = (props) => {
  return (
    <div className="content__wrapper">
      <div className="content__list">{props.children}</div>
    </div>
  );
};

export default ContentList;
