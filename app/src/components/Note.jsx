import React from "react";

function Note(props) {
  return (
    <div>
      {props.items.map(function (curItem, index) {
        return (
          <div className="note" key={index} id={index}>
            <h1>{curItem.title}</h1>
            <p>{curItem.content}</p>
            <button key={index} id={index} onClick={props.delItem}>
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Note;
