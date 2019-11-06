import React from "react";
import spinner from "./spinner.svg";

const Spinner = () => {
  /* Set some inline styles as an object */
  const inlineStyle = {
    display: "block",
    width: "300px",
    margin: "auto",
  };
  
  return (
    <div>
      <img src={spinner} alt='Loading...' style={inlineStyle} />
    </div>
  );
};

export default Spinner;
