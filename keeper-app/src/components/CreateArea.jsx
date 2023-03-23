import React, { useState } from "react";
//인풋 텍스트를 감지한다
//Add 버튼을 누르면 값을 배열로 넘겨주고 초기화한다

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(input); //function 안에서도 props를 쓸 수 있다
    setInput({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          value={input.title}
          onChange={handleInput}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={input.content}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
