import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0);
  const [maxCheck, setMaxCheck] = useState(true);
  const [minCheck, setMinCheck] = useState(true);

  useEffect(() => {
    if (num >= 6) setMaxCheck(false);
    if (num < 6) setMaxCheck(true);
    if (num <= 0) setMinCheck(false);
    if (num > 0) setMinCheck(true);
  }, [num]);

  useEffect(() => {
    if (localStorage.getItem("savedNum"))
      setNum(Number(localStorage.getItem("savedNum")));
  }, []);

  const handleNum = function (event) {
    const btnType = event.target.innerText;
    if (maxCheck) {
      if (btnType === "+") setNum((p) => (p += 1));
    }
    if (minCheck) {
      if (btnType === "-") setNum((p) => (p -= 1));
    }
  };

  const handleSave = function () {
    localStorage.setItem("savedNum", num);
  };

  const handleLoad = function () {
    setNum(Number(localStorage.getItem("savedNum")));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <span className="numBox">{num}</span>
      <button className="numBox" onClick={handleNum}>
        +
      </button>
      <button className="numBox" onClick={handleNum}>
        -
      </button>
      <button className="numBox" onClick={handleSave}>
        save
      </button>
      <button className="numBox" onClick={handleLoad}>
        load
      </button>
    </div>
  );
}
