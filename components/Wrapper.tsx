import React from "react";

const Wrapper = ({ children, className }) => {
  return <div className={`wrapper ${className || ""}`}>{children}</div>;
};

export default Wrapper;
