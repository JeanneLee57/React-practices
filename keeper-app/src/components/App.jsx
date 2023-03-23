import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setArr] = useState([]);
  /* 배열을 여기에 둬야 한다*/
  function addNote(note) {
    setArr((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(id) {
    setArr((prev) => prev.filter((x, i) => i !== id));
    /* 왜 이것은 인덱스로 해야만 할까? */
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/*map을 컴포넌트로도 할 수 있다*/}
      {noteArr.map((x, i) => {
        return (
          <Note
            key={i}
            id={i}
            onDelete={deleteNote}
            title={x.title}
            content={x.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
