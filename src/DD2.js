import React from "react";
import List from "./List.js";

function DD2(props) {
  return (
    <div>
      <button onClick={() => props.toggleShow(props.listTitle)}>
        Pick a {props.listTitle}
      </button>
      <div>
        {props.isShowing ? (
          <List
            handleSelect={props.handleSelect}
            listTitle={props.listTitle}
            choices={props.choices}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DD2;
