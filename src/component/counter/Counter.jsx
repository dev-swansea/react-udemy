import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounterParentFunction = (by) => {
    setCount(count + by);
  };
  const decrementCounterParentFunction = (by) => {
    setCount(count - by);
  };

  const resetBtn = () => {
    setCount(0);
  };

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <CounterButton
        by={2}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <CounterButton
        by={5}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <button onClick={resetBtn}>초기화</button>
    </>
  );
};

export default Counter;
