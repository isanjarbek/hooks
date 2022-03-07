import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((a) => a + 1)}>INCEREMENT</button>
      <h2>{count}</h2>
    </div>
  );
};

export default UseLayoutEffect;
