import React from "react";

const SVG = ({ style = {}, fill = "white", className, viewBox = "0 0 40 23" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    viewBox="0 0 25 25"
    className={`${className || ""}`}
    xmlSpace="preserve"
    fill="white"
  >
    <g>
      {/* <path d="M69.817,48.243l-30-19.5c-0.461-0.3-1.05-0.322-1.533-0.061c-0.483,0.263-0.785,0.769-0.785,1.318v39   c0,0.55,0.301,1.056,0.785,1.318c0.224,0.121,0.47,0.182,0.715,0.182c0.285,0,0.57-0.081,0.817-0.242l30-19.5   c0.426-0.276,0.683-0.75,0.683-1.258S70.243,48.519,69.817,48.243z M40.5,66.237V32.764L66.248,49.5L40.5,66.237z" /> */}
      {/* <path d="M49.5,6.5c-23.71,0-43,19.29-43,43s19.29,43,43,43s43-19.29,43-43S73.21,6.5,49.5,6.5z M49.5,89.5   c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40S71.556,89.5,49.5,89.5z" /> */}
      <polygon points="5 3 19 12 5 21 5 3" />
    </g>
  </svg>
);

export default SVG;
