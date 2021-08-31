import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addItems}>
        <input
          name="title"
          placeholder="Title"
          value={props.item.title}
          onChange={function (event) {
            props.changeItem(event);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.item.content}
          onChange={function (event) {
            props.changeItem(event);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
