import React from "react";
import { useState } from "react";
import Divider from "./divider-component";
import Multiplier from "./multiplier-component";
import Subtractor from "./subtraction-component";

export const countContext = React.createContext();

function Counter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialState);
  };

  return (
    <>
      <countContext.Provider value={{ countState: count }}>
        <p>Counter {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <Multiplier />
        <Subtractor />
        <Divider />
      </countContext.Provider>
    </>
  );
}

export default Counter;
