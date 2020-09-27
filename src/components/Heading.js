import React from "react";
import elephantImage from "../context/elephantImage.png";

const Heading = () => {
  return (
    <div>
      <h1>Welcome to the Elephant World</h1>
      <div style={{ margin: "5%" }}>
        <img
          src={elephantImage}
          alt=""
          style={{ width: "30%", height: "30%" }}
        />
      </div>
    </div>
  );
};

export default Heading;
