import React, { useState } from "react";
import { useDebounce } from "react-use";

const Debounce = () => {
  const [state, setState] = useState("Typing stopped");
  const [val, setVal] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setState("Typing stopped");
      setDebouncedValue(val);
    },
    2000,
    [val]
  );
  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState("Waiting for typing to stop...");
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <br />
        <button onClick={cancel}>Cancel debounce</button>
      </div>
    </div>
  );
};

export default Debounce;
