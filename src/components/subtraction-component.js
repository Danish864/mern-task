import React from "react";
import { useState, useContext } from "react";
import { countContext } from "./counter";

function Subtractor() {
  const counter = useContext(countContext);
  const newValue = counter.countState;
  const initialState = 4;
  const [subtractor, setSubtractor] = useState(initialState);

  const clickSubtractor = () => {
    setSubtractor(initialState - newValue);
  };

  return (
    <>
      <h1>Subtractor Component</h1>
      <h1>
        {initialState} - {counter.countState}
      </h1>
      <button onClick={clickSubtractor}>Print New Value</button>
      <h2>Answer: {subtractor}</h2>
    </>
  );
}

export default Subtractor;
