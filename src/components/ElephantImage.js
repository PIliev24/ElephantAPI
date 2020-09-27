import React from "react";
import "./Elephants.css";

const ElephantImage = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt=""
        style={{ width: "60%", height: "60%" }}
        className="rotate"
      />
    </div>
  );
};

export default ElephantImage;
