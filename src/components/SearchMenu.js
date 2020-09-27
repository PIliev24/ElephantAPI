import React, { useContext } from "react";
import "./Elephants.css";
import Button from "./Button";
import ElephantImage from "./ElephantImage";
import { Context } from "../context/GlobalState";
import firstElephant from "../context/baby-elephant-flip.png";
import secondElephant from "../context/baby-elephant-right.png";

const SearchMenu = () => {
  const [state, setState] = useContext(Context);

  function changeState(e) {
    setState({
      ...state,
      name: document.getElementById("nameInput").value,
      species: document.getElementById("specieInput").value,
    });
  }

  return (
    <div className="filterMenu">
      <ElephantImage image={firstElephant} />
      <div className="buttonAndInputDiv">
        <Button
          attribute={state.name}
          name="yes"
          url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/name/"
          text="Get By Name"
        />
        <input
          id="nameInput"
          type="text"
          onChange={(e) => changeState(e)}
        ></input>
      </div>
      <Button
        attribute=""
        url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/random"
        text="Random"
      />
      <Button
        attribute=""
        url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants"
        text="Get All"
      />
      <Button
        attribute="male"
        url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/sex/"
        text="Get Male"
      />
      <Button
        attribute="female"
        url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/sex/"
        text="Get Female"
      />
      <div className="buttonAndInputDiv">
        <Button
          attribute={state.species}
          url="https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants/species/"
          text="Get By Species"
        />
        <input
          id="specieInput"
          type="text"
          onChange={(e) => changeState(e)}
        ></input>
      </div>
      <ElephantImage image={secondElephant} />
    </div>
  );
};

export default SearchMenu;
