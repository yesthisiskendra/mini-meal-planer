import React from "react";

function Dropdown(props) {
  return (
    <div>
      <h1> {props.listTitle}</h1>
      <div>
        {props.choices.map(choice => {
          return (
            <div
              value={choice}
              onClick={() => props.handleSelect(props.listTitle, choice)}
            >
              {choice}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
