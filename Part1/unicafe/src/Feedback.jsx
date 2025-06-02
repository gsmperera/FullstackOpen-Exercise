import React from "react";

const Feedback = (props) => {
  return <button onClick={props.onClick}>{props.rate}</button>;
};

export default Feedback;
