import React from "react";

const Stat = (props) => {
  return (
    <p>
      {props.rate} {props.count}
    </p>
  );
};

export default Stat;
