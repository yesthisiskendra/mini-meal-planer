import React from "react";

function Dropdown(props) {
  console.log("dropin down!");
  return (
    <div>
      <h1> {props.listTitle}</h1>
      {props.choices.map(choice => {
        return <div>{choice}</div>;
      })}
    </div>
  );
}

export default Dropdown;
