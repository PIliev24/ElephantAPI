import React, { useContext } from "react";
import Elephant from "./Elephant";
import "./Elephants.css";
import { Context } from "../context/GlobalState";

const ElephantList = () => {
  const [state] = useContext(Context);
  const elephantsArray = state.elephants.map((elephantURL) => {
    if (elephantURL.name)
      return <Elephant key={elephantURL.id} url={elephantURL} />;
  });

  return <div className="container">{elephantsArray}</div>;
};

export default ElephantList;
