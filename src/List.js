import React from "react";

function List(props) {
  return (
    <div>
      <div>
        {props.choices.map(choice => {
          return (
            <div
              value={choice}
              key={choice}
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

export default List;
