import React from "react";
import Dropdown from "./Dropdown.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dropdown listTitle={"Protein"} choices={["chicken", "beef", "pork"]} />
      <Dropdown
        listTitle={"Vegetables"}
        choices={["broccoli", "cabbage", "zucchini"]}
      />
      <Dropdown
        listTitle={"Sauces"}
        choices={["yellow curry", "red sauce", "pesto"]}
      />
    </div>
  );
}

export default App;
