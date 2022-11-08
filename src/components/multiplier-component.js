import React from "react";
import { useState, useContext } from "react";
import { countContext } from "./counter";

function Multiplier() {
  const counter = useContext(countContext);
  const newValue = counter.countState;
  const initialState = 5;
  const [multiplier, setMultiplier] = useState(initialState);

  const clickMultiplier = () => {
    setMultiplier(initialState * newValue);
  };

  return (
    <>
      <div>
        <h1>Multiplier Component</h1>
        <h1>
          {initialState} * {counter.countState}
        </h1>
        <button onClick={clickMultiplier}>Print New Value</button>
        <h2>Answer: {multiplier}</h2>
      </div>
    </>
  );
}

export default Multiplier;
