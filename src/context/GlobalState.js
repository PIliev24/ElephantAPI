import React, { useState } from "react";

const initalState = {
  name : "",
  species: "",
  elephants: [],
};

export const Context = React.createContext();

const GlobalState = ({ children }) => {
  const [state, setState] = useState(initalState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default GlobalState;
