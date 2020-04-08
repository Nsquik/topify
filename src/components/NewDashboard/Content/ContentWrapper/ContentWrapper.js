import React from "react";
import "./ContentWrapper.scss";

const ContentWrapper = (props) => {
  return (
    <div className="content__wrapper" id="content__wrapper">
      {props.children}
    </div>
  );
};

export default ContentWrapper;
