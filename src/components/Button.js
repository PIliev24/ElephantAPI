import React, { useContext } from "react";
import "./Elephants.css";
import { Context } from "../context/GlobalState";

const Button = (props) => {
  const [state, setState] = useContext(Context);

  function fetchData(e, url, attribute, name) {
    e.preventDefault();

    ////Prevent false search

    if (name) {
      let arrayForTheElephant = [];
      fetch(url + attribute)
        .then((res) => res.json())
        .then((res) => (arrayForTheElephant[0] = res))
        .then(() => setState({ ...state, elephants: arrayForTheElephant }));
    } else {
      fetch(url + attribute)
        .then((res) => res.json())
        .then((data) => setState({ ...state, elephants: data }));
    }
  }

  return (
    <div>
      <button
        onClick={(e) => fetchData(e, props.url, props.attribute, props.name)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
