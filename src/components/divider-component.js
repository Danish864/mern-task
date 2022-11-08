import React from "react";
import { useState, useContext } from "react";
import { countContext } from "./counter";

function Divider() {
  const counter = useContext(countContext);
  const newValue = counter.countState;
  const initialState = 20;
  const [divider, setDivider] = useState(initialState);

  const clickDivider = () => {
    setDivider(divider / newValue);
  };

  return (
    <>
      <h1>Divider Component</h1>
      <h1>
        {initialState} / {counter.countState}
      </h1>
      <button onClick={clickDivider}>Print New Value</button>
      <h2>Answer: {divider}</h2>
    </>
  );
}

export default Divider;
