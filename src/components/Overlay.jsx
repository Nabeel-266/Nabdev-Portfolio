import React from "react";

const Overlay = ({ isOpenSidebar }) => {
  return (
    <div
      className="overlay"
      style={
        isOpenSidebar
          ? { animation: "addOverlay 0.2s ease-in-out 0s 1 forwards" }
          : { animation: "removeOverlay 0.2s ease-in-out 0s 1 forwards" }
      }
    ></div>
  );
};

export default Overlay;
