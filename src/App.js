import React from "react";
import GlobalState from "./context/GlobalState";
import "./App.css";
import ElephantList from "./components/ElephantList";
import SearchMenu from "./components/SearchMenu";
import Heading from "./components/Heading";


function App() {
  return (
    <div className="App">
      <GlobalState>
        <Heading />
        <SearchMenu />
        <ElephantList />
      </GlobalState>
    </div>
  );
}

export default App;
