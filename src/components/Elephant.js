import React from "react";
import "./Elephants.css";

const Elephant = (props) => {
  return (
    <div className="child">
      <div style={{ float: "right", width: "40%" }}>
        <img className="elephantImages" src={props.url.image} alt="" style={{ width: 200, height: 200 }} />
      </div>
      <div style={{ float: "left", width: "40%" }}>
        <h4>
          <a href={props.url.wikilink}>{props.url.name}</a>
        </h4>
        <h5 className={props.url.species === "Unavailable" ? "dontShow" : ""}>
          Species : {props.url.species}
        </h5>
        <h5
          className={props.url.affiliation === "Unavailable" ? "dontShow" : ""}
        >
          Affiliation : {props.url.affiliation}
        </h5>
        <h5 className={props.url.sex === "Unavailable" ? "dontShow" : ""}>
          Sex : {props.url.sex}
        </h5>
        <h5 className={props.url.dob === "Unavailable" ? "dontShow" : ""}>
          Dob : {props.url.dob}
        </h5>
      </div>
    </div>
  );
};

export default Elephant;
