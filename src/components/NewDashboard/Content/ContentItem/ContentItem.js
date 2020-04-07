import React from "react";
import "./ContentItem.scss";

const ContentItem = (props) => {
  return <div className="item">{props.children}</div>;
};

export default ContentItem;
