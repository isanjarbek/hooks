import React, { useEffect, useRef } from "react";

const Hook3 = () => {
  const ref = useRef(null);
  // ref object bo'lib u-n ichida current objecti joylashgan
  console.log(ref);

  useEffect(() => {
    console.log(ref.current);
    ref.current.style.width = "180px";
    console.log(ref.current.innerHTML);
    console.log(ref.current.innerText);
    console.log(ref.current.offsetTop);
    console.log(ref.current.offsetLeft);
  }, []);

  return (
    <div>
      <button ref={ref}>Button</button>
    </div>
  );
};

export default Hook3;
