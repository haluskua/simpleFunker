import React from "react";

const Cheer = props => {
  return <button onClick={props.handleClick}>{props.label}</button>;
};

export default Cheer;
