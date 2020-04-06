import React from "react";

const tagStyle = {
  borderRadius: "1rem 0.2rem 1rem 0.2rem",
  backgroundColor: "#00FF99",
  fontFamily: "Overpass",
  fontSize: "1.1rem",
  letterSpacing: "0px",
  padding: "1rem 0.6rem",
  color: "black",
  fontWeight: "900",
  lineHeight: "1rem",
  boxShadow: "1px 1px 1.5rem #00FF99",
  textAlign: "center",
};

const Premium = () => {
  return (
    <div className="tag__premium" style={tagStyle}>
      PREMIUM
    </div>
  );
};

export default Premium;
