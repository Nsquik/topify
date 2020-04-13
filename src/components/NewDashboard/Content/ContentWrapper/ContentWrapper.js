import React from "react";
import "./ContentWrapper.scss";

const ContentWrapper = (props) => {
  return (
    <div className="content__wrapper" id="content__wrapper">
      <div className="safaribug__wrapper">{props.children}</div>
    </div>
  );
};

export default ContentWrapper;
