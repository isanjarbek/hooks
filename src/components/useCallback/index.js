import React, { useCallback, useEffect, useState } from "react";

const Hook6 = () => {
  const message = "Hello";
  const [counter, setCounter] = useState(0);

    // const greeting = (text) => {
    //   console.log(text);
    // };

  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Click rendered: {counter}
      </button>
    </div>
  );
};

export default Hook6;

// useCallback memoized kolbek qaytaradi ,
