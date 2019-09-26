import React from "react";
import Dropdown from "./Dropdown.js";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { protein: "", vegetables: "", sauces: "" };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key, value) {
    this.setState({ [key]: value });
  }
  render() {
    return (
      <div>
        <Dropdown
          listTitle={"protein"}
          choices={["chicken", "beef", "pork"]}
          handleSelect={this.handleSelect}
        />
        <Dropdown
          listTitle={"vegetables"}
          choices={["broccoli", "cabbage", "zucchini"]}
          handleSelect={this.handleSelect}
        />
        <Dropdown
          listTitle={"sauces"}
          choices={["yellow curry", "red sauce", "pesto"]}
          handleSelect={this.handleSelect}
        />
        <h2>Tonight's menu is:</h2>
        <h3>{this.state.protein}</h3> +<h3>{this.state.vegetables}</h3> +
        <h3>{this.state.sauces}</h3>
      </div>
    );
  }
}

export default Board;
