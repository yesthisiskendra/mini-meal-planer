import React from "react";
import DD2 from "./DD2.js";

class BoardDD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      selectedProtein: "chicken",
      lists: [
        {
          listTitle: "protein",
          isShowing: false,
          choices: ["chicken", "beef", "fish"]
        },
        {
          listTitle: "vegetables",
          isShowing: false,
          choices: ["broc", "spinach", "squash"]
        }
      ]
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  toggleShow(listTitle) {
    // this.setState(state => ({
    //   [listTitle]: { isShowing: !this.state[listTitle].isShowing }
    // }));
  }

  handleSelect(key, value) {
    // this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        {this.state.lists.map(list => (
          <DD2
            toggleShow={this.toggleShow}
            handleSelect={this.handleSelect}
            listTitle={list.listTitle}
            choices={list.choices}
          />
        ))}
        <h1>MENU</h1>
        {this.state.selectedProtein}
      </div>
    );
  }
}

export default BoardDD;
