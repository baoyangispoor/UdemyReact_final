import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({ title: "", content: "" });
  const [items, setItems] = useState([]);

  function changeItem(event) {
    const { name, value } = event.target;
    setItem(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  function addItems(event) {
    setItems(function (prev) {
      return [...prev, item];
    });
    event.preventDefault();
  }

  function delItem(event) {
    const id = event.target.id;
    console.log(id);
    setItems((prev) => {
      return prev.filter((item, index) => {
        console.log(index != id);
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea item={item} changeItem={changeItem} addItems={addItems} />
      <Note
        key={1}
        title="Note title"
        content="Note content"
        items={items}
        delItem={delItem}
      />
      <Footer />
    </div>
  );
}

export default App;
