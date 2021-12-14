import React, { useState } from "react";

const Hook1 = () => {
  const [state, setState] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>Click</button>
      <br />
      {open ? "Open" : "Visible"}
      <button onClick={() => setOpen(!open)}>Click</button>
    </div>
  );
};

export default Hook1;
