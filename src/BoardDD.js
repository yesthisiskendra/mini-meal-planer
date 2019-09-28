import React from "react";
import List from "./List.js";

class BoardDD extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: false, protein: "" };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  toggleShow() {
    this.setState(state => ({ isShowing: !this.state.isShowing }));
  }

  handleSelect(key, value) {
    this.setState({ [key]: value, isShowing: false });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.toggleShow}>Pick a Protein</button>
        </div>
        <div>
          {this.state.isShowing ? (
            <List
              handleSelect={this.handleSelect}
              listTitle={"protein"}
              choices={["chicken", "steak", "fish"]}
            />
          ) : (
            ""
          )}
        </div>
        <h1>MENU</h1>
        {this.state.protein}
      </div>
    );
  }
}

export default BoardDD;
