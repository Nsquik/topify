import React from "react";

const tagStyle = {
  borderRadius: "1rem 0.2rem 1rem 0.2rem",
  backgroundColor: "#FFB300",
  fontFamily: "Overpass",
  fontSize: ".9rem",
  letterSpacing: "1px",
  padding: ".4rem 1.2rem",
  color: "black",
  fontWeight: "900",
  lineHeight: "1rem",
  textAlign: "center",
};

const UnderWork = () => {
  return (
    <div className="tag__underwork" style={tagStyle}>
      UNDER
      <p>WORK</p>
    </div>
  );
};

export default UnderWork;
