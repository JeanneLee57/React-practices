import React from "react";
//인풋 텍스트를 받아온다
//배열로부터 새 노트를 렌더한다

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>DELETE</button>
      {/*function을 불러야 한다는 것을 잊지 말자!*/}
    </div>
  );
}

export default Note;
